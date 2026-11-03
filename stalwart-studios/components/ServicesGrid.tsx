"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { services } from "@/lib/content/services";
import { useNarrowViewport } from "@/lib/useNarrowViewport";
import { ServiceCard } from "./ServiceCard";

const SCATTER = [
  { x: -88, y: 56, rotate: -7 },
  { x: 72, y: -40, rotate: 6 },
  { x: -56, y: -32, rotate: -5 },
  { x: 84, y: 36, rotate: 7 },
  { x: 18, y: 64, rotate: -4 },
];

function AssemblingCard({
  index,
  progress,
  compact,
  reduce,
  featured,
  children,
}: {
  index: number;
  progress: MotionValue<number>;
  compact: boolean;
  reduce: boolean | null;
  featured: boolean;
  children: ReactNode;
}) {
  const scatter = SCATTER[index % SCATTER.length];
  const reach = compact ? 0.35 : 1;
  const tilt = compact ? 0.4 : 1;
  const still = !!reduce;
  const x = useTransform(progress, [0, 1], still ? [0, 0] : [scatter.x * reach, 0]);
  const y = useTransform(progress, [0, 1], still ? [0, 0] : [scatter.y * reach, 0]);
  const rotate = useTransform(progress, [0, 1], still ? [0, 0] : [scatter.rotate * tilt, 0]);
  const opacity = useTransform(progress, [0, 1], still ? [1, 1] : [0.72, 1]);

  return (
    <motion.div
      style={{ x, y, rotate, opacity }}
      className={`h-full ${featured ? "sm:col-span-2" : ""}`}
    >
      {children}
    </motion.div>
  );
}

export function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const compact = useNarrowViewport();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.4"],
  });

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {services.map((s, i) => (
        <AssemblingCard
          key={s.slug}
          index={i}
          progress={scrollYProgress}
          compact={compact}
          reduce={reduceMotion}
          featured={i === 0}
        >
          <ServiceCard service={s} featured={i === 0} />
        </AssemblingCard>
      ))}
    </div>
  );
}
