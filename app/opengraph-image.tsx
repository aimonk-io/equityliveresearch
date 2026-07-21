import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

// Route segment config
export const alt = `${siteConfig.name} · ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Branded Open Graph / social-share card. Rendered at build/request time by
 * next/og so every shared link shows the EquityLiveResearch mark, wordmark
 * and tagline on the navy + gold brand background.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(120% 120% at 85% 0%, #16294a 0%, #0e1f38 55%, #0a1728 100%)",
          padding: "72px 80px",
          fontFamily: "Georgia, 'Times New Roman', serif",
          color: "#f6f3ec",
        }}
      >
        {/* brand lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg width="72" height="72" viewBox="0 0 32 32" fill="none">
            <g fill="#c6a052" fillOpacity="0.55">
              <rect x="4.5" y="18" width="5" height="8" rx="1.3" />
              <rect x="11" y="14" width="5" height="12" rx="1.3" />
              <rect x="17.5" y="10" width="5" height="16" rx="1.3" />
            </g>
            <g
              fill="none"
              stroke="#d3ae63"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 19.5 L11 15 L18 10 L26 5" />
              <path d="M21 5 L26 5 L26 10" />
            </g>
          </svg>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 600 }}>
            <span>EquityLive</span>
            <span style={{ color: "#c6a052" }}>Research</span>
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-1px",
              maxWidth: 900,
            }}
          >
            Disciplined, research-driven equity investing for the Indian markets.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 27,
              fontFamily: "system-ui, sans-serif",
              color: "#9aa7bd",
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            Institutional-grade research · transparent reporting · rigorous risk
            management
          </div>
        </div>

        {/* footer rule */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", width: 56, height: 4, background: "#c6a052" }} />
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#c6a052",
            }}
          >
            {siteConfig.websiteDisplay}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
