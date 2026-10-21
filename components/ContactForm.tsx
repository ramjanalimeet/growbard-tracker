"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { SERVICES, SITE } from "@/lib/site";

// Sends the enquiry to Growbard's WhatsApp: the form opens WhatsApp with the
// details already typed out, and the visitor taps Send.
export default function ContactForm() {
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
          Your name
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          Business name
          <input name="business" autoComplete="organization" />
        </label>
      </div>
      <div className="form__row">
        <label>
          Email
          <input name="email" type="email" autoComplete="email" />
        </label>
        <label>
          Phone / WhatsApp
          <input name="phone" type="tel" required autoComplete="tel" />
        </label>
      </div>
      <label>
        Service you need
        <select name="service" defaultValue={SERVICES[0].title}>
          {SERVICES.map((s) => (
            <option key={s.id}>{s.title}</option>
          ))}
          <option>Not sure yet</option>
        </select>
      </label>
      <label>
        Tell us about your goals
        <textarea name="message" rows={4} />
      </label>
      <button type="submit" className="btn btn--whatsapp btn--block">
        <Icon name="whatsapp" size={20} /> Send via WhatsApp
      </button>
      <p className="form__or">
        Your details open in WhatsApp, ready to send to us. Prefer email?{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>
      {sent && (
        <p className="form__note" role="status">
          Thanks! WhatsApp should open now. Tap <strong>Send</strong> to deliver your message.
          If it didn&apos;t open, message us on WhatsApp at{" "}
          <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
            {SITE.whatsapp}
          </a>
          .
        </p>
      )}
    </form>
  );
}
