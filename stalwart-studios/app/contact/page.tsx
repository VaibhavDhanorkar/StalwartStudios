import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { SectionShell } from "@/components/SectionShell";
import { site } from "@/lib/site";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata(
  "Contact — Stalwart Digital Studios",
  "Contact Stalwart Digital Studios — product support, AI-enabled builds, enterprise software, and partnerships.",
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
        <p className="text-brand-secondary leading-relaxed mb-10 max-w-md">
          Product support, AI-enabled builds, enterprise software, and partnerships — reach us here.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <div
              className="rounded-lg border p-6 space-y-4 text-sm"
              style={{ borderColor: "var(--border-subtle)", background: "var(--bg-elevated)" }}
            >
              <h2 className="text-xs uppercase tracking-[0.16em] text-brand-gold mb-2">
                Merchant identity
              </h2>
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

          <div>
            <h2 className="font-fraunces text-xl text-brand-primary mb-6">Send a message</h2>
            <Suspense fallback={<p className="text-sm text-brand-muted">Loading form…</p>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
