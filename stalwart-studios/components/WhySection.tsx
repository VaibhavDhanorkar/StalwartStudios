"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Heart, Shield, Coffee } from "lucide-react";

const pillars = [
  {
    icon: <Zap size={20} />,
    title: "Performance First",
    desc: "Every millisecond is deliberate. We build products that feel fast, reliable, and worthy of your daily trust.",
  },
  {
    icon: <Heart size={20} />,
    title: "Human Centered",
    desc: "Technology exists to serve people, not the other way around. We design for the real human on the other side of the screen.",
  },
  {
    icon: <Shield size={20} />,
    title: "Privacy Focused",
    desc: "Your data is yours. We build with privacy as a foundation, not an afterthought — no exceptions.",
  },
  {
    icon: <Coffee size={20} />,
    title: "Independent Studio",
    desc: "No investors dictating roadmaps. No trend-chasing. Just a small team building products we'd want to use ourselves.",
  },
];

export function WhySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="section-line" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary">
            Why Stalwart Studios
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-fraunces text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-text-primary max-w-xl mb-16"
        >
          Built on principles,<br />not just preferences.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-xl border border-border/60 bg-bg-surface/50 hover:border-border transition-all duration-300 hover:bg-bg-elevated cursor-default"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300"
                style={{
                  background: "rgba(244,192,95,0.08)",
                  color: "rgba(244,192,95,0.7)",
                }}
              >
                {p.icon}
              </div>
              <h3 className="font-fraunces text-base font-semibold text-text-primary mb-2 group-hover:text-accent-gold transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
