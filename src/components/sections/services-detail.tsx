"use client";

import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { services } from "@/config/site";

export function ServicesDetail() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-[72px] sm:px-8">
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((sv, i) => (
          <AnimatedCard
            key={sv.no}
            index={i}
            className="rounded-[4px] border border-line-soft bg-cream-card p-10 transition-[box-shadow,border-color] duration-300 hover:border-gold/40 hover:shadow-[0_24px_48px_-28px_rgba(14,31,56,0.22),0_0_0_1px_rgba(198,160,82,0.2)]"
          >
            <div className="flex items-center gap-3.5">
              <span className="flex size-11 items-center justify-center rounded-full border border-gold font-serif text-[18px] text-gold transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                {sv.no}
              </span>
              <h3 className="font-serif text-[26px] font-medium">{sv.title}</h3>
            </div>
            <p className="my-5 mb-[18px] text-[15.5px] leading-[1.7] text-muted-ink">
              {sv.desc}
            </p>
            <ul className="flex flex-col gap-2.5">
              {sv.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-[14.5px] text-[#2a3543]">
                  <span className="text-gold">—</span>
                  {p}
                </li>
              ))}
            </ul>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
