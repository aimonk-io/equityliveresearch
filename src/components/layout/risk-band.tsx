import { riskDisclosures } from "@/config/site";

export function RiskBand() {
  return (
    <section className="border-t border-line-strong bg-cream-panel">
      <div className="mx-auto max-w-[1240px] px-6 py-11 sm:px-8">
        <div className="text-[11.5px] uppercase tracking-[2px] text-[#8a7a4e]">
          Risk Disclosure
        </div>
        <div className="mt-[18px] grid gap-7 md:grid-cols-3">
          {riskDisclosures.map((text) => (
            <p key={text} className="text-[13px] leading-[1.6] text-[#5b5340]">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
