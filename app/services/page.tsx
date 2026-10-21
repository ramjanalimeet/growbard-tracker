import type { Metadata } from "next";
import {
  CtaBand,
  PageHero,
  ProcessSection,
  ServiceDetails,
  ServicesSection,
} from "@/components/Sections";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Local SEO, website development, Google Ads and social media marketing services from Growbard.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Digital marketing services that bring customers"
        lead="Local SEO, website development, Google Ads and social media marketing, planned and managed by one team."
      />
      <ServicesSection />
      <ServiceDetails />
      <ProcessSection />
      <CtaBand />
    </>
  );
}
