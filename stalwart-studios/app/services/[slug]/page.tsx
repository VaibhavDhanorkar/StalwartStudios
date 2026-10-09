import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { AiCapabilities } from "@/components/ai/AiCapabilities";
import { Commitments } from "@/components/Commitments";
import { DeliveryProcess } from "@/components/DeliveryProcess";
import { buildPageMetadata } from "@/lib/page-metadata";
import { getServiceBySlug, services } from "@/lib/content/services";
import { ServiceIcon } from "@/lib/content/serviceIcons";

const AI_SLUG = "ai-enabled-products";
const AI_PROCESS_NOTE =
  "For AI builds, discovery includes agreeing a test set of real cases and the pass bar each feature must meet.";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildPageMetadata(`${service.title} — Stalwart Digital Studios`, service.summary);
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const isAi = service.slug === AI_SLUG;
  const others = services.filter((s) => s.slug !== service.slug);
  const contactHref = `/contact?topic=${service.slug}`;

  return (
    <main className="min-h-screen pt-[68px]">
      <section className="relative overflow-hidden warm-radial">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-12 md:pt-16 pb-14 md:pb-20">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-[12px] text-brand-muted">
              <li>
                <Link
                  href="/services"
                  className="hover:text-brand-primary transition-colors duration-200 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-brand-secondary">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-16 items-end">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="service-icon" style={{ width: 52, height: 52, borderRadius: 14 }}>
                  <ServiceIcon slug={service.slug} size={24} />
                </span>
                <span className="outline-numeral text-[56px] md:text-[64px]" aria-hidden="true">
                  {service.number}
                </span>
              </div>
              <h1
                className="font-fraunces font-semibold text-brand-primary leading-[1.04] tracking-tight mb-5"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
              >
                {service.title}
              </h1>
              <p className="text-[16px] md:text-[18px] text-brand-secondary leading-relaxed max-w-2xl">
                {service.summary}
              </p>
            </div>

            <aside className="glass-panel rounded-2xl p-6" aria-label="Start this project">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-brand-gold mb-4">
                Start this project
              </p>
              <Commitments stacked className="mb-6" />
              <Link
                href={contactHref}
                className="btn-primary group w-full gap-2 px-5 py-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-surface)]"
              >
                Start a project
                <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="fade-rule" />
          <div className="py-14 md:py-20">
            <div className="flex items-center gap-3 mb-3">
              <span className="section-heading-line" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-brand-gold">
                {service.number}
              </span>
            </div>
            <h2
              className="font-fraunces font-semibold text-brand-primary leading-[1.1] mb-10"
              style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)" }}
            >
              What we build
            </h2>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              {service.items.map((item, i) => (
                <li key={item.name} className="group flex gap-5 py-6 border-t border-brand-subtle">
                  <span className="text-[12px] font-semibold text-brand-gold tabular-nums pt-1 w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[16px] font-medium text-brand-primary mb-1.5 group-hover:text-brand-gold transition-colors duration-200">
                      {item.name}
                    </h3>
                    <p className="text-[14px] text-brand-muted leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-[14px] text-brand-muted pt-6 border-t border-brand-subtle">
              …and much more.{" "}
              <Link
                href={contactHref}
                className="text-brand-gold hover:underline rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                Tell us what you&apos;re building.
              </Link>
            </p>
          </div>
        </div>
      </section>

      {isAi ? (
        <section style={{ background: "var(--bg-surface)" }}>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="fade-rule" />
            <div className="py-14 md:py-20">
              <h2
                className="font-fraunces font-semibold text-brand-primary leading-[1.1] mb-10"
                style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)" }}
              >
                Where it shows up
              </h2>
              <AiCapabilities variant="full" />
              <Link
                href="/studio#ai"
                className="group inline-flex items-center gap-2 text-sm font-medium text-brand-gold mt-8 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                How we build with AI
                <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <DeliveryProcess variant="compact" note={isAi ? AI_PROCESS_NOTE : undefined} />

      <section style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="fade-rule" />
          <div className="py-14 md:py-20">
            <h2
              className="font-fraunces font-semibold text-brand-primary leading-[1.1] mb-3"
              style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)" }}
            >
              Let&apos;s build it.
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 mb-14">
              <Link
                href={contactHref}
                className="btn-primary group gap-2 px-6 py-3 text-sm tracking-wide self-start focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
              >
                Start a project
                <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Commitments />
            </div>

            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-brand-muted mb-4">
              Explore other services
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {others.map((s) => {
                return (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="service-card group flex items-center gap-3 h-full rounded-xl p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                    >
                      <span className="service-icon" style={{ width: 36, height: 36 }}>
                        <ServiceIcon slug={s.slug} size={16} />
                      </span>
                      <span className="flex-1 min-w-0 text-[14px] font-medium text-brand-primary leading-snug">
                        {s.title}
                      </span>
                      <ArrowRight
                        size={14}
                        aria-hidden="true"
                        className="shrink-0 text-brand-muted group-hover:text-brand-gold group-hover:translate-x-0.5 transition-all duration-200"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
