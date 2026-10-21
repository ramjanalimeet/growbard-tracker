import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { CtaBand, FaqSection, PageHero, SectionHead } from "@/components/Sections";
import { BN_ABOUT_FAQS, BN_WHY } from "@/lib/bn";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "আমাদের সম্পর্কে: আন্তর্জাতিক অভিজ্ঞতার গ্রোথ পার্টনার",
  description:
    "Growbard ঢাকা-ভিত্তিক গ্রোথ পার্টনার, যা যুক্তরাষ্ট্র, যুক্তরাজ্য ও ইউরোপের বিভিন্ন খাতের ক্লায়েন্ট এবং সারা বাংলাদেশের ব্যবসাকে সাহায্য করেছে।",
  path: "/bn/about",
});

const MARKETS = [
  { name: "যুক্তরাষ্ট্র", text: "প্রতিযোগিতামূলক মার্কিন বাজারের লোকাল সার্ভিস ও অনলাইন ব্র্যান্ড।" },
  { name: "যুক্তরাজ্য", text: "যুক্তরাজ্যের ব্যবসা, ব্রিটিশ-বাংলাদেশি কমিউনিটির কাছে পৌঁছানোসহ।" },
  { name: "ইউরোপ", text: "ইউরোপের বিভিন্ন কোম্পানির সার্চ ভিজিবিলিটি ও লিড বাড়ানো।" },
  { name: "বাংলাদেশ", text: "ঢাকা, চট্টগ্রাম থেকে সিলেট, রংপুর, আটটি বিভাগের ব্যবসা।" },
];

const NICHES = [
  "রিয়েল এস্টেট",
  "হেলথকেয়ার ও ডেন্টাল ক্লিনিক",
  "ইন্টেরিয়র ডিজাইন",
  "সোলার ও এনার্জি",
  "শিক্ষা ও স্টাডি অ্যাব্রড",
  "ই-কমার্স ও রিটেইল",
  "অটোমোটিভ ও কার ডিটেইলিং",
  "ম্যানুফ্যাকচারিং ও এক্সপোর্ট",
  "রেস্টুরেন্ট ও হসপিটালিটি",
  "প্রফেশনাল সার্ভিস",
];

export default function BanglaAbout() {
  return (
    <>
      <PageHero
        eyebrow="আমাদের সম্পর্কে"
        title="Growbard সম্পর্কে"
        lead="আমরা Growbard, একটি গ্রোথ পার্টনার, যা যুক্তরাষ্ট্র, যুক্তরাজ্য ও ইউরোপের বিভিন্ন খাতের ক্লায়েন্ট এবং সারা বাংলাদেশের ব্যবসাকে সাহায্য করেছে।"
        home={{ label: "হোম", href: "/bn" }}
      />
      <section className="section">
        <div className="container split about-intro">
          <div>
            <p className="eyebrow">আমরা কারা</p>
            <h2>আন্তর্জাতিক অভিজ্ঞতাসম্পন্ন গ্রোথ পার্টনার</h2>
            <p className="lead">
              {SITE.name} ঢাকা-ভিত্তিক একটি গ্রোথ পার্টনার। আমরা যুক্তরাষ্ট্র, যুক্তরাজ্য ও ইউরোপের
              ক্লায়েন্টদের বিভিন্ন খাতে অনলাইনে বড় হতে সাহায্য করেছি, এবং সেই অভিজ্ঞতা এখন বাংলাদেশের
              ব্যবসার জন্য কাজে লাগাচ্ছি।
            </p>
            <p>
              প্রতিযোগিতামূলক আন্তর্জাতিক বাজারে কাজ করে আমরা শিখেছি কোনটা সত্যিই ফলাফল আনে: গ্রাহক যখন
              কিনতে প্রস্তুত তখন গুগলে খুঁজে পাওয়া, এমন ওয়েবসাইট যা ভিজিটরকে গ্রাহক বানায়, ক্লিক নয় বরং
              লিড দিয়ে মাপা বিজ্ঞাপন, আর আস্থা তৈরি করা সোশ্যাল মিডিয়া।
            </p>
            <div className="split__actions">
              <a href={SITE.whatsappHref} className="btn btn--whatsapp" target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={18} /> হোয়াটসঅ্যাপে চ্যাট করুন
              </a>
              <Link href="/bn/pricing" className="btn btn--white">
                প্রাইসিং দেখুন
              </Link>
            </div>
          </div>
          <div className="card about-markets">
            <h3>আমাদের ক্লায়েন্টরা কোথায়</h3>
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
          <SectionHead eyebrow="অভিজ্ঞতা" title="বিভিন্ন খাতে কাজের অভিজ্ঞতা" />
          <div className="chips">
            {NICHES.map((n) => (
              <span key={n} className="chip-link chip-link--static">
                <Icon name="check" size={14} /> {n}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="কেন Growbard" title="যেভাবে আমরা কাজ করি" />
          <div className="tiles tiles--3">
            {BN_WHY.map((w) => (
              <div key={w.title} className="card tile">
                <span className="tile__icon">
                  <Icon name="check" size={22} />
                </span>
                <strong>{w.title}</strong>
                <span className="tile__text">{w.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FaqSection items={BN_ABOUT_FAQS} title="Growbard নিয়ে প্রশ্নোত্তর" eyebrow="প্রশ্নোত্তর" />
      <CtaBand lang="bn" />
    </>
  );
}
