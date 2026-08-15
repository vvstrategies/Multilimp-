import { ImageResponse } from "next/og";
import { BUSINESS } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "linear-gradient(135deg, #0B1220 0%, #0B1A2E 60%, #10254A 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: "9999px",
              background: "#1E6AFF",
              boxShadow: "0 4px 30px rgba(30,106,255,0.5)",
            }}
          />
          {BUSINESS.displayName}
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, marginTop: 32, maxWidth: 900 }}>
          Higienização Profissional de Estofados
        </div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 20, color: "rgba(255,255,255,0.75)" }}>
          Taboão da Serra, Osasco, Santo Amaro e região
        </div>
      </div>
    ),
    { ...size }
  );
}
