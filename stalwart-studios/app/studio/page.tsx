import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { WhySection } from "@/components/WhySection";
import { ComingNextSection } from "@/components/ComingNextSection";

export const metadata: Metadata = {
  title: "Studio",
  description: "Engineering philosophy and in-development work at Stalwart Digital Studios.",
};

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
            Stalwart Digital Studios is a precision-focused product studio. We ship proprietary
            software — not agency decks, not conglomerate portfolios.
          </p>
          <p>
            Every surface earns its place: clear information architecture, restrained motion, and
            engineering that holds up under real use. We prefer fewer products done well over a
            crowded roadmap of ideas.
          </p>
        </div>
        <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm">
          Talk to us
          <ArrowRight size={14} />
        </Link>
      </SectionShell>

      <WhySection data={null} />
      <ComingNextSection />
    </main>
  );
}
