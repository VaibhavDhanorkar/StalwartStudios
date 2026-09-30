"use client";

import { motion } from "framer-motion";

/** Hero background — full-field geometric drafting lines (no dot field). */
const ORIGIN_X = 500;
const ORIGIN_Y = 270;

export function HeroGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0" style={{ background: "var(--bg-primary)" }} />

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 72% 55% at 32% 48%, rgba(244,192,95,0.06) 0%, rgba(120,72,18,0.02) 45%, transparent 78%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "radial-gradient(ellipse 110% 95% at 36% 48%, black 25%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 110% 95% at 36% 48%, black 25%, transparent 90%)",
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
            {/* Outer field rings */}
            {[268, 318, 368].map((r, i) => (
              <motion.circle
                key={`outer-${r}`}
                cx={ORIGIN_X}
                cy={ORIGIN_Y}
                r={r}
                stroke="rgba(244,192,95,0.09)"
                strokeWidth="1"
                strokeDasharray={i === 1 ? "4 8" : undefined}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.2, delay: 0.15 * i, ease: "easeInOut" }}
              />
            ))}

            <motion.circle
              cx={ORIGIN_X}
              cy={ORIGIN_Y}
              r={206}
              stroke="rgba(244,192,95,0.14)"
              strokeWidth="1.1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.circle
              cx={ORIGIN_X}
              cy={ORIGIN_Y}
              r={142}
              stroke="rgba(244,192,95,0.11)"
              strokeWidth="1"
              strokeDasharray="5 7"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.2, delay: 0.25 }}
            />

            <motion.line
              x1={ORIGIN_X}
              y1="20"
              x2={ORIGIN_X}
              y2="520"
              stroke="rgba(244,192,95,0.07)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            />
            <motion.line
              x1="10"
              y1={ORIGIN_Y}
              x2="1310"
              y2={ORIGIN_Y}
              stroke="rgba(244,192,95,0.07)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            />
            <motion.line
              x1="10"
              y1="24"
              x2="1310"
              y2="516"
              stroke="rgba(244,192,95,0.045)"
              strokeWidth="0.8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            />
            <motion.line
              x1="1310"
              y1="24"
              x2="10"
              y2="516"
              stroke="rgba(244,192,95,0.045)"
              strokeWidth="0.8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            />

            <motion.rect
              x={ORIGIN_X - 168}
              y={ORIGIN_Y - 168}
              width="336"
              height="336"
              stroke="rgba(244,192,95,0.1)"
              strokeWidth="1"
              transform={`rotate(45 ${ORIGIN_X} ${ORIGIN_Y})`}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ transformOrigin: `${ORIGIN_X}px ${ORIGIN_Y}px` }}
            />

            <motion.path
              d="M 136 480 Q 42 264 224 88"
              stroke="rgba(244,168,50,0.22)"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.6, delay: 0.35 }}
            />
            <motion.path
              d="M 1098 68 Q 1242 258 1080 468"
              stroke="rgba(244,168,50,0.16)"
              strokeWidth="1.1"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.6, delay: 0.5 }}
            />
            <motion.path
              d="M 1180 120 Q 1260 270 1180 420"
              stroke="rgba(244,192,95,0.1)"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.65 }}
            />

            <motion.rect
              x="874"
              y="324"
              width="52"
              height="52"
              rx="9"
              fill="rgba(21,140,125,0.12)"
              stroke="rgba(74,173,159,0.4)"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            />
            <motion.path
              d="M 922 250 L 956 250 Q 974 250 974 268 L 974 306"
              stroke="rgba(74,173,159,0.45)"
              strokeWidth="1.4"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.95 }}
            />
            <motion.circle
              cx="220"
              cy="182"
              r="16"
              stroke="rgba(74,173,159,0.38)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.1, delay: 1 }}
            />

            {[
              [ORIGIN_X, 88],
              [ORIGIN_X, 452],
              [220, ORIGIN_Y],
              [1100, ORIGIN_Y],
            ].map(([cx, cy], i) => (
              <motion.g
                key={`ch${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 + i * 0.04 }}
              >
                <line
                  x1={cx - 6}
                  y1={cy}
                  x2={cx + 6}
                  y2={cy}
                  stroke="rgba(244,192,95,0.2)"
                  strokeWidth="0.9"
                />
                <line
                  x1={cx}
                  y1={cy - 6}
                  x2={cx}
                  y2={cy + 6}
                  stroke="rgba(244,192,95,0.2)"
                  strokeWidth="0.9"
                />
              </motion.g>
            ))}

            <motion.path
              d={`M${ORIGIN_X - 34} 338 L${ORIGIN_X - 34} 252 Q${ORIGIN_X - 34} 218 ${ORIGIN_X} 218 Q${ORIGIN_X + 34} 218 ${ORIGIN_X + 34} 252 L${ORIGIN_X + 34} 338`}
              stroke="rgba(244,192,95,0.18)"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.15 }}
            />
            <motion.line
              x1={ORIGIN_X - 44}
              y1="338"
              x2={ORIGIN_X + 44}
              y2="338"
              stroke="rgba(244,192,95,0.18)"
              strokeWidth="1.2"
              strokeLinecap="round"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.25 }}
              style={{ transformOrigin: `${ORIGIN_X}px 338px` }}
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
