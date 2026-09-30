import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Independent product studio shipping consumer apps, enterprise SaaS, and games worldwide. Founded in India.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-[68px]">
      <AboutSection data={null} />
    </main>
  );
}
