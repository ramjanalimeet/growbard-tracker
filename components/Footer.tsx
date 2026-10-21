import Image from "next/image";
import Link from "next/link";
import { NAV, SERVICES, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Link href="/" className="brand brand--light">
            <Image src="/logo.png" alt="" width={40} height={40} className="brand__logo" />
            <span className="brand__name">{SITE.name}</span>
          </Link>
          <p className="footer__tag">{SITE.tagline}.</p>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link href={`/services#${s.id}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            {NAV.filter((n) => n.href !== "/services").map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li>
              <a href={SITE.phoneHref}>Call: {SITE.phone}</a>
            </li>
            <li>
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp: {SITE.whatsapp}
              </a>
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
  );
}
