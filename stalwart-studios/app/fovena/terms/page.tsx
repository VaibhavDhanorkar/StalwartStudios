import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { fovena } from "@/lib/fovena";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Fovena Terms of Service | Stalwart Studios",
  },
  description:
    "Terms of service for Fovena — focus sessions, optional Pro subscription, and acceptable use.",
  alternates: {
    canonical: fovena.termsUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FovenaTermsPage() {
  return (
    <LegalPage
      title="Fovena Terms of Service"
      updated={fovena.effectiveDate}
      publisher={fovena.publisher}
      eyebrow="Fovena"
      crossLink={{ href: fovena.privacyPath, label: "Privacy Policy" }}
    >
      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">1. Agreement</h2>
        <p>
          By downloading or using Fovena you agree to these terms and to the{" "}
          <a
            href={fovena.privacyUrl}
            className="text-brand-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
          >
            Privacy Policy
          </a>
          . If you do not agree, do not use the app.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">2. What Fovena is</h2>
        <p>
          Fovena is a productivity tool for focus sessions, tasks, and streaks. It is{" "}
          <strong className="text-brand-primary">not</strong> a medical device, diagnosis, or
          treatment. Nothing in the app is medical advice.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">3. Free and Pro</h2>
        <p className="mb-3">
          The free tier includes a limited number of focus sessions and tasks. Fovena Pro is an
          optional auto-renewing subscription (monthly or yearly) sold through Google Play. Prices
          shown in the app are indicative; Google Play charges the price for your account, including
          applicable taxes.
        </p>
        <p>
          Pro unlocks extra features such as unlimited sessions and tasks, longer history, ambience,
          and export. A purchase never marks a focus session complete for you.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">4. Cancellation and restore</h2>
        <p>
          Cancel via <strong className="text-brand-primary">Settings → Manage subscription</strong>{" "}
          or Google Play → Payments &amp; subscriptions. Cancellation stops future renewals per
          Google Play&apos;s rules and does not delete local history unless you reset it. Use{" "}
          <strong className="text-brand-primary">Restore purchases</strong> after reinstall or on a
          new device. Resetting local progress does not cancel a subscription.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">5. Acceptable use</h2>
        <p>
          Use Fovena for lawful personal productivity only. Do not reverse-engineer the app to
          access paid features without paying.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">6. Notifications and Focus Lock</h2>
        <p>
          Daily reminders are optional. Focus Lock pauses the Fovena timer if you leave the app during
          a session. Fovena does not block emergency, alarm, or medical-alert notifications.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">7. Disclaimer</h2>
        <p>
          Fovena is provided &quot;as is.&quot; Stalwart Studios is not liable for lost work, missed
          reminders, or decisions you make while using a focus timer. To the extent permitted by law,
          liability is limited to what you paid for Fovena Pro in the three months before a claim.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">8. Contact</h2>
        <p>
          <a
            href={`mailto:${fovena.supportEmail}`}
            className="text-brand-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
          >
            {fovena.supportEmail}
          </a>
          {" · "}
          <Link
            href="/"
            className="text-brand-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
          >
            {site.siteUrl}
          </Link>
        </p>
      </section>
    </LegalPage>
  );
}
