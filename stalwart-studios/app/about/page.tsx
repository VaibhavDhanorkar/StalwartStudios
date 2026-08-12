import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description: "About Stalwart Digital Studios — a precision-focused software studio.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-[68px]">
      <AboutSection data={null} />
    </main>
  );
}
