import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — AI-powered digital solutions`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f3ee",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#c51a1b",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 36, height: 4, background: "#c51a1b" }} />
          Aeroven Global IT
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#14171c",
              letterSpacing: "-0.03em",
              maxWidth: 920,
            }}
          >
            Engineered intelligence for startups and enterprises
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#5d6673",
              maxWidth: 820,
              lineHeight: 1.35,
            }}
          >
            Custom software, cloud, data, and applied AI — built for scale.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#8b93a0",
            fontSize: 22,
          }}
        >
          <span>aerovenglobal.com</span>
          <span style={{ color: "#c51a1b", fontWeight: 600 }}>
            Book a consultation →
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
