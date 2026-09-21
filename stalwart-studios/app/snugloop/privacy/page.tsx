import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { snugloop } from "@/lib/snugloop";

export const metadata: Metadata = {
  title: "Snugloop Privacy Policy",
  description:
    "Privacy policy for Snugloop — local save, age-based optional ads, and Google Play purchases.",
  alternates: {
    canonical: snugloop.privacyUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SnugloopPrivacyPage() {
  return (
    <LegalPage
      title="Snugloop Privacy Policy"
      updated={snugloop.effectiveDate}
      publisher={snugloop.publisher}
      eyebrow="Snugloop"
      crossLink={{ href: snugloop.termsPath, label: "Terms of Service" }}
    >
      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">Overview</h2>
        <p className="mb-3">
          Snugloop is a cozy puzzle game. Progress and settings are stored{" "}
          <strong className="text-brand-primary">on your device</strong>. We do not operate accounts
          or cloud saves.
        </p>
        <p>
          On first launch you choose <strong className="text-brand-primary">I&apos;m 13 or older</strong>{" "}
          or <strong className="text-brand-primary">I&apos;m under 13</strong>. That choice is stored
          locally and controls whether optional ads may load. The full campaign is playable either way.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">Data on your device</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Game progress (level, scores, room decor unlocks)</li>
          <li>Settings (sound, ambiance preferences)</li>
          <li>Purchases and cosmetic selections</li>
          <li>Age-screen choice (local only)</li>
        </ul>
        <p className="mt-3">Data remains on your device unless you uninstall the app.</p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">Advertising</h2>
        <p className="mb-3">
          Optional ads run only if you selected <strong className="text-brand-primary">I&apos;m 13 or older</strong>{" "}
          and have not purchased <strong className="text-brand-primary">Remove Ads</strong>.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            An ad partner (e.g. Google AdMob) may collect device identifiers and ad interaction data
            under its own policy
          </li>
          <li>Ads appear on menu tabs only — never on the puzzle board</li>
          <li>Interstitials are spaced apart; rewarded ads are optional and grant hints only after completion</li>
        </ul>
        <p className="mt-3">
          If you selected <strong className="text-brand-primary">I&apos;m under 13</strong>, no ad SDK
          loads and no ad requests are made. You can remove ads permanently via the in-app{" "}
          <strong className="text-brand-primary">Remove ads</strong> purchase.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">Purchases</h2>
        <p>
          Purchases are processed by Google Play. We receive receipts to unlock cosmetics, hints, or
          ad removal. We do not store payment card numbers.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">Children&apos;s privacy</h2>
        <p>
          Players who select <strong className="text-brand-primary">I&apos;m under 13</strong> get an
          ad-free experience with no ad SDK. If you believe we collected information from a child
          under 13 in error, contact us to delete local data on your device.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">Your choices</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-brand-primary">Remove ads:</strong> Cozy shop → Remove ads
          </li>
          <li>
            <strong className="text-brand-primary">Mute audio:</strong> More → Sound effects / Hub ambiance
          </li>
          <li>
            <strong className="text-brand-primary">Reset progress:</strong> More → Reset campaign (keeps
            purchases and age choice)
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">Changes and contact</h2>
        <p className="mb-3">
          We may update this policy when features change; the effective date above will be revised.
          The in-app <strong className="text-brand-primary">More</strong> tab links to the latest
          version. See also our{" "}
          <Link
            href={snugloop.termsPath}
            className="text-brand-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
          >
            Terms of Service
          </Link>
          .
        </p>
        <p>
          <a
            href={`mailto:${snugloop.supportEmail}`}
            className="text-brand-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
          >
            {snugloop.supportEmail}
          </a>
        </p>
      </section>
    </LegalPage>
  );
}
