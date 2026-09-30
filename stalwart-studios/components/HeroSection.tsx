"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { HeroData } from "@/lib/sanity.fetch";
import { HeroGrid } from "./HeroGrid";

const DEFAULTS: HeroData = {
  eyebrow: "Independent Product Studio · Consumer & enterprise",
  headline: "We build software [[worth using]].",
  taglineWords: ["Consumer and enterprise.", "Owned end to end.", "Shipped worldwide."],
  body:
    "Stalwart Digital Studios builds and ships its own products — consumer mobile apps, enterprise SaaS, and games — for a global market.",
  ctaPrimary: "Our Products",
  ctaSecondary: "Our Story",
  stats: [
    { value: "Global", label: "Distribution" },
    { value: "B2C & B2B", label: "Products" },
    { value: "2026", label: "Est." },
  ],
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function renderHeadline(headline: string) {
  const segments = headline.split(/(\[\[[^\]]+\]\])/g).filter(Boolean);
  return segments.map((segment, i) => {
    const match = segment.match(/^\[\[(.+)\]\]$/);
    if (match) {
      return (
        <span key={i} className="text-gold">
          {match[1]}
        </span>
      );
    }
    return <span key={i}>{segment}</span>;
  });
}

interface Props {
  data?: HeroData | null;
}

export function HeroSection({ data }: Props) {
  const d = data ?? DEFAULTS;
  const taglineLine = d.taglineWords.join(" ");

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "68px", background: "var(--bg-primary)" }}
    >
      <HeroGrid />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-14 md:py-20 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start text-left max-w-[620px] md:max-w-[1040px]"
        >
          <motion.p
            variants={item}
            className="text-[11px] font-medium tracking-[0.16em] uppercase text-brand-muted mb-4"
          >
            {d.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-fraunces font-semibold leading-[1.08] tracking-tight text-brand-primary mb-4"
            style={{ fontSize: "clamp(2.35rem, 4.8vw, 4.05rem)" }}
          >
            {renderHeadline(d.headline)}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-[15px] text-brand-teal font-semibold mb-3 leading-relaxed"
          >
            {taglineLine}
          </motion.p>

          <motion.p
            variants={item}
            className="text-[15px] text-brand-secondary leading-relaxed mb-9 max-w-[640px]"
          >
            {d.body}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap justify-start gap-3 mb-12">
            <Link
              href="/products"
              className="btn-primary group inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wide"
            >
              {d.ctaPrimary}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <Link
              href="/about"
              className="btn-secondary inline-flex items-center px-6 py-3 text-sm tracking-wide"
            >
              {d.ctaSecondary}
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap gap-10 md:gap-14 border-t border-brand-subtle pt-8 w-full max-w-xl"
          >
            {d.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xl md:text-2xl font-semibold text-brand-primary">{stat.value}</p>
                <p className="text-[11px] uppercase tracking-[0.14em] text-brand-muted mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
