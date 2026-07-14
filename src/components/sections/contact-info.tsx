"use client";

import { useCallback, useState } from "react";

import { FadeIn } from "@/components/animations/FadeIn";
import { contactRows, siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

const hrefFor: Record<string, (v: string) => string | undefined> = {
  Phone: () => `tel:${siteConfig.phone}`,
  Email: () => `mailto:${siteConfig.email}`,
  Website: () => `https://${siteConfig.websiteDisplay}`,
};

const copyable = new Set(["Phone", "Email", "Website", "Office"]);

export function ContactInfo() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = useCallback(async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      window.setTimeout(() => setCopied(null), 1600);
    } catch {
      /* clipboard may be unavailable */
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-px overflow-hidden rounded-[4px] border border-line bg-line">
        {contactRows.map((c, i) => {
          const href = hrefFor[c.label]?.(c.value);
          const value = href ? (
            <a
              href={href}
              className="transition-colors hover:text-gold"
              {...(c.label === "Website"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {c.value}
            </a>
          ) : (
            c.value
          );
          return (
            <FadeIn key={c.label} delay={i * 0.06} y={12}>
              <div
                className={cn(
                  "group relative bg-cream-card px-7 py-[26px] transition-[box-shadow,background-color] duration-300 hover:bg-cream hover:shadow-[inset_0_0_0_1px_rgba(198,160,82,0.25)]",
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-[11.5px] uppercase tracking-[2px] text-gold transition-transform duration-300 group-hover:translate-x-0.5">
                    {c.label}
                  </div>
                  {copyable.has(c.label) ? (
                    <button
                      type="button"
                      onClick={() => copy(c.label, c.value)}
                      className="rounded-[2px] px-2 py-1 text-[11px] font-semibold uppercase tracking-[1px] text-[#77828f] transition-colors hover:bg-navy hover:text-gold"
                      aria-label={`Copy ${c.label}`}
                    >
                      {copied === c.label ? "Copied" : "Copy"}
                    </button>
                  ) : null}
                </div>
                <div className="mt-2 font-serif text-[21px] text-[#1b2634]">
                  {value}
                </div>
                <div className="mt-1 text-[13.5px] text-[#77828f]">{c.sub}</div>
              </div>
            </FadeIn>
          );
        })}
      </div>
      <FadeIn delay={0.25} blur>
        <div className="mt-6 rounded-[4px] bg-navy px-7 py-[26px] text-[#e7ebf3]">
          <div className="text-[11.5px] uppercase tracking-[2px] text-gold">
            Compliance
          </div>
          <p className="mt-2.5 text-[13.5px] leading-[1.65] text-[#b2bcce]">
            SEBI Registered Research Analyst · Reg. No. {siteConfig.sebiRegNo}.
            Registration with SEBI and certification from NISM do not guarantee
            performance or assure returns.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
