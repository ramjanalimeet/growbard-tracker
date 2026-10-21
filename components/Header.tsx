"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { type Lang, UI } from "@/lib/i18n";
import { SITE } from "@/lib/site";

export default function Header({ lang = "en" }: { lang?: Lang }) {
  const t = UI[lang];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" || href === "/bn" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`header${scrolled ? " header--scrolled" : ""}`}>
        <div className="container header__inner">
          <Link href={lang === "bn" ? "/bn" : "/"} className="brand" aria-label={`${SITE.name} home`}>
            <Image src="/logo.png" alt="" width={42} height={42} priority className="brand__logo" />
            <span className="brand__text">
              <span className="brand__name">{SITE.name}</span>
              <span className="brand__sub">{t.sub}</span>
            </span>
          </Link>

          <nav className={`nav${open ? " nav--open" : ""}`} aria-label="Main">
            {t.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "nav__active" : undefined}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="nav__mobile-only nav__lang">
              <LanguageSwitcher onNavigate={() => setOpen(false)} />
            </div>
            <a href={SITE.phoneHref} className="btn btn--white nav__phone nav__mobile-only">
              <Icon name="phone" size={16} /> {SITE.phone}
            </a>
            <Link href={t.bookHref} className="btn btn--primary nav__mobile-only" onClick={() => setOpen(false)}>
              {t.book} <Icon name="arrow" size={16} />
            </Link>
          </nav>

          <div className="header__actions">
            <LanguageSwitcher />
            <a href={SITE.phoneHref} className="btn btn--white nav__phone">
              <Icon name="phone" size={16} /> {SITE.phone}
            </a>
            <Link href={t.bookHref} className="btn btn--primary">
              {t.book} <Icon name="arrow" size={16} />
            </Link>
          </div>

          <button
            className="menu-toggle"
            aria-label={open ? t.menuClose : t.menuOpen}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className="fabs">
        <a
          href={SITE.whatsappHref}
          className="fab fab--whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with ${SITE.name} on WhatsApp`}
        >
          <Icon name="whatsapp" size={28} />
        </a>
        <a href={SITE.phoneHref} className="fab" aria-label={`Call ${SITE.name}`}>
          <Icon name="phone" size={24} />
        </a>
      </div>

      <div className="mobile-bar">
        <a href={SITE.phoneHref} className="mobile-bar__btn mobile-bar__btn--call">
          <Icon name="phone" size={20} /> {t.call}
        </a>
        <a
          href={SITE.whatsappHref}
          className="mobile-bar__btn mobile-bar__btn--whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="whatsapp" size={22} /> {t.whatsapp}
        </a>
      </div>
    </>
  );
}
