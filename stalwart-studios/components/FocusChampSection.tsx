"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { ProductFrame } from "./ProductFrame";
import { PlayStoreBadge } from "./PlayStoreBadge";
import { FeatureIcon } from "./FeatureIcon";
import { focusChamp } from "@/lib/products";

type Props = { tease?: boolean };

export function FocusChampSection({ tease = false }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const p = focusChamp;

  return (
    <SectionShell
      id="products"
      sectionRef={ref}
      label="Featured Product"
      heading={
        <>
          <span className="text-brand-primary">{p.name}</span>
          <span className="text-brand-gold"> is coming soon.</span>
        </>
      }
      headerClassName="mb-4"
      headingClassName="mb-0"
      cardClassName="overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:items-center">
        <div className="px-0 md:px-2 py-2">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg relative">
              <Image src={p.iconSrc} alt={`${p.name} icon`} width={56} height={56} className="object-cover" />
            </div>
            <div>
              <div className="text-[17px] font-semibold text-brand-primary">{p.name}</div>
              <div className="text-sm font-medium text-brand-teal">{p.tagline}</div>
              <div className="text-xs text-brand-gold-muted mt-1">
                {p.freemium ? "Freemium" : "App"} · {p.statusLabel} on Google Play
              </div>
            </div>
          </div>

          <p className="text-sm text-brand-secondary leading-relaxed mb-6 max-w-xl">{p.description}</p>

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

          <div className="flex flex-wrap items-center gap-3">
            <PlayStoreBadge url={p.playStoreUrl} />
            <Link
              href={p.href}
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand-primary hover:text-brand-gold transition-colors duration-200"
            >
              {tease ? "View product" : "Full details"}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-center self-center"
        >
          <ProductFrame className="w-[236px]">
            <Image
              src={p.screenshotSrc}
              alt={`${p.name} dashboard`}
              width={236}
              height={420}
              className="w-full h-auto object-cover object-top"
              priority={tease}
              sizes="236px"
            />
          </ProductFrame>
        </motion.div>
      </div>
    </SectionShell>
  );
}
