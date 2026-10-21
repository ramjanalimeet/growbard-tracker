import type { Metadata } from "next";
import { CONTACT_FAQS } from "@/lib/faqs";
import { pageMetadata } from "@/lib/seo";
import { ContactSection, FaqSection, MapSection, PageHero } from "@/components/Sections";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us: Call or WhatsApp for a Free Growth Plan",
  description:
    "Contact Growbard by phone, WhatsApp or email for a free strategy call and marketing audit.",
  path: "/contact",
});

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
      <FaqSection items={CONTACT_FAQS} title="Contact questions" />
    </>
  );
}
