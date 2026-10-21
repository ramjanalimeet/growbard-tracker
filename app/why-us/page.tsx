import type { Metadata } from "next";
import {
  CtaBand,
  PageHero,
  ProcessSection,
  ReviewsSection,
  StatsSection,
  WhySection,
} from "@/components/Sections";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Why local businesses choose Growbard: results-focused marketing, clear reporting and no long-term contracts.",
  alternates: { canonical: "/why-us" },
};

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Us"
        title="Why local businesses choose Growbard"
        lead="We measure our work in calls, bookings and revenue, and we keep you informed every step of the way."
      />
      <StatsSection />
      <WhySection />
      <ProcessSection />
      <ReviewsSection more />
      <CtaBand />
    </>
  );
}
