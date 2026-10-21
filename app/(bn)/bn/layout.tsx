import type { Metadata, Viewport } from "next";
import { Hind_Siliguri, Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import GoogleBadge from "@/components/GoogleBadge";
import Header from "@/components/Header";
import { getGoogleData } from "@/lib/google";
import { languageAlternates } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import "../../globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

const bengali = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bengali",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | লোকাল SEO, ওয়েবসাইট, গুগল অ্যাডস ও সোশ্যাল মিডিয়া মার্কেটিং`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Growbard বাংলাদেশের ব্যবসাকে লোকাল SEO, ওয়েবসাইট ডেভেলপমেন্ট, গুগল অ্যাডস ও সোশ্যাল মিডিয়া মার্কেটিংয়ের মাধ্যমে আরও কল ও গ্রাহক পেতে সাহায্য করে।",
  applicationName: SITE.name,
  alternates: { canonical: "/bn", languages: languageAlternates("/bn") },
  openGraph: { siteName: SITE.name, locale: "bn_BD", type: "website", url: "/bn", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f36a22",
};

export default async function BanglaLayout({ children }: { children: React.ReactNode }) {
  const google = await getGoogleData();
  return (
    <html lang="bn" className={`${jakarta.variable} ${bengali.variable}`}>
      <body>
        <Header lang="bn" />
        <main>{children}</main>
        <Footer lang="bn" />
        <GoogleBadge data={google} />
      </body>
    </html>
  );
}
