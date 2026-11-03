"use client";

import { m } from "motion/react";

import { FadeIn } from "@/components/animations/FadeIn";
import { Eyebrow } from "@/components/ui/primitives";
import { process } from "@/config/site";
import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

export function InvestmentProcess() {
  const { ref, inView } = useInView({ threshold: 0.15 });
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy-deep text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(198,160,82,0.08),transparent_50%)]"
      />
      <div className="relative mx-auto max-w-[1240px] px-6 py-[90px] sm:px-8">
        <FadeIn blur>
          <Eyebrow className="tracking-[2.5px]">Our Investment Process</Eyebrow>
          <h2 className="mt-3 max-w-[600px] font-serif text-[40px] font-medium leading-[1.1] tracking-[-0.5px] max-md:text-[32px]">
            Six steps, followed every single time.
          </h2>
        </FadeIn>

        <div
          ref={ref}
          className="relative mt-[52px] grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Progress line accent across top */}
          <m.div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[2px] origin-left bg-gradient-to-r from-gold/0 via-gold to-gold/0"
            initial={{ scaleX: 0 }}
            animate={inView || reduced ? { scaleX: 1 } : undefined}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          {process.map((p, i) => (
            <m.div
              key={p.step}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.1,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative bg-navy-deep px-[30px] py-[34px] transition-colors duration-300 hover:bg-[#0c1a2e]"
            >
              <div
                className={cn(
                  "font-serif text-[34px] leading-none text-gold transition-transform duration-500 group-hover:scale-110",
                  "animate-[elrPulse_3s_ease-in-out_infinite]",
                )}
                style={{ animationDelay: `${i * 0.35}s` }}
              >
                {p.step}
              </div>
              <h3 className="my-2.5 mt-4 text-[18px] font-semibold text-white">
                {p.title}
              </h3>
              <p className="text-[14px] leading-[1.65] text-[#a5afc1]">{p.desc}</p>
              {i < process.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute bottom-0 right-0 hidden h-px w-8 bg-gold/40 lg:block"
                />
              ) : null}
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
