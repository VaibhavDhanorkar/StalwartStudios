import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Refund Policy — Stalwart Studios",
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-brand-primary">
      <header className="border-b py-5 px-6 border-brand-subtle">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Logo size="sm" />
          <Link href="/" className="text-sm text-brand-secondary hover:text-brand-primary transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-brand-gold mb-3">Legal</p>
          <h1 className="font-fraunces text-4xl font-semibold text-brand-primary mb-4">Refund Policy</h1>
          <p className="text-brand-secondary text-sm">Last updated: June 2025</p>
        </div>
        <div className="space-y-8 text-brand-secondary text-sm leading-relaxed">
          <section>
            <h2 className="font-fraunces text-xl text-brand-primary mb-3">Our Approach</h2>
            <p>We stand behind every product we ship. If something isn't working for you, we want to make it right. Our refund policy is straightforward and fair.</p>
          </section>
          <section>
            <h2 className="font-fraunces text-xl text-brand-primary mb-3">In-App Purchases & Subscriptions</h2>
            <p>All purchases made through the Google Play Store are subject to Google Play's refund policy. You may request a refund through Google Play within 48 hours of purchase. For subscriptions, you can cancel at any time — you will retain access until the end of the billing period.</p>
          </section>
          <section>
            <h2 className="font-fraunces text-xl text-brand-primary mb-3">Exceptions</h2>
            <p>Refunds will not be issued for change of mind after the refund window has closed, or for accounts found to be in violation of our Terms of Service.</p>
          </section>
          <section>
            <h2 className="font-fraunces text-xl text-brand-primary mb-3">How to Request a Refund</h2>
            <p>For any refund requests or billing questions, please email us at <a href="mailto:support@stalwartstudios.in" className="text-brand-gold hover:underline">support@stalwartstudios.in</a> with your order details. We typically respond within 1–2 business days.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
