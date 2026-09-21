"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroGrid } from "./HeroGrid";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function HeroSection() {
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
          <motion.h1
            variants={item}
            className="font-fraunces font-semibold leading-[1.08] tracking-tight text-brand-primary mb-4"
            style={{ fontSize: "clamp(2.35rem, 4.8vw, 4.05rem)" }}
          >
            <span className="block md:whitespace-nowrap">
              Crafting <span className="text-gold">exceptional</span> software
            </span>
            <span className="block md:whitespace-nowrap">for a better digital tomorrow.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-[15px] text-brand-teal font-semibold mb-3 leading-relaxed"
          >
            Independent. Visionary. People-driven.
          </motion.p>

          <motion.p
            variants={item}
            className="text-[15px] text-brand-secondary leading-relaxed mb-9 max-w-[640px]"
          >
            We design and build digital products that are high-performance and customer-centric,
            made to create real impact.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap justify-start gap-3">
            <Link
              href="/products"
              className="btn-primary group inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wide"
            >
              Explore Products
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <Link
              href="/about"
              className="btn-secondary inline-flex items-center px-6 py-3 text-sm tracking-wide"
            >
              About the Studio
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
