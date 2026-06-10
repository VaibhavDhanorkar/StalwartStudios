import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FocusChampSection } from "@/components/FocusChampSection";
import { WhySection } from "@/components/WhySection";
import { FutureProducts } from "@/components/FutureProducts";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <FocusChampSection />
      <WhySection />
      <FutureProducts />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
