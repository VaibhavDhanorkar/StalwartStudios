"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { DeliveryProcess } from "./DeliveryProcess";
import { aiBuildPrinciples } from "@/lib/content/aiPractice";

export function StudioAiPracticeSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  return (
    <>
      <section
        id="ai"
        ref={ref}
        className="relative py-14 scroll-mt-[88px]"
        style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-subtle)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="section-card rounded-2xl px-6 md:px-10 py-6 md:py-8">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="section-heading-line" />
                <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-brand-gold">
                  AI practice
                </span>
              </div>
              <h2
                className="font-fraunces font-semibold text-brand-primary leading-[1.1]"
                style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)" }}
              >
                How we build with AI.
              </h2>
            </div>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={inView || reduceMotion ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[15px] text-brand-secondary leading-relaxed max-w-3xl mb-10"
            >
              Every AI feature we build is designed around a real user, measured against real cases,
              and built to run reliably at scale — for business teams and for everyday consumers.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {aiBuildPrinciples.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={inView || reduceMotion ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.05 + i * 0.05 }}
                  className="rounded-lg border p-5"
                  style={{ borderColor: "var(--border-subtle)", background: "var(--bg-elevated)" }}
                >
                  <h3 className="text-[14px] font-semibold text-brand-primary mb-2">{p.title}</h3>
                  <p className="text-[13px] text-brand-secondary leading-relaxed">{p.description}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/services/ai-enabled-products"
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand-gold hover:opacity-90 transition-opacity duration-200 mt-8 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              See what we build with AI
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      <DeliveryProcess id="studio-process" variant="compact" />

      <section
        className="relative pb-14"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Link
            href="/contact?topic=ai-enabled-products"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm"
          >
            Discuss an AI build
          </Link>
        </div>
      </section>
    </>
  );
}
