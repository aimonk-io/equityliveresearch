import type { Metadata } from "next";

import { InvestmentProcess } from "@/components/sections/investment-process";
import { ServicesDetail } from "@/components/sections/services-detail";
import { PageHero } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Equity market research, portfolio strategy, risk management and investment planning — services that cover the full life of your portfolio.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Services that cover the full life of your portfolio."
      />
      <ServicesDetail />
      <InvestmentProcess />
    </>
  );
}
