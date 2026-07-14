import type { Metadata } from "next";

import { Faq } from "@/components/sections/faq";
import { PlansGrid } from "@/components/sections/plans-grid";
import { PageHero } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Investment Plans",
  description:
    "Structured investment plans for every horizon. Expected returns are indicative, market-linked and not guaranteed.",
};

export default function PlansPage() {
  return (
    <>
      <PageHero
        eyebrow="Investment Plans"
        title="Structured plans for every investment horizon."
        subtitle="Expected returns are indicative and based on historical market performance. They are not guaranteed and depend on prevailing market conditions."
      />
      <PlansGrid />
      <Faq />
    </>
  );
}
