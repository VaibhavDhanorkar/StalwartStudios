"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useNarrowViewport } from "@/lib/useNarrowViewport";
import { ArrowRight } from "lucide-react";
import type { HeroData } from "@/lib/sanity.fetch";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { BorderBeam } from "@/components/magicui/border-beam";
import { TextAnimate } from "@/components/magicui/text-animate";
import { HeroBackground } from "./HeroBackground";
import { heroMarkAssemblyEnabled, heroSettleDelay, heroSettleDuration, MarkAssembly } from "./MarkAssembly";
import { HeroPrompt } from "./HeroPrompt";

const DEFAULTS: HeroData = {
  eyebrow: "Independent Product Studio · AI-enabled",
  headline: "We engineer [[what’s next.]]",
  taglineWords: ["Intelligent digital products and AI-driven solutions for businesses shaping what’s next."],
  body:
    "Stalwart Digital Studios ships its own products and builds AI-enabled software for businesses and consumers — conversational agents, document workflows, in-app assistants, and personalised experiences, engineered for production from day one.",
  ctaPrimary: "Our Products",
  ctaSecondary: "What we build with AI",
  stats: [
    { value: "Global", label: "Distribution" },
    { value: "B2C & B2B", label: "Products" },
    { value: "2026", label: "Est." },
  ],
};

function headlineSegments(headline: string) {
  return headline
    .split(/(\[\[[^\]]+\]\])/g)
    .filter(Boolean)
    .map((segment) => {
      const match = segment.match(/^\[\[(.+)\]\]$/);
      return match ? { text: match[1], className: "text-gold" } : { text: segment };
    });
}

const rise = (delay: number, reduce: boolean | null) => ({
  initial: reduce ? false : { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const, delay },
});

const SETTLE_FROM = [
  { x: -52, y: -44 },
  { x: 46, y: 36 },
  { x: -40, y: 58 },
  { x: 64, y: -28 },
  { x: -36, y: 70 },
  { x: 48, y: 42 },
] as const;

const SETTLE_STAGGER = 0.08;
const SETTLE_STEPS = 4;

function settleAt(index: number) {
  const step = index <= 1 ? 0 : index - 1;
  const from = SETTLE_FROM[index];
  return {
    initial: { opacity: 0, x: from.x, y: from.y },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: {
      duration: heroSettleDuration - SETTLE_STEPS * SETTLE_STAGGER,
      ease: [0.45, 0, 0.55, 1] as const,
      delay: heroSettleDelay + step * SETTLE_STAGGER,
    },
  };
}

interface Props {
  data?: HeroData | null;
}

export function HeroSection({ data }: Props) {
  const d = data ?? DEFAULTS;
  const reduce = useReducedMotion();
  const mobile = useNarrowViewport();
  const sectionRef = useRef<HTMLElement>(null);
  const taglineLine = d.taglineWords.join(" ");

  // Desktop hand-off: content fades across the first 420px. Phones keep the copy
  // until the hero section itself leaves the viewport.
  const { scrollY } = useScroll();
  const desktopOpacity = useTransform(scrollY, [0, 420], [1, 0]);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  });
  const mobileOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const playSettle = heroMarkAssemblyEnabled && !reduce;
  const headlineClass =
    "font-fraunces font-semibold leading-[1.08] tracking-tight text-brand-primary mb-5 text-center text-[clamp(2.35rem,4.6vw,5.75rem)]";

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden max-md:items-start max-md:overflow-x-hidden max-md:overflow-y-visible"
      style={{ paddingTop: "68px", background: "var(--bg-primary)" }}
    >
      {/* Without JavaScript the headline shows fully and statically. */}
      <noscript>
        <style>{`.hero-text-animate span,.hero-settle{opacity:1!important;filter:none!important;transform:none!important}`}</style>
      </noscript>

      <HeroBackground />
      {heroMarkAssemblyEnabled && <MarkAssembly />}

      <motion.div
        className="site-shell w-full py-14 max-md:py-8 md:py-20 relative z-10"
        style={{ opacity: mobile ? mobileOpacity : desktopOpacity }}
      >
        <div className="flex w-full flex-col items-center text-center">
          <motion.div
            {...(playSettle ? settleAt(0) : rise(0, reduce))}
            className="hero-eyebrow-pill hero-settle mb-5"
          >
            <AnimatedShinyText className="text-[11px] font-medium tracking-[0.16em] uppercase">
              {d.eyebrow}
            </AnimatedShinyText>
          </motion.div>

          {playSettle ? (
            <motion.h1 {...settleAt(1)} className={`hero-settle ${headlineClass}`}>
              {headlineSegments(d.headline).map((segment, index) => (
                <span key={index} className={segment.className}>
                  {segment.text}
                </span>
              ))}
            </motion.h1>
          ) : (
            <TextAnimate
              as="h1"
              duration={0.45}
              segments={headlineSegments(d.headline)}
              className={headlineClass}
            />
          )}

          <motion.p
            {...(playSettle ? settleAt(2) : rise(0.15, reduce))}
            className="hero-settle text-[clamp(15px,1.05vw,18px)] text-brand-primary font-normal mb-8 leading-relaxed lg:whitespace-nowrap"
          >
            {taglineLine}
          </motion.p>

          <motion.div
            {...(playSettle ? settleAt(3) : rise(0.28, reduce))}
            className="hero-settle flex flex-wrap justify-center gap-3 mb-7"
          >
            <Link
              href="/products"
              className="btn-primary group relative inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wide"
            >
              {d.ctaPrimary}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
              {!reduce && <BorderBeam size={60} duration={7} colorFrom="#FFFFFF" colorTo="#F4B048" borderWidth={2} />}
            </Link>
            <Link
              href="/services/ai-enabled-products"
              className="btn-secondary inline-flex items-center px-6 py-3 text-sm tracking-wide"
            >
              {d.ctaSecondary}
            </Link>
          </motion.div>

          <motion.div
            {...(playSettle ? settleAt(4) : rise(0.38, reduce))}
            className="hero-settle mb-10 w-full max-w-[clamp(640px,46vw,920px)]"
          >
            <HeroPrompt />
          </motion.div>

          <motion.div
            {...(playSettle ? settleAt(5) : rise(0.48, reduce))}
            className="hero-settle hero-stats flex flex-wrap items-center justify-center"
          >
            {d.stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <p className="text-[15px] font-medium text-brand-primary">{stat.value}</p>
                <p className="text-[7.5px] uppercase tracking-[0.08em] text-brand-muted mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
