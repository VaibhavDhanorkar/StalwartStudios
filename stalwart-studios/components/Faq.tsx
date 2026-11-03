"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { faqGroups } from "@/lib/content/faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((g) =>
    g.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  ),
};

function FaqHeading({
  index,
  progress,
  reduce,
  children,
}: {
  index: number;
  progress: MotionValue<number>;
  reduce: boolean | null;
  children: string;
}) {
  const start = Math.min(index * 0.22, 0.55);
  const opacity = useTransform(progress, [start, Math.min(start + 0.4, 1)], reduce ? [1, 1] : [0.2, 1]);
  return (
    <motion.h3 style={{ opacity }} className="text-[11px] font-medium uppercase tracking-[0.16em] text-brand-teal mb-3">
      {children}
    </motion.h3>
  );
}

export function Faq() {
  const baseId = useId();
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.45"],
  });
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <SectionShell id="faq" sectionRef={sectionRef} label="FAQ" heading="Questions, answered.">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="space-y-8 max-w-3xl">
        {faqGroups.map((group, gi) => (
          <div key={group.heading}>
            <FaqHeading index={gi} progress={scrollYProgress} reduce={reduceMotion}>
              {group.heading}
            </FaqHeading>
            <div className="divide-y divide-[var(--border-subtle)] border-y border-brand-subtle">
              {group.items.map((item, ii) => {
                const key = `${gi}-${ii}`;
                const open = openKey === key;
                const buttonId = `${baseId}-q-${key}`;
                const panelId = `${baseId}-a-${key}`;
                return (
                  <div key={item.question}>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenKey(open ? null : key)}
                      className={`w-full flex items-center justify-between gap-4 py-4 px-3 -mx-3 text-left text-[15px] font-medium rounded-lg transition-colors duration-200 hover:bg-white/[0.03] hover:text-brand-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                        open ? "text-brand-gold" : "text-brand-primary"
                      }`}
                    >
                      {item.question}
                      <ChevronDown
                        size={16}
                        aria-hidden="true"
                        className={`shrink-0 text-brand-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div id={panelId} role="region" aria-labelledby={buttonId}>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            key="answer"
                            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={reduceMotion ? { opacity: 0, transition: { duration: 0 } } : { height: 0, opacity: 0 }}
                            transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <p className="pb-4 text-[14px] text-brand-secondary leading-relaxed">{item.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
