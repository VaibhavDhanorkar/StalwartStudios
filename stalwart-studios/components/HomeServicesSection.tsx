import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { ServicesGrid } from "./ServicesGrid";

export function HomeServicesSection() {
  return (
    <SectionShell id="services" label="Services" heading="What we build.">
      <p className="text-[15px] text-brand-secondary leading-relaxed max-w-3xl mb-8">
        AI-enabled products, mobile apps, platforms, business systems, and design — for businesses
        and consumers.
      </p>
      <ServicesGrid />
      <Link
        href="/services"
        className="group inline-flex items-center gap-2 text-sm font-medium text-brand-gold hover:opacity-90 transition-opacity duration-200 mt-8 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
      >
        All services
        <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </SectionShell>
  );
}
