import type { ReactNode } from "react";

type Props = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalPage({ title, updated, children }: Props) {
  return (
    <main className="min-h-screen pt-[68px] bg-brand-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="max-w-3xl">
          <div className="mb-12">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-gold mb-3">Legal</p>
            <h1 className="font-fraunces text-4xl font-semibold text-brand-primary mb-4">{title}</h1>
            <p className="text-brand-secondary text-sm">Last updated: {updated}</p>
          </div>
          <div className="space-y-8 text-brand-secondary text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </main>
  );
}
