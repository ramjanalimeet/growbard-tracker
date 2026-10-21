import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqSection, SectionHead } from "@/components/Sections";
import { BN_HOME_FAQS, BN_PLANS, BN_PROCESS, BN_SERVICE_LIST, BN_WHY } from "@/lib/bn";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "ডিজিটাল মার্কেটিং এজেন্সি: লোকাল SEO, ওয়েবসাইট ও গুগল অ্যাডস",
  description:
    "Growbard বাংলাদেশের ব্যবসার গ্রোথ পার্টনার। লোকাল SEO, ওয়েবসাইট ডেভেলপমেন্ট, গুগল অ্যাডস ও সোশ্যাল মিডিয়া মার্কেটিং দিয়ে আরও কল ও গ্রাহক পান।",
  path: "/bn",
});

export default function BanglaHome() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: SITE.name,
          url: `${SITE.url}/bn`,
          telephone: SITE.phone,
          email: SITE.email,
          inLanguage: "bn",
          areaServed: "Bangladesh",
        }}
      />
      <section className="page-hero bn-hero">
        <div className="hero__blob hero__blob--left" aria-hidden="true" />
        <div className="container page-hero__inner">
          <p className="hero__pill">
            <Icon name="rocket" size={14} /> লোকাল SEO · ওয়েবসাইট · গুগল অ্যাডস · সোশ্যাল মিডিয়া
          </p>
          <h1>
            ফলাফল-কেন্দ্রিক <span className="accent">গ্রোথ পার্টনারের</span> সাথে আপনার ব্যবসা বাড়ান
          </h1>
          <p className="lead">
            লোকাল SEO, ওয়েবসাইট ডেভেলপমেন্ট, গুগল অ্যাডস ও সোশ্যাল মিডিয়া মার্কেটিং, যা আনে আরও কল,
            বুকিং ও গ্রাহক, সবকিছু এক টিমে।
          </p>
          <div className="hero__actions bn-hero__actions">
            <a href={SITE.whatsappHref} className="btn btn--whatsapp btn--xl" target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={20} /> হোয়াটসঅ্যাপে চ্যাট করুন
            </a>
            <a href={SITE.phoneHref} className="btn btn--white btn--xl">
              <Icon name="phone" size={18} /> কল করুন {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="আমাদের সার্ভিস"
            title="অনলাইনে বড় হতে যা যা দরকার"
            lead="চারটি মূল সার্ভিস, একটাই লক্ষ্য: আপনার ব্যবসার জন্য আরও গ্রাহক।"
          />
          <div className="tiles">
            {BN_SERVICE_LIST.map((s) => (
              <Link key={s.id} href={`/bn/services#${s.id}`} className="card tile">
                <span className="tile__icon">
                  <Icon name={s.icon} size={24} />
                </span>
                <strong>{s.title}</strong>
                <span className="tile__text">{s.blurb}</span>
                <span className="tile__more">
                  বিস্তারিত <Icon name="arrow" size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container why">
          <div className="why__intro">
            <p className="eyebrow">কেন Growbard</p>
            <h2>এমন একজন মার্কেটিং পার্টনার, যে সত্যিই ফলাফল আনে</h2>
            <p className="lead">
              অনেক এজেন্সি শুধু রিপোর্ট দেয়। আমরা দেই কল, বুকিং ও বিক্রি, এবং দেখাই প্রতিটি টাকা কোথায়
              খরচ হলো।
            </p>
            <Link href="/bn/about" className="btn btn--primary">
              আমাদের সম্পর্কে জানুন
            </Link>
          </div>
          <div className="why__grid">
            {BN_WHY.map((w) => (
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

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="কীভাবে কাজ করি" title="প্রথম কল থেকে নিয়মিত গ্রোথ" />
          <ol className="process">
            {BN_PROCESS.map((p) => (
              <li key={p.step} className="card process__step">
                <span className="process__num">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead eyebrow="প্রাইসিং" title="সহজ প্ল্যান, দারুণ ফলাফল" lead="টাকায় পরিষ্কার মাসিক দাম। কাস্টম প্ল্যানও আছে।" />
          <div className="packages">
            {BN_PLANS.map((p) => (
              <div key={p.name} className={`card package${p.featured ? " package--featured" : ""}`}>
                {p.featured && <span className="package__tag">সবচেয়ে জনপ্রিয়</span>}
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
                <Link href="/bn/contact" className={`btn btn--block ${p.featured ? "btn--primary" : "btn--outline"}`}>
                  {p.name} বেছে নিন
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={BN_HOME_FAQS} title="সাধারণ প্রশ্নোত্তর" eyebrow="প্রশ্নোত্তর" />
      <CtaBand lang="bn" />
    </>
  );
}
