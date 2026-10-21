import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { CtaBand, FaqSection, PageHero } from "@/components/Sections";
import { BN_PLANS, BN_PRICING_FAQS } from "@/lib/bn";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "প্রাইসিং: লোকাল SEO ও ডিজিটাল মার্কেটিং প্ল্যান (টাকায়)",
  description:
    "Growbard-এর মাসিক প্ল্যান: Starter ৳১০,৫০০, Growth ৳২৪,৫০০ ও Dominate ৳৩৪,৫০০। লোকাল SEO, ওয়েবসাইট, গুগল অ্যাডস ও সোশ্যাল মিডিয়া।",
  path: "/bn/pricing",
});

export default function BanglaPricing() {
  return (
    <>
      <PageHero
        eyebrow="প্রাইসিং"
        title="সহজ ও স্বচ্ছ প্রাইসিং"
        lead="আপনার লক্ষ্য অনুযায়ী প্ল্যান বেছে নিন। প্রতিটি প্ল্যানে লোকাল SEO ও মাসিক রিপোর্ট আছে।"
        home={{ label: "হোম", href: "/bn" }}
      />
      <section className="section section--tint">
        <div className="container">
          <div className="packages">
            {BN_PLANS.map((p) => (
              <div key={p.name} className={`card package${p.featured ? " package--featured" : ""}`}>
                {p.featured && <span className="package__tag">সবচেয়ে জনপ্রিয়</span>}
                <h2 className="package__name">{p.name}</h2>
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
      <FaqSection items={BN_PRICING_FAQS} title="প্রাইসিং নিয়ে প্রশ্নোত্তর" eyebrow="প্রশ্নোত্তর" />
      <CtaBand lang="bn" />
    </>
  );
}
