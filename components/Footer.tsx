import Image from "next/image";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/industries";
import { divisionId, DIVISIONS } from "@/lib/locations";
import type { Lang } from "@/lib/i18n";
import { COMPANY_LINKS, SERVICES, SITE } from "@/lib/site";

const TEXT = {
  en: {
    tagline: `${SITE.tagline}.`,
    services: "Services",
    industries: "Industries",
    locations: "Locations",
    allLocations: "All locations →",
    company: "Company",
    contact: "Get in touch",
    call: "Call",
    rights: "All rights reserved.",
  },
  bn: {
    tagline: "বাংলাদেশের ব্যবসার জন্য আপনার গ্রোথ পার্টনার।",
    services: "সার্ভিস",
    industries: "ইন্ডাস্ট্রি",
    locations: "লোকেশন",
    allLocations: "সব লোকেশন →",
    company: "কোম্পানি",
    contact: "যোগাযোগ",
    call: "কল",
    rights: "সর্বস্বত্ব সংরক্ষিত।",
  },
};

export default function Footer({ lang = "en" }: { lang?: Lang }) {
  const t = TEXT[lang];
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Link href={lang === "bn" ? "/bn" : "/"} className="brand brand--light">
            <Image src="/logo.png" alt="" width={40} height={40} className="brand__logo" />
            <span className="brand__name">{SITE.name}</span>
          </Link>
          <p className="footer__tag">{t.tagline}</p>
        </div>
        <div>
          <h4>{t.services}</h4>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link href={`/services/${s.id}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{t.industries}</h4>
          <ul>
            {INDUSTRIES.map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}`}>{i.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{t.locations}</h4>
          <ul>
            {DIVISIONS.map((d) => (
              <li key={d}>
                <Link href={`/locations#${divisionId(d)}`}>{d} Division</Link>
              </li>
            ))}
            <li>
              <Link href="/locations">{t.allLocations}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>{t.company}</h4>
          <ul>
            {COMPANY_LINKS.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{t.contact}</h4>
          <ul>
            <li>
              <a href={SITE.phoneHref}>
                {t.call}: {SITE.phone}
              </a>
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
        © {new Date().getFullYear()} {SITE.name}. {t.rights}
      </div>
    </footer>
  );
}
