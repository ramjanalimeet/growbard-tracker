import type { Metadata } from "next";
import {
  CtaBand,
  FaqSection,
  PageHero,
  PricingCompare,
  PricingSection,
} from "@/components/Sections";
import { PRICING_FAQS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Growbard pricing: Starter ৳10,500, Growth ৳24,500 and Dominate ৳34,500 per month for Local SEO, websites, Google Ads and social media marketing.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        lead="Pick the plan that fits your goals. Every plan includes Local SEO and a monthly performance report."
      />
      <PricingSection />
      <PricingCompare />
      <FaqSection items={PRICING_FAQS} title="Pricing questions" />
      <CtaBand />
    </>
  );
}
