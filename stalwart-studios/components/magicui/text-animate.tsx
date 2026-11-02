"use client";

/**
 * Adapted from Magic UI "Text Animate" — https://magicui.design (MIT License, Copyright (c) Magic UI).
 * Trimmed to the one preset the hero uses (word-by-word blur-in with a small upward move).
 * Changes: imports from framer-motion; the hidden state starts at partial opacity so the text still
 * counts as painted for LCP; runs on mount (no view/exit handling); `onSegmentStyle` lets a segment
 * (e.g. the gold accent) be styled from the caller.
 */
import type { CSSProperties } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/cn";

interface Segment {
  text: string;
  className?: string;
  style?: CSSProperties;
}

interface TextAnimateProps {
  segments: Segment[];
  className?: string;
  delay?: number;
  /** Total stagger window across all words, in seconds. */
  duration?: number;
  as?: "h1" | "h2" | "p";
}

const item: Variants = {
  hidden: { opacity: 0.35, filter: "blur(6px)", y: 10 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.32, ease: "easeOut" },
  },
};

export function TextAnimate({ segments, className, delay = 0, duration = 0.3, as = "h1" }: TextAnimateProps) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  // Words keep their trailing space so wrapping matches a normal text node.
  const words = segments.flatMap((seg) =>
    seg.text.split(/(?<=\s)/).map((text) => ({ text, className: seg.className, style: seg.style })),
  );

  const container: Variants = {
    hidden: {},
    show: { transition: { delayChildren: delay, staggerChildren: duration / Math.max(words.length, 1) } },
  };

  return (
    <Component
      variants={container}
      initial={reduce ? false : "hidden"}
      animate="show"
      className={cn("hero-text-animate", className)}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w.text}-${i}`}
          variants={item}
          className={cn("inline-block whitespace-pre", w.className)}
          style={w.style}
        >
          {w.text}
        </motion.span>
      ))}
    </Component>
  );
}
