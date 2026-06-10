"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Timer, Flame, BarChart2 } from "lucide-react";

const features = [
  {
    icon: <Timer size={16} />,
    label: "Smart Focus Timer",
    desc: "Customizable deep work intervals built around your natural rhythm.",
  },
  {
    icon: <Flame size={16} />,
    label: "Habit & Streaks",
    desc: "Daily loops that build momentum and keep you consistent over time.",
  },
  {
    icon: <BarChart2 size={16} />,
    label: "Progress Insights",
    desc: "Understand your patterns and improve with every session.",
  },
];

export function FocusChampSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="products"
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A0A0B 0%, #0E0E10 100%)" }}
    >
      {/* Section label */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="section-line" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent-gold">
            Featured Product
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-fraunces text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-text-primary max-w-lg"
        >
          Our first product is ready to ship.
        </motion.h2>
      </div>

      {/* Card */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border border-border"
          style={{ background: "#FFF8EF" }}
        >
          {/* Subtle warm noise */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: info */}
            <div className="p-10 lg:p-14 flex flex-col justify-between">
              <div>
                {/* App icon + name */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                    <Image
                      src="/focus-champ-icon.png"
                      alt="Focus Champ icon"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-fraunces font-semibold"
                      style={{ color: "#1A1208" }}
                    >
                      Focus Champ
                    </h3>
                    <p className="text-sm font-medium" style={{ color: "#158C7D" }}>
                      Plan. Focus. Finish.
                    </p>
                  </div>
                </div>

                <p
                  className="text-base leading-relaxed mb-10 max-w-sm"
                  style={{ color: "#4A3F2F" }}
                >
                  Your daily command center for deep work. Build better habits,
                  track your sessions, and finish what you start — every single
                  day.
                </p>

                {/* Features */}
                <div className="flex flex-col gap-5 mb-12">
                  {features.map((f, i) => (
                    <motion.div
                      key={f.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: "rgba(21,140,125,0.12)",
                          color: "#158C7D",
                        }}
                      >
                        {f.icon}
                      </div>
                      <div>
                        <div
                          className="text-sm font-semibold mb-0.5"
                          style={{ color: "#1A1208" }}
                        >
                          {f.label}
                        </div>
                        <div className="text-sm leading-relaxed" style={{ color: "#6B5B45" }}>
                          {f.desc}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-4">
                <div
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm font-semibold cursor-not-allowed opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #1A1208, #2A1F0E)",
                    color: "#FFF8EF",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.28.15.6.2.9.13l13.2-7.62-2.88-2.88-11.22 10.37zm-1.5-20.3c-.1.23-.17.5-.17.8v15.48c0 .3.06.57.17.8l.08.08L9.9 12.7v-.2L1.75 3.38l-.07.08zM20.7 10.37l-2.7-1.56-3.06 3.06 3.06 3.06 2.7-1.57c.77-.44.77-1.16.01-1.6l-.01.01zM4.08.24L17.28 7.86l-2.88 2.88L3.18.37c.28-.15.6-.2.9-.13z" />
                  </svg>
                  Coming Soon on Google Play
                </div>
              </div>
            </div>

            {/* Right: phone mockup */}
            <div className="relative flex items-end justify-center px-8 pt-10 lg:pt-0 overflow-hidden">
              {/* Background arcs */}
              <svg
                className="absolute top-4 right-4 opacity-20"
                width="160"
                height="100"
                viewBox="0 0 160 100"
                fill="none"
              >
                <path
                  d="M 160 0 A 160 160 0 0 0 0 100"
                  stroke="#158C7D"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M 130 0 A 130 130 0 0 0 0 80"
                  stroke="#F4C05F"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>

              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                className="relative z-10 max-w-[260px] lg:max-w-[300px]"
              >
                {/* Phone frame */}
                <div
                  className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4"
                  style={{
                    borderColor: "#C8B99A",
                    boxShadow: "0 30px 80px rgba(100,70,20,0.25), 0 8px 24px rgba(0,0,0,0.15)",
                  }}
                >
                  <Image
                    src="/focus-champ-home.png"
                    alt="Focus Champ app dashboard"
                    width={300}
                    height={600}
                    className="w-full object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
