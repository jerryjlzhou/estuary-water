import { ImageResponse } from "next/og";

export const alt = "Estuary Mineral Water — Premium Australian Mineral Water";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#232b59",
          color: "white",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "96px",
              fontWeight: 700,
              letterSpacing: "0.05em",
              lineHeight: 1,
            }}
          >
            ESTUARY
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: "18px",
              letterSpacing: "0.35em",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <span>——</span>
            <span>MINERAL WATER</span>
            <span>——</span>
          </div>
          <div
            style={{
              width: "12px",
              height: "12px",
              backgroundColor: "#b8a472",
              transform: "rotate(45deg)",
              marginTop: "8px",
            }}
          />
          <div
            style={{
              fontSize: "16px",
              letterSpacing: "0.3em",
              color: "#b8a472",
              marginTop: "16px",
            }}
          >
            PREMIUM AUSTRALIAN MINERAL WATER
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
