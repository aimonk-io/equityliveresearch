"use client";

import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { CtaLink, Eyebrow } from "@/components/ui/primitives";
import { services } from "@/config/site";

export function WhatWeDo() {
  return (
    <section className="relative mx-auto max-w-[1240px] px-6 py-24 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <FadeIn>
          <div>
            <Eyebrow className="tracking-[2.5px]">What We Do</Eyebrow>
            <h2 className="mt-3 max-w-[600px] font-serif text-[40px] font-medium leading-[1.1] tracking-[-0.5px] max-md:text-[32px]">
              Four disciplines, one integrated process.
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <CtaLink
            href="/services"
            tone="gold"
            className="border-b-2 border-gold !bg-transparent px-0 pb-1 text-[15px] !text-navy shadow-none hover:!text-gold hover:shadow-none"
          >
            Explore our services →
          </CtaLink>
        </FadeIn>
      </div>

      <div className="mt-11 grid gap-px border border-line bg-line sm:grid-cols-2">
        {services.map((sv, i) => (
          <AnimatedCard
            key={sv.no}
            index={i}
            className="bg-cream-card p-10 transition-[background-color,box-shadow] duration-300 hover:bg-cream hover:shadow-[inset_0_0_0_1px_rgba(198,160,82,0.25)]"
          >
            <div className="font-serif text-[15px] text-gold transition-transform duration-500 group-hover:scale-110">
              {sv.no}
            </div>
            <h3 className="my-3 font-serif text-[25px] font-medium">{sv.title}</h3>
            <p className="text-[15px] leading-[1.65] text-muted-ink">{sv.desc}</p>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
