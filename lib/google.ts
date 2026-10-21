import { GOOGLE, GOOGLE_REVIEWS, type Review } from "@/lib/site";

export type GoogleData = {
  rating: number;
  reviewCount: number;
  reviews: Review[];
  profileUrl: string;
  writeReviewUrl: string;
};

type PlaceResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: {
    rating?: number;
    googleMapsUri?: string;
    text?: { text?: string };
    originalText?: { text?: string };
    relativePublishTimeDescription?: string;
    authorAttribution?: { displayName?: string; photoUri?: string; uri?: string };
  }[];
};

const FALLBACK: GoogleData = {
  rating: GOOGLE.rating,
  reviewCount: GOOGLE.reviewCount,
  reviews: GOOGLE_REVIEWS,
  profileUrl: GOOGLE.profileUrl,
  writeReviewUrl: GOOGLE.writeReviewUrl,
};

// Live rating and reviews from the Google Business Profile via the Places API.
// Needs GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID set in the hosting
// environment; without them, or if Google is unreachable, the values in
// lib/site.ts are used. Refreshed at most once a day.
export async function getGoogleData(): Promise<GoogleData> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return FALLBACK;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
      },
      next: { revalidate: 86400 },
    });
    if (!res.ok) return FALLBACK;
    const place = (await res.json()) as PlaceResponse;

    const reviews: Review[] = (place.reviews ?? [])
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? "Google user",
        rating: r.rating ?? 5,
        text: r.originalText?.text ?? r.text?.text ?? "",
        when: r.relativePublishTimeDescription,
        photo: r.authorAttribution?.photoUri,
        url: r.googleMapsUri ?? r.authorAttribution?.uri,
      }))
      .filter((r) => r.text);

    return {
      rating: place.rating ?? FALLBACK.rating,
      reviewCount: place.userRatingCount ?? FALLBACK.reviewCount,
      reviews: reviews.length ? reviews : FALLBACK.reviews,
      profileUrl: place.googleMapsUri ?? FALLBACK.profileUrl,
      writeReviewUrl: FALLBACK.writeReviewUrl,
    };
  } catch {
    return FALLBACK;
  }
}
