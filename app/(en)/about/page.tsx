import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import {
  CtaBand,
  FaqSection,
  PageHero,
  ProcessSection,
  ReviewsSection,
  SectionHead,
  StatsSection,
  WhySection,
} from "@/components/Sections";
import { ABOUT_FAQS } from "@/lib/faqs";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { SERVICES, SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Us: Growth Partner for Clients in the USA, UK & Europe",
  description:
    "Growbard is a Dhaka-based growth partner that has helped clients in the USA, UK and Europe across many niches, and businesses all over Bangladesh.",
  path: "/about",
});

const MARKETS = [
  { name: "United States", text: "Local service businesses and online brands competing in busy US markets." },
  { name: "United Kingdom", text: "UK businesses, including clients reaching the British-Bangladeshi community." },
  { name: "Europe", text: "Companies across Europe growing their search visibility and leads." },
  { name: "Bangladesh", text: "Businesses in all 8 divisions, from Dhaka and Chattogram to Sylhet and Rangpur." },
];

const NICHES = [
  "Real estate",
  "Healthcare & dental clinics",
  "Interior design",
  "Solar & energy",
  "Education & study-abroad",
  "E-commerce & retail",
  "Automotive & car detailing",
  "Manufacturing & export",
  "Home services & repairs",
  "Restaurants & hospitality",
  "Professional services",
  "Beauty & wellness",
];

const aboutLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: absoluteUrl("/about"),
  mainEntity: {
    "@type": "ProfessionalService",
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
    areaServed: ["Bangladesh", "United States", "United Kingdom", "Europe"],
    knowsAbout: SERVICES.map((s) => s.title),
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutLd} />
      <PageHero
        eyebrow="About"
        title="About Growbard"
        lead="We are Growbard, a growth partner that has helped clients in the USA, UK and Europe across many niches, and businesses all over Bangladesh."
      />

      <section className="section">
        <div className="container split about-intro">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2>A growth partner with international experience</h2>
            <p className="lead">
              {SITE.name} is a growth partner based in Dhaka. We have helped clients in the United
              States, the United Kingdom and Europe grow online across many different niches, and we
              bring that experience to businesses across Bangladesh.
            </p>
            <p>
              Working with clients in competitive international markets taught us what actually
              moves the needle: being found on Google when customers are ready to buy, a website
              that turns visitors into enquiries, ads that are measured on leads rather than clicks,
              and social media that builds trust.
            </p>
            <p>
              Today we bring Local SEO, website development, Google Ads and social media marketing
              together under one team, with one plan and one monthly report, so you always know
              what&apos;s working and what you&apos;re paying for.
            </p>
            <div className="split__actions">
              <a href={SITE.whatsappHref} className="btn btn--whatsapp" target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={18} /> Chat on WhatsApp
              </a>
              <Link href="/pricing" className="btn btn--white">
                See pricing
              </Link>
            </div>
          </div>
          <div className="card about-markets">
            <h3>Where our clients are</h3>
            <ul>
              {MARKETS.map((m) => (
                <li key={m.name}>
                  <span className="tile__icon">
                    <Icon name="pin" size={20} />
                  </span>
                  <span>
                    <strong>{m.name}</strong>
                    <small>{m.text}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead
            eyebrow="Experience"
            title="Across many niches"
            lead="Every industry wins customers differently. We've learned the patterns across a wide range of businesses."
          />
          <div className="chips">
            {NICHES.map((n) => (
              <span key={n} className="chip-link chip-link--static">
                <Icon name="check" size={14} /> {n}
              </span>
            ))}
          </div>
          <div className="section__more">
            <Link href="/industries" className="btn btn--outline">
              Industries we serve <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="What we do" title="Four services, one goal: more customers" />
          <div className="tiles">
            {SERVICES.map((s) => (
              <Link key={s.id} href={`/services/${s.id}`} className="card tile">
                <span className="tile__icon">
                  <Icon name={s.icon} size={24} />
                </span>
                <strong>{s.title}</strong>
                <span className="tile__text">{s.blurb}</span>
                <span className="tile__more">
                  Learn more <Icon name="arrow" size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <WhySection />
      <ProcessSection />
      <ReviewsSection />
      <FaqSection items={ABOUT_FAQS} title="About Growbard: FAQs" />
      <CtaBand />
    </>
  );
}
