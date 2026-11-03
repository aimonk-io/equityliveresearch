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
  delay?: number;
  index?: number;
};

/** Card with hover lift, glow, and entrance reveal. */
export function AnimatedCard({
  children,
  className,
  delay = 0,
  index = 0,
}: Props) {
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
      setTilt({ x: (py - 0.5) * -4, y: (px - 0.5) * 4 });
    },
    [reduced],
  );

  const onLeave = useCallback(() => setTilt({ x: 0, y: 0 }), []);

  return (
    <m.div
      ref={ref}
      className={cn(
        "group relative transition-shadow duration-500 will-change-transform",
        className,
      )}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: delay + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={
        reduced
          ? undefined
          : {
              transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.25s ease-out",
            }
      }
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={
        reduced
          ? undefined
          : {
              y: -4,
              transition: { duration: 0.3 },
            }
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 shadow-[0_0_0_1px_rgba(198,160,82,0.35),0_20px_40px_-20px_rgba(14,31,56,0.25)] transition-opacity duration-300 group-hover:opacity-100"
      />
      {children}
    </m.div>
  );
}
