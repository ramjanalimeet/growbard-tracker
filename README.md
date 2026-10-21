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
posts in `lib/blog/*.ts` (each with a target `keyword`, optional `metaTitle`,
`faqs`, `sources` and `updated` date; blocks include headings, lists and tables,
and inline links are written as `[label](/path)`). Statistics and external
references live in `lib/blog/sources.ts` so every article cites the same figures;
update them there when new reports come out. each entry gets its own page, is added to the sitemap
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

## Languages (English / বাংলা)

English pages live in `app/(en)`, Bangla pages in `app/(bn)/bn` (each has its own
root layout so `<html lang>` is correct). `lib/i18n.ts` lists which English pages
have a Bangla version (`TRANSLATED`); those pairs get hreflang tags, sitemap
alternates and a direct link in the language switcher. Bangla copy is in `lib/bn.ts`.
To translate another page, add it under `app/(bn)/bn` and to `TRANSLATED`.

## FAQs

Every page has its own FAQ with FAQPage structured data. Page-level FAQs are in
`lib/faqs.ts`; service, industry and blog FAQs live with their content.
