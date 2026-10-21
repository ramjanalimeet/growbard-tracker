import type { GoogleData } from "@/lib/google";
import type { Review } from "@/lib/site";

export function GoogleLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5Z"
      />
      <path
        fill="#FF3D00"
        d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2A11.9 11.9 0 0 1 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44Z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3a12 12 0 0 1-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5Z"
      />
    </svg>
  );
}

export function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  return (
    <span
      className="g-stars"
      style={{ fontSize: size }}
      role="img"
      aria-label={`${rating.toFixed(1)} out of 5 stars`}
    >
      <span className="g-stars__base">★★★★★</span>
      <span className="g-stars__fill" style={{ width: `${pct}%` }}>
        ★★★★★
      </span>
    </span>
  );
}

// Each card links to the review on Google (or the profile when there's no
// direct link).
export function ReviewCard({ review, fallbackUrl }: { review: Review; fallbackUrl: string }) {
  return (
    <a
      href={review.url ?? fallbackUrl}
      className="card g-review"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read ${review.author}'s review on Google`}
    >
      <div className="g-review__head">
        {review.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={review.photo} alt="" width={40} height={40} referrerPolicy="no-referrer" />
        ) : (
          <span className="g-review__avatar">{review.author[0]}</span>
        )}
        <span className="g-review__who">
          <strong>{review.author}</strong>
          {review.when && <small>{review.when}</small>}
        </span>
        <GoogleLogo size={20} />
      </div>
      <Stars rating={review.rating} />
      <p className="g-review__text">{review.text}</p>
      <span className="g-review__more">Read on Google →</span>
    </a>
  );
}

// Star breakdown, like Google's. Only drawn when the split is certain: a 5.0
// average means every review is five stars.
export function RatingBars({ data }: { data: GoogleData }) {
  if (data.rating < 5 || !data.reviewCount) return null;
  return (
    <a
      href={data.profileUrl}
      className="g-bars"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`All ${data.reviewCount} reviews are five stars. Read them on Google`}
    >
      {[5, 4, 3, 2, 1].map((n) => (
        <span key={n} className="g-bars__row">
          <span>{n}★</span>
          <span className="g-bars__track">
            <span style={{ width: n === 5 ? "100%" : "0%" }} />
          </span>
          <span>{n === 5 ? data.reviewCount : 0}</span>
        </span>
      ))}
    </a>
  );
}

// Rating summary card: "Excellent 5.0 ★★★★★ based on N reviews".
export function GoogleSummary({ data }: { data: GoogleData }) {
  return (
    <div className="card g-summary">
      <div className="g-summary__brand">
        <GoogleLogo size={28} />
        <span>Google Reviews</span>
      </div>
      <p className="g-summary__score">{data.rating.toFixed(1)}</p>
      <Stars rating={data.rating} size={24} />
      <p className="g-summary__count">
        Based on {data.reviewCount} Google review{data.reviewCount === 1 ? "" : "s"}
      </p>
      <RatingBars data={data} />
      <div className="g-summary__actions">
        <a href={data.writeReviewUrl} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
          Write a review
        </a>
        <a href={data.profileUrl} className="btn btn--white" target="_blank" rel="noopener noreferrer">
          See us on Google
        </a>
      </div>
    </div>
  );
}
