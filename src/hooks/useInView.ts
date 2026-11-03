"use client";

import { useInView as useRioInView } from "react-intersection-observer";

type Options = {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
};

/**
 * Viewport entry detection. Animations fire once by default.
 */
export function useInView(options: Options = {}) {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -8% 0px",
    triggerOnce = true,
  } = options;

  return useRioInView({
    threshold,
    rootMargin,
    triggerOnce,
  });
}
