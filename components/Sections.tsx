import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { GoogleSummary, ReviewCard } from "@/components/GoogleReviews";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import { getGoogleData } from "@/lib/google";
import { INDUSTRIES } from "@/lib/industries";
import { LOCATIONS } from "@/lib/locations";
import { breadcrumbLd, faqLd, type Crumb } from "@/lib/seo";
import {
  FAQS,
  GOOGLE,
  PACKAGES,
  PRICING_COMPARE,
  PROCESS,
  SERVICES,
  SITE,
  STATS,
  WHY,
} from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs = [{ label: eyebrow }],
}: {
  eyebrow: string;
  title: string;
  lead: string;
  // Trail after "Home"; the last item is the current page.
  crumbs?: Crumb[];
}) {
  return (
    <section className="page-hero">
      <JsonLd data={breadcrumbLd(crumbs)} />
      <div className="hero__blob hero__blob--left" aria-hidden="true" />
      <div className="hero__dots hero__dots--right" aria-hidden="true" />
      <div className="container page-hero__inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {crumbs.map((c, i) => (
            <span key={c.label} className="crumbs__item">
              <span aria-hidden="true">/</span>
              {c.href && i < crumbs.length - 1 ? (
                <Link href={c.href}>{c.label}</Link>
              ) : (
                <span aria-current="page">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="section__head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

function MoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <div className="section__more">
      <Link href={href} className="btn btn--outline">
        {children} <Icon name="arrow" size={16} />
      </Link>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {STATS.map((s) => (
          <div key={s.label} className="stat">
            <span className="stat__value">{s.value}</span>
            <span className="stat__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ServicesSection({ more = false }: { more?: boolean }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="Our Services"
          title="Everything you need to grow online"
          lead="Four core services, one goal: more customers for your business."
        />
        <div className="services">
          {SERVICES.map((s) => (
            <article key={s.id} className="card service">
              <div className="service__icon">
                <Icon name={s.icon} size={28} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.blurb}</p>
              <ul className="checklist">
                {s.points.map((p) => (
                  <li key={p}>
                    <Icon name="check" size={16} /> {p}
                  </li>
                ))}
              </ul>
              <Link href={`/services/${s.id}`} className="service__link">
                Learn more <Icon name="arrow" size={16} />
              </Link>
            </article>
          ))}
        </div>
        {more && <MoreLink href="/services">View all services</MoreLink>}
      </div>
    </section>
  );
}

// Full-width alternating blocks used on the Services page.
export function ServiceDetails() {
  return (
    <section className="section">
      <div className="container service-details">
        {SERVICES.map((s, i) => (
          <article key={s.id} id={s.id} className={`service-detail${i % 2 ? " is-flipped" : ""}`}>
            <div className="service-detail__visual" aria-hidden="true">
              <span className="service-detail__num">0{i + 1}</span>
              <span className="service-detail__icon">
                <Icon name={s.icon} size={64} />
              </span>
            </div>
            <div>
              <p className="eyebrow">Service 0{i + 1}</p>
              <h2>{s.title}</h2>
              <p className="lead">{s.description}</p>
              <ul className="checklist checklist--2col">
                {s.points.map((p) => (
                  <li key={p}>
                    <Icon name="check" size={16} /> {p}
                  </li>
                ))}
              </ul>
              <div className="service-detail__actions">
                <a
                  href={SITE.whatsappHref}
                  className="btn btn--whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="whatsapp" size={18} /> Chat on WhatsApp
                </a>
                <Link href={`/services/${s.id}`} className="btn btn--outline">
                  {s.title} details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WhySection({ more = false }: { more?: boolean }) {
  return (
    <section className="section section--dark">
      <div className="container why">
        <div className="why__intro">
          <p className="eyebrow">Why Growbard</p>
          <h2>A marketing partner that actually moves the needle</h2>
          <p className="lead">
            Most agencies sell you reports. We deliver phone calls, bookings and revenue, and
            show you exactly where every taka went.
          </p>
          <Link href={more ? "/about" : "/contact"} className="btn btn--primary">
            {more ? "Why choose Growbard" : "Book a Free Strategy Call"}
          </Link>
        </div>
        <div className="why__grid">
          {WHY.map((w) => (
            <div key={w.title} className="why__item">
              <span className="why__check">
                <Icon name="check" size={18} />
              </span>
              <div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="section">
      <div className="container">
        <SectionHead eyebrow="How It Works" title="From first call to steady growth" />
        <ol className="process">
          {PROCESS.map((p) => (
            <li key={p.step} className="card process__step">
              <span className="process__num">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PricingSection({ more = false }: { more?: boolean }) {
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHead
          eyebrow="Pricing"
          title="Simple plans, serious results"
          lead="Clear monthly pricing in Taka. Custom plans available."
        />
        <div className="packages">
          {PACKAGES.map((p) => (
            <div key={p.name} className={`card package${p.featured ? " package--featured" : ""}`}>
              {p.featured && <span className="package__tag">Most Popular</span>}
              <h3>{p.name}</h3>
              <p className="package__desc">{p.description}</p>
              <p className="package__price">
                {p.price}
                <span>{p.period}</span>
              </p>
              <ul className="checklist">
                {p.features.map((f) => (
                  <li key={f}>
                    <Icon name="check" size={16} /> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`btn btn--block ${p.featured ? "btn--primary" : "btn--outline"}`}
              >
                Choose {p.name}
              </Link>
            </div>
          ))}
        </div>
        {more && <MoreLink href="/pricing">Compare all plans</MoreLink>}
      </div>
    </section>
  );
}

export function PricingCompare() {
  return (
    <section className="section">
      <div className="container container--narrow">
        <SectionHead eyebrow="Compare Plans" title="What's included in each plan" />
        <div className="compare-wrap">
          <table className="compare">
            <thead>
              <tr>
                <th scope="col">Feature</th>
                {PACKAGES.map((p) => (
                  <th key={p.name} scope="col" className={p.featured ? "is-featured" : undefined}>
                    {p.name}
                    <span>{p.price}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PRICING_COMPARE.map((row) => (
                <tr key={row.feature}>
                  <th scope="row">{row.feature}</th>
                  {row.plans.map((has, i) => (
                    <td key={PACKAGES[i].name} className={PACKAGES[i].featured ? "is-featured" : undefined}>
                      {has ? (
                        <span className="compare__yes" aria-label="Included">
                          <Icon name="check" size={18} />
                        </span>
                      ) : (
                        <span className="compare__no" aria-label="Not included">
                          –
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export async function ReviewsSection({ more = false }: { more?: boolean }) {
  const google = await getGoogleData();
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="Google Reviews"
          title="Rated 5.0 by our clients on Google"
          lead="Straight from our Google Business Profile."
        />
        <div className={`g-reviews${google.reviews.length ? "" : " g-reviews--solo"}`}>
          <GoogleSummary data={google} />
          {google.reviews.length > 0 && (
            <div className="g-reviews__list">
              {google.reviews.map((r) => (
                <ReviewCard key={r.author + r.text} review={r} fallbackUrl={google.profileUrl} />
              ))}
            </div>
          )}
        </div>
        {more && <MoreLink href="/reviews">Read all reviews</MoreLink>}
      </div>
    </section>
  );
}

export function MapSection() {
  return (
    <section className="section">
      <div className="container map">
        <div className="map__info">
          <p className="eyebrow">Find Us</p>
          <h2>Serving {SITE.areaServed}</h2>
          <p className="lead">
            Growbard is based in Dhaka and works with businesses across the city and beyond, in
            person or online.
          </p>
          <a href={GOOGLE.profileUrl} className="btn btn--white" target="_blank" rel="noopener noreferrer">
            <Icon name="pin" size={18} /> Open in Google Maps
          </a>
        </div>
        <div className="map__frame">
          <iframe
            src={GOOGLE.mapEmbedUrl}
            title={`${GOOGLE.businessName} on Google Maps`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div>
          <h2>Ready to grow your business?</h2>
          <p>Get a free audit of your Google presence, website and ads, with no strings attached.</p>
        </div>
        <div className="cta-band__actions">
          <Link href="/contact" className="btn btn--light btn--lg">
            Get My Free Audit
          </Link>
          <a href={SITE.phoneHref} className="btn btn--outline-light btn--lg">
            <Icon name="phone" size={18} /> Call Us
          </a>
          <a
            href={SITE.whatsappHref}
            className="btn btn--whatsapp btn--lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={20} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function FaqSection({
  items = FAQS,
  title = "Questions? We've got answers",
}: {
  items?: { q: string; a: string }[];
  title?: string;
}) {
  return (
    <section className="section">
      <JsonLd data={faqLd(items)} />
      <div className="container container--narrow">
        <SectionHead eyebrow="FAQ" title={title} />
        <div className="faq">
          {items.map((f, i) => (
            <details key={f.q} className="faq__item" open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section section--tint">
      <div className="container contact">
        <div className="contact__info">
          <p className="eyebrow">Contact Us</p>
          <h2>Let&apos;s build your growth plan</h2>
          <p className="lead">
            Tell us a little about your business and we&apos;ll get back to you within one
            business day with ideas you can use, whether you hire us or not.
          </p>
          <ul className="contact__list">
            <li>
              <span className="contact__icon">
                <Icon name="phone" size={20} />
              </span>
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </li>
            <li>
              <span className="contact__icon contact__icon--whatsapp">
                <Icon name="whatsapp" size={22} />
              </span>
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp: {SITE.whatsapp}
              </a>
            </li>
            <li>
              <span className="contact__icon">
                <Icon name="mail" size={20} />
              </span>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <span className="contact__icon">
                <Icon name="clock" size={20} />
              </span>
              {SITE.hours}
            </li>
            <li>
              <span className="contact__icon">
                <Icon name="pin" size={20} />
              </span>
              {SITE.areaServed}
            </li>
          </ul>
        </div>
        <div className="card contact__form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection({ title = "Industries we serve" }: { title?: string }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow="Industries"
          title={title}
          lead="Marketing built around how customers in your industry search, compare and buy."
        />
        <div className="tiles">
          {INDUSTRIES.map((i) => (
            <Link key={i.slug} href={`/industries/${i.slug}`} className="card tile">
              <span className="tile__icon">
                <Icon name={i.icon} size={26} />
              </span>
              <strong>{i.name}</strong>
              <span className="tile__more">
                Learn more <Icon name="arrow" size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Teaser of the biggest cities with a link to all locations.
export function LocationsSection() {
  const top = LOCATIONS.filter((l) =>
    ["dhaka", "chattogram", "sylhet", "gazipur", "narayanganj", "khulna", "rajshahi", "cumilla", "mymensingh", "bogura", "rangpur", "coxs-bazar"].includes(l.slug),
  );
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHead
          eyebrow="Locations"
          title="Serving businesses across Bangladesh"
          lead={`From Dhaka to Panchagarh, we help businesses in ${LOCATIONS.length} districts grow online.`}
        />
        <div className="chips">
          {top.map((l) => (
            <Link key={l.slug} href={`/locations/${l.slug}`} className="chip-link">
              <Icon name="pin" size={16} /> {l.name}
            </Link>
          ))}
        </div>
        <MoreLink href="/locations">View all {LOCATIONS.length} locations</MoreLink>
      </div>
    </section>
  );
}
