import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import {
  CtaBand,
  FaqSection,
  PageHero,
  PricingCompare,
  PricingSection,
} from "@/components/Sections";
import { PRICING_FAQS } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Pricing: Local SEO & Digital Marketing Plans in Taka",
  description:
    "Growbard pricing: Starter ৳10,500, Growth ৳24,500 and Dominate ৳34,500 per month for Local SEO, websites, Google Ads and social media marketing.",
  path: "/pricing",
});

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
