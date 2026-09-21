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

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-[68px]">
      <SectionShell
        label="Products"
        heading="What we ship"
        sectionClassName="pt-16 md:pt-20"
        sectionStyle={{ borderTop: "none" }}
      >
        <p className="text-brand-secondary max-w-xl mb-10">
          A lean catalog of proprietary products. No filler — only what is launching or live.
        </p>

        <div className="grid gap-8">
          {catalogProducts.map((p) =>
            p.legalLinks && !p.screenshotSrc ? (
              <ProductCardShell key={p.slug} className="group">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h2 className="text-2xl font-fraunces font-semibold text-brand-primary">{p.name}</h2>
                  <span
                    className="text-[11px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
                    style={{
                      color: "var(--accent-gold-muted)",
                      border: "1px solid color-mix(in srgb, var(--accent-gold) 28%, transparent)",
                    }}
                  >
                    {p.statusLabel}
                  </span>
                </div>
                <p className="text-sm text-brand-teal font-medium mb-2">{p.tagline}</p>
                <p className="text-sm text-brand-secondary leading-relaxed max-w-xl mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-4">
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
              </ProductCardShell>
            ) : (
              <Link
                key={p.slug}
                href={p.href}
                className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center rounded-lg border p-6 md:p-8 transition-transform duration-200 hover:scale-[1.01]"
                style={{ borderColor: "var(--border-subtle)", background: "var(--bg-elevated)" }}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-2xl font-fraunces font-semibold text-brand-primary group-hover:text-brand-gold transition-colors duration-200">
                      {p.name}
                    </h2>
                    <span
                      className="text-[11px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
                      style={{
                        color: "var(--accent-gold-muted)",
                        border: "1px solid color-mix(in srgb, var(--accent-gold) 28%, transparent)",
                      }}
                    >
                      {p.statusLabel}
                    </span>
                  </div>
                  <p className="text-sm text-brand-teal font-medium mb-2">{p.tagline}</p>
                  <p className="text-sm text-brand-secondary leading-relaxed max-w-xl mb-4">{p.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-gold">
                    View product
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
                {p.screenshotSrc ? (
                  <ProductFrame className="w-[180px] hidden md:block">
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
                ) : null}
              </Link>
            ),
          )}
        </div>
      </SectionShell>
    </main>
  );
}
