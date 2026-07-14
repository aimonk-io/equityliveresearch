import { CtaLink, Eyebrow } from "@/components/ui/primitives";
import { services } from "@/config/site";

export function WhatWeDo() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-24 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow className="tracking-[2.5px]">What We Do</Eyebrow>
          <h2 className="mt-3 max-w-[600px] font-serif text-[40px] font-medium leading-[1.1] tracking-[-0.5px] max-md:text-[32px]">
            Four disciplines, one integrated process.
          </h2>
        </div>
        <CtaLink
          href="/services"
          tone="gold"
          className="border-b-2 border-gold !bg-transparent px-0 pb-1 text-[15px] !text-navy hover:!text-gold"
        >
          Explore our services →
        </CtaLink>
      </div>

      <div className="mt-11 grid gap-px border border-line bg-line sm:grid-cols-2">
        {services.map((sv) => (
          <div key={sv.no} className="bg-cream-card p-10">
            <div className="font-serif text-[15px] text-gold">{sv.no}</div>
            <h3 className="my-3 font-serif text-[25px] font-medium">{sv.title}</h3>
            <p className="text-[15px] leading-[1.65] text-muted-ink">{sv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
