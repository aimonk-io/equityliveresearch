"use client";

import type { ReactNode } from "react";

import { BackToTop } from "@/components/animations/BackToTop";
import { MotionProvider } from "@/components/animations/MotionProvider";
import { MouseGlow } from "@/components/animations/MouseGlow";
import { PageTransition } from "@/components/animations/PageTransition";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SmoothScroll } from "@/components/animations/SmoothScroll";

/** Client shell: motion, Lenis, page transitions, chrome effects. */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionProvider>
      <SmoothScroll>
        <ScrollProgress />
        <MouseGlow />
        <PageTransition>{children}</PageTransition>
        <BackToTop />
      </SmoothScroll>
    </MotionProvider>
  );
}
