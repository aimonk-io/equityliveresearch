"use client";

import { m } from "motion/react";
import { useEffect, useState } from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

/** Fixed back-to-top control that appears after scrolling. */
export function BackToTop() {
  const reduced = usePrefersReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <m.button
      type="button"
      aria-label="Back to top"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })
      }
      initial={false}
      animate={{
        opacity: show ? 1 : 0,
        y: show ? 0 : 12,
        pointerEvents: show ? "auto" : "none",
      }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex size-11 items-center justify-center rounded-[2px] border border-white/15 bg-navy/90 text-gold shadow-lg backdrop-blur-md transition-colors hover:border-gold hover:bg-navy",
      )}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path
          d="M8 12V4M8 4L4 8M8 4l4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </m.button>
  );
}
