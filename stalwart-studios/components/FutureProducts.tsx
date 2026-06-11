"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { UpcomingProduct } from "@/lib/sanity.fetch";

const DEFAULTS: UpcomingProduct[] = [
  { _id: "broker", name: "Broker Pilot", category: "Finance & Trading", description: "An intelligent workspace for independent brokers. Manage clients, track portfolios, and make better decisions — from one clean interface.", status: "ideation", accentColor: "#158C7D" },
  { _id: "ai", name: "AI Workspace", category: "Productivity", description: "A focused environment where AI becomes your thinking partner. Designed for professionals who need depth, not distraction.", status: "ideation", accentColor: "#F4C05F" },
];

const STATUS_LABELS: Record<string, string> = {
  ideation: "Ideation", in_development: "In Development", coming_soon: "Coming Soon",
};
const STATUS_PCT: Record<string, number> = {
  ideation: 15, in_development: 45, coming_soon: 78,
};

interface Props { products: UpcomingProduct[]; }

export function FutureProducts({ products }: Props) {
  const items = products.length ? products : DEFAULTS;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-24"
      style={{ background: "#0A0A0B", borderTop: "1px solid #1E1E22" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-3"
        >
          <span className="gold-line" style={{ background: "#158C7D" }} />
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#8A8A94]">
            What's Coming
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-fraunces font-semibold text-[#EDE8E0] mb-12 leading-[1.1]"
          style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)" }}
        >
          The pipeline is full.<br />
          <span className="text-[#5A5A64] font-light">Good things take time.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((p, i) => (
            <motion.div
              key={p._id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12 }}
              className="group relative rounded-xl p-7 overflow-hidden cursor-default"
              style={{ background: "#111113", border: "1px solid #1E1E22" }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${p.accentColor}07, transparent)` }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-2" style={{ color: p.accentColor }}>
                      {p.category}
                    </p>
                    <h3 className="font-fraunces text-xl font-semibold text-[#EDE8E0]">{p.name}</h3>
                  </div>
                  <span
                    className="flex-shrink-0 text-[10px] font-medium px-3 py-1.5 rounded-full mt-1"
                    style={{ border: `1px solid ${p.accentColor}35`, color: p.accentColor, background: `${p.accentColor}0C` }}
                  >
                    {STATUS_LABELS[p.status] ?? "Coming Soon"}
                  </span>
                </div>

                <p className="text-[13px] text-[#6A6A74] leading-relaxed mb-7">{p.description}</p>

                {/* Progress bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] text-[#4A4A52]">Development progress</span>
                    <span className="text-[11px] font-medium" style={{ color: p.accentColor }}>
                      {STATUS_LABELS[p.status]}
                    </span>
                  </div>
                  <div className="h-px rounded-full overflow-hidden" style={{ background: "#1E1E22" }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: p.accentColor }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${STATUS_PCT[p.status] ?? 15}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.4 + i * 0.12, ease: "easeOut" }}
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
