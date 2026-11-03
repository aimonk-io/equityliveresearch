"use client";

import { useCallback, useEffect, useState, type RefObject } from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Parallax = { x: number; y: number };

/**
 * Subtle mouse-relative offset for desktop parallax. Strength is in px.
 */
export function useMouseParallax(
  ref: RefObject<HTMLElement | null>,
  strength = 12,
): Parallax {
  const reduced = usePrefersReducedMotion();
  const [offset, setOffset] = useState<Parallax>({ x: 0, y: 0 });

  const onMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const nx = (e.clientX - cx) / (rect.width / 2);
      const ny = (e.clientY - cy) / (rect.height / 2);
      setOffset({
        x: Math.max(-1, Math.min(1, nx)) * strength,
        y: Math.max(-1, Math.min(1, ny)) * strength,
      });
    },
    [ref, strength],
  );

  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    el.addEventListener("mousemove", onMove);
    const reset = () => setOffset({ x: 0, y: 0 });
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, [onMove, reduced, ref]);

  return reduced ? { x: 0, y: 0 } : offset;
}
