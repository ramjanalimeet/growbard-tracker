import Image from "next/image";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/industries";
import { LOCATIONS } from "@/lib/locations";
import { COMPANY_LINKS, SERVICES, SITE } from "@/lib/site";

const FOOTER_CITIES = ["dhaka", "chattogram", "sylhet", "gazipur", "narayanganj", "khulna", "rajshahi"];

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
                <Link href={`/services/${s.id}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Industries</h4>
          <ul>
            {INDUSTRIES.map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}`}>{i.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Locations</h4>
          <ul>
            {LOCATIONS.filter((l) => FOOTER_CITIES.includes(l.slug)).map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`}>{l.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/locations">All locations →</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            {COMPANY_LINKS.map((n) => (
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
