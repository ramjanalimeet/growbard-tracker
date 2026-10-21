import type { Metadata } from "next";
import { CtaBand, PageHero, ReviewsSection, StatsSection } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Reviews",
  description: "What local business owners say about working with Growbard.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What our clients say"
        lead="Real results for local businesses, in their own words."
      />
      <ReviewsSection />
      <StatsSection />
      <CtaBand />
    </>
  );
}
