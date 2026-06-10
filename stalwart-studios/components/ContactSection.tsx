"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, wire to your backend / email service
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-28 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="section-line" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary">
            Get in Touch
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <h2 className="font-fraunces text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-text-primary mb-6">
              We'd love to hear from you.
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-10 max-w-sm">
              Whether you have a question about our products, want to collaborate, or just
              want to say hello — we read every message.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-xs tracking-[0.18em] uppercase text-text-secondary/60 mb-1">
                  Support
                </p>
                <a
                  href="mailto:support@stalwartstudios.in"
                  className="text-text-primary text-sm hover:text-accent-gold transition-colors duration-200"
                >
                  support@stalwartstudios.in
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.18em] uppercase text-text-secondary/60 mb-1">
                  Location
                </p>
                <p className="text-text-primary text-sm">India</p>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-bg-surface rounded-2xl border border-border p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-48 gap-4 text-center">
                <CheckCircle size={32} className="text-accent-teal" />
                <div>
                  <p className="font-fraunces text-lg text-text-primary mb-1">
                    Message received.
                  </p>
                  <p className="text-text-secondary text-sm">
                    We'll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
                ].map((f) => (
                  <div key={f.id}>
                    <label
                      htmlFor={f.id}
                      className="block text-xs font-medium tracking-[0.15em] uppercase text-text-secondary mb-2"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      placeholder={f.placeholder}
                      required
                      value={form[f.id as "name" | "email"]}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      className="w-full bg-bg-elevated border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent-gold/50 transition-colors duration-200"
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium tracking-[0.15em] uppercase text-text-secondary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us what's on your mind..."
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-bg-elevated border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-secondary/40 focus:outline-none focus:border-accent-gold/50 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-accent-gold text-bg-primary text-sm font-semibold tracking-wide hover:bg-[#E8A83A] transition-all duration-300 hover:shadow-[0_0_24px_rgba(244,192,95,0.25)]"
                >
                  Send Message
                  <Send
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
