"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
  once?: boolean;
};

/** Section-level blur-to-focus + fade reveal on scroll. */
export function AnimatedSection({
  children,
  className,
  delay = 0,
  y = 32,
  blur = true,
  once = true,
}: Props) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.12 });
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      ref={ref}
      className={cn(className)}
      initial={{
        opacity: 0,
        y,
        ...(blur ? { filter: "blur(10px)" } : {}),
      }}
      animate={
        inView
          ? { opacity: 1, y: 0, ...(blur ? { filter: "blur(0px)" } : {}) }
          : undefined
      }
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </m.div>
  );
}
