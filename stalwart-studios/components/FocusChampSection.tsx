"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import type { FeaturedProductData } from "@/lib/sanity.fetch";

const DEFAULT_FEATURES = [
  { icon: "timer", label: "Smart Focus Timer", description: "Eliminate distractions and stay in flow." },
  { icon: "flame", label: "Habit & Streaks", description: "Build consistency that lasts." },
  { icon: "chart", label: "Progress Insights", description: "Understand your focus patterns." },
];

function FeatureIcon({ type }: { type: string }) {
  if (type === "timer") return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F4C05F" strokeWidth="1.4" strokeLinecap="round">
      <circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5"/><path d="M9 3h6"/><path d="M12 3v2"/>
    </svg>
  );
  if (type === "flame") return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F4C05F" strokeWidth="1.4" strokeLinecap="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.5 0 3-1.5 3-4 0-4-4-7-4-7s-2 5-4 7a4 4 0 0 0 3 7c1.66 0 3-.5 4-2"/>
    </svg>
  );
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F4C05F" strokeWidth="1.4" strokeLinecap="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  );
}

interface Props { data: FeaturedProductData | null; }

export function FocusChampSection({ data }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const product = data?.product;
  const features = product?.features?.length ? product.features : DEFAULT_FEATURES;
  const iconSrc = product?.iconUrl ?? "/focus-champ-icon.png";
  const screenshotSrc = product?.screenshotUrl ?? "/focus-champ-home.png";

  return (
    <section
      id="products"
      ref={ref}
      className="relative py-0"
      style={{ background: "#0A0A0B" }}
    >
      {/* Full-width dark card */}
      <div
        className="max-w-7xl mx-auto mx-4 md:mx-6 lg:mx-10 my-12 rounded-2xl overflow-hidden"
        style={{ background: "#111113", border: "1px solid #1E1E22", margin: "0 auto" }}
      >
        <div className="px-6 md:px-10 pt-8 pb-3">
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#F4C05F]">
            Featured Product
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-0 items-stretch">

          {/* Left: App info */}
          <div className="px-6 md:px-10 pb-10 pt-4 lg:max-w-xs">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
                <Image
                  src={iconSrc}
                  alt="Focus Champ icon"
                  width={56} height={56}
                  className="w-full h-full object-cover"
                  unoptimized={iconSrc.startsWith("http")}
                />
              </div>
              <div>
                <div className="text-[17px] font-semibold text-[#EDE8E0]">
                  {product?.name ?? "Focus Champ"}
                </div>
                <div className="text-sm font-medium" style={{ color: "#158C7D" }}>
                  {product?.tagline ?? "Stay Focused. Achieve More."}
                </div>
                <div className="text-xs text-[#F4C05F] mt-1">
                  Launching soon on Google Play
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex items-center gap-3 mb-0">
              <div className="flex items-center gap-2 opacity-60">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#EDE8E0">
                  <path d="M3.18 23.76c.28.15.6.2.9.13l13.2-7.62-2.88-2.88-11.22 10.37zm-1.5-20.3c-.1.23-.17.5-.17.8v15.48c0 .3.06.57.17.8l.08.08L9.9 12.7v-.2L1.75 3.38l-.07.08zM20.7 10.37l-2.7-1.56-3.06 3.06 3.06 3.06 2.7-1.57c.77-.44.77-1.16.01-1.6l-.01.01zM4.08.24L17.28 7.86l-2.88 2.88L3.18.37c.28-.15.6-.2.9-.13z"/>
                </svg>
                <span className="text-xs text-[#8A8A94]">Google Play</span>
              </div>
              <span
                className="text-xs font-medium px-3 py-1.5 rounded-full"
                style={{ border: "1px solid rgba(244,192,95,0.3)", color: "#F4C05F", background: "rgba(244,192,95,0.06)" }}
              >
                Coming Soon
              </span>
            </div>
          </div>

          {/* Centre divider + features */}
          <div
            className="px-6 md:px-10 py-8 lg:border-l lg:border-r"
            style={{ borderColor: "#1E1E22" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <FeatureIcon type={f.icon ?? (["timer","flame","chart"][i] as string)} />
                  <div className="text-sm font-semibold text-[#EDE8E0]">{f.label}</div>
                  <div className="text-[13px] text-[#8A8A94] leading-relaxed">{f.description}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-end justify-center px-8 pt-6"
            style={{ minWidth: "200px" }}
          >
            <div
              className="phone-frame overflow-hidden relative"
              style={{ width: "188px", marginBottom: "-1px" }}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-16 h-4 rounded-b-xl"
                style={{ background: "#0A0A0B" }}
              />
              <Image
                src={screenshotSrc}
                alt="Focus Champ dashboard"
                width={188} height={400}
                className="w-full object-cover object-top"
                unoptimized={screenshotSrc.startsWith("http")}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
