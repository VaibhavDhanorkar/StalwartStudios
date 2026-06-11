"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import type { SiteSettings } from "@/lib/sanity.fetch";

interface Props { siteSettings?: SiteSettings | null; }

export function ContactSection({ siteSettings }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const email = siteSettings?.supportEmail ?? "support@stalwartstudios.in";
  const location = siteSettings?.location ?? "India";

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24"
      style={{ background: "#0A0A0B", borderTop: "1px solid #1E1E22" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-line" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#8A8A94]">Get in Touch</span>
            </div>
            <h2
              className="font-fraunces font-semibold text-[#EDE8E0] mb-5 leading-[1.1]"
              style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)" }}
            >
              We'd love to hear from you.
            </h2>
            <p className="text-[15px] text-[#6A6A74] leading-relaxed mb-10 max-w-sm">
              Whether you have a question, want to collaborate, or just want to say hello — we read every message.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-[11px] tracking-[0.16em] uppercase text-[#4A4A52] mb-1">Support</p>
                <a href={`mailto:${email}`} className="text-sm text-[#EDE8E0] hover:text-[#F4C05F] transition-colors">{email}</a>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.16em] uppercase text-[#4A4A52] mb-1">Location</p>
                <p className="text-sm text-[#EDE8E0]">{location}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="rounded-xl p-8"
            style={{ background: "#111113", border: "1px solid #1E1E22" }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-52 gap-4 text-center">
                <CheckCircle size={32} style={{ color: "#158C7D" }} />
                <div>
                  <p className="font-fraunces text-lg text-[#EDE8E0] mb-1">Message received.</p>
                  <p className="text-sm text-[#6A6A74]">We'll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                {[
                  { id: "name", label: "Name", type: "text", ph: "Your name" },
                  { id: "email", label: "Email", type: "email", ph: "you@example.com" },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-[11px] font-medium tracking-[0.14em] uppercase text-[#6A6A74] mb-2">{f.label}</label>
                    <input
                      id={f.id} type={f.type} placeholder={f.ph} required
                      value={form[f.id as "name" | "email"]}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      className="w-full rounded-md px-4 py-3 text-sm text-[#EDE8E0] placeholder-[#4A4A52] outline-none transition-colors duration-200"
                      style={{ background: "#18181B", border: "1px solid #2A2A2F" }}
                      onFocus={e => (e.currentTarget.style.borderColor = "rgba(244,192,95,0.4)")}
                      onBlur={e => (e.currentTarget.style.borderColor = "#2A2A2F")}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-[11px] font-medium tracking-[0.14em] uppercase text-[#6A6A74] mb-2">Message</label>
                  <textarea
                    id="message" placeholder="Tell us what's on your mind..." required rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-md px-4 py-3 text-sm text-[#EDE8E0] placeholder-[#4A4A52] outline-none resize-none transition-colors duration-200"
                    style={{ background: "#18181B", border: "1px solid #2A2A2F" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(244,192,95,0.4)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#2A2A2F")}
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-md text-sm font-semibold tracking-wide transition-all duration-200"
                  style={{ background: "#F4C05F", color: "#0A0A0B" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#E8A840")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#F4C05F")}
                >
                  Send Message
                  <Send size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
