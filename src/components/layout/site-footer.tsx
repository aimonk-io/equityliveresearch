"use client";

import Link from "next/link";

import { FadeIn } from "@/components/animations/FadeIn";
import { GradientBlob } from "@/components/animations/GradientBlob";
import { BrandMark, Wordmark } from "@/components/layout/brand-mark";
import { navItems, siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-[#c6cede]">
      <GradientBlob
        color="gold"
        size={420}
        className="-right-24 -top-32 opacity-25"
        duration={24}
      />
      <GradientBlob
        color="cream"
        size={320}
        className="-bottom-24 left-0 opacity-15"
        delay={3}
        duration={28}
      />

      <div className="relative mx-auto max-w-[1240px] px-6 pb-[30px] pt-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <FadeIn>
            <div>
              <div className="flex items-center gap-3">
                <BrandMark size={32} fontSize={17} />
                <Wordmark className="font-serif text-[19px] text-cream" />
              </div>
              <p className="mt-[18px] max-w-[300px] text-[13.5px] leading-[1.7] text-[#8f9bb0]">
                Research-driven equity investment and portfolio advisory for the
                Indian markets.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div>
              <div className="mb-[14px] text-[12px] uppercase tracking-[1.5px] text-[#7c869c]">
                Explore
              </div>
              {navItems.map((n) => (
                <Link
                  key={n.key}
                  href={n.href}
                  className="block py-1.5 text-[14px] text-[#c6cede] transition-colors hover:text-gold"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div>
              <div className="mb-[14px] text-[12px] uppercase tracking-[1.5px] text-[#7c869c]">
                Contact
              </div>
              <div className="text-[14px] leading-[2] text-[#c6cede]">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition-colors hover:text-gold"
                >
                  {siteConfig.phoneDisplay}
                </a>
                <br />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {siteConfig.email}
                </a>
                <br />
                {siteConfig.websiteDisplay}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <div className="mb-[14px] text-[12px] uppercase tracking-[1.5px] text-[#7c869c]">
                Office
              </div>
              <div className="text-[14px] leading-[1.7] text-[#c6cede]">
                {siteConfig.officeCity}
                <br />
                {siteConfig.officeCountry}
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="my-[22px] mt-9 h-px bg-white/[0.08]" />
        <div className="flex flex-wrap justify-between gap-5 text-[12.5px] text-[#7c869c]">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
