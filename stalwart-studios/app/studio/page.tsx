import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/SectionShell";
import { WhySection } from "@/components/WhySection";
import { ComingNextSection } from "@/components/ComingNextSection";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "How Stalwart builds consumer apps, enterprise SaaS, and games — philosophy and work in progress.",
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
            Stalwart Digital Studios is an independent product company. We build and own consumer
            mobile apps, enterprise SaaS, and games — shipped worldwide from India.
          </p>
          <p>
            One studio, one bar for execution: clear UX, stable engineering, and products we stand
            behind in consumer and enterprise markets.
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
