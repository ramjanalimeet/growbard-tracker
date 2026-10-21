import type { Metadata } from "next";
import { ContactSection, FaqSection, MapSection, PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Growbard by phone, WhatsApp or email for a free strategy call and marketing audit.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about growing your business"
        lead="Call us, chat on WhatsApp or send the form below. We reply within one business day."
      />
      <ContactSection />
      <MapSection />
      <FaqSection />
    </>
  );
}
