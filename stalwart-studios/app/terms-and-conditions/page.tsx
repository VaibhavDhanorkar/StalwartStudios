import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms & Conditions for ${site.entity}.`,
};

export default function TermsAndConditions() {
  return (
    <LegalPage title="Terms & Conditions" updated="August 2026">
      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">1. Acceptance</h2>
        <p>
          By accessing or using any website, mobile app, digital product, or studio service
          operated by {site.entity}, you agree to these Terms & Conditions. If you do not agree,
          discontinue use immediately.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">2. Scope of Services</h2>
        <p className="mb-3">These Terms cover:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Mobile applications published by us (including Fovena)</li>
          <li>Web applications and this website ({site.domain})</li>
          <li>Digital products and related studio engagements we offer</li>
        </ul>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">3. Payments</h2>
        <p className="mb-3">Payment channels depend on where you purchase:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-brand-primary">Google Play (mobile IAP / subscriptions):</strong>{" "}
            billed and managed under Google Play Billing policies.
          </li>
          <li>
            <strong className="text-brand-primary">Web purchases:</strong> processed via Razorpay
            and/or Cashfree. We do not store full payment card details on our servers.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">4. Acceptable Use</h2>
        <p>
          You agree to use our services only for lawful purposes and not to misuse, reverse-engineer,
          disrupt, or attempt unauthorized access to any part of our systems or other users&apos; data.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">5. Intellectual Property</h2>
        <p>
          All content, trademarks, designs, and software associated with {site.entity} products are
          owned by us or our licensors unless otherwise stated. Unauthorized copying or distribution
          is prohibited.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">6. Disclaimers & Liability</h2>
        <p>
          Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis to the
          extent permitted by law. We are not liable for indirect, incidental, or consequential
          damages arising from use of our products, except where liability cannot be limited under
          applicable law.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">7. Governing Law & Jurisdiction</h2>
        <p>
          These Terms are governed by the laws of India. Exclusive jurisdiction lies with the courts
          in {site.jurisdictionShort}.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">8. Merchant Identity & Contact</h2>
        <ul className="list-none space-y-2">
          <li>
            <strong className="text-brand-primary">Entity:</strong> {site.legalName}
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
    </LegalPage>
  );
}
