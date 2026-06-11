"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroGeometric } from "./HeroGeometric";
import type { HeroData } from "@/lib/sanity.fetch";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const DEFAULTS: HeroData = {
  eyebrow: "Software Studio",
  headline: "Crafting [[exceptional]] software for a better digital tomorrow.",
  taglineWords: ["Independent.", "Visionary.", "People-driven."],
  body: "We design and build digital products that are high-performance and customer-centric products that are incredibly powerful and made to create real impact.",
  ctaPrimary: "Explore Our Products",
  ctaSecondary: "Learn More About Us",
  stats: [
    { value: "2024", label: "Founded" },
    { value: "1+", label: "Products" },
    { value: "India", label: "Based in" },
  ],
};

function Headline({ raw }: { raw: string }) {
  const parts = raw.split(/(\[\[.*?\]\])/g);
  return (
    <>
      {parts.map((p, i) => {
        const m = p.match(/^\[\[(.*?)\]\]$/);
        return m
          ? <span key={i} className="text-gold">{m[1]}</span>
          : <span key={i}>{p}</span>;
      })}
    </>
  );
}

interface Props { data: HeroData | null; }

export function HeroSection({ data }: Props) {
  const d = data ?? DEFAULTS;

  const toProducts = () => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  const toAbout = () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "68px" }}
    >
      {/* Structured hero geometric background spanning full hero */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.92]"
        style={{
          background: `
            radial-gradient(circle at 50% 45%, rgba(244,192,95,0.08) 0%, transparent 56%),
            linear-gradient(0deg, rgba(244,192,95,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244,192,95,0.045) 1px, transparent 1px),
            radial-gradient(circle at 12% 20%, rgba(244,192,95,0.08) 0%, transparent 26%),
            radial-gradient(circle at 88% 24%, rgba(244,192,95,0.08) 0%, transparent 26%),
            radial-gradient(circle at 84% 78%, rgba(244,192,95,0.07) 0%, transparent 24%),
            radial-gradient(circle at 16% 82%, rgba(244,192,95,0.07) 0%, transparent 24%)
          `,
          backgroundSize: "100% 100%, 90px 90px, 90px 90px, 100% 100%, 100% 100%, 100% 100%, 100% 100%",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 48%, rgba(0,0,0,0) 0%, rgba(10,10,11,0.35) 72%, rgba(10,10,11,0.75) 100%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.34] bg-center bg-cover"
        style={{ backgroundImage: "url('/hero-geometry-pattern.png')" }}
      />
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <HeroGeometric />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full py-14 md:py-18 relative z-10">
        <div className="grid grid-cols-1 items-center">

          {/* Left aligned text content */}
          <motion.div
            variants={container} initial="hidden" animate="show"
            className="flex flex-col items-start text-left max-w-[760px]"
          >
            {/* Eyebrow pill */}
            <motion.div variants={item} className="mb-6 self-start">
              <span className="eyebrow-pill">
                <span
                  className="w-1.5 h-1.5 rounded-full inline-block"
                  style={{ background: "var(--accent-gold)" }}
                />
                {d.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-fraunces font-semibold leading-[1.06] tracking-tight text-brand-primary mb-5 max-w-[760px]"
              style={{ fontSize: "clamp(2.35rem, 4.8vw, 4.05rem)" }}
            >
              <Headline raw={d.headline} />
            </motion.h1>

            {/* Tagline */}
            <motion.p variants={item} className="text-[15px] text-brand-teal mb-2 leading-relaxed">
              {d.taglineWords.join(" ")}
            </motion.p>

            {/* Body */}
            <motion.p variants={item} className="text-[15px] text-brand-secondary leading-relaxed mb-9 max-w-[760px]">
              {d.body}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap justify-start gap-3 mb-3">
              <button
                onClick={toProducts}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium text-sm tracking-wide transition-all duration-200"
                style={{
                  background: "var(--accent-gold)",
                  color: "var(--bg-primary)",
                  boxShadow: "none",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--accent-gold-dim)"; e.currentTarget.style.boxShadow = "0 0 24px rgba(244,176,72,0.38)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--accent-gold)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {d.ctaPrimary}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={toAbout}
                className="inline-flex items-center px-6 py-3 rounded-md border text-brand-primary text-sm font-medium tracking-wide transition-all duration-200 hover:border-brand"
                style={{ borderColor: "var(--border-subtle)", background: "transparent", boxShadow: "none" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 24px rgba(244,176,72,0.3)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; }}
              >
                {d.ctaSecondary}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
