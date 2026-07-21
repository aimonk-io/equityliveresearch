"use client";

import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { FloatingBackground } from "@/components/animations/FloatingBackground";
import { Eyebrow } from "@/components/ui/primitives";
import { whyUs } from "@/config/site";
import { cn } from "@/lib/cn";

const highlightTitles = new Set(["Transparent"]);

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy text-cream">
      <FloatingBackground variant="navy" particles={false} />
      <div className="relative mx-auto max-w-[1240px] px-6 py-[90px] sm:px-8">
        <FadeIn blur>
          <Eyebrow className="tracking-[2.5px]">Why Choose Us</Eyebrow>
          <h2 className="mt-3 max-w-[640px] font-serif text-[40px] font-medium leading-[1.1] tracking-[-0.5px] max-md:text-[32px]">
            Built for investors who value process over promises.
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w, i) => {
            const highlight = highlightTitles.has(w.title);
            return (
              <AnimatedCard
                key={w.n}
                index={i}
                className={cn(
                  "bg-navy px-6 py-[30px] transition-colors duration-300",
                  highlight &&
                    "bg-[radial-gradient(ellipse_at_top,rgba(198,160,82,0.14),transparent_65%)]",
                )}
              >
                <div
                  className={cn(
                    "font-serif text-[30px] text-gold transition-transform duration-500 group-hover:scale-110",
                    highlight && "drop-shadow-[0_0_12px_rgba(198,160,82,0.45)]",
                  )}
                >
                  {w.n}
                </div>
                <div className="my-2 mt-3.5 text-[15px] font-semibold text-white">
                  {w.title}
                </div>
                <p className="text-[13px] leading-[1.6] text-[#a5afc1]">{w.desc}</p>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
