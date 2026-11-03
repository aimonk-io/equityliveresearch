"use client";

import { m } from "motion/react";
import { useEffect, useState } from "react";

import { useFinePointer } from "@/hooks/useFinePointer";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Soft cursor-follow glow — desktop / fine pointer only. */
export function MouseGlow() {
  const reduced = usePrefersReducedMotion();
  const fine = useFinePointer();
  const enabled = fine && !reduced;
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <m.div
      aria-hidden
      className="pointer-events-none fixed z-[55] size-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(198,160,82,0.12)_0%,transparent_70%)] mix-blend-screen"
      animate={{
        x: pos.x,
        y: pos.y,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 120, damping: 28, mass: 0.4 }}
    />
  );
}
