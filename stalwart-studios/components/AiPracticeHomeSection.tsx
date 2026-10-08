"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { SectionShell } from "./SectionShell";
import { AiCapabilities } from "./ai/AiCapabilities";

export function AiPracticeHomeSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="ai-practice"
      sectionRef={ref}
      label="AI practice"
      heading="Where AI earns its place."
    >
      <motion.p
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={inView || reduceMotion ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-[15px] text-brand-secondary leading-relaxed max-w-3xl mb-8"
      >
        We start with the user, the workflow, and the outcome, then build AI into the moments where
        it saves time, cuts errors, or makes the product better to use.
      </motion.p>
      <AiCapabilities variant="compact" />
      <Link
        href="/studio#ai"
        className="group inline-flex items-center gap-2 text-sm font-medium text-brand-gold hover:opacity-90 transition-opacity duration-200 mt-8"
      >
        How we build with AI
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </SectionShell>
  );
}
