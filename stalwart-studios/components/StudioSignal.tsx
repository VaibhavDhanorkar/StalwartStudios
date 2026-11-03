"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { studioInDev } from "@/lib/products";

export function StudioSignal() {
  const lead = studioInDev[0];
  const cardRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.9", "start 0.5"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-32, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.55, 1]);
  const chipOpacity = useTransform(scrollYProgress, [0.62, 1], reduce ? [1, 1] : [0, 1]);

  return (
    <section
      className="relative overflow-hidden py-14"
      style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="site-shell">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="section-heading-line" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-brand-gold">
                Studio
              </span>
            </div>
            <h2
              className="font-fraunces font-semibold text-brand-primary leading-[1.1]"
              style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)" }}
            >
              What we&apos;re building next
            </h2>
            <p className="text-sm text-brand-secondary mt-3 max-w-lg">
              A lean engineering practice. One in-development product on the public board.
            </p>
          </div>
          <Link
            href="/studio"
            className="group inline-flex items-center gap-2 text-sm font-medium text-brand-gold hover:opacity-90 transition-opacity duration-200"
          >
            Visit the Studio
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        <motion.div ref={cardRef} style={{ y, opacity }}>
          <div
            className="rounded-lg border px-6 py-5 transition-transform duration-200 hover:scale-[1.01]"
            style={{ borderColor: "var(--border-subtle)", background: "var(--bg-surface)" }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-brand-primary">{lead.name}</h3>
              <motion.span
                className="text-[11px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
                style={{
                  opacity: chipOpacity,
                  color: "var(--accent-gold-muted)",
                  border: "1px solid color-mix(in srgb, var(--accent-gold) 28%, transparent)",
                  background: "color-mix(in srgb, var(--accent-gold) 6%, transparent)",
                }}
              >
                {lead.statusLabel}
              </motion.span>
            </div>
            <p className="text-sm text-brand-secondary max-w-2xl leading-relaxed">{lead.description}</p>
          </div>
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm"
          >
            Start a conversation
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
