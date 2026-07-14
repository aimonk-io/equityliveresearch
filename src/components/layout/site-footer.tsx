import Link from "next/link";

import { BrandMark, Wordmark } from "@/components/layout/brand-mark";
import { navItems, siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-[#c6cede]">
      <div className="mx-auto max-w-[1240px] px-6 pb-[30px] pt-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <BrandMark size={32} fontSize={17} />
              <Wordmark className="font-serif text-[19px] text-cream" />
            </div>
            <p className="mt-[18px] max-w-[300px] text-[13.5px] leading-[1.7] text-[#8f9bb0]">
              Research-driven equity investment and portfolio advisory for the
              Indian markets. SEBI Registered Research Analyst.
            </p>
          </div>

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

          <div>
            <div className="mb-[14px] text-[12px] uppercase tracking-[1.5px] text-[#7c869c]">
              Contact
            </div>
            <div className="text-[14px] leading-[2] text-[#c6cede]">
              <a href={`tel:${siteConfig.phone}`} className="hover:text-gold">
                {siteConfig.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">
                {siteConfig.email}
              </a>
              <br />
              {siteConfig.websiteDisplay}
            </div>
          </div>

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
        </div>

        <div className="my-[22px] mt-9 h-px bg-white/[0.08]" />
        <div className="flex flex-wrap justify-between gap-5 text-[12.5px] text-[#7c869c]">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <span>SEBI RA Reg. No. {siteConfig.sebiRegNo} · NISM Certified</span>
        </div>
      </div>
    </footer>
  );
}
