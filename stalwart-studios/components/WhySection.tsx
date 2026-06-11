"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { WhySectionData } from "@/lib/sanity.fetch";

// SVG icons matching the style in the reference (thin outline, gold tint)
const PILLAR_ICONS: Record<string, React.ReactNode> = {
  Zap: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  Heart: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  Shield: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Coffee: (
    // Use a code bracket instead — matches the "Indie & Independent" pillar in the design
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  Performance: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"/>
      <path d="M12 6v6l4 2"/>
    </svg>
  ),
  User: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  Lock: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  Code: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
};

const DEFAULTS: WhySectionData = {
  sectionLabel: "Why Stalwart Studios",
  headline: "Built on principles,\nnot just preferences.",
  pillars: [
    { icon: "Performance", title: "Performance First", description: "Fast, reliable and efficient software." },
    { icon: "User", title: "Human Centered", description: "Thoughtful design and intuitive experiences." },
    { icon: "Lock", title: "Privacy Focused", description: "Your data and trust are at the core of everything." },
    { icon: "Code", title: "Indie & Independent", description: "Built in India with passion, curiosity and a long-term vision for impact." },
  ],
};

interface Props { data: WhySectionData | null; }

export function WhySection({ data }: Props) {
  const d = data ?? DEFAULTS;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      style={{ background: "#111113", borderTop: "1px solid #1E1E22" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#1E1E22]">
          {d.pillars.map((p, i) => {
            const IconEl = PILLAR_ICONS[p.icon] ?? PILLAR_ICONS.Code;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="px-6 py-8 first:pl-0 last:pr-0"
              >
                <div className="pillar-icon mb-5">{IconEl}</div>
                <h3 className="text-[15px] font-semibold text-[#EDE8E0] mb-2">{p.title}</h3>
                <p className="text-[13px] text-[#8A8A94] leading-relaxed">{p.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
