import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { StudioAiPracticeSection } from "@/components/StudioAiPracticeSection";
import { WhySection } from "@/components/WhySection";
import { ComingNextSection } from "@/components/ComingNextSection";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata(
  "Studio — Stalwart Digital Studios",
  "How Stalwart Digital Studios builds products and AI-enabled software: principles, practice, and what's in development.",
);

export default function StudioPage() {
  return (
    <main className="min-h-screen pt-[68px]">
      <SectionShell
        label="Studio"
        heading="How we build"
        sectionClassName="pt-16 md:pt-20"
        sectionStyle={{ borderTop: "none" }}
      >
        <div className="space-y-5 text-brand-secondary leading-relaxed mb-10 max-w-3xl">
          <p>
            Stalwart Digital Studios is an independent, AI-enabled product studio. We design, build,
            and ship our own products, and we build AI-enabled software for businesses and consumers
            — from first prototype to production.
          </p>
          <p>
            Every surface earns its place. We prototype, cut what does not serve the user, and ship
            when the work meets our bar.
          </p>
        </div>
        <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm">
          Talk to us
          <ArrowRight size={14} />
        </Link>
      </SectionShell>

      <StudioAiPracticeSection />
      <WhySection data={null} />
      <ComingNextSection />
    </main>
  );
}
