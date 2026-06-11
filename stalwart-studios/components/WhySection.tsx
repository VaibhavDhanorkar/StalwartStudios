"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { WhySectionData } from "@/lib/sanity.fetch";
import { SectionShell } from "./SectionShell";

// SVG icons redesigned to match the glowing, layered geometric style.
const PILLAR_ICONS: Record<string, React.ReactNode> = {
  Zap: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>
        <filter id="glowZap" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path d="M12.8 2.8 4.6 13.4h6.2l-1.2 7.8 8.2-10.6h-6.1l1.1-7.8Z" stroke="rgba(244,176,72,0.95)" strokeWidth="1.5" strokeLinejoin="round" filter="url(#glowZap)"/>
    </svg>
  ),
  Heart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>
        <filter id="glowHeart" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path d="M12 20.3 5.4 13.7a4.8 4.8 0 0 1 0-6.8 4.8 4.8 0 0 1 6.8 0l.8.8.8-.8a4.8 4.8 0 1 1 6.8 6.8L12 20.3Z" stroke="rgba(244,176,72,0.95)" strokeWidth="1.5" strokeLinejoin="round" filter="url(#glowHeart)"/>
    </svg>
  ),
  Shield: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>
        <filter id="glowShield" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path d="M12 21s7-3.6 7-9V6.2L12 3 5 6.2V12c0 5.4 7 9 7 9Z" stroke="rgba(244,176,72,0.95)" strokeWidth="1.5" strokeLinejoin="round" filter="url(#glowShield)"/>
    </svg>
  ),
  Coffee: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>
        <filter id="glowCoffee" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <polyline points="16 18 21 12 16 6" stroke="rgba(244,176,72,0.95)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" filter="url(#glowCoffee)"/>
      <polyline points="8 6 3 12 8 18" stroke="rgba(244,176,72,0.95)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" filter="url(#glowCoffee)"/>
    </svg>
  ),
  Performance: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>
        <filter id="glowPerf" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <circle cx="12" cy="12" r="9" stroke="rgba(244,176,72,0.95)" strokeWidth="1.5" filter="url(#glowPerf)"/>
      <path d="M12 7.6v4.6l3.4 2.1" stroke="rgba(244,176,72,0.95)" strokeWidth="1.5" strokeLinecap="round" filter="url(#glowPerf)"/>
    </svg>
  ),
  User: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>
        <filter id="glowUser" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <path d="M19.8 20.4v-1.6a4.7 4.7 0 0 0-4.7-4.7H8.9a4.7 4.7 0 0 0-4.7 4.7v1.6" stroke="rgba(244,176,72,0.95)" strokeWidth="1.5" strokeLinecap="round" filter="url(#glowUser)"/>
      <circle cx="12" cy="8" r="3.6" stroke="rgba(244,176,72,0.95)" strokeWidth="1.5" filter="url(#glowUser)"/>
    </svg>
  ),
  Lock: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>
        <filter id="glowLock" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect x="4.2" y="10.8" width="15.6" height="10.6" rx="2.2" stroke="rgba(244,176,72,0.95)" strokeWidth="1.5" filter="url(#glowLock)"/>
      <path d="M8 10.8V8a4 4 0 1 1 8 0v2.8" stroke="rgba(244,176,72,0.95)" strokeWidth="1.5" strokeLinecap="round" filter="url(#glowLock)"/>
    </svg>
  ),
  Code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>
        <filter id="glowCode" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <polyline points="16 18 21 12 16 6" stroke="rgba(244,176,72,0.95)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" filter="url(#glowCode)"/>
      <polyline points="8 6 3 12 8 18" stroke="rgba(244,176,72,0.95)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" filter="url(#glowCode)"/>
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
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <SectionShell
      sectionRef={ref}
      label={d.sectionLabel}
      heading={d.headline}
      headingClassName="whitespace-pre-line max-w-[640px]"
    >
      <div className="rounded-xl border border-brand-subtle overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x border-brand-subtle">
          {d.pillars.map((p, i) => {
            const IconEl = PILLAR_ICONS[p.icon] ?? PILLAR_ICONS.Code;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="px-6 py-8"
              >
                <div className="pillar-icon mb-5">{IconEl}</div>
                <h3 className="text-[15px] font-semibold text-brand-primary mb-2">{p.title}</h3>
                <p className="text-[13px] text-brand-secondary leading-relaxed">{p.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
