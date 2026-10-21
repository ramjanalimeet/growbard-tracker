"use client";

import { useEffect, useState } from "react";
import { GoogleLogo, RatingBars, ReviewCard, Stars } from "@/components/GoogleReviews";
import type { GoogleData } from "@/lib/google";

// Floating "Google 5.0 ★★★★★" badge on the side of every page; opens a panel
// with the reviews and links to the Google Business Profile.
export default function GoogleBadge({ data }: { data: GoogleData }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        className="g-badge"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <GoogleLogo size={26} />
        <span className="g-badge__text">
          <span className="g-badge__top">
            <b>{data.rating.toFixed(1)}</b>
            <Stars rating={data.rating} size={13} />
          </span>
          <small>{data.reviewCount} Google reviews</small>
        </span>
      </button>

      {open && (
        <div className="g-panel__backdrop" onClick={() => setOpen(false)}>
          <aside
            className="g-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Google reviews"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="g-panel__head">
              <GoogleLogo size={28} />
              <div>
                <strong>Growbard on Google</strong>
                <span className="g-panel__rating">
                  <b>{data.rating.toFixed(1)}</b>
                  <Stars rating={data.rating} size={15} />
                  <small>({data.reviewCount})</small>
                </span>
              </div>
              <button className="g-panel__close" onClick={() => setOpen(false)} aria-label="Close">
                ×
              </button>
            </header>

            <div className="g-panel__body">
              <a
                href={data.profileUrl}
                className="card g-panel__score"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>{data.rating.toFixed(1)}</b>
                <Stars rating={data.rating} size={22} />
                <small>
                  {data.reviewCount} Google review{data.reviewCount === 1 ? "" : "s"}
                </small>
              </a>
              <RatingBars data={data} />
              {data.reviews.map((r) => (
                <ReviewCard key={r.author + r.text} review={r} fallbackUrl={data.profileUrl} />
              ))}
              {data.reviews.length === 0 && (
                <a
                  href={data.profileUrl}
                  className="card g-panel__cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GoogleLogo size={22} />
                  <span>
                    <strong>Read our {data.reviewCount} five-star reviews</strong>
                    <small>See what clients say on Google Maps</small>
                  </span>
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </div>

            <footer className="g-panel__foot">
              <a href={data.profileUrl} className="btn btn--white" target="_blank" rel="noopener noreferrer">
                Read all reviews
              </a>
              <a href={data.writeReviewUrl} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
                Write a review
              </a>
            </footer>
          </aside>
        </div>
      )}
    </>
  );
}
