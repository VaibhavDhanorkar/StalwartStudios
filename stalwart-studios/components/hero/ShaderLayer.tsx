"use client";

// Loaded lazily (client only) by HeroBackground, after the page has loaded.
import { MeshGradient } from "@paper-design/shaders-react";

// Mostly near-black, deep teal regions, a small warm-gold presence (tokens: #0A0A0B, #158C7D, #F4B048).
const COLORS = ["#0A0A0B", "#0A0A0B", "#0B2F2B", "#158C7D", "#0A0A0B", "#6B4A1E"];
// Soft gradients lose nothing at low resolution; the canvas is upscaled by CSS. Keeps GPU/CPU cost small.
const MAX_PIXELS = 320 * 180;

export default function ShaderLayer({ speed }: { speed: number }) {
  return (
    <MeshGradient
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      colors={COLORS}
      distortion={0.8}
      swirl={0.25}
      grainMixer={0.15}
      grainOverlay={0.12}
      speed={speed * 0.25}
      minPixelRatio={1}
      maxPixelCount={MAX_PIXELS}
    />
  );
}
