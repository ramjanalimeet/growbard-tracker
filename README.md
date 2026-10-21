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
The phone number, email and social links there are **placeholders**, so replace them before launch.

The contact form opens the visitor's email app addressed to `SITE.email`. To collect
submissions directly, connect it to a form service such as Formspree or Resend.
