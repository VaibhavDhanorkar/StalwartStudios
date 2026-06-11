"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Image from "next/image";
import type { FeaturedProductData } from "@/lib/sanity.fetch";
import { SectionShell } from "./SectionShell";

const DEFAULT_FEATURES = [
  { icon: "timer", label: "Smart Focus Timer", description: "Eliminate distractions and stay in flow." },
  { icon: "flame", label: "Habit & Streaks", description: "Build consistency that lasts." },
  { icon: "chart", label: "Progress Insights", description: "Understand your focus patterns." },
];

function FeatureIcon({
  type,
}: {
  type: string;
}) {
  const stroke = "rgba(244,176,72,0.95)";
  const glow = "url(#iconGlow)";
  const chip = "rgba(244,176,72,0.1)";
  if (type === "timer") return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <defs>
        <filter id="iconGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="2.6" y="2.6" width="24.8" height="24.8" rx="8" fill={chip} stroke="rgba(244,176,72,0.45)" />
      <circle cx="15" cy="16.4" r="6.4" stroke={stroke} strokeWidth="1.6" filter={glow} />
      <path d="M15 12.8v3.5l2.3 2.2" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" filter={glow} />
      <path d="M12.2 8h5.6" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" filter={glow} />
      <path d="M15 8v1.8" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" filter={glow} />
    </svg>
  );
  if (type === "flame") return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <defs>
        <filter id="iconGlowFlame" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="2.6" y="2.6" width="24.8" height="24.8" rx="8" fill={chip} stroke="rgba(244,176,72,0.45)" />
      <path d="M12.1 21.1c.95 1 2.1 1.5 3.3 1.5 2.6 0 4.8-2 4.8-5.1 0-4.1-3.9-7.8-3.9-7.8s-.7 2.8-2.7 4.6c-1.5 1.4-2.7 3-2.7 4.7 0 .8.35 1.5 1.2 2.1Z" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" filter="url(#iconGlowFlame)" />
    </svg>
  );
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <defs>
        <filter id="iconGlowChart" x="-5" y="-5" width="40" height="40" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="1.7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="2.6" y="2.6" width="24.8" height="24.8" rx="8" fill={chip} stroke="rgba(244,176,72,0.45)" />
      <line x1="20.8" y1="21.8" x2="20.8" y2="12.6" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" filter="url(#iconGlowChart)" />
      <line x1="15" y1="21.8" x2="15" y2="8.2" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" filter="url(#iconGlowChart)" />
      <line x1="9.2" y1="21.8" x2="9.2" y2="16" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" filter="url(#iconGlowChart)" />
    </svg>
  );
}

function normalizeFeatureIcon(icon: string | undefined, fallback: string): string {
  if (!icon) return fallback;
  const key = icon.toLowerCase();
  if (key === "timer") return "timer";
  if (key === "flame") return "flame";
  if (key === "chart" || key === "barchart2" || key === "barchart" || key === "trendingup") return "chart";
  return fallback;
}

interface Props { data: FeaturedProductData | null; }

export function FocusChampSection({ data }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  // #region agent log
  useEffect(() => {
    const lines = document.querySelectorAll("[filter='url(#iconGlowChart)']");
    const rects = Array.from(lines).map((el) => {
      const r = (el as SVGGraphicsElement).getBoundingClientRect?.();
      return r ? { w: Math.round(r.width * 100) / 100, h: Math.round(r.height * 100) / 100 } : null;
    });
    console.info("[stalwart-debug H-4 POST-FIX] chart line bounding rects:", JSON.stringify(rects), "| lines visible:", rects.every(r => r && r.w < 4) ? "still zero-width (fix may not work)" : "has width (fix working)");
  }, []);
  // #endregion
  const product = data?.product;
  const features = product?.features?.length ? product.features : DEFAULT_FEATURES;
  const iconSrc = product?.iconUrl ?? "/focus-champ-icon.png";
  const screenshotSrc = product?.screenshotUrl ?? "/focus-champ-home.png";

  return (
    <SectionShell
      id="products"
      sectionRef={ref}
      label={data?.sectionLabel ?? "Featured Product"}
      heading={
        <>
          <span className="text-brand-primary">{product?.name ?? "Focus Champ"}</span>
          <span className="text-brand-gold"> is coming soon.</span>
        </>
      }
      headerClassName="mb-4"
      headingClassName="mb-0"
      cardClassName="overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-0 lg:items-center">
        {/* Left: App info */}
        <div className="px-6 md:px-10 py-8 lg:max-w-xs">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg">
              <Image
                src={iconSrc}
                alt="Focus Champ icon"
                width={56}
                height={56}
                className="w-full h-full object-cover"
                unoptimized={iconSrc.startsWith("http")}
              />
            </div>
            <div>
              <div className="text-[17px] font-semibold text-brand-primary">
                {product?.name ?? "Focus Champ"}
              </div>
              <div className="text-sm font-medium" style={{ color: "var(--accent-teal)" }}>
                {product?.tagline ?? "Stay Focused. Achieve More."}
              </div>
              <div className="text-xs text-brand-gold mt-1">
                Launching soon on Google Play
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-3 mb-0">
            <div className="flex items-center gap-2 opacity-60">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--text-primary)">
                <path d="M3.18 23.76c.28.15.6.2.9.13l13.2-7.62-2.88-2.88-11.22 10.37zm-1.5-20.3c-.1.23-.17.5-.17.8v15.48c0 .3.06.57.17.8l.08.08L9.9 12.7v-.2L1.75 3.38l-.07.08zM20.7 10.37l-2.7-1.56-3.06 3.06 3.06 3.06 2.7-1.57c.77-.44.77-1.16.01-1.6l-.01.01zM4.08.24L17.28 7.86l-2.88 2.88L3.18.37c.28-.15.6-.2.9-.13z" />
              </svg>
              <span className="text-xs text-brand-secondary">Google Play</span>
            </div>
            <span
              className="text-xs font-medium px-3 py-1.5 rounded-full"
              style={{ border: "1px solid rgba(244,192,95,0.3)", color: "var(--accent-gold)", background: "rgba(244,192,95,0.06)" }}
            >
              Coming Soon
            </span>
          </div>
        </div>

        {/* Centre divider + features */}
        <div className="px-6 md:px-10 py-8 lg:border-l lg:border-r" style={{ borderColor: "var(--border-subtle)" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 h-full items-start">
            {features.map((f, i) => {
              const fallbackOrder = ["timer", "flame", "chart"] as const;
              const iconType = normalizeFeatureIcon(f.icon, fallbackOrder[i] ?? "chart");
              return (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex flex-col gap-3 h-full"
                >
                  <div className="w-[30px] h-[30px] flex items-center justify-center shrink-0">
                    <FeatureIcon type={iconType} />
                  </div>
                  <div className="text-sm font-semibold text-brand-primary">{f.label}</div>
                  <div className="text-[13px] text-brand-secondary leading-relaxed">{f.description}</div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right: phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center px-10 py-8 self-center"
          style={{ minWidth: "300px" }}
        >
          <div
            className="phone-frame overflow-hidden relative"
            style={{ width: "236px" }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-16 h-4 rounded-b-xl"
              style={{ background: "#0A0A0B" }}
            />
            <Image
              src={screenshotSrc}
              alt="Focus Champ dashboard"
              width={236}
              height={420}
              className="w-full object-cover object-top"
              loading="eager"
              unoptimized={screenshotSrc.startsWith("http")}
            />
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
