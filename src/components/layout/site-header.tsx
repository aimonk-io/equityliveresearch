"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BrandMark, Wordmark } from "@/components/layout/brand-mark";
import { MarketTicker } from "@/components/layout/market-ticker";
import { navItems } from "@/config/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[rgba(14,31,56,0.97)] text-cream backdrop-blur-[8px]">
      <div className="mx-auto flex h-[74px] max-w-[1240px] items-center justify-between gap-6 px-6 sm:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <BrandMark />
          <span className="flex flex-col items-start leading-none">
            <Wordmark className="font-serif text-[20px] font-semibold tracking-[0.2px]" />
            <span className="mt-[3px] text-[9.5px] uppercase tracking-[2.5px] text-[#9aa7bd]">
              Indian Equity Research
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1.5 md:flex" aria-label="Main">
          {navItems.map((n) => {
            const active = isActive(pathname, n.href);
            return (
              <Link
                key={n.key}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className="relative px-[14px] py-2 text-[14.5px] font-medium text-[#e7ebf3] transition-colors hover:text-white"
              >
                {n.label}
                {active ? (
                  <span className="absolute inset-x-[14px] bottom-0.5 h-0.5 rounded-[2px] bg-gold" />
                ) : null}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-3 rounded-[2px] bg-gold px-5 py-[11px] text-[14px] font-semibold text-navy transition-colors hover:bg-gold-hover"
          >
            Book Consultation
          </Link>
        </nav>

        <button
          type="button"
          className="flex size-9 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-5 bg-cream" />
          <span className="h-0.5 w-5 bg-cream" />
          <span className="h-0.5 w-5 bg-cream" />
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-white/10 px-6 pb-4 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((n) => (
              <li key={n.key}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-[15px] font-medium text-[#e7ebf3]"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-[2px] bg-gold px-5 py-3 text-center text-[14px] font-semibold text-navy"
              >
                Book Consultation
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}

      <MarketTicker />
    </header>
  );
}
