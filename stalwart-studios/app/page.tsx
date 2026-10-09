import { HeroSection } from "@/components/HeroSection";
import { HomeServicesSection } from "@/components/HomeServicesSection";
import { FovenaSection } from "@/components/FovenaSection";
import { StudioSignal } from "@/components/StudioSignal";
import { DeliveryProcess } from "@/components/DeliveryProcess";
import { Faq } from "@/components/Faq";
import { ContactCta } from "@/components/ContactCta";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HomeServicesSection />
      <FovenaSection tease />
      <StudioSignal />
      <DeliveryProcess />
      <Faq />
      <ContactCta
        heading="Have something to build?"
        line="Tell us about it. We reply within one business day."
      />
    </main>
  );
}
