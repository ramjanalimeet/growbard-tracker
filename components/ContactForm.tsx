"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import type { Lang } from "@/lib/i18n";
import { SERVICES, SITE } from "@/lib/site";

const TEXT = {
  en: {
    name: "Your name",
    business: "Business name",
    email: "Email",
    phone: "Phone / WhatsApp",
    service: "Service you need",
    notSure: "Not sure yet",
    goals: "Tell us about your goals",
    send: "Send via WhatsApp",
    note: "Your details open in WhatsApp, ready to send to us. Prefer email?",
    thanks: "Thanks! WhatsApp should open now. Tap Send to deliver your message. If it didn't open, message us on WhatsApp at",
  },
  bn: {
    name: "আপনার নাম",
    business: "ব্যবসার নাম",
    email: "ইমেইল",
    phone: "ফোন / হোয়াটসঅ্যাপ",
    service: "কোন সার্ভিস দরকার",
    notSure: "এখনো নিশ্চিত নই",
    goals: "আপনার লক্ষ্য সম্পর্কে লিখুন",
    send: "হোয়াটসঅ্যাপে পাঠান",
    note: "আপনার তথ্য হোয়াটসঅ্যাপে খুলবে, শুধু পাঠিয়ে দিন। ইমেইল করতে চান?",
    thanks: "ধন্যবাদ! এখন হোয়াটসঅ্যাপ খুলবে। মেসেজটি পাঠাতে Send চাপুন। না খুললে হোয়াটসঅ্যাপে মেসেজ দিন:",
  },
};

// Sends the enquiry to Growbard's WhatsApp: the form opens WhatsApp with the
// details already typed out, and the visitor taps Send.
export default function ContactForm({ lang = "en" }: { lang?: Lang }) {
  const t = TEXT[lang];
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim() || "-";
    const text = [
      "*New enquiry from the Growbard website*",
      "",
      `*Name:* ${field("name")}`,
      `*Business:* ${field("business")}`,
      `*Email:* ${field("email")}`,
      `*Phone:* ${field("phone")}`,
      `*Service:* ${field("service")}`,
      "",
      `*Message:* ${field("message")}`,
    ].join("\n");
    const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
    // A new tab keeps the site open on desktop; fall back if popups are blocked.
    // ("noopener" would make window.open always return null, so clear opener by hand.)
    const tab = window.open(url, "_blank");
    if (tab) tab.opener = null;
    else window.location.href = url;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <label>
          {t.name}
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          {t.business}
          <input name="business" autoComplete="organization" />
        </label>
      </div>
      <div className="form__row">
        <label>
          {t.email}
          <input name="email" type="email" autoComplete="email" />
        </label>
        <label>
          {t.phone}
          <input name="phone" type="tel" required autoComplete="tel" />
        </label>
      </div>
      <label>
        {t.service}
        <select name="service" defaultValue={SERVICES[0].title}>
          {SERVICES.map((s) => (
            <option key={s.id}>{s.title}</option>
          ))}
          <option>{t.notSure}</option>
        </select>
      </label>
      <label>
        {t.goals}
        <textarea name="message" rows={4} />
      </label>
      <button type="submit" className="btn btn--whatsapp btn--block">
        <Icon name="whatsapp" size={20} /> {t.send}
      </button>
      <p className="form__or">
        {t.note}{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>
      {sent && (
        <p className="form__note" role="status">
          {t.thanks}{" "}
          <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
            {SITE.whatsapp}
          </a>
          .
        </p>
      )}
    </form>
  );
}
