import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ReactNode } from "react";

/** Uppercase gold section label. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-[12px] uppercase tracking-[2.5px] text-gold",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Dark navy page header used by the About / Services / Plans / Contact pages. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  narrow = false,
  titleClassName,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  narrow?: boolean;
  titleClassName?: string;
}) {
  return (
    <section className="bg-navy text-cream">
      <div
        className={cn(
          "mx-auto px-6 py-[84px] sm:px-8",
          narrow ? "max-w-[1000px]" : "max-w-[1240px]",
        )}
      >
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1
          className={cn(
            "mt-3.5 font-serif text-[52px] font-medium leading-[1.08] tracking-[-0.8px] max-md:text-[38px]",
            titleClassName,
          )}
        >
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-[640px] text-[16px] leading-[1.6] text-[#ccd5e2]">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}

type ButtonTone = "gold" | "navy" | "outline-dark" | "outline-light";

const toneClasses: Record<ButtonTone, string> = {
  gold: "bg-gold text-navy hover:bg-gold-hover",
  navy: "bg-navy text-cream hover:bg-navy-deep",
  "outline-dark":
    "border border-white/30 text-cream hover:border-gold hover:text-gold",
  "outline-light":
    "border border-navy text-navy hover:bg-navy hover:text-cream",
};

/** Sharp-cornered CTA link matching the design's buttons. */
export function CtaLink({
  href,
  tone = "gold",
  className,
  children,
}: {
  href: string;
  tone?: ButtonTone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-[2px] font-sans font-semibold transition-colors",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </Link>
  );
}
