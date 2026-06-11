"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import type { SiteSettings } from "@/lib/sanity.fetch";
import { SectionShell } from "./SectionShell";

interface Props { siteSettings?: SiteSettings | null; }

export function ContactSection({ siteSettings }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const email = siteSettings?.supportEmail ?? "support@stalwartstudios.in";
  const location = siteSettings?.location ?? "India";

  return (
    <SectionShell
      id="contact"
      sectionRef={ref}
      label="Get in Touch"
      heading="We'd love to hear from you."
      headingClassName="max-w-[680px]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
            <p className="text-[15px] text-brand-muted leading-relaxed mb-10 max-w-sm">
              Whether you have a question, want to collaborate, or just want to say hello — we read every message.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-[11px] tracking-[0.16em] uppercase text-brand-faint mb-1">Support</p>
                <a href={`mailto:${email}`} className="text-sm text-brand-primary hover:text-brand-gold transition-colors">{email}</a>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.16em] uppercase text-brand-faint mb-1">Location</p>
                <p className="text-sm text-brand-primary">{location}</p>
              </div>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="rounded-xl p-8"
          style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)" }}
        >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-52 gap-4 text-center">
                <CheckCircle size={32} style={{ color: "var(--accent-teal)" }} />
                <div>
                  <p className="font-fraunces text-lg text-brand-primary mb-1">Message received.</p>
                  <p className="text-sm text-brand-muted">We'll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                {[
                  { id: "name", label: "Name", type: "text", ph: "Your name" },
                  { id: "email", label: "Email", type: "email", ph: "you@example.com" },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-[11px] font-medium tracking-[0.14em] uppercase text-brand-muted mb-2">{f.label}</label>
                    <input
                      id={f.id} type={f.type} placeholder={f.ph} required
                      value={form[f.id as "name" | "email"]}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      className="w-full rounded-md px-4 py-3 text-sm text-brand-primary placeholder-brand-faint outline-none transition-colors duration-200"
                      style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}
                      onFocus={e => (e.currentTarget.style.borderColor = "rgba(244,192,95,0.4)")}
                      onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-[11px] font-medium tracking-[0.14em] uppercase text-brand-muted mb-2">Message</label>
                  <textarea
                    id="message" placeholder="Tell us what's on your mind..." required rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-md px-4 py-3 text-sm text-brand-primary placeholder-brand-faint outline-none resize-none transition-colors duration-200"
                    style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(244,192,95,0.4)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-md text-sm font-semibold tracking-wide transition-all duration-200"
                  style={{ background: "var(--accent-gold)", color: "var(--bg-primary)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-gold-dim)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "var(--accent-gold)")}
                >
                  Send Message
                  <Send size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>
            )}
        </motion.div>
      </div>
    </SectionShell>
  );
}
