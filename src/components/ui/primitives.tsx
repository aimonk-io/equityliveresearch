import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

import { FadeIn } from "@/components/animations/FadeIn";
import { CtaLink } from "@/components/ui/cta-link";

export { CtaLink };

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
    <section className="relative overflow-hidden bg-navy text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,rgba(198,160,82,0.14),transparent_55%),radial-gradient(ellipse_50%_40%_at_90%_30%,rgba(120,160,220,0.08),transparent_50%)]"
      />
      <div
        className={cn(
          "relative mx-auto px-6 py-[84px] sm:px-8",
          narrow ? "max-w-[1000px]" : "max-w-[1240px]",
        )}
      >
        <FadeIn delay={0.05}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </FadeIn>
        <FadeIn delay={0.12} y={20} blur>
          <h1
            className={cn(
              "mt-3.5 font-serif text-[52px] font-medium leading-[1.08] tracking-[-0.8px] max-md:text-[38px]",
              titleClassName,
            )}
          >
            {title}
          </h1>
        </FadeIn>
        {subtitle ? (
          <FadeIn delay={0.22}>
            <p className="mt-4 max-w-[640px] text-[16px] leading-[1.6] text-[#ccd5e2]">
              {subtitle}
            </p>
          </FadeIn>
        ) : null}
      </div>
    </section>
  );
}
