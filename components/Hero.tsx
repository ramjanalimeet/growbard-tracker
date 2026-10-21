"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { SITE } from "@/lib/site";

const TRUST = [
  { icon: "sparkle", label: "Data-driven strategy" },
  { icon: "star", label: "5.0 rated on Google" },
  { icon: "pin", label: "Local market experts" },
] as const;

const FEATURES = [
  { icon: "pin", title: "Local experts", text: "Map Pack & local search specialists" },
  { icon: "rocket", title: "Full service", text: "SEO, web, ads & social in one team" },
  { icon: "sparkle", title: "Proven results", text: "3.2x average lead increase" },
  { icon: "shield", title: "No contracts", text: "Month-to-month, cancel anytime" },
] as const;

const AVATARS = [
  { initial: "M", color: "#f36a22" },
  { initial: "S", color: "#2563eb" },
  { initial: "J", color: "#16a34a" },
  { initial: "P", color: "#9333ea" },
];

export default function Hero() {
  const [playing, setPlaying] = useState(false);
  const hasVideo = SITE.heroVideoId !== "";

  return (
    <section className="hero">
      <div className="hero__blob hero__blob--left" aria-hidden="true" />
      <div className="hero__blob hero__blob--right" aria-hidden="true" />
      <div className="hero__dots hero__dots--left" aria-hidden="true" />
      <div className="hero__dots hero__dots--right" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__pill">
            <Icon name="rocket" size={14} /> Local SEO · Websites · Ads · Social
          </p>
          <h1>
            Grow Your Business
            <br /> With a <span className="nowrap">Results-Driven</span>
            <span className="accent"> Growth Partner</span>
          </h1>
          <p className="hero__lead">
            Local SEO, website development, Google Ads and social media marketing that bring
            more calls, bookings and customers, all handled by one team.
          </p>

          <ul className="hero__trust">
            {TRUST.map((t) => (
              <li key={t.label}>
                <span className={`hero__trust-icon${t.icon === "star" ? " is-solid" : ""}`}>
                  <Icon name={t.icon} size={14} />
                </span>
                {t.label}
              </li>
            ))}
          </ul>

          <div className="hero__actions">
            <a
              href={SITE.whatsappHref}
              className="btn btn--whatsapp btn--xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={20} /> Chat on WhatsApp
            </a>
            <a href={SITE.phoneHref} className="btn btn--white btn--xl">
              <Icon name="phone" size={18} /> Call {SITE.phone}
            </a>
          </div>

          <div className="hero__proof">
            <div className="hero__avatars" aria-hidden="true">
              {AVATARS.map((a) => (
                <span key={a.initial} style={{ background: a.color }}>
                  {a.initial}
                </span>
              ))}
            </div>
            <div>
              <span className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </span>
              <p>
                <strong>150+ businesses</strong> grown with Growbard
              </p>
            </div>
          </div>
        </div>

        <div className="hero__media">
          <span className="hero__spark" aria-hidden="true" />
          <div className="video-card">
            {hasVideo && playing ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${SITE.heroVideoId}?autoplay=1&rel=0`}
                title={`${SITE.name} intro video`}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <DashboardPreview />
                {hasVideo ? (
                  <button
                    className="video-card__play"
                    onClick={() => setPlaying(true)}
                    aria-label="Play intro video"
                  >
                    <Icon name="play" size={26} />
                  </button>
                ) : (
                  <a href="#process" className="video-card__play" aria-label="See how it works">
                    <Icon name="play" size={26} />
                  </a>
                )}
                <div className="video-card__bar" aria-hidden="true">
                  <Icon name="play" size={14} />
                  <span className="video-card__track">
                    <span />
                  </span>
                  <span className="video-card__time">0:16 / 0:42</span>
                </div>
              </>
            )}
          </div>

          <div className="hero__features">
            {FEATURES.map((f) => (
              <div key={f.title} className="feature">
                <span className="feature__icon">
                  <Icon name={f.icon} size={20} />
                </span>
                <strong>{f.title}</strong>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Stand-in for the hero video: a stylised client growth dashboard.
function DashboardPreview() {
  return (
    <div className="dash" aria-hidden="true">
      <div className="dash__top">
        <span className="dash__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="dash__title">Growbard · Growth Dashboard</span>
      </div>
      <div className="dash__kpis">
        <div>
          <small>Calls</small>
          <b>+184%</b>
        </div>
        <div>
          <small>Map rank</small>
          <b>#1</b>
        </div>
        <div>
          <small>Leads</small>
          <b>312</b>
        </div>
      </div>
      <svg className="dash__chart" viewBox="0 0 300 90" preserveAspectRatio="none">
        <defs>
          <linearGradient id="dashFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#f36a22" stopOpacity="0.35" />
            <stop offset="1" stopColor="#f36a22" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 80 L30 74 L60 76 L90 62 L120 64 L150 48 L180 50 L210 34 L240 30 L270 16 L300 8 L300 90 L0 90 Z"
          fill="url(#dashFill)"
        />
        <path
          d="M0 80 L30 74 L60 76 L90 62 L120 64 L150 48 L180 50 L210 34 L240 30 L270 16 L300 8"
          fill="none"
          stroke="#f36a22"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
