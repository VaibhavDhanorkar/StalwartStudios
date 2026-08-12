import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.entity} and its products.`,
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="August 2026">
      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">1. Introduction</h2>
        <p>
          {site.entity} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and safeguard information when
          you use our website, mobile apps (including Focus Champ), and related digital products.
        </p>
        <p className="mt-3">
          We process personal data in accordance with applicable laws, including India&apos;s Digital
          Personal Data Protection Act, 2023 (DPDP) and, where applicable, the EU General Data
          Protection Regulation (GDPR).
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">2. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-brand-primary">Account & contact data:</strong> name, email, and
            messages you send via forms or support channels.
          </li>
          <li>
            <strong className="text-brand-primary">Usage & analytics:</strong> app and website
            interaction events, approximate device/app version, and performance metrics.
          </li>
          <li>
            <strong className="text-brand-primary">Crash logs:</strong> diagnostic data via Firebase
            Crashlytics or similar tooling to improve stability.
          </li>
          <li>
            <strong className="text-brand-primary">Device identifiers:</strong> identifiers required
            for analytics, fraud prevention, or store billing attribution where permitted.
          </li>
          <li>
            <strong className="text-brand-primary">Cookies / local storage:</strong> essential and
            preference storage on the website; analytics cookies where used.
          </li>
          <li>
            <strong className="text-brand-primary">Payment data:</strong> we do not store full card
            numbers. Payments are processed by Google Play Billing (mobile) or Razorpay / Cashfree
            (web), who act as payment processors.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">3. How We Use Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide, maintain, and improve our products and website.</li>
          <li>Process purchases, subscriptions, and refunds through the relevant channel.</li>
          <li>Respond to support and grievance requests.</li>
          <li>Monitor reliability, security, and abuse.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">4. Third-Party Processors</h2>
        <p className="mb-3">We may share data with processors that help us operate, including:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Google Play Billing (in-app purchases and subscriptions)</li>
          <li>Razorpay and Cashfree (web payments)</li>
          <li>Cloud analytics and crash reporting providers (e.g. Firebase)</li>
          <li>Hosting and email infrastructure providers</li>
        </ul>
        <p className="mt-3">
          These parties process data under their own terms and only as needed to perform services for us.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">5. Your Rights</h2>
        <p className="mb-3">Subject to applicable law, you may request:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access to personal data we hold about you</li>
          <li>Correction of inaccurate data</li>
          <li>Deletion of personal data where legally permitted</li>
          <li>Withdrawal of consent where processing is consent-based</li>
        </ul>
        <p className="mt-3">
          Contact our Data Protection / Grievance Officer at{" "}
          <a href={`mailto:${site.supportEmail}`} className="text-brand-gold">
            {site.supportEmail}
          </a>{" "}
          or {site.phone}.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">6. Data Retention & Security</h2>
        <p>
          We retain personal data only as long as needed for the purposes above or as required by
          law. We apply reasonable technical and organizational measures to protect data against
          unauthorized access, loss, or alteration.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">7. Merchant Identity</h2>
        <ul className="list-none space-y-2">
          <li>
            <strong className="text-brand-primary">Legal entity:</strong> {site.legalName}
          </li>
          <li>
            <strong className="text-brand-primary">Udyam:</strong> {site.udyam}
          </li>
          <li>
            <strong className="text-brand-primary">Address:</strong> {site.address}
          </li>
          <li>
            <strong className="text-brand-primary">Email:</strong> {site.supportEmail}
          </li>
          <li>
            <strong className="text-brand-primary">Phone:</strong> {site.phone}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">8. Changes</h2>
        <p>
          We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at
          the top reflects the latest revision. Continued use of our services after changes
          constitutes acceptance of the updated policy where permitted by law.
        </p>
      </section>
    </LegalPage>
  );
}
