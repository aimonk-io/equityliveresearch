interface BrandMarkProps {
  size?: number;
  fontSize?: number;
}

/** The circled "E" monogram used in the header and footer. */
export function BrandMark({ size = 34, fontSize = 19 }: BrandMarkProps) {
  return (
    <span
      className="flex items-center justify-center rounded-full border-[1.5px] border-gold font-serif font-semibold text-gold"
      style={{ width: size, height: size, fontSize }}
      aria-hidden
    >
      E
    </span>
  );
}

/** Wordmark: "EquityLive" + gold "Research". */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={className}>
      EquityLive<span className="text-gold">Research</span>
    </span>
  );
}
