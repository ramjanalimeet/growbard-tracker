import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { CtaBand, PageHero, ProcessSection } from "@/components/Sections";
import { INDUSTRIES } from "@/lib/industries";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Industries: Digital Marketing for Your Business Type",
  description:
    "Digital marketing for real estate, dental clinics, interior design, solar, study-abroad, e-commerce, car detailing and manufacturers in Bangladesh.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Marketing built for your industry"
        lead="Every industry wins customers differently. We tailor Local SEO, websites, Google Ads and social media to how your customers search and buy."
      />
      <section className="section">
        <div className="container">
          <div className="industry-cards">
            {INDUSTRIES.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`} className="card industry-card">
                <span className="tile__icon">
                  <Icon name={i.icon} size={28} />
                </span>
                <h2>{i.name}</h2>
                <p>{i.intro}</p>
                <span className="tile__more">
                  Marketing for {i.short.toLowerCase()} <Icon name="arrow" size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ProcessSection />
      <CtaBand />
    </>
  );
}
