"use client";

import { motion } from "framer-motion";

export function HeroGeometric() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[420px]"
        aria-hidden="true"
      >
        {/* Outer thin circle */}
        <motion.circle
          cx="240" cy="240" r="220"
          stroke="rgba(46,46,51,0.8)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {/* Second ring */}
        <motion.circle
          cx="240" cy="240" r="180"
          stroke="rgba(46,46,51,0.6)"
          strokeWidth="1"
          strokeDasharray="6 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
        />
        {/* Gold arc — top right */}
        <motion.path
          d="M 360 100 A 160 160 0 0 1 420 240"
          stroke="#F4C05F"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        {/* Teal arc — bottom left */}
        <motion.path
          d="M 120 380 A 160 160 0 0 1 60 240"
          stroke="#158C7D"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
        {/* Inner square rotated */}
        <motion.rect
          x="160" y="160" width="160" height="160"
          rx="4"
          stroke="rgba(46,46,51,0.9)"
          strokeWidth="1"
          transform="rotate(45 240 240)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ transformOrigin: "240px 240px" }}
        />
        {/* Center circle with glow */}
        <motion.circle
          cx="240" cy="240" r="60"
          fill="rgba(20,20,22,0.9)"
          stroke="rgba(244,192,95,0.3)"
          strokeWidth="1"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ transformOrigin: "240px 240px" }}
        />
        {/* Inner teal ring */}
        <motion.circle
          cx="240" cy="240" r="44"
          fill="none"
          stroke="rgba(21,140,125,0.4)"
          strokeWidth="1"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{ transformOrigin: "240px 240px" }}
        />
        {/* Center dot */}
        <motion.circle
          cx="240" cy="240" r="4"
          fill="#F4C05F"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.3 }}
          style={{ transformOrigin: "240px 240px" }}
        />
        {/* Cross hairs */}
        <motion.line
          x1="240" y1="196" x2="240" y2="210"
          stroke="rgba(244,192,95,0.5)" strokeWidth="1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        />
        <motion.line
          x1="240" y1="270" x2="240" y2="284"
          stroke="rgba(244,192,95,0.5)" strokeWidth="1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        />
        <motion.line
          x1="196" y1="240" x2="210" y2="240"
          stroke="rgba(244,192,95,0.5)" strokeWidth="1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        />
        <motion.line
          x1="270" y1="240" x2="284" y2="240"
          stroke="rgba(244,192,95,0.5)" strokeWidth="1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        />
        {/* Corner marks */}
        {[
          { x: 80, y: 80, d: "M80 100 L80 80 L100 80" },
          { x: 380, y: 80, d: "M360 80 L380 80 L380 100" },
          { x: 80, y: 380, d: "M80 360 L80 380 L100 380" },
          { x: 380, y: 380, d: "M360 380 L380 380 L380 360" },
        ].map((c, i) => (
          <motion.path
            key={i}
            d={c.d}
            stroke="rgba(46,46,51,0.8)"
            strokeWidth="1.5"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 + i * 0.1 }}
          />
        ))}
        {/* Precision dots */}
        {[
          { cx: 240, cy: 60 },
          { cx: 420, cy: 240 },
          { cx: 240, cy: 420 },
          { cx: 60, cy: 240 },
        ].map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.cx} cy={dot.cy} r="2"
            fill="rgba(142,142,150,0.4)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 + i * 0.08 }}
          />
        ))}

        {/* Studio wordmark inside */}
        <motion.text
          x="240" y="235"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="rgba(237,232,224,0.9)"
          fontSize="11"
          fontFamily="'DM Sans', sans-serif"
          letterSpacing="3"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          STALWART
        </motion.text>
        <motion.line
          x1="210" y1="242" x2="270" y2="242"
          stroke="#F4C05F" strokeWidth="0.75"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.4 }}
          style={{ transformOrigin: "240px 242px" }}
        />
        <motion.text
          x="240" y="252"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="rgba(142,142,150,0.7)"
          fontSize="8"
          fontFamily="'DM Sans', sans-serif"
          letterSpacing="4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          STUDIOS
        </motion.text>

        {/* Floating gold squares */}
        {[
          { x: 136, y: 136, size: 6, delay: 1.9 },
          { x: 338, y: 136, size: 4, delay: 2.0 },
          { x: 338, y: 338, size: 6, delay: 2.1 },
          { x: 136, y: 338, size: 4, delay: 2.2 },
        ].map((sq, i) => (
          <motion.rect
            key={i}
            x={sq.x - sq.size / 2}
            y={sq.y - sq.size / 2}
            width={sq.size}
            height={sq.size}
            fill="none"
            stroke="rgba(244,192,95,0.5)"
            strokeWidth="1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: sq.delay, duration: 0.3 }}
            style={{ transformOrigin: `${sq.x}px ${sq.y}px` }}
          />
        ))}
      </svg>

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(244,192,95,0.04) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
