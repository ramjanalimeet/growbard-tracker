# Growbard

Marketing website for **Growbard**: Local SEO, Website Development, Google Ads and Social Media Marketing.

Built with Next.js (App Router) and plain CSS. Deploys to Vercel with no extra configuration.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Editing content

All copy (services, packages, reviews, FAQ, contact details) lives in `lib/site.ts`.
Locations are in `lib/locations.ts`, industries in `lib/industries.ts` and blog
posts in `lib/blog/*.ts` (each with a target `keyword`, optional `metaTitle` and
`faqs`; inline links are written as `[label](/path)`); each entry gets its own page, is added to the sitemap
and gets SEO metadata and structured data automatically.

Set `SITE.url` in `lib/site.ts` to the real domain before launch: canonical
URLs, the sitemap and share images are built from it.
The social media links there are **placeholders**, so replace them before launch.

The contact form opens WhatsApp with the visitor's details typed out as a
message to `SITE.whatsappNumber`; the visitor taps Send and it arrives in
Growbard's WhatsApp.

## Google Business Profile

The rating badge, reviews section and map use the **Growbard - Marketing Agency**
Google Business Profile (settings in `GOOGLE` in `lib/site.ts`).

- **Live reviews (recommended):** in Vercel, add the environment variables
  `GOOGLE_PLACES_API_KEY` (Google Cloud key with *Places API (New)* enabled) and
  `GOOGLE_PLACE_ID` (find it with Google's Place ID Finder). The site then pulls
  the rating, review count and latest reviews from Google once a day.
- **Without an API key:** the site shows `GOOGLE.rating` / `GOOGLE.reviewCount`
  and any reviews pasted into `GOOGLE_REVIEWS`.
- Paste the profile's share link into `GOOGLE.profileUrl` and its "Ask for
  reviews" link into `GOOGLE.writeReviewUrl`.
