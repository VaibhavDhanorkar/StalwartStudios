"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Commitments } from "./Commitments";

type Props = {
  heading?: string;
  line?: string;
  href?: string;
  children?: ReactNode;
  scrollMotion?: boolean;
};

export function ContactCta({ heading, line, href = "/contact", children, scrollMotion = false }: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.55"],
  });
  const still = !scrollMotion || !!reduce;
  const scale = useTransform(scrollYProgress, [0, 1], still ? [1, 1] : [0.97, 1]);

  return (
    <section
      ref={ref}
      className="relative py-14"
      style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="site-shell">
        <motion.div
          className="section-card rounded-2xl px-6 md:px-10 py-8 md:py-10"
          style={{ scale, transformOrigin: "center center" }}
        >
          {heading ? (
            <h2
              className="font-fraunces font-semibold text-brand-primary leading-[1.1] mb-3"
              style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)" }}
            >
              {heading}
            </h2>
          ) : null}
          {line ? <p className="text-[15px] text-brand-secondary leading-relaxed mb-6">{line}</p> : null}
          <Link
            href={href}
            className="btn-primary group inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wide"
          >
            Start a project
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Commitments className="mt-6" />
          {children}
        </motion.div>
      </div>
    </section>
  );
}
