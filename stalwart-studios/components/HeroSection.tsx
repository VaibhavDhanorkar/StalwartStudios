"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
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
  eyebrow: "Indie Software Studio",
  headline: "Crafting [[exceptional]] software for a better digital tomorrow.",
  taglineWords: ["Independent.", "Focused.", "Purpose-driven."],
  body: "We design and build digital products that are beautifully intuitive, incredibly powerful and made to create real impact.",
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
      {/* Background warm vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 60% 50%,
              rgba(120,70,5,0.14) 0%,
              transparent 65%
            )
          `,
        }}
      />
      {/* Fine grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(237,232,224,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(237,232,224,1) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_380px] gap-6 xl:gap-8 items-center">

          {/* ── Col 1: Text ── */}
          <motion.div
            variants={container} initial="hidden" animate="show"
            className="flex flex-col lg:col-span-1"
          >
            {/* Eyebrow pill */}
            <motion.div variants={item} className="mb-6">
              <span className="eyebrow-pill">
                <span
                  className="w-1.5 h-1.5 rounded-full inline-block"
                  style={{ background: "#F4C05F" }}
                />
                {d.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-fraunces font-semibold leading-[1.07] tracking-tight text-[#EDE8E0] mb-5"
              style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.6rem)" }}
            >
              <Headline raw={d.headline} />
            </motion.h1>

            {/* Tagline */}
            <motion.p variants={item} className="text-[15px] text-[#8A8A94] mb-2 leading-relaxed">
              {d.taglineWords.join(" ")}
            </motion.p>

            {/* Body */}
            <motion.p variants={item} className="text-[15px] text-[#8A8A94] leading-relaxed mb-9 max-w-[440px]">
              {d.body}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={toProducts}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-md font-medium text-sm tracking-wide transition-all duration-200"
                style={{
                  background: "#F4C05F",
                  color: "#0A0A0B",
                  boxShadow: "0 0 24px rgba(244,192,95,0.2)",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#E8A840")}
                onMouseLeave={e => (e.currentTarget.style.background = "#F4C05F")}
              >
                {d.ctaPrimary}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={toAbout}
                className="inline-flex items-center px-6 py-3 rounded-md border text-[#EDE8E0] text-sm font-medium tracking-wide transition-all duration-200 hover:border-[#4A4A52]"
                style={{ borderColor: "#2A2A2F", background: "transparent" }}
              >
                {d.ctaSecondary}
              </button>
            </motion.div>
          </motion.div>

          {/* ── Col 2: Geometric ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
            style={{ minHeight: "420px" }}
          >
            <HeroGeometric />
          </motion.div>

          {/* ── Col 3: Phone mockup (scaled down properly) ── */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center"
          >
            {/* Phone frame - max 340px, naturally sized */}
            <div
              className="phone-frame overflow-hidden relative"
              style={{ width: "220px", flexShrink: 0 }}
            >
              {/* Notch */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-20 h-5 rounded-b-2xl"
                style={{ background: "#0A0A0B" }}
              />
              <Image
                src="/focus-champ-alt.png"
                alt="Focus Champ app"
                width={220}
                height={480}
                className="w-full object-cover object-top"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Featured product strip — dark card spanning full width at bottom of hero */}
      <FeaturedStrip />
    </section>
  );
}

// Inline featured-product strip (inside hero, matching the design)
function FeaturedStrip() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0"
      style={{ background: "#111113", borderTop: "1px solid #2A2A2F" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">
        <div className="flex flex-wrap items-center gap-6 md:gap-10">
          {/* Label */}
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#F4C05F]">
            Featured Product
          </span>

          {/* App icon + name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0" style={{ background: "#1A1A1D" }}>
              <Image src="/focus-champ-icon.png" alt="Focus Champ" width={40} height={40} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#EDE8E0]">Focus Champ</div>
              <div className="text-xs text-[#158C7D]">Stay Focused. Achieve More.</div>
            </div>
          </div>

          {/* Separator */}
          <div className="hidden md:block w-px h-8 bg-[#2A2A2F]" />

          {/* Features */}
          {[
            { label: "Smart Focus Timer", sub: "Eliminate distractions and stay in flow." },
            { label: "Habit & Streaks", sub: "Build consistency that lasts." },
            { label: "Progress Insights", sub: "Understand your focus patterns." },
          ].map((f) => (
            <div key={f.label} className="hidden lg:block">
              <div className="text-xs font-semibold text-[#EDE8E0] mb-0.5">{f.label}</div>
              <div className="text-xs text-[#8A8A94]">{f.sub}</div>
            </div>
          ))}

          {/* CTA */}
          <div className="ml-auto flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-[#8A8A94]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#8A8A94" }}>
                <path d="M3.18 23.76c.28.15.6.2.9.13l13.2-7.62-2.88-2.88-11.22 10.37zm-1.5-20.3c-.1.23-.17.5-.17.8v15.48c0 .3.06.57.17.8l.08.08L9.9 12.7v-.2L1.75 3.38l-.07.08zM20.7 10.37l-2.7-1.56-3.06 3.06 3.06 3.06 2.7-1.57c.77-.44.77-1.16.01-1.6l-.01.01zM4.08.24L17.28 7.86l-2.88 2.88L3.18.37c.28-.15.6-.2.9-.13z"/>
              </svg>
              Launching soon on Google Play
            </div>
            <span
              className="text-xs font-medium px-3 py-1.5 rounded-full"
              style={{ border: "1px solid rgba(244,192,95,0.35)", color: "#F4C05F", background: "rgba(244,192,95,0.06)" }}
            >
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
