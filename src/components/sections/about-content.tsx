"use client";

import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { values, values_about } from "@/config/site";

const pillars = [
  { title: "Mission", body: values_about.mission },
  { title: "Vision", body: values_about.vision },
  { title: "Our Promise", body: values_about.promise },
];

export function AboutContent() {
  return (
    <section className="mx-auto max-w-[1000px] px-6 py-20 sm:px-8">
      <FadeIn blur>
        <p className="font-serif text-[24px] leading-[1.6] text-[#222f40]">
          {values_about.lead}
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="mt-6 text-[16.5px] leading-[1.8] text-muted-ink">
          {values_about.body}
        </p>
      </FadeIn>

      <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-3">
        {pillars.map((p, i) => (
          <AnimatedCard
            key={p.title}
            index={i}
            className="bg-cream-card p-[38px] transition-shadow duration-300 hover:shadow-[inset_0_0_0_1px_rgba(198,160,82,0.3)]"
          >
            <h3 className="font-serif text-[15px] uppercase tracking-[1.5px] text-gold transition-transform duration-300 group-hover:translate-x-0.5">
              {p.title}
            </h3>
            <p className="mt-3.5 text-[16px] leading-[1.7] text-[#2a3543]">
              {p.body}
            </p>
          </AnimatedCard>
        ))}
      </div>

      <FadeIn className="mt-[76px]">
        <h2 className="font-serif text-[34px] font-medium tracking-[-0.5px] max-md:text-[28px]">
          Our Values
        </h2>
      </FadeIn>
      <div className="mt-[30px] grid gap-5 md:grid-cols-2">
        {values.map((v, i) => (
          <AnimatedCard
            key={v.n}
            index={i}
            className="flex items-start gap-[18px] rounded-[4px] border border-line-soft bg-cream-card p-6 transition-shadow duration-300 hover:shadow-[0_20px_40px_-28px_rgba(14,31,56,0.25)]"
          >
            <span className="font-serif text-[26px] leading-none text-gold transition-transform duration-300 group-hover:scale-110">
              {v.n}
            </span>
            <div>
              <h4 className="text-[17px] font-semibold text-[#1b2634]">
                {v.title}
              </h4>
              <p className="mt-1.5 text-[14.5px] leading-[1.65] text-[#58626f]">
                {v.desc}
              </p>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
