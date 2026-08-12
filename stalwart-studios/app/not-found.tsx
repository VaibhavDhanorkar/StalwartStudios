import Link from "next/link";
import { HeroGrid } from "@/components/HeroGrid";

export default function NotFound() {
  return (
    <main
      className="relative min-h-screen flex items-center overflow-hidden pt-[68px]"
      style={{ background: "var(--bg-primary)" }}
    >
      <HeroGrid />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full py-20">
        <div className="max-w-lg">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-brand-gold mb-4">404</p>
          <h1
            className="font-fraunces font-semibold text-brand-primary mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Page not found
          </h1>
          <p className="text-sm text-brand-secondary mb-8">
            That route doesn&apos;t exist. Head back to the studio home.
          </p>
          <Link href="/" className="btn-primary inline-flex items-center px-6 py-3 text-sm">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
