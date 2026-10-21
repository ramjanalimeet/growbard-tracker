import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CtaBand, PageHero, ReviewsSection, StatsSection } from "@/components/Sections";

export const metadata: Metadata = pageMetadata({
  title: "Google Reviews from Our Clients",
  description:
    "What local business owners say about working with Growbard.",
  path: "/reviews",
});

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
