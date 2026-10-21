import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import GoogleBadge from "@/components/GoogleBadge";
import Header from "@/components/Header";
import { getGoogleData } from "@/lib/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Local SEO, Websites, Google Ads & Social Media Marketing`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Growbard helps local businesses get more calls and customers with Local SEO, website development, Google Ads and social media marketing.",
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE.name} | ${SITE.tagline}`,
    description:
      "Local SEO, website development, Google Ads and social media marketing for local businesses.",
    siteName: SITE.name,
    locale: "en_BD",
    type: "website",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f36a22",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const google = await getGoogleData();
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <GoogleBadge data={google} />
      </body>
    </html>
  );
}
