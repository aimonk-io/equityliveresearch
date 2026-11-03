"use client";

import { useEffect, useState } from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Eased count-up from 0 → 1. Pass `enabled` to start only when in view.
 */
export function useCountUp(duration = 1400, enabled = true): number {
  const reduced = usePrefersReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    if (reduced) {
      const id = requestAnimationFrame(() => setProgress(1));
      return () => cancelAnimationFrame(id);
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setProgress(1 - Math.pow(1 - p, 3));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const snap = window.setTimeout(() => setProgress(1), duration + 100);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(snap);
    };
  }, [duration, enabled, reduced]);

  return enabled ? progress : 0;
}
