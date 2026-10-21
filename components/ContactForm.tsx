"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { SERVICES, SITE } from "@/lib/site";

// No backend yet: the form opens the visitor's email app with the details
// filled in. Swap this for a form service (Formspree, Resend, etc.) later.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `New enquiry from ${data.get("name")} — ${data.get("service")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Business: ${data.get("business")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${data.get("service")}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" />
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
      <button type="submit" className="btn btn--primary btn--block">
        Get My Free Growth Plan
      </button>
      <p className="form__or">or</p>
      <a
        href={SITE.whatsappQuoteHref}
        className="btn btn--whatsapp btn--block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="whatsapp" size={20} /> Get a free quote on WhatsApp
      </a>
      {sent && (
        <p className="form__note">
          Thanks! Your email app should open now. If it didn&apos;t, email us at{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      )}
    </form>
  );
}
