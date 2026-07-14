import { z } from "zod";

import { createEnv } from "@/lib/env";

/**
 * Environment contract for the Equity Live Research marketing site.
 * Validated at build and server start; the build fails with a readable
 * list of problems instead of shipping with a broken configuration.
 *
 * Every variable added here must also appear in .env.example.
 */
export const env = createEnv({
  server: {
    APP_ENV: z
      .enum(["development", "staging", "production"])
      .default("development"),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.url().default("https://equityliveresearch.com"),
  },
  runtimeEnv: {
    APP_ENV: process.env.APP_ENV,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
});
