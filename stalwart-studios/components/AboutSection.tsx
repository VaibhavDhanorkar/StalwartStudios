"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-28 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="section-line" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary">
            About the Studio
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-fraunces text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-text-primary mb-8"
            >
              Started with a notebook and a stubborn belief that software could feel better.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-5 text-text-secondary text-base leading-relaxed"
            >
              <p>
                Stalwart Studios began as a simple question: why does so much software feel
                like it was built for the developer's convenience rather than the person
                using it every day?
              </p>
              <p>
                We're a small, independent studio from India — building tools we genuinely
                wish existed. Every product we ship starts with a human problem, not a
                feature list. We prototype obsessively, cut ruthlessly, and only ship when
                something feels truly ready.
              </p>
              <p>
                We don't have a venture fund behind us. We have standards. And we think
                that's a better foundation to build from.
              </p>
            </motion.div>
          </div>

          {/* Right: pillars */}
          <div className="space-y-10">
            {[
              {
                label: "Mission",
                icon: "→",
                content:
                  "To build software that respects the people who use it — their time, their attention, and their goals. We exist to make the daily experience of digital tools genuinely better.",
              },
              {
                label: "Design Philosophy",
                icon: "◇",
                content:
                  "Every pixel is a promise — we design for the person, not the portfolio.",
              },
              {
                label: "Long-term Vision",
                icon: "◎",
                content:
                  "We want to become a studio that people trust the way they trust their favorite tools — quietly, deeply, and over many years. A small team, a tight portfolio, and a reputation for shipping things that matter.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12 }}
                className="group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-accent-gold font-mono text-sm">{item.icon}</span>
                  <span className="text-xs font-medium tracking-[0.18em] uppercase text-text-secondary">
                    {item.label}
                  </span>
                </div>
                <p
                  className={`leading-relaxed pl-6 border-l border-border/60 group-hover:border-accent-gold/30 transition-colors duration-300 ${
                    item.label === "Design Philosophy"
                      ? "text-text-primary font-fraunces text-lg italic font-light"
                      : "text-text-secondary text-sm"
                  }`}
                >
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
