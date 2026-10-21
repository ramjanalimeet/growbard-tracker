import Hero from "@/components/Hero";
import { HOME_FAQS } from "@/lib/faqs";
import {
  ContactSection,
  CtaBand,
  FaqSection,
  IndustriesSection,
  LocationsSection,
  PricingSection,
  ProcessSection,
  ReviewsSection,
  ServicesSection,
  StatsSection,
  WhySection,
} from "@/components/Sections";
import { GOOGLE, SERVICES, SITE } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  email: SITE.email,
  telephone: SITE.phone,
  description: SITE.tagline,
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  areaServed: SITE.areaServed,
  hasMap: GOOGLE.profileUrl,
  makesOffer: SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.blurb },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <StatsSection />
      <ServicesSection more />
      <IndustriesSection />
      <WhySection more />
      <LocationsSection />
      <ProcessSection />
      <PricingSection more />
      <ReviewsSection more />
      <CtaBand />
      <FaqSection items={HOME_FAQS} />
      <ContactSection />
    </>
  );
}
