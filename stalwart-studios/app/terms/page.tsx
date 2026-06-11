import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Terms of Service — Stalwart Studios",
};

export default function Terms() {
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
          <h1 className="font-fraunces text-4xl font-semibold text-brand-primary mb-4">Terms of Service</h1>
          <p className="text-brand-secondary text-sm">Last updated: June 2025</p>
        </div>
        <div className="space-y-8 text-brand-secondary text-sm leading-relaxed">
          {[
            { title: "1. Acceptance of Terms", body: "By accessing or using any Stalwart Studios product or service, you agree to be bound by these Terms of Service. If you do not agree, please discontinue use immediately." },
            { title: "2. Use of Services", body: "You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of others. You must not misuse, reverse-engineer, or attempt to gain unauthorized access to any part of our services." },
            { title: "3. Intellectual Property", body: "All content, trademarks, designs, and code within Stalwart Studios products are the exclusive property of Stalwart Studios unless otherwise stated. Unauthorized use is strictly prohibited." },
            { title: "4. Disclaimer of Warranties", body: "Our services are provided 'as is' without warranties of any kind. We do not warrant that our services will be uninterrupted, error-free, or free from harmful components." },
            { title: "5. Limitation of Liability", body: "To the maximum extent permitted by law, Stalwart Studios shall not be liable for any indirect, incidental, special, or consequential damages arising from use or inability to use our services." },
            { title: "6. Changes to Terms", body: "We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms." },
            { title: "7. Contact", body: "Questions about these Terms? Email us at support@stalwartstudios.in." },
          ].map((s) => (
            <section key={s.title}>
              <h2 className="font-fraunces text-xl text-brand-primary mb-3">{s.title}</h2>
              <p>{s.body}</p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
