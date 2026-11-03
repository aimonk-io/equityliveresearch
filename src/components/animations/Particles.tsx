"use client";

import { m } from "motion/react";
import { useMemo } from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  count?: number;
  color?: string;
};

/** Sparse floating particles for subtle depth (desktop-friendly). */
export function Particles({
  className,
  count = 18,
  color = "rgba(198,160,82,0.45)",
}: Props) {
  const reduced = usePrefersReducedMotion();

  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 53) % 100}%`,
        size: 1.5 + (i % 3),
        duration: 10 + (i % 7) * 2,
        delay: (i % 5) * 0.4,
      })),
    [count],
  );

  if (reduced) return null;

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {dots.map((d) => (
        <m.span
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            background: color,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
