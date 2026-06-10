"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund-policy" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.getElementById(href.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border/40 bg-bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo size="md" className="mb-5" />
            <p className="text-sm text-text-secondary leading-relaxed max-w-[220px]">
              An independent software studio building products that respect people.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-text-secondary/60 mb-5">
              Quick Links
            </p>
            <div className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <button
                  key={l.label}
                  onClick={() => handleNavClick(l.href)}
                  className="text-sm text-text-secondary hover:text-text-primary text-left transition-colors duration-200"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-text-secondary/60 mb-5">
              Legal
            </p>
            <div className="flex flex-col gap-3">
              {legalLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact + Social */}
          <div>
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-text-secondary/60 mb-5">
              Contact
            </p>
            <a
              href="mailto:support@stalwartstudios.in"
              className="text-sm text-text-secondary hover:text-accent-gold transition-colors duration-200 block mb-2"
            >
              support@stalwartstudios.in
            </a>
            <p className="text-sm text-text-secondary/50 mb-8">India</p>

            <p className="text-xs font-medium tracking-[0.18em] uppercase text-text-secondary/60 mb-4">
              Follow Us
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.633 5.904-5.633zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, href: "https://twitter.com/stalwartstudios", label: "Twitter" },
                { icon: <Mail size={14} />, href: "mailto:support@stalwartstudios.in", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-accent-gold/50 hover:text-accent-gold transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-secondary/40">
            © {new Date().getFullYear()} Stalwart Studios. All rights reserved.
          </p>
          <p className="text-xs text-text-secondary/30">
            Crafted with care in India.
          </p>
        </div>
      </div>
    </footer>
  );
}
