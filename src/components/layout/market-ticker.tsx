import { ticker } from "@/config/site";

// Doubled so the -50% translate loops seamlessly.
const loop = [...ticker, ...ticker];

export function MarketTicker() {
  return (
    <div className="flex h-[34px] items-center overflow-hidden border-t border-[rgba(185,138,62,0.25)] bg-navy-deep">
      <div className="flex whitespace-nowrap [animation:elrTicker_40s_linear_infinite] [will-change:transform]">
        {loop.map((t, i) => (
          <span
            key={`${t.sym}-${i}`}
            className="inline-flex items-center gap-2 border-r border-white/[0.06] px-[22px] text-[12.5px] text-[#c6cede]"
          >
            <span className="font-semibold tracking-[0.4px]">{t.sym}</span>
            <span className="text-[#a5afc1]">{t.price}</span>
            <span className={t.up ? "font-semibold text-up" : "font-semibold text-down"}>
              {t.chg}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
