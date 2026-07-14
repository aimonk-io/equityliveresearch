import { CtaLink } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-[1240px] flex-col items-center gap-5 px-6 py-32 text-center sm:px-8">
      <span className="text-[12px] uppercase tracking-[2.5px] text-gold">404</span>
      <h1 className="font-serif text-[46px] font-medium tracking-[-0.5px] text-navy max-md:text-[34px]">
        Page not found
      </h1>
      <p className="max-w-md text-[16px] text-muted-ink">
        The page you are looking for doesn&apos;t exist or has moved.
      </p>
      <CtaLink href="/" tone="gold" className="mt-2 px-7 py-3.5 text-[15px]">
        Back to Home
      </CtaLink>
    </section>
  );
}
