import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MorphDoc Suits — Native macOS PDF & Image Studio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #08090C 0%, #10131F 50%, #08090C 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Glow sphere */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "300px",
            background: "rgba(0, 85, 246, 0.25)",
            filter: "blur(120px)",
            borderRadius: "50%",
            top: "20%",
          }}
        />

        {/* App Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 24px",
            borderRadius: "999px",
            background: "rgba(0, 85, 246, 0.15)",
            border: "1px solid rgba(0, 85, 246, 0.4)",
            color: "#60A5FA",
            fontSize: "20px",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          <span> Native macOS Studio • Apple Silicon M1–M5</span>
        </div>

        {/* Main Headline */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#FFFFFF",
            textAlign: "center",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            maxWidth: "950px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>MorphDoc Suits</span>
          <span
            style={{
              background: "linear-gradient(90deg, #60A5FA, #34D399)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Master Your PDFs &amp; Images on Mac
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "#94A3B8",
            textAlign: "center",
            marginTop: "20px",
            maxWidth: "800px",
          }}
        >
          Exact-KB Compression • Visual PDF Page Reorder • 300 DPI Passport Studio
        </div>

        {/* Bottom tags */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "36px",
            color: "#34D399",
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          <span>✓ 100% On-Device</span>
          <span>✓ Zero Cloud Uploads</span>
          <span>✓ &lt; 35ms Latency</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
