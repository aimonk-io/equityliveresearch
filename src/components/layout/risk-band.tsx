"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { riskDisclosures } from "@/config/site";

export function RiskBand() {
  return (
    <section className="border-t border-line-strong bg-cream-panel">
      <div className="mx-auto max-w-[1240px] px-6 py-11 sm:px-8">
        <FadeIn blur y={16}>
          <div className="flex items-center gap-2.5 text-[11.5px] uppercase tracking-[2px] text-[#8a7a4e]">
            <span
              aria-hidden
              className="inline-flex size-5 items-center justify-center rounded-full border border-[#c6a052]/60 text-[11px] text-gold animate-[elrPulse_2.8s_ease-in-out_infinite]"
            >
              !
            </span>
            Risk Disclosure
          </div>
        </FadeIn>
        <div className="mt-[18px] grid gap-7 md:grid-cols-3">
          {riskDisclosures.map((text, i) => (
            <FadeIn key={text} delay={0.08 * i} blur y={14}>
              <p className="text-[13px] leading-[1.6] text-[#5b5340]">{text}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
