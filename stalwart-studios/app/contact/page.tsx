import type { Metadata } from "next";
import { Suspense } from "react";
import { BookCallButton } from "@/components/BookCallButton";
import { BookingConfirmation } from "@/components/BookingConfirmation";
import { Commitments } from "@/components/Commitments";
import { ContactForm } from "@/components/ContactForm";
import { SectionShell } from "@/components/SectionShell";
import { site } from "@/lib/site";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata(
  "Contact — Stalwart Digital Studios",
  "Contact Stalwart Digital Studios — product support, new builds, and partnerships.",
);

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-[68px]">
      <SectionShell
        label="Contact"
        heading="Get in touch"
        sectionClassName="pt-16 md:pt-20"
        sectionStyle={{ borderTop: "none" }}
      >
        <Suspense fallback={null}>
          <BookingConfirmation />
        </Suspense>
        <p className="text-brand-secondary leading-relaxed mb-10 max-w-md">
          Product support, new builds, and partnerships — reach us here.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-brand-gold mb-2">
              Prefer to talk?
            </p>
            <p className="text-[15px] text-brand-secondary leading-relaxed mb-5 max-w-md">
              Book a 30-min consultation with our team. Pick a time that suits you.
            </p>
            <BookCallButton />
            <p className="text-[13px] text-brand-muted mt-3">Times show in your local time zone.</p>
          </div>

          <div>
            <h2 className="font-fraunces text-xl text-brand-primary mb-4">Send a message</h2>
            <Commitments className="mb-6" />
            <Suspense fallback={<p className="text-sm text-brand-muted">Loading form…</p>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>

        <div
          className="rounded-lg border p-6 md:p-8 space-y-4 text-sm mt-12 md:mt-16"
          style={{ borderColor: "var(--border-subtle)", background: "var(--bg-elevated)" }}
        >
          <h2 className="text-xs uppercase tracking-[0.16em] text-brand-gold mb-2">
            Merchant identity
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <p>
              <span className="text-brand-muted">Entity</span>
              <br />
              <span className="text-brand-primary">{site.entity}</span>
            </p>
            <p>
              <span className="text-brand-muted">Udyam Registration</span>
              <br />
              <span className="text-brand-primary">{site.udyam}</span>
            </p>
            <p>
              <span className="text-brand-muted">Email / DPO & grievance</span>
              <br />
              <a href={`mailto:${site.supportEmail}`} className="text-brand-gold">
                {site.supportEmail}
              </a>
            </p>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
