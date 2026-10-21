import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import {
  FAQS,
  NAV,
  PACKAGES,
  PROCESS,
  SERVICES,
  SITE,
  STATS,
  TESTIMONIALS,
  WHY,
} from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  email: SITE.email,
  telephone: SITE.phone,
  description: SITE.tagline,
  makesOffer: SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.blurb },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__copy">
              <p className="eyebrow">Local SEO · Websites · Google Ads · Social Media</p>
              <h1>
                Grow your local business with <span className="accent">marketing that works</span>
              </h1>
              <p className="lead">
                Growbard helps local businesses get found on Google, win more calls and turn
                clicks into loyal customers, with one team handling your SEO, website, ads and
                social media.
              </p>
              <div className="hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  Get a Free Quote <Icon name="arrow" size={18} />
                </a>
                <a href="#services" className="btn btn--ghost btn--lg">
                  Explore Services
                </a>
              </div>
              <ul className="hero__trust">
                <li>
                  <Icon name="check" size={18} /> No long-term contracts
                </li>
                <li>
                  <Icon name="check" size={18} /> Free strategy call
                </li>
                <li>
                  <Icon name="check" size={18} /> Results in 30–60 days
                </li>
              </ul>
            </div>

            <div className="hero__visual" aria-hidden="true">
              <div className="hero__badge">
                <Image src="/logo.png" alt="" width={220} height={220} priority />
              </div>
              <div className="float-card float-card--a">
                <span className="float-card__value">+212%</span>
                <span className="float-card__label">Website leads</span>
              </div>
              <div className="float-card float-card--b">
                <span className="float-card__value">#1</span>
                <span className="float-card__label">Google Map Pack</span>
              </div>
              <div className="float-card float-card--c">
                <span className="stars">★★★★★</span>
                <span className="float-card__label">4.9 client rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
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

        {/* Services */}
        <section id="services" className="section">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow">Our Services</p>
              <h2>Everything you need to grow online</h2>
              <p className="lead">
                Four core services, one goal: more customers for your business.
              </p>
            </div>
            <div className="services">
              {SERVICES.map((s) => (
                <article key={s.id} id={s.id} className="card service">
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
                  <a href="#contact" className="service__link">
                    Get started <Icon name="arrow" size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section id="why" className="section section--dark">
          <div className="container why">
            <div className="why__intro">
              <p className="eyebrow">Why Growbard</p>
              <h2>A marketing partner that actually moves the needle</h2>
              <p className="lead">
                Most agencies sell you reports. We deliver phone calls, bookings and revenue,
                and show you exactly where every dollar went.
              </p>
              <a href="#contact" className="btn btn--primary">
                Book a Free Strategy Call
              </a>
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

        {/* Process */}
        <section id="process" className="section">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow">How It Works</p>
              <h2>From first call to steady growth</h2>
            </div>
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

        {/* Packages */}
        <section id="packages" className="section section--tint">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow">Packages</p>
              <h2>Simple plans, serious results</h2>
              <p className="lead">Month-to-month. Cancel any time. Custom plans available.</p>
            </div>
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
                  <a
                    href="#contact"
                    className={`btn btn--block ${p.featured ? "btn--primary" : "btn--outline"}`}
                  >
                    Choose {p.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="section">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow">Client Reviews</p>
              <h2>Local businesses love working with us</h2>
            </div>
            <div className="reviews">
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="card review">
                  <span className="stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </span>
                  <blockquote>“{t.quote}”</blockquote>
                  <figcaption>
                    <span className="review__avatar">{t.name[0]}</span>
                    <span>
                      <strong>{t.name}</strong>
                      <small>{t.role}</small>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="cta-band">
          <div className="container cta-band__inner">
            <div>
              <h2>Ready to grow your business?</h2>
              <p>Get a free audit of your Google presence, website and ads, with no strings attached.</p>
            </div>
            <div className="cta-band__actions">
              <a href="#contact" className="btn btn--light btn--lg">
                Get My Free Audit
              </a>
              <a href={SITE.phoneHref} className="btn btn--outline-light btn--lg">
                <Icon name="phone" size={18} /> Call Us
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <div className="container container--narrow">
            <div className="section__head">
              <p className="eyebrow">FAQ</p>
              <h2>Questions? We&apos;ve got answers</h2>
            </div>
            <div className="faq">
              {FAQS.map((f, i) => (
                <details key={f.q} className="faq__item" open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section section--tint">
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
              </ul>
            </div>
            <div className="card contact__form">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__grid">
          <div>
            <a href="#top" className="brand brand--light">
              <Image src="/logo.png" alt="" width={40} height={40} className="brand__logo" />
              <span className="brand__name">{SITE.name}</span>
            </a>
            <p className="footer__tag">{SITE.tagline}.</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              {NAV.filter((n) => n.href !== "#services").map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li>
                <a href={SITE.phoneHref}>{SITE.phone}</a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              {SITE.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container footer__bottom">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </footer>
    </>
  );
}
