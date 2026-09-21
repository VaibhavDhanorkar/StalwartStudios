import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { snugloop } from "@/lib/snugloop";

export const metadata: Metadata = {
  title: "Snugloop Terms of Service",
  description:
    "Terms of service for Snugloop — license, local save, optional ads, and Google Play purchases.",
  alternates: {
    canonical: snugloop.termsUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SnugloopTermsPage() {
  return (
    <LegalPage
      title="Snugloop Terms of Service"
      updated={snugloop.effectiveDate}
      publisher={snugloop.publisher}
      eyebrow="Snugloop"
      crossLink={{ href: snugloop.privacyPath, label: "Privacy Policy" }}
    >
      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">1. Agreement</h2>
        <p>
          By playing Snugloop you agree to these terms and to the{" "}
          <Link
            href={snugloop.privacyPath}
            className="text-brand-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
          >
            Privacy Policy
          </Link>
          . If you do not agree, do not use the app.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">2. License</h2>
        <p>
          We grant you a personal, non-transferable license to play Snugloop for personal
          entertainment. You may not reverse engineer, redistribute, or sell the app or its assets.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">3. Age choice and ads</h2>
        <p>
          On first launch you choose whether you are 13 or older or under 13. That choice controls
          optional ads and ad SDK initialization. The full puzzle campaign stays available either
          way. Ad placement and data collection are described in the{" "}
          <Link
            href={snugloop.privacyPath}
            className="text-brand-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">4. Game content</h2>
        <p>
          Puzzles are procedurally generated and checked for solvability. Difficulty may change in
          updates. Cosmetics and hints do not change puzzle fairness.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">5. Purchases</h2>
        <p>
          Purchases are final per Google Play policies unless required by law. Purchases affect
          cosmetics, optional hints, and ad removal only — never the puzzle solution. Remove Ads
          disables interstitial and hub banner ads for players who selected{" "}
          <strong className="text-brand-primary">I&apos;m 13 or older</strong>; rewarded hints remain
          optional.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">6. Local save</h2>
        <p>
          Progress is stored on your device. Reinstalling may erase progress. Cloud backup is not
          offered. Reset campaign clears progress but keeps purchases and your age choice.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">7. Disclaimer</h2>
        <p>
          Snugloop is provided &quot;as is&quot; without warranty. Stalwart Digital Studios is not
          liable for indirect damages arising from use of the app.
        </p>
      </section>

      <section>
        <h2 className="font-fraunces text-xl text-brand-primary mb-3">8. Contact</h2>
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
