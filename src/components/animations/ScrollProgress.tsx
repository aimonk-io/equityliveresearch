"use client";

import { m, useScroll, useSpring } from "motion/react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Thin gold scroll-progress bar fixed to the top of the viewport. */
export function ScrollProgress() {
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduced) return null;

  return (
    <m.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gold"
      style={{ scaleX }}
    />
  );
}
