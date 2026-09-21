import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Refund and cancellation policy for ${site.entity}.`,
};

export default function RefundPolicy() {
  return (
    <LegalPage title="Refund & Cancellation Policy" updated="August 2026">
      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">1. Overview</h2>
        <p>
          This policy explains how refunds and cancellations work for purchases made through{" "}
          {site.entity}. The applicable channel — Google Play or web payment — determines the
          process.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">2. Web Purchases (Razorpay / Cashfree)</h2>
        <p>
          For eligible web transactions, approved refunds are typically processed within{" "}
          <strong className="text-brand-primary">5–7 business days</strong> to the original payment
          method, subject to your bank or card issuer. Contact{" "}
          <a href={`mailto:${site.supportEmail}`} className="text-brand-gold">
            {site.supportEmail}
          </a>{" "}
          with your order details to request a review.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">
          3. Mobile Apps (Fovena & Future Apps on Google Play)
        </h2>
        <p>
          In-app purchases and subscriptions made through Google Play are governed by{" "}
          <strong className="text-brand-primary">Google Play&apos;s refund guidelines</strong>. You
          may request refunds through Google Play (often within the Play refund window) or manage /
          cancel subscriptions in your Google Play account settings. Access continues until the end
          of the paid period when you cancel a subscription.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">4. Channel Separation</h2>
        <p>
          Play Store purchases cannot be refunded through Razorpay/Cashfree or our website
          checkout, and web purchases cannot be refunded through Google Play. Always use the
          channel where the payment was originally made.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">5. Exceptions</h2>
        <p>
          We may decline refunds where required by law or store policy — for example, after a
          refund window has closed, for abuse or Terms violations, or for digital goods already
          substantially consumed where applicable rules allow.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">6. Contact</h2>
        <p>
          Email{" "}
          <a href={`mailto:${site.supportEmail}`} className="text-brand-gold">
            {site.supportEmail}
          </a>{" "}
          or call {site.phone}. Entity: {site.legalName}; Udyam: {site.udyam}.
        </p>
      </section>
    </LegalPage>
  );
}
