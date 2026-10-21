import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Page not found | Growbard",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <Header />
        <main>
          <section className="page-hero">
            <div className="container page-hero__inner">
              <p className="eyebrow">404</p>
              <h1>Page not found</h1>
              <p className="lead">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
              <div className="split__actions" style={{ justifyContent: "center", marginTop: 24 }}>
                <Link href="/" className="btn btn--primary">
                  Go to homepage
                </Link>
                <Link href="/services" className="btn btn--white">
                  Our services
                </Link>
                <Link href="/blog" className="btn btn--white">
                  Read the blog
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
