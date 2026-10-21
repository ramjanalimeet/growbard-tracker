import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqSection, PageHero, SectionHead } from "@/components/Sections";
import { INDUSTRIES } from "@/lib/industries";
import { getLocation, locationLabel, LOCATIONS, nearbyLocations } from "@/lib/locations";
import { pageMetadata, serviceLd } from "@/lib/seo";
import { PACKAGES, SERVICES, SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const l = getLocation((await params).slug);
  if (!l) return {};
  return pageMetadata({
    title: `Local SEO & Digital Marketing Agency in ${l.name}`,
    description: `Local SEO, websites, Google Ads and social media marketing for businesses in ${locationLabel(l)}. Plans from ${PACKAGES[0].price}/month.`,
    path: `/locations/${l.slug}`,
  });
}

export default async function LocationPage({ params }: Props) {
  const l = getLocation((await params).slug);
  if (!l) notFound();
  const nearby = nearbyLocations(l);
  const faqs = [
    {
      q: `Do you work with businesses in ${l.name}?`,
      a: `Yes. We work with businesses across ${l.name} and the rest of ${l.division} Division. Most of our work is done online, and we stay in touch by phone, WhatsApp and video calls.`,
    },
    {
      q: `How much does Local SEO cost in ${l.name}?`,
      a: `Our Starter plan, which covers Local SEO and Google Business Profile optimization, is ${PACKAGES[0].price} per month. Growth (${PACKAGES[1].price}) adds a website and Google Ads, and Dominate (${PACKAGES[2].price}) adds social media marketing.`,
    },
    {
      q: `How long does it take to rank on Google Maps in ${l.name}?`,
      a: `It depends on how many businesses compete in your category in ${l.name}. Most businesses see movement within 30–60 days and steady results within 3–6 months.`,
    },
    {
      q: `Can you help a business in ${l.name} reach customers in other districts?`,
      a: `Yes. We can create pages and campaigns for every area you serve, so customers in ${l.name} and beyond can find you.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={serviceLd({
          name: `Local SEO & digital marketing in ${l.name}`,
          description: `Local SEO, website development, Google Ads and social media marketing for businesses in ${l.name}, Bangladesh.`,
          path: `/locations/${l.slug}`,
          areaServed: `${l.name}, Bangladesh`,
        })}
      />
      <PageHero
        eyebrow={l.name}
        title={`Local SEO & Digital Marketing in ${locationLabel(l)}`}
        lead={`Growbard helps businesses in ${l.name} get found on Google, win more calls and grow with a website, Google Ads and social media that work together.`}
        crumbs={[{ label: "Locations", href: "/locations" }, { label: l.name }]}
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">{l.division} Division</p>
            <h2>Grow your business in {l.name}</h2>
            <p className="lead">{l.note}</p>
            <p>
              When people in {l.name} need a product or service, they search on Google and pick from
              the businesses they see first. We make sure that&apos;s you: on Google Maps, in search
              results, in ads and on social media, with a website that turns visitors into
              enquiries.
            </p>
            <div className="split__actions">
              <a href={SITE.whatsappHref} className="btn btn--whatsapp" target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={18} /> Chat on WhatsApp
              </a>
              <a href={SITE.phoneHref} className="btn btn--white">
                <Icon name="phone" size={16} /> Call {SITE.phone}
              </a>
            </div>
          </div>
          <div className="card">
            <h3>Why businesses in {l.name} choose Growbard</h3>
            <ul className="checklist">
              <li>
                <Icon name="check" size={16} /> Google Maps and local search rankings for {l.name}
              </li>
              <li>
                <Icon name="check" size={16} /> One team for SEO, website, ads and social media
              </li>
              <li>
                <Icon name="check" size={16} /> Clear monthly pricing in Taka, from {PACKAGES[0].price}
              </li>
              <li>
                <Icon name="check" size={16} /> Monthly reports on calls, leads and rankings
              </li>
              <li>
                <Icon name="check" size={16} /> Fast support on WhatsApp
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead eyebrow="Services" title={`Our services in ${l.name}`} />
          <div className="tiles tiles--4">
            {SERVICES.map((s) => (
              <Link key={s.id} href={`/services/${s.id}`} className="card tile">
                <span className="tile__icon">
                  <Icon name={s.icon} size={24} />
                </span>
                <strong>
                  {s.title} in {l.name}
                </strong>
                <span className="tile__text">{s.blurb}</span>
                <span className="tile__more">
                  Learn more <Icon name="arrow" size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Industries" title={`Industries we help in ${l.name}`} />
          <div className="chips">
            {INDUSTRIES.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`} className="chip-link">
                <Icon name={i.icon} size={16} /> {i.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={faqs} title={`Digital marketing in ${l.name}: FAQs`} />

      {nearby.length > 0 && (
        <section className="section section--tint">
          <div className="container">
            <SectionHead eyebrow="Nearby" title={`Also serving ${l.division} Division`} />
            <div className="chips">
              {nearby.map((n) => (
                <Link key={n.slug} href={`/locations/${n.slug}`} className="chip-link">
                  <Icon name="pin" size={16} /> {n.name}
                </Link>
              ))}
              <Link href="/locations" className="chip-link chip-link--all">
                All locations <Icon name="arrow" size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  );
}
