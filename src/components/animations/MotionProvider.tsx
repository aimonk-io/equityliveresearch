"use client";

import { LazyMotion, domAnimation, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Shared LazyMotion + reduced-motion config for the app. */
export function MotionProvider({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion={reduced ? "always" : "user"}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
