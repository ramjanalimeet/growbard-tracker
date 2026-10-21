import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Local SEO, Websites, Google Ads & Social Media Marketing`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Growbard helps local businesses get more calls and customers with Local SEO, website development, Google Ads and social media marketing.",
  openGraph: {
    title: `${SITE.name} | ${SITE.tagline}`,
    description:
      "Local SEO, website development, Google Ads and social media marketing for local businesses.",
    images: ["/logo.png"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f36a22",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
