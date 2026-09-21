import { HeroSection } from "@/components/HeroSection";
import { FovenaSection } from "@/components/FovenaSection";
import { StudioSignal } from "@/components/StudioSignal";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FovenaSection tease />
      <StudioSignal />
    </main>
  );
}
