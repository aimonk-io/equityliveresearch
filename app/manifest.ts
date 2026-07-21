import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * Web app manifest — improves installability and gives search engines /
 * social platforms a canonical name, theme and icon set. Icons are the
 * file-based app/icon.svg and app/apple-icon.svg.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} · ${siteConfig.tagline}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f3ec",
    theme_color: "#0e1f38",
    lang: "en-IN",
    categories: ["finance", "business", "education"],
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon.svg", type: "image/svg+xml", sizes: "180x180" },
    ],
  };
}
