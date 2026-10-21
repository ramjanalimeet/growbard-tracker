import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import { CtaBand, FaqSection, PageHero } from "@/components/Sections";
import { BN_SERVICE_LIST, BN_SERVICES_FAQS } from "@/lib/bn";
import { pageMetadata, serviceLd } from "@/lib/seo";
import { PACKAGES, SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "সার্ভিস: লোকাল SEO, ওয়েবসাইট, গুগল অ্যাডস ও সোশ্যাল মিডিয়া",
  description:
    "বাংলাদেশের ব্যবসার জন্য লোকাল SEO, ওয়েবসাইট ডেভেলপমেন্ট, গুগল অ্যাডস ও সোশ্যাল মিডিয়া মার্কেটিং সার্ভিস, এক টিমে।",
  path: "/bn/services",
});

export default function BanglaServices() {
  return (
    <>
      <JsonLd
        data={BN_SERVICE_LIST.map((s) => serviceLd({ name: s.title, description: s.description, path: "/bn/services" }))}
      />
      <PageHero
        eyebrow="সার্ভিস"
        title="আরও গ্রাহক পেতে আপনার গ্রোথ পার্টনার"
        lead="লোকাল SEO, ওয়েবসাইট ডেভেলপমেন্ট, গুগল অ্যাডস ও সোশ্যাল মিডিয়া মার্কেটিং, এক টিমের পরিকল্পনা ও ব্যবস্থাপনায়।"
        home={{ label: "হোম", href: "/bn" }}
      />
      <section className="section">
        <div className="container service-details">
          {BN_SERVICE_LIST.map((s, i) => {
            const plans = PACKAGES.filter((p) => s.plans.includes(p.name)).map((p) => p.name);
            return (
              <article key={s.id} id={s.id} className={`service-detail${i % 2 ? " is-flipped" : ""}`}>
                <div className="service-detail__visual" aria-hidden="true">
                  <span className="service-detail__num">0{i + 1}</span>
                  <span className="service-detail__icon">
                    <Icon name={s.icon} size={64} />
                  </span>
                </div>
                <div>
                  <h2>{s.title}</h2>
                  <p className="lead">{s.description}</p>
                  <ul className="checklist checklist--2col">
                    {s.points.map((p) => (
                      <li key={p}>
                        <Icon name="check" size={16} /> {p}
                      </li>
                    ))}
                  </ul>
                  <p className="muted">
                    যে প্ল্যানে আছে: <strong>{plans.join(", ")}</strong>.{" "}
                    <Link href="/bn/pricing">প্রাইসিং দেখুন</Link>
                  </p>
                  <div className="service-detail__actions">
                    <a href={SITE.whatsappHref} className="btn btn--whatsapp" target="_blank" rel="noopener noreferrer">
                      <Icon name="whatsapp" size={18} /> হোয়াটসঅ্যাপে চ্যাট করুন
                    </a>
                    <Link href={`/services/${s.id}`} className="btn btn--outline" hrefLang="en">
                      English-এ পড়ুন
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <FaqSection items={BN_SERVICES_FAQS} title="সার্ভিস নিয়ে প্রশ্নোত্তর" eyebrow="প্রশ্নোত্তর" />
      <CtaBand lang="bn" />
    </>
  );
}
