"use client";

import { m } from "motion/react";
import {
  useCallback,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
} from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

/** Perspective tilt on hover (desktop). */
export function TiltCard({ children, className, maxTilt = 5 }: Props) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = useCallback(
    (e: MouseEvent) => {
      if (reduced) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      setTilt({
        x: (py - 0.5) * -maxTilt,
        y: (px - 0.5) * maxTilt,
      });
    },
    [maxTilt, reduced],
  );

  const onLeave = useCallback(() => setTilt({ x: 0, y: 0 }), []);

  return (
    <m.div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{
        transform: reduced
          ? undefined
          : `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)`,
        transition: "transform 0.2s ease-out",
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={reduced ? undefined : { scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {children}
    </m.div>
  );
}
