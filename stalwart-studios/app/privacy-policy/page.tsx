import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Privacy Policy — Stalwart Studios",
  description: "Privacy Policy for Stalwart Studios and its products.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <header className="border-b border-border/40 py-5 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Logo size="sm" />
          <Link href="/" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent-gold mb-3">Legal</p>
          <h1 className="font-fraunces text-4xl font-semibold text-text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-text-secondary text-sm">Last updated: June 2025</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-text-secondary text-sm leading-relaxed">
          <section>
            <h2 className="font-fraunces text-xl text-text-primary mb-3">1. Introduction</h2>
            <p>
              Stalwart Studios ("we", "our", or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you use our products and services, including Focus Champ and
              this website.
            </p>
            <p className="mt-3">
              By using our services, you agree to the collection and use of information in
              accordance with this policy. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-fraunces text-xl text-text-primary mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-text-primary">Account Information:</strong> Name and email address when you create an account or contact us.</li>
              <li><strong className="text-text-primary">Usage Data:</strong> Information about how you use our apps, such as session durations, feature usage, and in-app actions — collected in aggregate to improve the product.</li>
              <li><strong className="text-text-primary">Device Information:</strong> Device type, operating system version, and app version for compatibility and crash reporting.</li>
              <li><strong className="text-text-primary">Communications:</strong> Any messages you send us directly via email or contact forms.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-fraunces text-xl text-text-primary mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, operate, and maintain our apps and services.</li>
              <li>To improve, personalize, and expand our products.</li>
              <li>To respond to your comments and questions.</li>
              <li>To send you product updates and communications (only with your consent).</li>
              <li>To detect and prevent fraud, abuse, or security issues.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-fraunces text-xl text-text-primary mb-3">4. Data Storage & Security</h2>
            <p>
              Your data is stored securely. We use industry-standard encryption and security
              practices to protect your information. We do not sell, trade, or rent your
              personal data to third parties.
            </p>
            <p className="mt-3">
              Focus Champ stores task and focus session data locally on your device by default.
              Any cloud sync features (when available) will be clearly disclosed.
            </p>
          </section>

          <section>
            <h2 className="font-fraunces text-xl text-text-primary mb-3">5. Third-Party Services</h2>
            <p>
              We may use third-party services for analytics and crash reporting (such as
              Firebase Crashlytics). These services have their own privacy policies and we
              encourage you to review them. We ensure any third-party we use meets
              reasonable privacy standards.
            </p>
          </section>

          <section>
            <h2 className="font-fraunces text-xl text-text-primary mb-3">6. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not knowingly collect
              personal information from children under 13. If you believe a child has provided
              us personal information, please contact us and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="font-fraunces text-xl text-text-primary mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data.</li>
              <li>Opt out of marketing communications at any time.</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{" "}
              <a href="mailto:support@stalwartstudios.in" className="text-accent-gold hover:underline">
                support@stalwartstudios.in
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-fraunces text-xl text-text-primary mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              any changes by posting the new policy on this page and updating the
              "last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="font-fraunces text-xl text-text-primary mb-3">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:support@stalwartstudios.in" className="text-accent-gold hover:underline">
                support@stalwartstudios.in
              </a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
