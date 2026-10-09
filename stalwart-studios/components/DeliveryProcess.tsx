"use client";

import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { deliverySteps } from "@/lib/content/process";

type Props = {
  note?: string;
  id?: string;
  variant?: "full" | "compact";
};

export function DeliveryProcess({ note, id = "process", variant = "full" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  if (variant === "compact") {
    return (
      <section
        id={id}
        ref={ref}
        className="scroll-mt-[88px]"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="fade-rule" />
          <div className="py-12 md:py-14">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="section-heading-line" />
                  <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-brand-gold">
                    How we deliver
                  </span>
                </div>
                <h2
                  className="font-fraunces font-semibold text-brand-primary leading-[1.1]"
                  style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}
                >
                  From first conversation to launch — and beyond.
                </h2>
              </div>
              <Link
                href="/services#process"
                className="group inline-flex items-center gap-2 text-sm font-medium text-brand-gold shrink-0 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                See how we deliver
                <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            <ol className="process-connector process-connector--compact grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {deliverySteps.map((step, i) => (
                <motion.li
                  key={step.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={inView || reduceMotion ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: reduceMotion ? 0 : i * 0.06, ease: "easeOut" }}
                  className="relative flex items-center gap-3 rounded-xl border border-brand-subtle px-4 py-3.5"
                  style={{ background: "var(--bg-elevated)" }}
                >
                  <span className="text-[12px] font-semibold text-brand-gold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] font-medium text-brand-primary">{step.title}</span>
                </motion.li>
              ))}
            </ol>
            {note ? (
              <p className="text-[13px] text-brand-muted leading-relaxed mt-6 max-w-3xl">{note}</p>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  return (
    <SectionShell
      id={id}
      sectionRef={ref}
      label="How we deliver"
      heading="From first conversation to launch — and beyond."
      headingClassName="max-w-[720px]"
      sectionClassName="scroll-mt-[68px]"
    >
      <ol className="process-connector process-connector--full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {deliverySteps.map((step, i) => (
          <motion.li
            key={step.title}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={inView || reduceMotion ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: reduceMotion ? 0 : i * 0.06, ease: "easeOut" }}
            className="relative rounded-xl border p-5 h-full"
            style={{ borderColor: "var(--border-subtle)", background: "var(--bg-elevated)" }}
          >
            <span
              className="inline-flex items-center justify-center w-9 h-9 rounded-full text-[12px] font-semibold text-brand-gold tabular-nums mb-4"
              style={{
                border: "1px solid color-mix(in srgb, var(--accent-gold) 30%, transparent)",
                background: "color-mix(in srgb, var(--accent-gold) 7%, var(--bg-elevated))",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-[15px] font-semibold text-brand-primary mb-2">{step.title}</h3>
            <p className="text-[13px] text-brand-secondary leading-relaxed mb-4">{step.description}</p>
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-brand-muted mb-2">
              You get
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {step.youGet.map((g) => (
                <li key={g} className="chip" style={{ fontSize: 11, padding: "2px 8px" }}>
                  {g}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
      {note ? (
        <p className="text-[13px] text-brand-muted leading-relaxed mt-6 max-w-3xl">{note}</p>
      ) : null}
    </SectionShell>
  );
}
