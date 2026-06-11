"use client";
import { motion } from "framer-motion";

export function HeroGeometric() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Warm amber radial glow — the key mood-setter */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 65% 55% at 52% 48%,
              rgba(180,110,20,0.22) 0%,
              rgba(140,80,10,0.10) 40%,
              transparent 72%
            )
          `,
        }}
      />

      <svg
        viewBox="0 0 520 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[480px] relative z-10"
        aria-hidden="true"
      >
        {/* ── Outer bounding rect ── */}
        <motion.rect
          x="60" y="30" width="400" height="420"
          stroke="rgba(244,192,95,0.12)" strokeWidth="1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}
        />

        {/* ── Large circle (centre) ── */}
        <motion.circle
          cx="260" cy="230" r="155"
          stroke="rgba(244,192,95,0.18)" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* ── Medium circle ── */}
        <motion.circle
          cx="260" cy="230" r="100"
          stroke="rgba(244,192,95,0.1)" strokeWidth="1" strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, delay: 0.3 }}
        />

        {/* ── Small centre circle ── */}
        <motion.circle
          cx="260" cy="230" r="46"
          stroke="rgba(244,192,95,0.22)" strokeWidth="1.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ transformOrigin: "260px 230px" }}
        />

        {/* ── Vertical & horizontal rules ── */}
        <motion.line x1="260" y1="30" x2="260" y2="450"
          stroke="rgba(244,192,95,0.08)" strokeWidth="1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
        <motion.line x1="60" y1="230" x2="460" y2="230"
          stroke="rgba(244,192,95,0.08)" strokeWidth="1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />

        {/* ── Diagonal cross lines ── */}
        <motion.line x1="60" y1="30" x2="460" y2="450"
          stroke="rgba(244,192,95,0.06)" strokeWidth="0.8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />
        <motion.line x1="460" y1="30" x2="60" y2="450"
          stroke="rgba(244,192,95,0.06)" strokeWidth="0.8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />

        {/* ── Large rotated square ── */}
        <motion.rect
          x="160" y="130" width="200" height="200"
          stroke="rgba(244,192,95,0.13)" strokeWidth="1"
          transform="rotate(45 260 230)"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ transformOrigin: "260px 230px" }}
        />

        {/* ── Bottom-left large arc (warm gold, prominent) ── */}
        <motion.path
          d="M 100 430 Q 60 230 180 100"
          stroke="rgba(244,168,50,0.55)" strokeWidth="2" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.4 }}
        />

        {/* ── Top-right arc (teal) ── */}
        <motion.path
          d="M 380 60 Q 460 200 380 360"
          stroke="rgba(21,140,125,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.6 }}
        />

        {/* ── Dot matrix grid (bottom right region) ── */}
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 6 }).map((_, col) => (
            <motion.circle
              key={`d${row}-${col}`}
              cx={330 + col * 18} cy={310 + row * 18} r="1.2"
              fill="rgba(244,192,95,0.25)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + (row + col) * 0.04 }}
            />
          ))
        )}

        {/* ── Dot matrix grid (top left) ── */}
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <motion.circle
              key={`e${row}-${col}`}
              cx={80 + col * 16} cy={50 + row * 16} r="1"
              fill="rgba(244,192,95,0.18)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 + (row + col) * 0.04 }}
            />
          ))
        )}

        {/* ── Gold filled circle accent (centre-left) ── */}
        <motion.circle
          cx="155" cy="250" r="16"
          fill="rgba(200,140,30,0.45)" stroke="rgba(244,192,95,0.6)" strokeWidth="1"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          style={{ transformOrigin: "155px 250px" }}
        />

        {/* ── Teal quarter-circle (centre-right) ── */}
        <motion.path
          d="M 340 210 Q 380 210 380 250 Q 380 290 340 290"
          stroke="rgba(21,140,125,0.55)" strokeWidth="2" fill="rgba(21,140,125,0.06)" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />

        {/* ── Small squares (corner marks) ── */}
        {[
          [62, 32], [458, 32], [62, 448], [458, 448]
        ].map(([x, y], i) => (
          <motion.rect
            key={`sq${i}`}
            x={x - 4} y={y - 4} width="8" height="8"
            stroke="rgba(244,192,95,0.3)" strokeWidth="1" fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 + i * 0.08 }}
          />
        ))}

        {/* ── Centre dot ── */}
        <motion.circle
          cx="260" cy="230" r="3.5" fill="#F4C05F"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
          style={{ transformOrigin: "260px 230px" }}
        />
        <motion.circle
          cx="260" cy="230" r="7"
          stroke="rgba(244,192,95,0.35)" strokeWidth="1" fill="none"
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.6 }}
          style={{ transformOrigin: "260px 230px" }}
        />

        {/* ── Cross-hair marks ── */}
        {[
          [260, 75], [260, 385], [105, 230], [415, 230]
        ].map(([cx, cy], i) => (
          <motion.g key={`ch${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 + i * 0.05 }}>
            <line x1={cx - 7} y1={cy} x2={cx + 7} y2={cy} stroke="rgba(244,192,95,0.4)" strokeWidth="1" />
            <line x1={cx} y1={cy - 7} x2={cx} y2={cy + 7} stroke="rgba(244,192,95,0.4)" strokeWidth="1" />
          </motion.g>
        ))}

        {/* ── Archway silhouette (faint, overlaid in centre) ── */}
        <motion.path
          d="M238 280 L238 222 Q238 200 260 200 Q282 200 282 222 L282 280"
          stroke="rgba(244,192,95,0.22)" strokeWidth="1.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        />
        <motion.line x1="232" y1="280" x2="288" y2="280"
          stroke="rgba(244,192,95,0.22)" strokeWidth="1.5" strokeLinecap="round"
          initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 2 }}
          style={{ transformOrigin: "260px 280px" }}
        />
      </svg>
    </div>
  );
}
