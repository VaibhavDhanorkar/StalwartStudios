import type { ReactNode } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

type Props = {
  title: string;
  updated: string;
  publisher?: string;
  eyebrow?: string;
  crossLink?: { href: string; label: string };
  children: ReactNode;
};

export function LegalPage({
  title,
  updated,
  publisher = site.entity,
  eyebrow = "Legal",
  crossLink,
  children,
}: Props) {
  return (
    <main className="min-h-screen pt-[68px] bg-brand-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <article className="max-w-3xl">
          <header className="mb-12">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-gold mb-3">
              {eyebrow}
            </p>
            <h1 className="font-fraunces text-4xl font-semibold text-brand-primary mb-4">{title}</h1>
            <p className="text-brand-secondary text-sm">
              Last updated: {updated}
              <span className="mx-2 text-brand-dim">·</span>
              Publisher: {publisher}
            </p>
            <p className="text-brand-secondary text-sm mt-2">
              Contact:{" "}
              <a
                href={`mailto:${site.supportEmail}`}
                className="text-brand-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
              >
                {site.supportEmail}
              </a>
            </p>
            {crossLink ? (
              <p className="text-sm mt-4">
                <Link
                  href={crossLink.href}
                  className="text-brand-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
                >
                  {crossLink.label}
                </Link>
              </p>
            ) : null}
          </header>
          <div className="space-y-8 text-brand-secondary text-sm leading-relaxed">{children}</div>
        </article>
      </div>
    </main>
  );
}
