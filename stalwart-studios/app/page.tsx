import { HeroSection } from "@/components/HeroSection";
import { FocusChampSection } from "@/components/FocusChampSection";
import { StudioSignal } from "@/components/StudioSignal";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FocusChampSection tease />
      <StudioSignal />
    </main>
  );
}
