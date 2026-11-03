"use client";

import { AnimatePresence, m } from "motion/react";
import { useState } from "react";

import { FadeIn } from "@/components/animations/FadeIn";
import { faqs } from "@/config/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const reduced = usePrefersReducedMotion();

  return (
    <section className="mx-auto max-w-[900px] px-6 pb-24 pt-10 sm:px-8">
      <FadeIn>
        <h2 className="text-center font-serif text-[34px] font-medium tracking-[-0.5px] max-md:text-[28px]">
          Frequently Asked Questions
        </h2>
      </FadeIn>
      <div className="mt-9 border-t border-line-strong">
        {faqs.map((f, i) => {
          const open = openIndex === i;
          return (
            <div key={f.q} className="border-b border-line-strong">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-5 px-1 py-[22px] text-left text-[17px] font-semibold text-[#1b2634] transition-colors hover:text-navy"
              >
                {f.q}
                <span
                  className="shrink-0 font-serif text-[26px] leading-none text-gold transition-transform duration-300"
                  style={{
                    transform: open ? "rotate(0deg)" : "rotate(0deg)",
                  }}
                >
                  {open ? "–" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open ? (
                  <m.div
                    key="content"
                    initial={reduced ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduced ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-[760px] px-1 pb-6 text-[15px] leading-[1.7] text-muted-ink">
                      {f.a}
                    </p>
                  </m.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
