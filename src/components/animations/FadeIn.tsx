"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
  once?: boolean;
};

/** Fade + optional blur reveal. */
export function FadeIn({
  children,
  className,
  delay = 0,
  y = 24,
  blur = false,
  once = true,
}: Props) {
  const { ref, inView } = useInView({ triggerOnce: once });
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y,
        ...(blur ? { filter: "blur(8px)" } : {}),
      }}
      animate={
        inView
          ? { opacity: 1, y: 0, ...(blur ? { filter: "blur(0px)" } : {}) }
          : undefined
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </m.div>
  );
}

/** Upward slide reveal. */
export function SlideUp({ y = 28, ...props }: Props) {
  return <FadeIn y={y} {...props} />;
}
