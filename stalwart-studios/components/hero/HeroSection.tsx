"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { HeroData } from "@/lib/sanity.fetch";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { BorderBeam } from "@/components/magicui/border-beam";
import { TextAnimate } from "@/components/magicui/text-animate";
import { HeroBackground } from "./HeroBackground";
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

interface Props {
  data?: HeroData | null;
}

export function HeroSection({ data }: Props) {
  const d = data ?? DEFAULTS;
  const reduce = useReducedMotion();
  const taglineLine = d.taglineWords.join(" ");

  // Scroll hand-off: content fades as the next section takes over.
  const { scrollY } = useScroll();
  const contentOpacity = useTransform(scrollY, [0, 420], [1, 0]);

  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{ paddingTop: "68px", background: "var(--bg-primary)" }}
    >
      {/* Without JavaScript the headline shows fully and statically. */}
      <noscript>
        <style>{`.hero-text-animate span{opacity:1!important;filter:none!important;transform:none!important}`}</style>
      </noscript>

      <HeroBackground />

      <motion.div className="site-shell w-full py-14 md:py-20 relative z-10" style={{ opacity: contentOpacity }}>
        <div className="flex w-full flex-col items-center text-center">
          <motion.div {...rise(0, reduce)} className="hero-eyebrow-pill mb-5">
            <AnimatedShinyText className="text-[11px] font-medium tracking-[0.16em] uppercase">
              {d.eyebrow}
            </AnimatedShinyText>
          </motion.div>

          <TextAnimate
            as="h1"
            duration={0.45}
            segments={headlineSegments(d.headline)}
            className="font-fraunces font-semibold leading-[1.08] tracking-tight text-brand-primary mb-5 text-center text-[clamp(2.35rem,4.8vw,4.05rem)]"
          />

          <motion.p
            {...rise(0.15, reduce)}
            className="text-[15px] text-brand-primary font-normal mb-8 leading-relaxed lg:whitespace-nowrap"
          >
            {taglineLine}
          </motion.p>

          <motion.div {...rise(0.28, reduce)} className="flex flex-wrap justify-center gap-3 mb-7">
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

          <motion.div {...rise(0.38, reduce)} className="mb-10 w-full max-w-[640px]">
            <HeroPrompt />
          </motion.div>

          <motion.div
            {...rise(0.48, reduce)}
            className="hero-stats flex flex-wrap items-center justify-center"
          >
            {d.stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <p className="text-[15px] font-medium text-brand-primary">{stat.value}</p>
                <p className="text-[15px] uppercase tracking-[0.08em] text-brand-muted mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
