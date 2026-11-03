"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "div";
  delay?: number;
};

/** Heading reveal with soft scale + fade. */
export function AnimatedHeading({
  children,
  className,
  as = "h2",
  delay = 0,
}: Props) {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const reduced = usePrefersReducedMotion();
  const Tag = m[as];

  if (reduced) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Tag>
  );
}
