"use client";

import { useEffect, useState } from "react";

import { stats } from "@/config/site";

function useCountUp(duration = 1400) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setProgress(1 - Math.pow(1 - p, 3));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    // Fallback: rAF is paused while the tab is hidden, so guarantee the
    // final value lands via a timer regardless.
    const snap = setTimeout(() => setProgress(1), duration + 100);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(snap);
    };
  }, [duration]);
  return progress;
}

export function StatsBar() {
  const progress = useCountUp();

  return (
    <section className="border-t border-[rgba(185,138,62,0.15)] bg-navy-deep text-cream">
      <div className="mx-auto grid max-w-[1240px] gap-6 px-6 py-12 sm:px-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => {
          const current = s.target * progress;
          const display =
            s.kind === "float"
              ? current.toFixed(1)
              : Math.round(current).toLocaleString("en-IN");
          return (
            <div key={s.label} className="text-center">
              <div className="font-serif text-[46px] font-medium leading-none text-gold">
                {display}
                {s.suffix}
              </div>
              <div className="mt-2.5 text-[13.5px] tracking-[0.3px] text-[#b2bcce]">
                {s.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
