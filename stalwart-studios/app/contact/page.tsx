import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionShell } from "@/components/SectionShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Stalwart Digital Studios — merchant identity and support.",
};

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
          Product questions, support, or partnerships — we respond from the address below.
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
                <span className="text-brand-primary">{site.legalName}</span>
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
              <p>
                <span className="text-brand-muted">Phone</span>
                <br />
                <a href={`tel:${site.phoneTel}`} className="text-brand-primary">
                  {site.phone}
                </a>
              </p>
              <p>
                <span className="text-brand-muted">Address</span>
                <br />
                <span className="text-brand-primary leading-relaxed">{site.address}</span>
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-fraunces text-xl text-brand-primary mb-6">Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
