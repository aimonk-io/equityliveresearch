import { cn } from "@/lib/cn";

interface BrandMarkProps {
  /** Rendered width & height in px. */
  size?: number;
  className?: string;
}

/**
 * The EquityLiveResearch logo mark — three ascending growth bars with a
 * rising trend arrow, in brand gold. Draws with the brand tokens
 * (--color-gold / --color-gold-hover) so it stays in step with the theme.
 * Sits on the navy header and footer; the standalone favicon/OG variants
 * live in app/icon.svg, app/apple-icon.svg and app/opengraph-image.tsx.
 */
export function BrandMark({ size = 34, className }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      {/* growth bars — ascending, semi-transparent for depth */}
      <g fill="var(--color-gold)" fillOpacity="0.55">
        <rect x="4.5" y="18" width="5" height="8" rx="1.3" />
        <rect x="11" y="14" width="5" height="12" rx="1.3" />
        <rect x="17.5" y="10" width="5" height="16" rx="1.3" />
      </g>
      {/* rising trend line + arrowhead */}
      <g
        fill="none"
        stroke="var(--color-gold-hover)"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5 L11 15 L18 10 L26 5" />
        <path d="M21 5 L26 5 L26 10" />
      </g>
    </svg>
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
