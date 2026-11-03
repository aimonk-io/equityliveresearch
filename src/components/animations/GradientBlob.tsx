"use client";

import { m } from "motion/react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  color?: "gold" | "cream" | "navy";
  size?: number;
  delay?: number;
  duration?: number;
};

const colorMap = {
  gold: "bg-[radial-gradient(circle,rgba(198,160,82,0.35)_0%,transparent_70%)]",
  cream:
    "bg-[radial-gradient(circle,rgba(246,243,236,0.2)_0%,transparent_70%)]",
  navy: "bg-[radial-gradient(circle,rgba(14,31,56,0.35)_0%,transparent_70%)]",
};

/** Soft floating gradient orb for atmospheric depth. */
export function GradientBlob({
  className,
  color = "gold",
  size = 420,
  delay = 0,
  duration = 18,
}: Props) {
  const reduced = usePrefersReducedMotion();

  return (
    <m.div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        colorMap[color],
        className,
      )}
      style={{ width: size, height: size }}
      animate={
        reduced
          ? undefined
          : {
              x: [0, 30, -20, 0],
              y: [0, -25, 15, 0],
              scale: [1, 1.08, 0.96, 1],
            }
      }
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
