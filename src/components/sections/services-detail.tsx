import { services } from "@/config/site";

export function ServicesDetail() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-[72px] sm:px-8">
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((sv) => (
          <div
            key={sv.no}
            className="rounded-[4px] border border-line-soft bg-cream-card p-10"
          >
            <div className="flex items-center gap-3.5">
              <span className="flex size-11 items-center justify-center rounded-full border border-gold font-serif text-[18px] text-gold">
                {sv.no}
              </span>
              <h3 className="font-serif text-[26px] font-medium">{sv.title}</h3>
            </div>
            <p className="my-5 mb-[18px] text-[15.5px] leading-[1.7] text-muted-ink">
              {sv.desc}
            </p>
            <ul className="flex flex-col gap-2.5">
              {sv.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-[14.5px] text-[#2a3543]">
                  <span className="text-gold">—</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
