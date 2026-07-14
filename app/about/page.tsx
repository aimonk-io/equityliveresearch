import type { Metadata } from "next";

import { AboutContent } from "@/components/sections/about-content";
import { PageHero } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "About",
  description:
    "A research house built on discipline, transparency and long-term thinking — India-focused equity research and portfolio advisory.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Firm"
        narrow
        title="A research house built on discipline, transparency and long-term thinking."
      />
      <AboutContent />
    </>
  );
}
