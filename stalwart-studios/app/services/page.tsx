import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DeliveryProcess } from "@/components/DeliveryProcess";
import { ContactCta } from "@/components/ContactCta";
import { buildPageMetadata } from "@/lib/page-metadata";
import { services, type Service } from "@/lib/content/services";
import { ServiceIcon } from "@/lib/content/serviceIcons";

export const metadata: Metadata = buildPageMetadata(
  "Services — Stalwart Digital Studios",
  "AI-enabled products, mobile apps, web and SaaS platforms, business systems, and product design.",
);

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-[68px]">
      <section className="relative overflow-hidden warm-radial">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="section-heading-line" />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-brand-gold">
              Services
            </span>
          </div>
          <h1
            className="font-fraunces font-semibold text-brand-primary leading-[1.02] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            What we build.
          </h1>
          <p className="text-[16px] md:text-[17px] text-brand-secondary leading-relaxed max-w-2xl mb-10">
            AI-enabled products, mobile apps, platforms, business systems, and design — for businesses
            and consumers, built end to end.
          </p>

          <nav aria-label="Services on this page">
            <ul className="flex flex-wrap gap-2.5">
              {services.map((s) => {
                return (
                  <li key={s.slug}>
                    <a
                      href={`#${s.slug}`}
                      className="group inline-flex items-center gap-2.5 rounded-full border border-brand bg-white/[0.02] pl-2 pr-4 py-2 text-[13px] text-brand-secondary hover:text-brand-primary hover:border-[color-mix(in_srgb,var(--accent-gold)_40%,transparent)] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                    >
                      <span className="service-icon" style={{ width: 28, height: 28, borderRadius: 999 }}>
                        <ServiceIcon slug={s.slug} size={14} />
                      </span>
                      {s.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </section>

      {services.map((s, i) => (
        <ServiceChapter key={s.slug} service={s} tinted={i % 2 === 1} />
      ))}

      <section style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="fade-rule" />
          <div className="py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="font-fraunces text-xl md:text-2xl text-brand-primary leading-snug">
              We ship our own products, and we build yours the same way.
            </p>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand-gold shrink-0 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              See our products
              <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      <DeliveryProcess />
      <ContactCta />
    </main>
  );
}

function ServiceChapter({ service, tinted }: { service: Service; tinted: boolean }) {
  const headingId = `${service.slug}-heading`;

  return (
    <section
      id={service.slug}
      aria-labelledby={headingId}
      className="scroll-mt-[88px]"
      style={{ background: tinted ? "var(--bg-surface)" : "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="fade-rule" />
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 py-14 md:py-20">
          <div className="lg:sticky lg:top-[108px] self-start">
            <span aria-hidden="true" className="outline-numeral block text-[72px] md:text-[96px] mb-4">
              {service.number}
            </span>
            <div className="flex items-center gap-3 mb-4">
              <span className="service-icon">
                <ServiceIcon slug={service.slug} size={18} />
              </span>
              <h2
                id={headingId}
                className="font-fraunces font-semibold text-brand-primary leading-tight"
                style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)" }}
              >
                {service.title}
              </h2>
            </div>
            <p className="text-[15px] text-brand-secondary leading-relaxed max-w-md mb-7">{service.summary}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href={`/services/${service.slug}`}
                className="btn-secondary group gap-2 px-5 py-2.5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                Explore {service.title}
                <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href={`/contact?topic=${service.slug}`}
                className="text-sm font-medium text-brand-secondary hover:text-brand-gold transition-colors duration-200 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                Discuss this
              </Link>
            </div>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            {service.items.map((item, i) => (
              <li key={item.name} className="flex gap-4 py-5 border-t border-brand-subtle">
                <span className="text-[11px] font-semibold text-brand-gold tabular-nums pt-1 w-5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[15px] font-medium text-brand-primary mb-1">{item.name}</h3>
                  <p className="text-[13px] text-brand-muted leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
