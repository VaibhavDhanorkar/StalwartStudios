"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { AboutSectionData } from "@/lib/sanity.fetch";
import { SectionShell } from "./SectionShell";

const DEFAULTS: AboutSectionData = {
  sectionLabel: "About the Studio",
  headline: "Started with a notebook and a stubborn belief that software could feel better.",
  storyParagraphs: [
    "Stalwart Studios began as a simple question: why does so much software feel like it was built for the developer's convenience rather than the person using it every day?",
    "We're a small, independent studio from India — building tools we genuinely wish existed. Every product we ship starts with a human problem, not a feature list.",
    "We don't have a venture fund behind us. We have standards. And we think that's a better foundation to build from.",
  ],
  mission: "To build software that respects the people who use it — their time, their attention, and their goals.",
  designPhilosophy: "Every pixel is a promise — we design for the person, not the portfolio.",
  longTermVision: "A small team, a tight portfolio, and a reputation for shipping things that matter.",
};

interface Props { data: AboutSectionData | null; }

export function AboutSection({ data }: Props) {
  const d = data ?? DEFAULTS;
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionShell
      id="about"
      sectionRef={ref}
      label={d.sectionLabel}
      heading={d.headline}
      headingClassName="max-w-[780px]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left */}
        <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="space-y-4"
            >
              {d.storyParagraphs.map((p, i) => (
                <p key={i} className="text-[15px] text-brand-muted leading-relaxed">{p}</p>
              ))}
            </motion.div>
        </div>

        {/* Right */}
        <div className="space-y-8">
          {[
            { sym: "→", label: "Mission", text: d.mission },
            { sym: "◇", label: "Design Philosophy", text: d.designPhilosophy },
            { sym: "◎", label: "Long-term Vision", text: d.longTermVision },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 18 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.18 + i * 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-brand-gold font-mono text-sm">{item.sym}</span>
                <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-brand-secondary">
                  {item.label}
                </span>
              </div>
              <p
                className="pl-6 border-l transition-colors duration-300 text-[14px] text-brand-muted leading-[1.65]"
                style={{ borderColor: "var(--border)" }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
