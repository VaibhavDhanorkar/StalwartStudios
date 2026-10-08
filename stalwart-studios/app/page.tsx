import { HeroSection } from "@/components/HeroSection";
import { AiPracticeHomeSection } from "@/components/AiPracticeHomeSection";
import { FovenaSection } from "@/components/FovenaSection";
import { StudioSignal } from "@/components/StudioSignal";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AiPracticeHomeSection />
      <FovenaSection tease />
      <StudioSignal />
    </main>
  );
}
