"use client";

import { useCallback, useRef, useState, type RefObject } from "react";

import { useFinePointer } from "@/hooks/useFinePointer";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Magnetic = { x: number; y: number };

/**
 * Magnetic pull toward the cursor for buttons / CTAs (desktop only).
 */
export function useMagnetic(strength = 0.35): {
  ref: RefObject<HTMLElement | null>;
  style: { transform: string };
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
} {
  const reduced = usePrefersReducedMotion();
  const isFinePointer = useFinePointer();
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState<Magnetic>({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduced || !isFinePointer) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      setOffset({ x: x * strength, y: y * strength });
    },
    [isFinePointer, reduced, strength],
  );

  const onMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  const display = reduced ? { x: 0, y: 0 } : offset;

  return {
    ref,
    style: {
      transform: `translate3d(${display.x}px, ${display.y}px, 0)`,
    },
    onMouseMove,
    onMouseLeave,
  };
}
