"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  mode?: "word" | "char";
  delay?: number;
  gradient?: boolean;
};

/** Word- or character-staggered text reveal. */
export function RevealText({
  text,
  className,
  as = "h1",
  mode = "word",
  delay = 0,
  gradient = false,
}: Props) {
  const { ref, inView } = useInView({ threshold: 0.25 });
  const reduced = usePrefersReducedMotion();
  const parts = mode === "word" ? text.split(/(\s+)/) : Array.from(text);
  const Tag = m[as];

  if (reduced) {
    const Static = as;
    return (
      <Static
        className={cn(
          gradient &&
            "bg-[linear-gradient(105deg,#f6f3ec_0%,#c6a052_45%,#f6f3ec_100%)] bg-clip-text text-transparent",
          className,
        )}
      >
        {text}
      </Static>
    );
  }

  return (
    <Tag ref={ref} className={cn(className)} aria-label={text}>
      {parts.map((part, i) => {
        const isSpace = /^\s+$/.test(part);
        if (isSpace) {
          return <span key={`s-${i}`}>{part}</span>;
        }
        return (
          <m.span
            key={`${part}-${i}`}
            className={cn(
              "inline-block",
              gradient &&
                "bg-[linear-gradient(105deg,#f6f3ec_0%,#c6a052_50%,#f6f3ec_100%)] bg-[length:200%_100%] bg-clip-text text-transparent",
            )}
            initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    ...(gradient ? { backgroundPosition: ["0% 0%", "100% 0%"] } : {}),
                  }
                : undefined
            }
            transition={{
              duration: 0.55,
              delay: delay + i * (mode === "word" ? 0.045 : 0.018),
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-hidden
          >
            {part}
          </m.span>
        );
      })}
    </Tag>
  );
}

/** Animated gold underline that grows under a heading fragment. */
export function AnimatedUnderline({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const reduced = usePrefersReducedMotion();

  return (
    <span ref={ref} className={cn("relative inline-block", className)}>
      {children}
      <m.span
        aria-hidden
        className="absolute inset-x-0 -bottom-1 h-[2px] origin-left bg-gold"
        initial={{ scaleX: reduced ? 1 : 0 }}
        animate={inView || reduced ? { scaleX: 1 } : undefined}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
      />
    </span>
  );
}
