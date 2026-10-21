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
        title="Our Google reviews"
        lead="See what clients say about Growbard on Google, and leave a review of your own."
      />
      <ReviewsSection />
      <StatsSection />
      <CtaBand />
    </>
  );
}
