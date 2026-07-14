import { CtaLink } from "@/components/ui/primitives";

export function CtaBand() {
  return (
    <section className="bg-gold">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-8 px-6 py-[70px] sm:px-8">
        <div>
          <h2 className="font-serif text-[36px] font-medium tracking-[-0.5px] text-navy max-md:text-[28px]">
            Ready to invest with a research-first partner?
          </h2>
          <p className="mt-2.5 text-[16px] text-[#3d3218]">
            Book a no-obligation consultation with our research desk.
          </p>
        </div>
        <CtaLink
          href="/contact"
          tone="navy"
          className="whitespace-nowrap px-[34px] py-[17px] text-[16px]"
        >
          Book Consultation
        </CtaLink>
      </div>
    </section>
  );
}
