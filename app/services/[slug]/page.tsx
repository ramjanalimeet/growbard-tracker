import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import {
  CtaBand,
  FaqSection,
  PageHero,
  ProcessSection,
  SectionHead,
} from "@/components/Sections";
import { INDUSTRIES } from "@/lib/industries";
import { LOCATIONS } from "@/lib/locations";
import { pageMetadata, serviceLd } from "@/lib/seo";
import { PACKAGES, SERVICES, SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

const getService = (slug: string) => SERVICES.find((s) => s.id === slug);

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return pageMetadata({
    title: `${s.title} Services in Bangladesh`,
    description: `${s.blurb} ${s.title} by Growbard for businesses across Bangladesh.`,
    path: `/services/${s.id}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const plans = PACKAGES.filter((p) => s.plans.includes(p.name));

  return (
    <>
      <JsonLd data={serviceLd({ name: s.title, description: s.description, path: `/services/${s.id}` })} />
      <PageHero
        eyebrow={s.title}
        title={`${s.title} services in Bangladesh`}
        lead={s.blurb}
        crumbs={[{ label: "Services", href: "/services" }, { label: s.title }]}
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">What you get</p>
            <h2>{s.title} that brings real customers</h2>
            <p className="lead">{s.description}</p>
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
            <h3>Included in our {s.title} service</h3>
            <ul className="checklist">
              {s.points.map((p) => (
                <li key={p}>
                  <Icon name="check" size={16} /> {p}
                </li>
              ))}
            </ul>
            <p className="muted">
              Included in the{" "}
              {plans.map((p, i) => (
                <span key={p.name}>
                  {i > 0 && (i === plans.length - 1 ? " and " : ", ")}
                  <strong>
                    {p.name} ({p.price}
                    {p.period})
                  </strong>
                </span>
              ))}{" "}
              plan{plans.length > 1 ? "s" : ""}. <Link href="/pricing">Compare plans</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead eyebrow="Industries" title={`${s.title} for your industry`} />
          <div className="tiles">
            {INDUSTRIES.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`} className="card tile">
                <span className="tile__icon">
                  <Icon name={i.icon} size={24} />
                </span>
                <strong>
                  {s.title} for {i.short.toLowerCase()}
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <FaqSection items={s.faqs} title={`${s.title} questions`} />

      <section className="section section--tint">
        <div className="container">
          <SectionHead eyebrow="Locations" title={`${s.title} across Bangladesh`} />
          <div className="chips">
            {LOCATIONS.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`} className="chip-link">
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Other services" title="Grow faster with the full toolkit" />
          <div className="tiles tiles--3">
            {SERVICES.filter((o) => o.id !== s.id).map((o) => (
              <Link key={o.id} href={`/services/${o.id}`} className="card tile">
                <span className="tile__icon">
                  <Icon name={o.icon} size={24} />
                </span>
                <strong>{o.title}</strong>
                <span className="tile__text">{o.blurb}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
