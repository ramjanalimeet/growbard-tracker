import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { CtaBand, FaqSection, PageHero, SectionHead } from "@/components/Sections";
import { LOCATIONS_FAQS } from "@/lib/faqs";
import { divisionId, DIVISIONS, LOCATIONS } from "@/lib/locations";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Locations: Digital Marketing Across Bangladesh",
  description: `Local SEO, websites, Google Ads and social media marketing for businesses in ${LOCATIONS.length} districts across Bangladesh, from Dhaka and Chattogram to Sylhet, Khulna and Rajshahi.`,
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Serving businesses across Bangladesh"
        lead={`We help businesses in ${LOCATIONS.length} districts get found on Google and win more customers. Find your area below.`}
      />
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Areas we serve"
            title="Choose your district"
            lead="Every district below has its own page with services, industries and answers for local businesses."
          />
          <div className="divisions">
            {DIVISIONS.map((d) => (
              <div key={d} id={divisionId(d)} className="card division">
                <h3>{d} Division</h3>
                <ul>
                  {LOCATIONS.filter((l) => l.division === d).map((l) => (
                    <li key={l.slug}>
                      <Link href={`/locations/${l.slug}`}>
                        <Icon name="pin" size={15} /> {l.name}
                        {l.alt && <small> ({l.alt})</small>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={LOCATIONS_FAQS} title="Questions about where we work" />
      <CtaBand />
    </>
  );
}
