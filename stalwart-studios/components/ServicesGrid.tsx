"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { services } from "@/lib/content/services";
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {services.map((s, i) => (
        <motion.div
          key={s.slug}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={inView || reduceMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : i * 0.07, ease: "easeOut" }}
          className={`h-full ${i === 0 ? "sm:col-span-2" : ""}`}
        >
          <ServiceCard service={s} featured={i === 0} />
        </motion.div>
      ))}
    </div>
  );
}
