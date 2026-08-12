"use client";

import { motion } from "framer-motion";

/**
 * Hero background pattern.
 * LIVE: Original geometric theme — thin-line circles, rotated square, arcs,
 * sparse dot-matrix grids, crosshair marks, and a softly focused center glow,
 * with teal worked into three small accents for balance.
 * A/B alternates (radial constellation, concentric arcs) are kept commented below.
 */
export function HeroGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0" style={{ background: "var(--bg-primary)" }} />

      {/* Lightly focused center glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 58% 42% at 50% 46%, rgba(244,192,95,0.10) 0%, rgba(120,72,18,0.04) 52%, transparent 76%)",
        }}
      />

      {/* === LIVE — Original geometric theme === */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          maskImage: "radial-gradient(circle at 50% 42%, black 0%, transparent 82%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 42%, black 0%, transparent 82%)",
        }}
      >
        <svg
          viewBox="0 0 1320 540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          shapeRendering="geometricPrecision"
        >
          {/* Central rings */}
          <motion.circle
            cx="660" cy="270" r="206"
            stroke="rgba(244,192,95,0.2)" strokeWidth="1.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.circle
            cx="660" cy="270" r="142"
            stroke="rgba(244,192,95,0.16)" strokeWidth="1" strokeDasharray="5 7"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.2, delay: 0.3 }}
          />
          <motion.circle
            cx="660" cy="270" r="64"
            stroke="rgba(244,192,95,0.24)" strokeWidth="1.4"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ transformOrigin: "660px 270px" }}
          />

          {/* Structural lines */}
          <motion.line x1="660" y1="20" x2="660" y2="520"
            stroke="rgba(244,192,95,0.1)" strokeWidth="1"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          <motion.line x1="10" y1="270" x2="1310" y2="270"
            stroke="rgba(244,192,95,0.1)" strokeWidth="1"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          <motion.line x1="10" y1="24" x2="1310" y2="516"
            stroke="rgba(244,192,95,0.06)" strokeWidth="0.8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />
          <motion.line x1="1310" y1="24" x2="10" y2="516"
            stroke="rgba(244,192,95,0.06)" strokeWidth="0.8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />

          {/* Rotated square */}
          <motion.rect
            x="492" y="102" width="336" height="336"
            stroke="rgba(244,192,95,0.15)" strokeWidth="1.1"
            transform="rotate(45 660 270)"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ transformOrigin: "660px 270px" }}
          />

          {/* Hero arcs */}
          <motion.path
            d="M 136 480 Q 42 264 224 88"
            stroke="rgba(244,168,50,0.5)" strokeWidth="1.6" fill="none" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.4 }}
          />
          <motion.path
            d="M 1098 68 Q 1242 258 1080 468"
            stroke="rgba(244,168,50,0.3)" strokeWidth="1.4" fill="none" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.6 }}
          />

          {/* Sparse dot matrices */}
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 7 }).map((_, col) => (
              <motion.circle
                key={`d${row}-${col}`}
                cx={858 + col * 22} cy={356 + row * 20} r="1.2"
                fill="rgba(244,192,95,0.22)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + (row + col) * 0.045 }}
              />
            ))
          )}

          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => (
              <motion.circle
                key={`e${row}-${col}`}
                cx={128 + col * 20} cy={78 + row * 20} r="1"
                fill="rgba(244,192,95,0.15)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 + (row + col) * 0.045 }}
              />
            ))
          )}

          {/* Teal accent 1 — chip */}
          <motion.rect
            x="874" y="324" width="52" height="52" rx="9"
            fill="rgba(21,140,125,0.2)" stroke="rgba(74,173,159,0.65)" strokeWidth="1.2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05 }}
          />
          {/* Teal accent 2 — hook */}
          <motion.path
            d="M 922 250 L 956 250 Q 974 250 974 268 L 974 306"
            stroke="rgba(74,173,159,0.75)" strokeWidth="1.8" fill="none" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 1.12 }}
          />
          {/* Teal accent 3 — mirrored ring on the left, for balance */}
          <motion.circle
            cx="220" cy="182" r="16"
            stroke="rgba(74,173,159,0.55)" strokeWidth="1.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 1.15 }}
          />

          {/* Focal center marker */}
          <motion.circle
            cx="660" cy="270" r="4.2" fill="#F4C05F"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
            style={{ transformOrigin: "660px 270px" }}
          />
          <motion.circle
            cx="660" cy="270" r="9"
            stroke="rgba(244,192,95,0.35)" strokeWidth="1" fill="none"
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.6 }}
            style={{ transformOrigin: "660px 270px" }}
          />

          {/* Crosshair marks */}
          {[
            [660, 88], [660, 452], [220, 270], [1100, 270],
          ].map(([cx, cy], i) => (
            <motion.g key={`ch${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 + i * 0.05 }}>
              <line x1={cx - 7} y1={cy} x2={cx + 7} y2={cy} stroke="rgba(244,192,95,0.4)" strokeWidth="1" />
              <line x1={cx} y1={cy - 7} x2={cx} y2={cy + 7} stroke="rgba(244,192,95,0.4)" strokeWidth="1" />
            </motion.g>
          ))}

          {/* Arch / keyhole silhouette */}
          <motion.path
            d="M626 338 L626 252 Q626 218 660 218 Q694 218 694 252 L694 338"
            stroke="rgba(244,192,95,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          />
          <motion.line x1="616" y1="338" x2="704" y2="338"
            stroke="rgba(244,192,95,0.3)" strokeWidth="1.5" strokeLinecap="round"
            initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 2 }}
            style={{ transformOrigin: "660px 338px" }}
          />
        </svg>
      </motion.div>

      {/*
        === A/B ALTERNATE — Radial constellation (network / product engineering) ===
        Nodes + connecting edges over a faint grid, cursor parallax, drifting keylights.
        To swap: comment out the LIVE block above and uncomment this one (requires
        re-adding the NODES/EDGES arrays and pointermove-driven offset state).
      */}

      {/*
        === A/B ALTERNATE — Concentric arcs (precision / atelier) ===
        Concentric rings on vertical center, increasing spacing outward, one
        gold-gradient accent ring drawing once via pathLength, outer radial mask fade.
      */}
    </div>
  );
}
