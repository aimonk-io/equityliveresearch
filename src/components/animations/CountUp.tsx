"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/cn";

type Props = {
  target: number;
  kind?: "int" | "float";
  suffix?: string;
  className?: string;
  duration?: number;
};

/** Viewport-triggered count-up number display. */
export function CountUp({
  target,
  kind = "int",
  suffix = "",
  className,
  duration = 1400,
}: Props) {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const progress = useCountUp(duration, inView);
  const current = target * progress;
  const display =
    kind === "float"
      ? current.toFixed(1)
      : Math.round(current).toLocaleString("en-IN");

  return (
    <span ref={ref} className={cn(className)}>
      {display}
      {suffix}
    </span>
  );
}
