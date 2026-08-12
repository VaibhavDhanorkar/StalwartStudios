"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { AboutSectionData } from "@/lib/sanity.fetch";
import { SectionShell } from "./SectionShell";

const DEFAULTS: AboutSectionData = {
  sectionLabel: "About the Studio",
  headline: "Started with a notebook and a stubborn belief that software could feel better.",
  storyParagraphs: [
    "Stalwart Digital Studios began as a simple question: why does so much software feel like it was built for the developer's convenience rather than the person using it every day?",
    "We're a small, independent studio from India — building tools we genuinely wish existed. Every product we ship starts with a human problem, not a feature list.",
    "We don't have a venture fund behind us. We have standards. And we think that's a better foundation to build from.",
  ],
  mission: "To build software that respects the people who use it — their time, their attention, and their goals.",
  designPhilosophy: "Every pixel is a promise — we design for the person, not the portfolio.",
  longTermVision: "A small team, a tight portfolio, and a reputation for shipping things that matter.",
};

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  Mission: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <defs>
        <filter id="glowMission" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <circle cx="12" cy="12" r="8.6" stroke="rgba(244,176,72,0.95)" strokeWidth="1.4" filter="url(#glowMission)" />
      <path d="M15.4 8.6 12.9 12.9 8.6 15.4 11.1 11.1 15.4 8.6Z" stroke="rgba(244,176,72,0.95)" strokeWidth="1.3" strokeLinejoin="round" filter="url(#glowMission)" />
    </svg>
  ),
  DesignPhilosophy: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <defs>
        <filter id="glowDesign" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path d="M12 3 20 9.2 12 21 4 9.2 12 3Z" stroke="rgba(244,176,72,0.95)" strokeWidth="1.4" strokeLinejoin="round" filter="url(#glowDesign)" />
      <path d="M7.4 9.2h9.2M9.7 9.2 12 3M14.3 9.2 12 3" stroke="rgba(244,176,72,0.7)" strokeWidth="1" filter="url(#glowDesign)" />
    </svg>
  ),
  LongTermVision: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <defs>
        <filter id="glowVision" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path d="M2.5 12S6 6.2 12 6.2 21.5 12 21.5 12 18 17.8 12 17.8 2.5 12 2.5 12Z" stroke="rgba(244,176,72,0.95)" strokeWidth="1.4" strokeLinejoin="round" filter="url(#glowVision)" />
      <circle cx="12" cy="12" r="3" stroke="rgba(244,176,72,0.95)" strokeWidth="1.4" filter="url(#glowVision)" />
    </svg>
  ),
};

interface Props { data: AboutSectionData | null; }

export function AboutSection({ data }: Props) {
  const d = data ?? DEFAULTS;
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const pillars = [
    { key: "Mission", label: "Mission", text: d.mission },
    { key: "DesignPhilosophy", label: "Design Philosophy", text: d.designPhilosophy },
    { key: "LongTermVision", label: "Long-term Vision", text: d.longTermVision },
  ];

  return (
    <SectionShell
      id="about"
      sectionRef={ref}
      label={d.sectionLabel}
      heading={d.headline}
      headingClassName="max-w-[780px]"
    >
      {/* Story — full width */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.15 }}
        className="space-y-4 max-w-3xl mb-14"
      >
        {d.storyParagraphs.map((p, i) => (
          <p key={i} className="text-[15px] text-brand-muted leading-relaxed">{p}</p>
        ))}
      </motion.div>

      {/* Mission / Design Philosophy / Long-term Vision — prominent icon-card row */}
      <div className="rounded-xl border border-brand-subtle overflow-hidden">
        <div className="pillar-grid pillar-grid--3 grid grid-cols-1 md:grid-cols-3 items-stretch">
          {pillars.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.12 }}
              className="pillar-grid-item group relative h-full"
            >
              <span
                className={`pillar-glow-top ${i % 2 === 0 ? "pillar-glow-top--gold" : "pillar-glow-top--teal"}`}
              />
              <span className="pillar-fade-line-v" aria-hidden="true" />
              <span className="pillar-fade-line-h" aria-hidden="true" />
              <div className="pillar-cell h-full">
                <div className="pillar-icon mb-5">{PILLAR_ICONS[item.key]}</div>
                <h3 className="text-[15px] font-semibold text-brand-primary mb-2">
                  {item.label}
                </h3>
                <p className="text-[13px] text-brand-secondary leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
