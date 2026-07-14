import type { Metadata } from "next";

import { CallbackForm } from "@/components/sections/callback-form";
import { ContactInfo } from "@/components/sections/contact-info";
import { PageHero } from "@/components/ui/primitives";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with our research desk. Share a few details and a research advisor will call you back — usually within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Speak with our research desk."
        subtitle="Share a few details and a research advisor will call you back — usually within one business day."
      />
      <section className="mx-auto grid max-w-[1240px] items-start gap-14 px-6 py-[72px] sm:px-8 lg:grid-cols-2">
        <ContactInfo />
        <CallbackForm />
      </section>
    </>
  );
}
