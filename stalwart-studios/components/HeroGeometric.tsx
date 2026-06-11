"use client";
import { motion } from "framer-motion";

export function HeroGeometric() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 58% 42% at 50% 46%, rgba(244,192,95,0.14) 0%, rgba(120,72,18,0.06) 52%, transparent 76%)
          `,
        }}
      />

      <svg
        viewBox="0 0 1320 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Central geometry */}
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
          stroke="rgba(244,192,95,0.24)" strokeWidth="1.8"
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
          stroke="rgba(244,168,50,0.62)" strokeWidth="2.2" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.4 }}
        />
        <motion.path
          d="M 1098 68 Q 1242 258 1080 468"
          stroke="rgba(244,168,50,0.34)" strokeWidth="1.8" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.6 }}
        />
        {/* Dot matrices */}
        {Array.from({ length: 9 }).map((_, row) =>
          Array.from({ length: 11 }).map((_, col) => (
            <motion.circle
              key={`d${row}-${col}`}
              cx={858 + col * 18} cy={346 + row * 16} r="1.2"
              fill="rgba(244,192,95,0.24)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + (row + col) * 0.04 }}
            />
          ))
        )}

        {Array.from({ length: 7 }).map((_, row) =>
          Array.from({ length: 8 }).map((_, col) => (
            <motion.circle
              key={`e${row}-${col}`}
              cx={120 + col * 16} cy={70 + row * 16} r="1"
              fill="rgba(244,192,95,0.16)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 + (row + col) * 0.04 }}
            />
          ))
        )}

        {/* Accent marks */}
        <motion.circle
          cx="416" cy="286" r="20"
          fill="rgba(212,146,26,0.42)" stroke="rgba(244,192,95,0.65)" strokeWidth="1.2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          style={{ transformOrigin: "416px 286px" }}
        />
        <motion.path
          d="M 874 224 Q 934 224 934 284 Q 934 344 874 344"
          stroke="rgba(244,168,50,0.5)" strokeWidth="2.2" fill="rgba(244,168,50,0.07)" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />
        {/* Two teal accents matching reference */}
        <motion.rect
          x="874" y="324" width="52" height="52" rx="9"
          fill="rgba(21,140,125,0.2)" stroke="rgba(74,173,159,0.65)" strokeWidth="1.2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05 }}
        />
        <motion.path
          d="M 922 250 L 956 250 Q 974 250 974 268 L 974 306"
          stroke="rgba(74,173,159,0.75)" strokeWidth="2" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 1.12 }}
        />

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
        {[
          [660, 88], [660, 452], [220, 270], [1100, 270]
        ].map(([cx, cy], i) => (
          <motion.g key={`ch${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 + i * 0.05 }}>
            <line x1={cx - 7} y1={cy} x2={cx + 7} y2={cy} stroke="rgba(244,192,95,0.4)" strokeWidth="1" />
            <line x1={cx} y1={cy - 7} x2={cx} y2={cy + 7} stroke="rgba(244,192,95,0.4)" strokeWidth="1" />
          </motion.g>
        ))}
        <motion.path
          d="M626 338 L626 252 Q626 218 660 218 Q694 218 694 252 L694 338"
          stroke="rgba(244,192,95,0.3)" strokeWidth="1.7" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        />
        <motion.line x1="616" y1="338" x2="704" y2="338"
          stroke="rgba(244,192,95,0.3)" strokeWidth="1.7" strokeLinecap="round"
          initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 2 }}
          style={{ transformOrigin: "660px 338px" }}
        />
      </svg>
    </div>
  );
}
