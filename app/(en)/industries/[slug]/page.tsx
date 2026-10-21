import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqSection, PageHero, SectionHead } from "@/components/Sections";
import { getIndustry, INDUSTRIES } from "@/lib/industries";
import { LOCATIONS } from "@/lib/locations";
import { pageMetadata, serviceLd } from "@/lib/seo";
import { SERVICES, SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const i = getIndustry((await params).slug);
  if (!i) return {};
  return pageMetadata({
    title: `Digital Marketing for ${i.name} in Bangladesh`,
    description: `Grow your ${i.short.toLowerCase()} business with Local SEO, a website that converts, Google Ads and social media marketing from Growbard.`,
    path: `/industries/${i.slug}`,
  });
}

export default async function IndustryPage({ params }: Props) {
  const i = getIndustry((await params).slug);
  if (!i) notFound();
  const topCities = LOCATIONS.filter((l) =>
    ["dhaka", "chattogram", "sylhet", "gazipur", "khulna", "rajshahi"].includes(l.slug),
  );

  return (
    <>
      <JsonLd
        data={serviceLd({
          name: `Digital marketing for ${i.short.toLowerCase()}`,
          description: i.intro,
          path: `/industries/${i.slug}`,
        })}
      />
      <PageHero
        eyebrow={i.name}
        title={i.headline}
        lead={i.intro}
        crumbs={[{ label: "Industries", href: "/industries" }, { label: i.name }]}
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">The challenge</p>
            <h2>What makes marketing {i.short.toLowerCase()} different</h2>
            <p className="lead">
              We know the problems {i.short.toLowerCase()} face online, and we build every
              campaign around solving them.
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
          <div className="card">
            <h3>Common challenges</h3>
            <ul className="checklist">
              {i.challenges.map((c) => (
                <li key={c}>
                  <Icon name="check" size={16} /> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead eyebrow="How we help" title={`Our services for ${i.short.toLowerCase()}`} />
          <div className="tiles tiles--2">
            {SERVICES.map((s) => (
              <Link key={s.id} href={`/services/${s.id}`} className="card tile tile--wide">
                <span className="tile__icon">
                  <Icon name={s.icon} size={24} />
                </span>
                <strong>{s.title}</strong>
                <span className="tile__text">{i.services[s.id]}</span>
                <span className="tile__more">
                  About {s.title} <Icon name="arrow" size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Searches we target"
            title="Be there when customers search"
            lead={`Examples of searches people make when looking for ${i.short.toLowerCase()}.`}
          />
          <div className="chips">
            {i.searches.map((q) => (
              <span key={q} className="chip-link chip-link--static">
                <Icon name="sparkle" size={14} /> {q}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={i.faqs} title={`Marketing for ${i.short.toLowerCase()}: FAQs`} />

      <section className="section section--tint">
        <div className="container">
          <SectionHead eyebrow="Locations" title={`Helping ${i.short.toLowerCase()} across Bangladesh`} />
          <div className="chips">
            {topCities.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`} className="chip-link">
                <Icon name="pin" size={16} /> {l.name}
              </Link>
            ))}
            <Link href="/locations" className="chip-link chip-link--all">
              All locations <Icon name="arrow" size={14} />
            </Link>
          </div>
          <SectionHead eyebrow="More industries" title="Other industries we serve" />
          <div className="chips">
            {INDUSTRIES.filter((o) => o.slug !== i.slug).map((o) => (
              <Link key={o.slug} href={`/industries/${o.slug}`} className="chip-link">
                <Icon name={o.icon} size={16} /> {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
