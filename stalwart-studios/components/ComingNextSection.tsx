"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionShell } from "./SectionShell";

const DEFAULTS = [
  {
    _id: "broker",
    name: "Broker Pilot",
    category: "Finance & Trading",
    description:
      "An intelligent workspace for independent brokers. Manage clients, track portfolios, and make better decisions — from one clean interface.",
    status: "Ideation",
    accentColor: "#158C7D",
  },
  {
    _id: "ai",
    name: "AI Workspace",
    category: "Productivity",
    description:
      "A focused environment where AI becomes your thinking partner. Designed for professionals who need depth, not distraction.",
    status: "Ideation",
    accentColor: "#F4B048",
  },
];

/** Restored “What's Coming Next” section from the prior site (brand-name sweep only). */
export function ComingNextSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionShell
      id="coming-next"
      sectionRef={ref}
      label="What's Coming Next"
      heading="Ideas taking shape."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DEFAULTS.map((p, i) => (
          <motion.div
            key={p._id}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.45, ease: "easeOut" }}
            className="rounded-lg border p-6 transition-transform duration-200 hover:scale-[1.01]"
            style={{
              borderColor: "var(--border-subtle)",
              background: "var(--bg-elevated)",
              borderTop: `2px solid ${p.accentColor}`,
            }}
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <span
                className="text-[11px] uppercase tracking-[0.14em]"
                style={{ color: p.accentColor }}
              >
                {p.category}
              </span>
              <span className="text-[11px] text-brand-muted uppercase tracking-[0.12em]">
                {p.status}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-brand-primary mb-2">{p.name}</h3>
            <p className="text-sm text-brand-secondary leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
