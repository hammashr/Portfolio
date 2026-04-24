import React from "react";
import { motion } from "framer-motion";

import todaLogo from "../assets/toda.png";
import tinyEscapeLogo from "../assets/tinyescapelogo.png";
import zentredgeLogo from "../assets/zentredgelogo.png";
import droneLogo from "../assets/dronelogo.png";

const LOGOS = [
  { name: "TODA", img: todaLogo, height: 120, maxWidth: 300 },
  { name: "The Tiny Escape", img: tinyEscapeLogo, height: 350, maxWidth: 220 },
  { name: "Zentredge", img: zentredgeLogo, height: 250, maxWidth: 300 },
  { name: "Alpha Tango Drone", img: droneLogo, height: 150, maxWidth: 350 },
];

// Duplicate 3× for a seamless infinite loop
const TRACK = [...LOGOS, ...LOGOS, ...LOGOS];

export default function ClientsSlider() {
  return (
    <section
      style={{
        padding: "72px 0 56px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fade edges */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          background:
            "linear-gradient(90deg, #050816 0%, transparent 14%, transparent 86%, #050816 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: 48, padding: "0 24px" }}
      >
        <h2
          style={{
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#00d4ff",
          }}
        >
Trusted By Leading Brands
        </h2>
        <div
          style={{
            width: 56,
            height: 3,
            background: "linear-gradient(90deg,#00d4ff,#915eff)",
            margin: "14px auto 0",
            borderRadius: 2,
          }}
        />
      </motion.div>

      {/* Slider track */}
      <div style={{ position: "relative", zIndex: 1, overflow: "hidden" }}>
        <div
          className="animate-marquee"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 100,
            width: "max-content",
          }}
        >
          {TRACK.map((logo, i) => (
            <img
              key={i}
              src={logo.img}
              alt={logo.name}
              style={{
                height: logo.height,
                maxWidth: logo.maxWidth,
                objectFit: "contain",
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
