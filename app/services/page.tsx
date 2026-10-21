import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import {
  CtaBand,
  IndustriesSection,
  PageHero,
  ProcessSection,
  ServiceDetails,
  ServicesSection,
} from "@/components/Sections";
import { pageMetadata, serviceLd } from "@/lib/seo";
import { SERVICES } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Services: Local SEO, Websites, Google Ads & Social Media",
  description:
    "Local SEO, website development, Google Ads and social media marketing services for businesses in Bangladesh, managed by one team.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={SERVICES.map((s) =>
          serviceLd({ name: s.title, description: s.description, path: `/services/${s.id}` }),
        )}
      />
      <PageHero
        eyebrow="Services"
        title="Your growth partner for more customers"
        lead="Local SEO, website development, Google Ads and social media marketing, planned and managed by one team."
      />
      <ServicesSection />
      <ServiceDetails />
      <IndustriesSection />
      <ProcessSection />
      <CtaBand />
    </>
  );
}
