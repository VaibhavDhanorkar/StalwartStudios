import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { fovena } from "@/lib/fovena";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Fovena Privacy Policy | Stalwart Studios",
  },
  description:
    "Privacy policy for Fovena — local data, no ads, no accounts, optional Pro via Google Play.",
  alternates: {
    canonical: fovena.privacyUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FovenaPrivacyPage() {
  return (
    <LegalPage
      title="Fovena Privacy Policy"
      updated={fovena.effectiveDate}
      publisher={fovena.publisher}
      eyebrow="Fovena"
      crossLink={{ href: fovena.termsPath, label: "Terms of Service" }}
    >
      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">Overview</h2>
        <p>
          Fovena is a productivity app for task-linked focus sessions, streaks, and optional Pro
          subscriptions. Core features run <strong className="text-brand-primary">locally on your device</strong>{" "}
          without an account. Fovena is not a medical device and is not a treatment for ADHD or any
          other condition.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">Data on your device</h2>
        <p className="mb-3">Fovena stores the following on your device:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Focus session history (duration, XP, task name, mode, distraction counts)</li>
          <li>Tasks and session estimates</li>
          <li>Streak and productivity statistics</li>
          <li>App preferences (reminder time, focus mode, ambience)</li>
          <li>Day Architect plan (if you create one)</li>
          <li>A local cache of Pro subscription status (Google Play is the source of truth)</li>
        </ul>
        <p className="mt-3">
          This data stays on your device unless you reset local progress or uninstall the app.
          Resetting local progress clears sessions, tasks, and preferences. It does{" "}
          <strong className="text-brand-primary">not</strong> cancel a Google Play subscription; the
          app re-checks Play Billing after a reset.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">Data we do not collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>No account registration or cloud sync</li>
          <li>No sale of personal data</li>
          <li>
            <strong className="text-brand-primary">No ads and no advertising SDK</strong>
          </li>
          <li>
            <strong className="text-brand-primary">No analytics SDK</strong> in the current version.
            This policy will be updated before any analytics that collects device or usage data is
            added.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">Purchases and subscriptions</h2>
        <p className="mb-3">
          Fovena Pro is sold through <strong className="text-brand-primary">Google Play Billing</strong>.
          Google processes payment; we do not receive your card details. Google may collect purchase
          and device data under its own privacy policy. Fovena uses Google Play to verify and restore
          an active subscription.
        </p>
        <p className="mb-3">
          Manage or cancel in the app via <strong className="text-brand-primary">Settings → Manage subscription</strong>
          , or in Google Play → Payments &amp; subscriptions.
        </p>
        <p>
          For users in <strong className="text-brand-primary">India</strong>, prices are shown in INR
          on Google Play. Tax and recurring billing follow Google Play&apos;s rules at the time of
          purchase.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">Notifications</h2>
        <p className="mb-3">
          Daily reminders, if enabled, are <strong className="text-brand-primary">local</strong>{" "}
          notifications on your device. Content is not sent to Stalwart servers.
        </p>
        <p>
          <strong className="text-brand-primary">Focus Lock</strong> (optional) pauses Fovena&apos;s
          timer if you leave the app during a session. It does not block other apps, alarms, or
          medical-alert notifications.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">Children&apos;s privacy</h2>
        <p>
          Fovena is for teens and adults, not children under 13. We do not knowingly collect personal
          information from children.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">Deletion</h2>
        <p>
          Delete local data via <strong className="text-brand-primary">Settings → Reset local progress</strong>
          , or by uninstalling the app. Cancel a paid subscription separately through Google Play.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">Security and changes</h2>
        <p className="mb-3">
          Most data is stored locally — use a screen lock on your device. We may update this policy
          when features change; the effective date above will be revised.
        </p>
        <p>
          Questions:{" "}
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
