"use client";

import { AnimatePresence, m } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BrandMark, Wordmark } from "@/components/layout/brand-mark";
import { MarketTicker } from "@/components/layout/market-ticker";
import { CtaLink } from "@/components/ui/cta-link";
import { navItems } from "@/config/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const reduced = usePrefersReducedMotion();

  // Close mobile menu when the route changes (render-phase reset).
  if (pathname !== menuPath) {
    setMenuPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 text-cream backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-white/10 bg-[rgba(14,31,56,0.82)] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.45)]"
          : "border-b border-transparent bg-[rgba(14,31,56,0.92)]",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 transition-[height] duration-300 sm:px-8",
          scrolled ? "h-[62px]" : "h-[74px]",
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          <BrandMark />
          <span className="flex flex-col items-start leading-none">
            <Wordmark className="font-serif text-[20px] font-semibold tracking-[0.2px]" />
            <span
              className={cn(
                "mt-[3px] text-[9.5px] uppercase tracking-[2.5px] text-[#9aa7bd] transition-opacity duration-300",
                scrolled ? "opacity-0 max-md:hidden md:opacity-70" : "opacity-100",
              )}
            >
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
                className="group relative px-[14px] py-2 text-[14.5px] font-medium text-[#e7ebf3] transition-colors hover:text-white"
              >
                {n.label}
                <span
                  className={cn(
                    "absolute inset-x-[14px] bottom-0.5 h-0.5 origin-left rounded-[2px] bg-gold transition-transform duration-300",
                    active
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            );
          })}
          <CtaLink
            href="/contact"
            tone="gold"
            className="ml-3 px-5 py-[11px] text-[14px]"
          >
            Book Consultation
          </CtaLink>
        </nav>

        <button
          type="button"
          className="relative flex size-9 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              "h-0.5 w-5 origin-center bg-cream transition-transform duration-300",
              open && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-5 bg-cream transition-opacity duration-200",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-5 origin-center bg-cream transition-transform duration-300",
              open && "-translate-y-[7px] -rotate-45",
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <m.nav
            id="mobile-nav"
            aria-label="Main"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-[rgba(14,31,56,0.96)] backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col px-6 pb-4 pt-2">
              {navItems.map((n, i) => (
                <m.li
                  key={n.key}
                  initial={reduced ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                >
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block py-2.5 text-[15px] font-medium transition-colors",
                      isActive(pathname, n.href)
                        ? "text-gold"
                        : "text-[#e7ebf3] hover:text-white",
                    )}
                  >
                    {n.label}
                  </Link>
                </m.li>
              ))}
              <li className="pt-2">
                <CtaLink
                  href="/contact"
                  tone="gold"
                  className="w-full px-5 py-3 text-[14px]"
                >
                  Book Consultation
                </CtaLink>
              </li>
            </ul>
          </m.nav>
        ) : null}
      </AnimatePresence>

      <MarketTicker />
    </header>
  );
}
