"use client";

import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { Eyebrow } from "@/components/ui/primitives";
import { testimonials } from "@/config/site";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-24 sm:px-8">
      <FadeIn>
        <Eyebrow className="tracking-[2.5px]">Client Voices</Eyebrow>
        <h2 className="mt-3 font-serif text-[40px] font-medium tracking-[-0.5px] max-md:text-[32px]">
          Trusted across India.
        </h2>
      </FadeIn>
      <div className="mt-11 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <AnimatedCard
            key={t.name}
            index={i}
            className="flex flex-col rounded-[4px] border border-line-soft bg-cream-card p-[34px] shadow-[0_0_0_0_transparent] transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgba(14,31,56,0.28)]"
          >
            <figure className="flex h-full flex-col">
              <div className="text-[15px] tracking-[2px] text-gold">{t.stars}</div>
              <blockquote className="my-[18px] mb-6 flex-1 font-serif text-[20px] leading-[1.5] text-[#222f40]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-[13px]">
                <span className="flex size-[42px] items-center justify-center rounded-full bg-navy font-serif text-[18px] text-gold transition-transform duration-300 group-hover:scale-110">
                  {t.initial}
                </span>
                <span>
                  <span className="block text-[14.5px] font-semibold">{t.name}</span>
                  <span className="block text-[13px] text-[#77828f]">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
