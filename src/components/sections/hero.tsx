import { CtaLink } from "@/components/ui/primitives";
import { snapshot } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-cream">
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 pb-[108px] pt-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="[animation:elrUp_0.7s_ease_both]">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(185,138,62,0.4)] px-3.5 py-[7px] text-[12px] uppercase tracking-[2px] text-gold">
            SEBI Registered Research Analyst
          </span>
          <h1 className="mt-[26px] font-serif text-[60px] font-medium leading-[1.05] tracking-[-1px] max-md:text-[40px]">
            Disciplined research for the{" "}
            <em className="font-serif italic text-gold">Indian equity</em>{" "}
            markets.
          </h1>
          <p className="mt-6 max-w-[520px] text-[18px] leading-[1.65] text-[#ccd5e2]">
            We help investors across India build and manage equity portfolios
            with institutional-grade research, transparent reporting, and
            rigorous risk management — no noise, no tips, just process.
          </p>
          <div className="mt-[34px] flex flex-wrap gap-3.5">
            <CtaLink href="/contact" tone="gold" className="px-7 py-[15px] text-[15px]">
              Book a Free Consultation
            </CtaLink>
            <CtaLink
              href="/plans"
              tone="outline-dark"
              className="px-7 py-[15px] text-[15px] font-medium"
            >
              View Investment Plans
            </CtaLink>
          </div>
          <p className="mt-5 text-[12.5px] text-[#8b97ac]">
            Investments are subject to market risks. Please read the risk
            disclosure.
          </p>
        </div>

        <div className="rounded-[4px] border border-white/[0.12] bg-white/[0.03] p-[30px]">
          <div className="text-[11px] uppercase tracking-[2px] text-[#9aa7bd]">
            Live Research Snapshot
          </div>
          <div className="my-[18px] h-px bg-white/10" />
          {snapshot.map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between border-b border-white/[0.07] py-[13px]"
            >
              <span className="text-[15px] text-[#e7ebf3]">{s.name}</span>
              <span className="font-serif text-[19px] text-white">
                {s.val}
                <span
                  className={`ml-2 font-sans text-[13px] ${s.up ? "text-up" : "text-down"}`}
                >
                  {s.chg}
                </span>
              </span>
            </div>
          ))}
          <p className="mt-4 text-[11px] leading-[1.5] text-[#7c869c]">
            Illustrative data for presentation only. Not investment advice or a
            solicitation.
          </p>
        </div>
      </div>
    </section>
  );
}
