"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { ProductFrame } from "./ProductFrame";
import { PlayStoreBadge } from "./PlayStoreBadge";
import { FeatureIcon } from "./FeatureIcon";
import { fovena } from "@/lib/products";

type Props = { tease?: boolean };

export function FovenaSection({ tease = false }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.88", "center 0.55"],
  });
  const settled = !tease || !!reduce;
  const copyY = useTransform(scrollYProgress, [0, 0.7], settled ? [0, 0] : [16, 0]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], settled ? [1, 1] : [0.5, 1]);
  const frameY = useTransform(scrollYProgress, [0.12, 1], settled ? [0, 0] : [56, 0]);
  const frameScale = useTransform(scrollYProgress, [0.12, 1], settled ? [1, 1] : [0.92, 1]);
  const p = fovena;

  return (
    <SectionShell
      id="products"
      sectionRef={ref}
      label="Featured Product"
      heading={
        <>
          <span className="text-brand-primary">{p.name}</span>
          <span className="text-brand-gold"> — {p.statusLabel.toLowerCase()}.</span>
        </>
      }
      headerClassName="mb-4"
      headingClassName="mb-0"
      cardClassName="overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:items-center">
        <motion.div className="px-0 md:px-2 py-2" style={tease ? { y: copyY, opacity: copyOpacity } : undefined}>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg relative">
              <Image src={p.iconSrc} alt={`${p.name} icon`} width={56} height={56} className="object-cover" />
            </div>
            <div>
              <div className="text-[17px] font-semibold text-brand-primary">{p.name}</div>
              <div className="text-sm font-medium text-brand-teal">{p.tagline}</div>
              <div className="text-xs text-brand-gold-muted mt-1">
                {p.freemium ? "Freemium" : "App"} · {p.statusLabel}
              </div>
            </div>
          </div>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6 max-w-2xl">{p.description}</p>

          {!tease && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 mb-8">
              {p.features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col gap-3"
                >
                  <FeatureIcon type={f.icon} />
                  <div className="text-sm font-semibold text-brand-primary">{f.label}</div>
                  <div className="text-[13px] text-brand-secondary leading-relaxed">{f.description}</div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <PlayStoreBadge url={p.playStoreUrl} />
            <Link
              href={p.href}
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand-primary hover:text-brand-gold transition-colors duration-200"
            >
              {tease ? "View product" : "Full details"}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            {p.legalLinks ? (
              <>
                <Link
                  href={p.legalLinks.privacy}
                  className="text-sm font-medium text-brand-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
                >
                  Privacy
                </Link>
                <Link
                  href={p.legalLinks.terms}
                  className="text-sm font-medium text-brand-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
                >
                  Terms
                </Link>
              </>
            ) : null}
          </div>
        </motion.div>

        <motion.div
          initial={tease ? false : { opacity: 0, y: 16 }}
          animate={tease ? undefined : inView ? { opacity: 1, y: 0 } : {}}
          transition={tease ? undefined : { duration: 0.55, delay: 0.2, ease: "easeOut" }}
          style={tease ? { y: frameY, scale: frameScale } : undefined}
          className="hidden lg:flex items-center justify-center self-center"
        >
          <ProductFrame className="w-[236px] shrink-0">
            <div className="h-[420px] w-full">
              <Image
                src={p.catalogScreenshotSrc ?? p.screenshotSrc}
                alt={`${p.name} dashboard`}
                width={236}
                height={420}
                className="h-full w-full object-contain"
                priority={tease}
                sizes="236px"
              />
            </div>
          </ProductFrame>
        </motion.div>
      </div>
    </SectionShell>
  );
}
