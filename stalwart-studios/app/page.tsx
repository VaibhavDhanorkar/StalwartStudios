import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FocusChampSection } from "@/components/FocusChampSection";
import { WhySection } from "@/components/WhySection";
import { FutureProducts } from "@/components/FutureProducts";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import {
  getHero,
  getFeaturedProduct,
  getWhySection,
  getUpcomingProducts,
  getAboutSection,
  getSiteSettings,
} from "@/lib/sanity.fetch";

// ISR: page rebuilds automatically every 60 seconds
export const revalidate = 60;

export default async function Home() {
  const [hero, featuredProduct, whySection, upcomingProducts, aboutSection, siteSettings] =
    await Promise.all([
      getHero(),
      getFeaturedProduct(),
      getWhySection(),
      getUpcomingProducts(),
      getAboutSection(),
      getSiteSettings(),
    ]);

  return (
    <main>
      <Navigation siteSettings={siteSettings} />
      <HeroSection data={hero} />
      <FocusChampSection data={featuredProduct} />
      <WhySection data={whySection} />
      <FutureProducts products={upcomingProducts} />
      <AboutSection data={aboutSection} />
      <ContactSection siteSettings={siteSettings} />
      <Footer siteSettings={siteSettings} />
    </main>
  );
}
