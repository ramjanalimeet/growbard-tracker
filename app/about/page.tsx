import type { Metadata } from "next";
import {
  CtaBand,
  IndustriesSection,
  PageHero,
  ProcessSection,
  ReviewsSection,
  SectionHead,
  StatsSection,
  WhySection,
} from "@/components/Sections";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Growbard: Your Growth Partner",
  description:
    "Growbard is a Dhaka-based growth partner helping businesses across Bangladesh win more customers with Local SEO, websites, Google Ads and social media marketing.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Growbard"
        lead="A growth partner for businesses across Bangladesh, focused on calls, bookings and revenue."
      />
      <section className="section">
        <div className="container container--narrow about">
          <SectionHead eyebrow="Who we are" title="One team for everything that brings you customers" />
          <p className="lead">
            {SITE.name} is a growth partner based in Dhaka. We help businesses get found on Google,
            build websites that turn visitors into enquiries, run Google Ads that pay for
            themselves and grow on social media.
          </p>
          <p>
            Most business owners don&apos;t have time to manage four different agencies or learn
            how every platform works. We bring Local SEO, website development, Google Ads and
            social media marketing together under one team, with one plan and one monthly report,
            so you always know what&apos;s working and what you&apos;re paying for.
          </p>
          <p>
            We measure our work in the results that matter to you: phone calls, WhatsApp messages,
            bookings and sales.
          </p>
        </div>
      </section>
      <StatsSection />
      <WhySection />
      <ProcessSection />
      <IndustriesSection />
      <ReviewsSection more />
      <CtaBand />
    </>
  );
}
