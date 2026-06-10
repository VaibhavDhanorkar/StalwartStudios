"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lock } from "lucide-react";

const upcoming = [
  {
    name: "Broker Pilot",
    category: "Finance & Trading",
    desc: "An intelligent workspace for independent brokers. Manage clients, track portfolios, and make better decisions — from one clean interface.",
    accent: "#158C7D",
  },
  {
    name: "AI Workspace",
    category: "Productivity",
    desc: "A focused environment where AI becomes your thinking partner. Designed for professionals who need depth, not distraction.",
    accent: "#F4C05F",
  },
];

export function FutureProducts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="section-line" style={{ background: "#158C7D" }} />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary">
            What's Coming
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-fraunces text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-text-primary max-w-xl mb-16"
        >
          The pipeline is full.<br />Good things take time.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcoming.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.15 }}
              className="group relative p-8 rounded-2xl border border-border bg-bg-surface overflow-hidden cursor-default"
            >
              {/* Faint accent glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${p.accent}08, transparent)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-xs font-medium tracking-[0.2em] uppercase mb-2" style={{ color: p.accent }}>
                      {p.category}
                    </p>
                    <h3 className="font-fraunces text-2xl font-semibold text-text-primary">
                      {p.name}
                    </h3>
                  </div>
                  <div
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium"
                    style={{ borderColor: `${p.accent}40`, color: p.accent, background: `${p.accent}0D` }}
                  >
                    <Lock size={10} />
                    Coming Soon
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-text-secondary max-w-sm">
                  {p.desc}
                </p>

                {/* Progress bar */}
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-text-secondary/50 tracking-wide">
                      In development
                    </span>
                    <span className="text-xs font-medium" style={{ color: p.accent }}>
                      Ideation
                    </span>
                  </div>
                  <div className="h-px bg-border/60 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: p.accent }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: "18%" } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
