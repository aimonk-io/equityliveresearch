"use client";

import { CountUp } from "@/components/animations/CountUp";
import { FadeIn } from "@/components/animations/FadeIn";
import { stats } from "@/config/site";

export function StatsBar() {
  return (
    <section className="border-t border-[rgba(185,138,62,0.15)] bg-navy-deep text-cream">
      <div className="mx-auto grid max-w-[1240px] gap-6 px-6 py-12 sm:px-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.08} y={16} className="text-center">
            <div className="font-serif text-[46px] font-medium leading-none text-gold">
              <CountUp
                target={s.target}
                kind={s.kind === "float" ? "float" : "int"}
                suffix={s.suffix}
              />
            </div>
            <div className="mt-2.5 text-[13.5px] tracking-[0.3px] text-[#b2bcce]">
              {s.label}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
