"use client";

import { m } from "motion/react";
import { useRef } from "react";

import { FloatingBackground } from "@/components/animations/FloatingBackground";
import { Particles } from "@/components/animations/Particles";
import { RevealText, AnimatedUnderline } from "@/components/animations/RevealText";
import { CtaLink } from "@/components/ui/cta-link";
import { snapshot } from "@/config/site";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const chartPath =
  "M2 38 C 28 36, 40 22, 58 24 C 78 26, 88 12, 108 14 C 128 16, 140 28, 158 22 C 176 16, 188 8, 198 10";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const parallax = useMouseParallax(sectionRef, 10);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-navy text-cream"
    >
      <FloatingBackground variant="navy" particles />
      <Particles count={12} className="opacity-70" />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 px-6 pb-[108px] pt-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <m.span
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(185,138,62,0.4)] bg-white/[0.03] px-3.5 py-[7px] text-[12px] uppercase tracking-[2px] text-gold shadow-[0_0_24px_-8px_rgba(198,160,82,0.4)] backdrop-blur-sm"
          >
            <span
              aria-hidden
              className="size-1.5 animate-[elrPulse_2.4s_ease-in-out_infinite] rounded-full bg-gold"
            />
            SEBI Registered Research Analyst
          </m.span>

          <h1 className="mt-[26px] font-serif text-[60px] font-medium leading-[1.05] tracking-[-1px] max-md:text-[40px]">
            <RevealText
              as="span"
              text="Disciplined research for the"
              className="block"
              mode="word"
            />{" "}
            <AnimatedUnderline>
              <em className="bg-[linear-gradient(105deg,#c6a052_0%,#e8d5a3_50%,#c6a052_100%)] bg-[length:200%_100%] bg-clip-text font-serif italic text-transparent [animation:elrFloat_8s_ease-in-out_infinite]">
                Indian equity
              </em>
            </AnimatedUnderline>{" "}
            <RevealText
              as="span"
              text="markets."
              className="inline"
              mode="word"
              delay={0.35}
            />
          </h1>

          <m.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-6 max-w-[520px] text-[18px] leading-[1.65] text-[#ccd5e2]"
          >
            We help investors across India build and manage equity portfolios
            with institutional-grade research, transparent reporting, and
            rigorous risk management — no noise, no tips, just process.
          </m.p>

          <m.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.55 }}
            className="mt-[34px] flex flex-wrap gap-3.5"
          >
            <CtaLink href="/contact" tone="gold" className="px-7 py-[15px] text-[15px]">
              Book a Free Consultation
            </CtaLink>
            <CtaLink
              href="/plans"
              tone="outline-dark"
              className="px-7 py-[15px] text-[15px] font-medium"
            >
              View Investment Plans
            </CtaLink>
          </m.div>

          <m.p
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="mt-5 text-[12.5px] text-[#8b97ac]"
          >
            Investments are subject to market risks. Please read the risk
            disclosure.
          </m.p>
        </div>

        <m.div
          initial={reduced ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={
            reduced
              ? undefined
              : {
                  transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
                  transition: "transform 0.35s ease-out",
                }
          }
          className="relative rounded-[4px] border border-white/[0.12] bg-white/[0.04] p-[30px] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] backdrop-blur-md"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="text-[11px] uppercase tracking-[2px] text-[#9aa7bd]">
              Live Research Snapshot
            </div>
            <svg
              aria-hidden
              width="72"
              height="28"
              viewBox="0 0 200 48"
              className="opacity-80"
            >
              <path
                d={chartPath}
                fill="none"
                stroke="#c6a052"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="[stroke-dasharray:240] [animation:elrChart_1.8s_ease_forwards]"
              />
            </svg>
          </div>
          <div className="my-[18px] h-px bg-white/10" />
          {snapshot.map((s, i) => (
            <m.div
              key={s.name}
              initial={reduced ? false : { opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
              className="flex items-center justify-between border-b border-white/[0.07] py-[13px]"
            >
              <span className="text-[15px] text-[#e7ebf3]">{s.name}</span>
              <span className="font-serif text-[19px] text-white">
                {s.val}
                <span
                  className={`ml-2 font-sans text-[13px] ${s.up ? "text-up" : "text-down"}`}
                >
                  {s.chg}
                </span>
              </span>
            </m.div>
          ))}
          <p className="mt-4 text-[11px] leading-[1.5] text-[#7c869c]">
            Illustrative data for presentation only. Not investment advice or a
            solicitation.
          </p>
        </m.div>
      </div>
    </section>
  );
}
