"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { SITE } from "@/lib/site";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Packages", href: "#packages" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <a href="#top" className="brand" aria-label={`${SITE.name} home`}>
            <Image src="/logo.png" alt="" width={42} height={42} priority className="brand__logo" />
            <span className="brand__text">
              <span className="brand__name">{SITE.name}</span>
              <span className="brand__sub">Digital Marketing Agency</span>
            </span>
          </a>

          <nav className={`nav${open ? " nav--open" : ""}`} aria-label="Main">
            <a href="#top" className="nav__active" onClick={() => setOpen(false)}>
              Home
            </a>
            {LINKS.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href={SITE.phoneHref} className="btn btn--white nav__phone nav__mobile-only">
              <Icon name="phone" size={16} /> {SITE.phone}
            </a>
            <a href="#contact" className="btn btn--primary nav__mobile-only" onClick={() => setOpen(false)}>
              Book now <Icon name="arrow" size={16} />
            </a>
          </nav>

          <div className="header__actions">
            <a href={SITE.phoneHref} className="btn btn--white nav__phone">
              <Icon name="phone" size={16} /> {SITE.phone}
            </a>
            <a href="#contact" className="btn btn--primary">
              Book now <Icon name="arrow" size={16} />
            </a>
          </div>

          <button
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
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
          <Icon name="phone" size={20} /> Call Now
        </a>
        <a
          href={SITE.whatsappHref}
          className="mobile-bar__btn mobile-bar__btn--whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="whatsapp" size={22} /> WhatsApp
        </a>
      </div>
    </>
  );
}
