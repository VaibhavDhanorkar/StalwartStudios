import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata(
  "About — Stalwart Digital Studios",
  "An independent, AI-enabled product studio from India building for businesses and consumers.",
);

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-[68px]">
      <AboutSection data={null} />
    </main>
  );
}
