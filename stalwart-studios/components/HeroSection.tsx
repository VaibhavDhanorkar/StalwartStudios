"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HeroGeometric } from "./HeroGeometric";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] opacity-[0.04]"
          style={{
            background: "radial-gradient(ellipse at top left, #F4C05F, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-[0.04]"
          style={{
            background: "radial-gradient(ellipse at bottom right, #158C7D, transparent 70%)",
          }}
        />
        {/* Fine grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(237,232,224,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(237,232,224,0.6) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <span className="section-line" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary">
                Independent Software Studio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-fraunces text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.08] tracking-tight text-text-primary mb-6"
            >
              Crafting{" "}
              <em className="not-italic text-gradient-gold">exceptional</em>{" "}
              software for a better digital tomorrow.
            </motion.h1>

            {/* Supporting */}
            <motion.div variants={itemVariants} className="mb-3">
              <p className="text-text-secondary text-base tracking-wide leading-relaxed">
                Independent.{" "}
                <span className="text-text-primary/70">Focused.</span>{" "}
                <span className="text-text-primary/50">Purpose-driven.</span>
              </p>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-base leading-relaxed max-w-[480px] mb-10"
            >
              We design and build digital products that are high-performance and
              customer-centric — incredibly powerful and made to create real
              impact.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <button
                onClick={scrollToProducts}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-gold text-bg-primary text-sm font-semibold tracking-wide hover:bg-[#E8A83A] transition-all duration-300 hover:shadow-[0_0_24px_rgba(244,192,95,0.25)]"
              >
                Explore Products
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-text-secondary text-sm font-medium tracking-wide hover:border-text-secondary hover:text-text-primary transition-all duration-300"
              >
                Learn More
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="mt-14 pt-8 border-t border-border/50 grid grid-cols-3 gap-6"
            >
              {[
                { val: "2024", label: "Founded" },
                { val: "1+", label: "Products" },
                { val: "India", label: "Based in" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-fraunces text-xl font-semibold text-text-primary">
                    {s.val}
                  </div>
                  <div className="text-xs text-text-secondary tracking-wide mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Geometric */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <HeroGeometric />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={scrollToProducts}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-text-secondary/50 hover:text-text-secondary transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
