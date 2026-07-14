import { contactRows, siteConfig } from "@/config/site";

const hrefFor: Record<string, (v: string) => string | undefined> = {
  Phone: () => `tel:${siteConfig.phone}`,
  Email: () => `mailto:${siteConfig.email}`,
  Website: () => `https://${siteConfig.websiteDisplay}`,
};

export function ContactInfo() {
  return (
    <div>
      <div className="flex flex-col gap-px overflow-hidden rounded-[4px] border border-line bg-line">
        {contactRows.map((c) => {
          const href = hrefFor[c.label]?.(c.value);
          const value = href ? (
            <a
              href={href}
              className="hover:text-gold"
              {...(c.label === "Website"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {c.value}
            </a>
          ) : (
            c.value
          );
          return (
            <div key={c.label} className="bg-cream-card px-7 py-[26px]">
              <div className="text-[11.5px] uppercase tracking-[2px] text-gold">
                {c.label}
              </div>
              <div className="mt-2 font-serif text-[21px] text-[#1b2634]">
                {value}
              </div>
              <div className="mt-1 text-[13.5px] text-[#77828f]">{c.sub}</div>
            </div>
          );
        })}
      </div>
      <div className="mt-6 rounded-[4px] bg-navy px-7 py-[26px] text-[#e7ebf3]">
        <div className="text-[11.5px] uppercase tracking-[2px] text-gold">
          Compliance
        </div>
        <p className="mt-2.5 text-[13.5px] leading-[1.65] text-[#b2bcce]">
          SEBI Registered Research Analyst · Reg. No. {siteConfig.sebiRegNo}.
          Registration with SEBI and certification from NISM do not guarantee
          performance or assure returns.
        </p>
      </div>
    </div>
  );
}
