import { Eyebrow } from "@/components/ui/primitives";
import { process } from "@/config/site";

export function InvestmentProcess() {
  return (
    <section className="bg-navy-deep text-cream">
      <div className="mx-auto max-w-[1240px] px-6 py-[90px] sm:px-8">
        <Eyebrow className="tracking-[2.5px]">Our Investment Process</Eyebrow>
        <h2 className="mt-3 max-w-[600px] font-serif text-[40px] font-medium leading-[1.1] tracking-[-0.5px] max-md:text-[32px]">
          Six steps, followed every single time.
        </h2>
        <div className="mt-[52px] grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p) => (
            <div key={p.step} className="bg-navy-deep px-[30px] py-[34px]">
              <div className="font-serif text-[34px] leading-none text-gold">
                {p.step}
              </div>
              <h3 className="my-2.5 mt-4 text-[18px] font-semibold text-white">
                {p.title}
              </h3>
              <p className="text-[14px] leading-[1.65] text-[#a5afc1]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
