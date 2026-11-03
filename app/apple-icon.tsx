import { ImageResponse } from "next/og";

// Apple touch icon — must be raster (Safari ignores SVG here), so it is
// rendered to PNG by next/og. Mirrors app/icon.svg: navy tile + gold
// growth-bars-and-trend-arrow mark.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e1f38",
        }}
      >
        <svg width="128" height="128" viewBox="0 0 32 32" fill="none">
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
      </div>
    ),
    { ...size },
  );
}
