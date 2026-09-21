import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ProductFrame } from "@/components/ProductFrame";
import { SectionShell } from "@/components/SectionShell";
import { catalogProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Shipped and launching products from Stalwart Digital Studios.",
};

function ProductCardShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border p-6 md:p-8 ${className}`}
      style={{ borderColor: "var(--border-subtle)", background: "var(--bg-elevated)" }}
    >
      {children}
    </div>
  );
}

function LegalLinks({ privacy, terms }: { privacy: string; terms: string }) {
  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href={privacy}
        className="text-sm font-medium text-brand-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
      >
        Privacy Policy
      </Link>
      <Link
        href={terms}
        className="text-sm font-medium text-brand-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
      >
        Terms of Service
      </Link>
    </div>
  );
}

function ProductStatusBadge({ label }: { label: string }) {
  return (
    <span
      className="text-[11px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
      style={{
        color: "var(--accent-gold-muted)",
        border: "1px solid color-mix(in srgb, var(--accent-gold) 28%, transparent)",
      }}
    >
      {label}
    </span>
  );
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-[68px]">
      <SectionShell
        label="Products"
        heading="What we ship"
        sectionClassName="pt-16 md:pt-20"
        sectionStyle={{ borderTop: "none" }}
      >
        <p className="text-brand-secondary leading-relaxed mb-10 max-w-2xl">
          A lean catalog of proprietary products. No filler — only what is launching or{"\u00A0"}live.
        </p>

        <div className="grid gap-8">
          {catalogProducts.map((p) =>
            p.screenshotSrc ? (
              <ProductCardShell key={p.slug}>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h2 className="text-2xl font-fraunces font-semibold text-brand-primary">{p.name}</h2>
                      <ProductStatusBadge label={p.statusLabel} />
                    </div>
                    <p className="text-sm text-brand-teal font-medium mb-2">{p.tagline}</p>
                    <p className="text-sm text-brand-secondary leading-relaxed max-w-2xl mb-4">{p.description}</p>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                      <Link
                        href={p.href}
                        className="group inline-flex items-center gap-2 text-sm font-medium text-brand-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
                      >
                        View product
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform duration-200"
                        />
                      </Link>
                      {p.legalLinks ? (
                        <LegalLinks privacy={p.legalLinks.privacy} terms={p.legalLinks.terms} />
                      ) : null}
                    </div>
                  </div>
                  <ProductFrame className="w-[180px] hidden md:block mx-auto md:mx-0">
                    <Image
                      src={p.screenshotSrc}
                      alt={`${p.name} screenshot`}
                      width={180}
                      height={320}
                      className="w-full h-auto object-cover object-top"
                      loading="lazy"
                      sizes="180px"
                    />
                  </ProductFrame>
                </div>
              </ProductCardShell>
            ) : p.legalLinks ? (
              <ProductCardShell key={p.slug}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h2 className="text-2xl font-fraunces font-semibold text-brand-primary">{p.name}</h2>
                  <ProductStatusBadge label={p.statusLabel} />
                </div>
                <p className="text-sm text-brand-teal font-medium mb-2">{p.tagline}</p>
                <p className="text-sm text-brand-secondary leading-relaxed max-w-2xl mb-4">{p.description}</p>
                <LegalLinks privacy={p.legalLinks.privacy} terms={p.legalLinks.terms} />
              </ProductCardShell>
            ) : null,
          )}
        </div>
      </SectionShell>
    </main>
  );
}
