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
The social media links there are **placeholders**, so replace them before launch.

The contact form opens WhatsApp with the visitor's details typed out as a
message to `SITE.whatsappNumber`; the visitor taps Send and it arrives in
Growbard's WhatsApp.
