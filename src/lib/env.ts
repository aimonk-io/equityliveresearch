import { z } from "zod";

/**
 * Type-safe environment validation: apps declare a zod schema per variable
 * and get a frozen, typed `env` object — or a build-time crash listing
 * exactly what is missing.
 */
type EnvShape = Record<string, z.ZodType>;

type InferShape<T extends EnvShape> = {
  readonly [K in keyof T]: z.infer<T[K]>;
};

export interface CreateEnvOptions<
  TServer extends EnvShape,
  TClient extends EnvShape,
> {
  server: TServer;
  client: TClient;
  runtimeEnv: Record<keyof TServer | keyof TClient, string | undefined>;
  clientPrefix?: string;
  skipValidation?: boolean;
}

export function createEnv<TServer extends EnvShape, TClient extends EnvShape>(
  options: CreateEnvOptions<TServer, TClient>,
): InferShape<TServer> & InferShape<TClient> {
  const prefix = options.clientPrefix ?? "NEXT_PUBLIC_";
  const isServer = typeof window === "undefined";

  for (const key of Object.keys(options.client)) {
    if (!key.startsWith(prefix)) {
      throw new Error(
        `Invalid env declaration: client variable "${key}" must be prefixed with "${prefix}".`,
      );
    }
  }
  for (const key of Object.keys(options.server)) {
    if (key.startsWith(prefix)) {
      throw new Error(
        `Invalid env declaration: server variable "${key}" must not use the client prefix "${prefix}".`,
      );
    }
  }

  type Env = InferShape<TServer> & InferShape<TClient>;

  if (options.skipValidation) {
    return options.runtimeEnv as unknown as Env;
  }

  const shape = isServer
    ? { ...options.server, ...options.client }
    : { ...options.client };
  const parsed = z.object(shape).safeParse(options.runtimeEnv);

  if (!parsed.success) {
    const issues = parsed.error.issues
      .map(
        (issue) => `  - ${issue.path.join(".") || "(root)"}: ${issue.message}`,
      )
      .join("\n");
    throw new Error(`Invalid environment variables:\n${issues}`);
  }

  return new Proxy(parsed.data as Env, {
    get(target, prop) {
      if (typeof prop !== "string") return undefined;
      if (!isServer && !prop.startsWith(prefix)) {
        throw new Error(
          `Server environment variable "${prop}" is not available in the browser.`,
        );
      }
      return Reflect.get(target, prop);
    },
  });
}
