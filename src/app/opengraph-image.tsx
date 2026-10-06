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
          background: "linear-gradient(135deg, #071624 0%, #0B2340 60%, #123B61 100%)",
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
              background: "#0877C9",
              boxShadow: "0 4px 30px rgba(8,119,201,0.5)",
            }}
          />
          {BUSINESS.displayName}
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, marginTop: 32, maxWidth: 900 }}>
          Higienização Profissional de Estofados
        </div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 20, maxWidth: 1000, color: "rgba(255,255,255,0.75)" }}>
          Americana e cidades da região
        </div>
      </div>
    ),
    { ...size }
  );
}
