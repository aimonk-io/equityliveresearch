import { CtaLink } from "@/components/ui/primitives";
import { plans,type PlanVariant } from "@/config/site";

const variantStyles: Record<
  PlanVariant,
  {
    card: string;
    ret: string;
    muted: string;
    line: string;
    fg: string;
  }
> = {
  light: {
    card: "border-line-soft bg-cream-card text-[#1b2634]",
    ret: "text-navy",
    muted: "text-[#77828f]",
    line: "bg-line-soft",
    fg: "text-[#1b2634]",
  },
  soon: {
    card: "border-[#e2dccf] bg-[#f1ede3] text-[#9a9384]",
    ret: "text-[#b0a892]",
    muted: "text-[#a49c8b]",
    line: "bg-[#e2dccf]",
    fg: "text-[#9a9384]",
  },
  featured: {
    card: "border-white/[0.14] bg-navy text-cream",
    ret: "text-gold",
    muted: "text-[#9aa7bd]",
    line: "bg-white/[0.12]",
    fg: "text-cream",
  },
};

export function PlansGrid() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-[72px] sm:px-8">
      <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((pl) => {
          const s = variantStyles[pl.variant];
          return (
            <div
              key={pl.name}
              className={`relative flex flex-col rounded-[6px] border px-[26px] py-8 ${s.card}`}
            >
              {pl.featured ? (
                <span className="absolute -top-[11px] left-[26px] rounded-full bg-gold px-3 py-[5px] text-[11px] font-bold uppercase tracking-[1px] text-navy">
                  Most Popular
                </span>
              ) : null}
              <h3 className="font-serif text-[24px] font-medium">{pl.name}</h3>
              <div className={`my-[18px] mb-1 font-serif text-[52px] font-medium ${s.ret}`}>
                {pl.ret}
              </div>
              <div className={`text-[13px] tracking-[0.3px] ${s.muted}`}>
                expected return
              </div>
              <div className={`my-[22px] h-px ${s.line}`} />
              <div className={`mb-1.5 text-[14px] ${s.fg}`}>
                <span className={s.muted}>Duration</span> · {pl.duration}
              </div>
              <p className={`mt-2 flex-1 text-[13px] leading-[1.6] ${s.muted}`}>
                {pl.note}
              </p>
              {pl.disabled ? (
                <span className="mt-6 w-full cursor-not-allowed rounded-[2px] border border-[#ddd6c7] bg-[#e8e3d7] py-[13px] text-center text-[14px] font-semibold text-[#a49c8b]">
                  {pl.cta}
                </span>
              ) : (
                <CtaLink
                  href="/contact"
                  tone={pl.featured ? "gold" : "outline-light"}
                  className="mt-6 w-full py-[13px] text-[14px]"
                >
                  {pl.cta}
                </CtaLink>
              )}
            </div>
          );
        })}
      </div>
      <p className="mx-auto mt-6 max-w-[760px] text-center text-[12.5px] leading-[1.6] text-[#77828f]">
        Expected returns are based on market performance and are not assured.
        Investments in securities are subject to market risks; past performance
        does not guarantee future returns.
      </p>
    </section>
  );
}
