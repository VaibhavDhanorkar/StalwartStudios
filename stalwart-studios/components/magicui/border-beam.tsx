"use client";

/**
 * Adapted from Magic UI "Border Beam" — https://magicui.design (MIT License, Copyright (c) Magic UI).
 * Changes: imports from framer-motion; masking and gradient moved to the `.beam-frame` class in globals.css.
 */
import { motion, type MotionStyle, type Transition } from "framer-motion";
import { cn } from "@/lib/cn";

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  transition?: Transition;
  className?: string;
  style?: React.CSSProperties;
  reverse?: boolean;
  initialOffset?: number;
  borderWidth?: number;
}

export const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "#F4B048",
  colorTo = "#F4B048",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
}: BorderBeamProps) => {
  return (
    <div
      aria-hidden="true"
      className="beam-frame"
      style={{ "--border-beam-width": `${borderWidth}px` } as React.CSSProperties}
    >
      <motion.div
        className={cn("beam-dot", className)}
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            "--color-from": colorFrom,
            "--color-to": colorTo,
            ...style,
          } as MotionStyle
        }
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay: -delay,
          ...transition,
        }}
      />
    </div>
  );
};
