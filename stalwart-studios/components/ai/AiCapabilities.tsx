"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { aiCapabilities, type AiCapability } from "@/lib/content/aiCapabilities";

type Variant = "compact" | "full";

type Props = {
  variant: Variant;
  capabilities?: AiCapability[];
};

function AudienceTag({ audience }: { audience: AiCapability["audience"] }) {
  return (
    <span
      className="inline-block text-[10px] font-semibold uppercase tracking-[0.14em] px-2 py-0.5 rounded"
      style={{
        color: "var(--accent-teal)",
        border: "1px solid color-mix(in srgb, var(--accent-teal) 35%, transparent)",
        background: "color-mix(in srgb, var(--accent-teal) 8%, transparent)",
      }}
    >
      {audience}
    </span>
  );
}

export function AiCapabilities({ variant, capabilities = aiCapabilities }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();

  const gridClass =
    variant === "compact"
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
      : "grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6";

  return (
    <div ref={ref} className={gridClass}>
      {capabilities.map((cap, i) => (
        <motion.article
          key={cap.id}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={inView || reduceMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: reduceMotion ? 0 : i * 0.06, ease: "easeOut" }}
          className="rounded-lg border p-5 md:p-6 h-full"
          style={{
            borderColor: "var(--border-subtle)",
            background: "var(--bg-elevated)",
          }}
        >
          <div className="mb-3">
            <AudienceTag audience={cap.audience} />
          </div>
          <h3 className="text-[15px] font-semibold text-brand-primary mb-2">{cap.title}</h3>
          <p className="text-[13px] text-brand-secondary leading-relaxed">{cap.oneLiner}</p>
          {variant === "full" && (
            <div className="mt-4 space-y-3 pt-4 border-t border-brand-subtle">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-brand-gold mb-1">
                  Example
                </p>
                <p className="text-[13px] text-brand-muted leading-relaxed">{cap.example}</p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-brand-teal mb-1">
                  Guardrail
                </p>
                <p className="text-[13px] text-brand-muted leading-relaxed">{cap.guardrail}</p>
              </div>
            </div>
          )}
        </motion.article>
      ))}
    </div>
  );
}
