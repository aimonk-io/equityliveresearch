import { Eyebrow } from "@/components/ui/primitives";
import { whyUs } from "@/config/site";

export function WhyChooseUs() {
  return (
    <section className="bg-navy text-cream">
      <div className="mx-auto max-w-[1240px] px-6 py-[90px] sm:px-8">
        <Eyebrow className="tracking-[2.5px]">Why Choose Us</Eyebrow>
        <h2 className="mt-3 max-w-[640px] font-serif text-[40px] font-medium leading-[1.1] tracking-[-0.5px] max-md:text-[32px]">
          Built for investors who value process over promises.
        </h2>
        <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {whyUs.map((w) => (
            <div key={w.n} className="bg-navy px-6 py-[30px]">
              <div className="font-serif text-[30px] text-gold">{w.n}</div>
              <div className="my-2 mt-3.5 text-[15px] font-semibold text-white">
                {w.title}
              </div>
              <p className="text-[13px] leading-[1.6] text-[#a5afc1]">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
