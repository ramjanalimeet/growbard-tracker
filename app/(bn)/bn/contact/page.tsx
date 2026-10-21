import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { FaqSection, PageHero } from "@/components/Sections";
import { BN_CONTACT_FAQS } from "@/lib/bn";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "যোগাযোগ: ফ্রি গ্রোথ প্ল্যানের জন্য কল বা হোয়াটসঅ্যাপ করুন",
  description: "Growbard-এর সাথে ফোন, হোয়াটসঅ্যাপ বা ইমেইলে যোগাযোগ করুন, ফ্রি স্ট্র্যাটেজি কল ও মার্কেটিং অডিটের জন্য।",
  path: "/bn/contact",
});

export default function BanglaContact() {
  return (
    <>
      <PageHero
        eyebrow="যোগাযোগ"
        title="চলুন আপনার ব্যবসা বাড়ানো নিয়ে কথা বলি"
        lead="কল করুন, হোয়াটসঅ্যাপে মেসেজ দিন বা নিচের ফর্মটি পূরণ করুন। এক কর্মদিবসের মধ্যে উত্তর দেই।"
        home={{ label: "হোম", href: "/bn" }}
      />
      <section className="section section--tint">
        <div className="container contact">
          <div className="contact__info">
            <p className="eyebrow">যোগাযোগ</p>
            <h2>আপনার গ্রোথ প্ল্যান তৈরি করি</h2>
            <p className="lead">
              আপনার ব্যবসা সম্পর্কে একটু জানান, আমরা এক কর্মদিবসের মধ্যে কাজে লাগার মতো আইডিয়া নিয়ে
              উত্তর দেব, আমাদের হায়ার করুন বা না করুন।
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
                  হোয়াটসঅ্যাপ: {SITE.whatsapp}
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
                  <Icon name="pin" size={20} />
                </span>
                ঢাকা ও সারা বাংলাদেশ
              </li>
            </ul>
          </div>
          <div className="card contact__form">
            <ContactForm lang="bn" />
          </div>
        </div>
      </section>
      <FaqSection items={BN_CONTACT_FAQS} title="যোগাযোগ নিয়ে প্রশ্নোত্তর" eyebrow="প্রশ্নোত্তর" />
    </>
  );
}
