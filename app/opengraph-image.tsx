import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

// Share image used when any page is posted on Facebook, WhatsApp, LinkedIn, etc.
export const alt = `${SITE.name}: Local SEO, websites, Google Ads and social media marketing`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #fff7f1 0%, #fde3d2 100%)",
          color: "#16181d",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={110} height={110} style={{ borderRadius: 24 }} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 64, fontWeight: 800 }}>{SITE.name}</div>
            <div style={{ fontSize: 28, color: "#f36a22", fontWeight: 700 }}>YOUR GROWTH PARTNER</div>
          </div>
        </div>
        <div style={{ fontSize: 46, fontWeight: 700, marginTop: 56, lineHeight: 1.2 }}>
          Local SEO · Websites · Google Ads · Social Media
        </div>
        <div style={{ fontSize: 30, color: "#4a4f5a", marginTop: 20 }}>
          Helping businesses across Bangladesh win more customers
        </div>
      </div>
    ),
    size,
  );
}
