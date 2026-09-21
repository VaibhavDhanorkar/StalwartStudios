import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductFrame } from "@/components/ProductFrame";
import { PlayStoreBadge } from "@/components/PlayStoreBadge";
import { FeatureIcon } from "@/components/FeatureIcon";
import { fovena } from "@/lib/products";

export const metadata: Metadata = {
  title: "Fovena",
  description: fovena.description,
};

export default function FovenaProductPage() {
  const p = fovena;

  return (
    <main className="min-h-screen pt-[68px]">
      <section className="py-16 md:py-20" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Link
            href="/products"
            className="text-sm text-brand-muted hover:text-brand-primary transition-colors duration-200 mb-6 inline-block"
          >
            ← Products
          </Link>

          <div className="section-card rounded-2xl px-6 md:px-10 py-8 md:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden relative shadow-lg">
                    <Image src={p.iconSrc} alt={`${p.name} icon`} width={64} height={64} priority />
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.18em] uppercase text-brand-gold mb-1">
                      {p.category}
                    </p>
                    <h1
                      className="font-fraunces font-semibold text-brand-primary"
                      style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                    >
                      {p.name}
                    </h1>
                  </div>
                </div>

                <p className="text-lg text-brand-teal font-medium mb-3">{p.tagline}</p>
                <p className="text-brand-secondary leading-relaxed max-w-2xl mb-2">{p.description}</p>
                <p className="text-sm text-brand-gold-muted mb-6">
                  Freemium · {p.statusLabel}
                </p>

                <PlayStoreBadge url={p.playStoreUrl} />

                {p.legalLinks ? (
                  <div className="flex flex-wrap gap-4 mt-6 mb-10">
                    <Link
                      href={p.legalLinks.privacy}
                      className="text-sm font-medium text-brand-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href={p.legalLinks.terms}
                      className="text-sm font-medium text-brand-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
                    >
                      Terms of Service
                    </Link>
                  </div>
                ) : (
                  <div className="mb-10" />
                )}

                <h2 className="font-fraunces text-xl text-brand-primary mb-5 mt-10">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                  {p.features.map((f, i) => (
                    <div
                      key={f.label}
                      className="group relative h-full rounded-lg border"
                      style={{ borderColor: "var(--border-subtle)", background: "var(--bg-elevated)" }}
                    >
                      <span
                        className={`pillar-glow-top ${i % 2 === 0 ? "pillar-glow-top--gold" : "pillar-glow-top--teal"}`}
                      />
                      <div className="pillar-cell h-full">
                        <div className="mb-3">
                          <FeatureIcon type={f.icon} />
                        </div>
                        <h3 className="text-[15px] font-semibold text-brand-primary mb-2">{f.label}</h3>
                        <p className="text-[13px] text-brand-secondary leading-relaxed">{f.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6 items-center lg:items-end">
                <ProductFrame className="w-[260px]">
                  <Image
                    src={p.screenshotSrc}
                    alt={`${p.name} home screen`}
                    width={260}
                    height={460}
                    className="w-full h-auto object-cover object-top"
                    priority
                    sizes="260px"
                  />
                </ProductFrame>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
