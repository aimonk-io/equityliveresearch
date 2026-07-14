"use client";

import { useState } from "react";

import { faqs } from "@/config/site";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-[900px] px-6 pb-24 pt-10 sm:px-8">
      <h2 className="text-center font-serif text-[34px] font-medium tracking-[-0.5px] max-md:text-[28px]">
        Frequently Asked Questions
      </h2>
      <div className="mt-9 border-t border-line-strong">
        {faqs.map((f, i) => {
          const open = openIndex === i;
          return (
            <div key={f.q} className="border-b border-line-strong">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-5 px-1 py-[22px] text-left text-[17px] font-semibold text-[#1b2634]"
              >
                {f.q}
                <span className="shrink-0 font-serif text-[26px] leading-none text-gold">
                  {open ? "–" : "+"}
                </span>
              </button>
              {open ? (
                <p className="max-w-[760px] px-1 pb-6 text-[15px] leading-[1.7] text-muted-ink">
                  {f.a}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
