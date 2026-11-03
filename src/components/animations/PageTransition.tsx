"use client";

import { m } from "motion/react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

/** Soft route transition for page content. */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduced = usePrefersReducedMotion();

  if (reduced) return children;

  return (
    <m.div
      key={pathname}
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
