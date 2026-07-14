import { CtaBand } from "@/components/sections/cta-band";
import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { Testimonials } from "@/components/sections/testimonials";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <WhatWeDo />
      <WhyChooseUs />
      <Testimonials />
      <CtaBand />
    </>
  );
}
