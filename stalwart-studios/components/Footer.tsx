"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "./Logo";
import type { SiteSettings } from "@/lib/sanity.fetch";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund / Cancellation Policy", href: "/refund-policy" },
];

interface Props { siteSettings?: SiteSettings | null; }

export function Footer({ siteSettings }: Props) {
  const email1 = "hello@stalwartstudios.com";
  const email2 = siteSettings?.supportEmail ?? "support@stalwartstudios.in";
  const location = siteSettings?.location ?? "India";
  const twitter = siteSettings?.socialLinks?.twitter ?? "#";
  const linkedin = siteSettings?.socialLinks?.linkedin ?? "#";

  const go = (href: string) => {
    if (href.startsWith("#"))
      document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#0A0A0B", borderTop: "1px solid #1E1E22" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Main row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-[#1E1E22]">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo size="sm" className="mb-4" />
            <p className="text-xs text-[#5A5A64] leading-relaxed max-w-[200px] mt-4">
              An independent software development studio based in India.
            </p>
            <p className="text-xs text-[#5A5A64] mt-5">
              © {new Date().getFullYear()} Stalwart Studios
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#EDE8E0] mb-5">Quick Links</p>
            <div className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <button key={l.label} onClick={() => go(l.href)}
                  className="text-sm text-[#6A6A74] hover:text-[#EDE8E0] text-left transition-colors duration-200">
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#EDE8E0] mb-5">Legal</p>
            <div className="flex flex-col gap-3">
              {legalLinks.map((l) => (
                <Link key={l.label} href={l.href}
                  className="text-sm text-[#6A6A74] hover:text-[#EDE8E0] transition-colors duration-200">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact + Social */}
          <div>
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#EDE8E0] mb-5">Contact</p>
            <a href={`mailto:${email1}`}
              className="text-sm text-[#6A6A74] hover:text-[#EDE8E0] transition-colors block mb-2">{email1}</a>
            <a href={`mailto:${email2}`}
              className="text-sm text-[#6A6A74] hover:text-[#EDE8E0] transition-colors block mb-2">{email2}</a>
            <p className="text-sm text-[#6A6A74]">{location}</p>

            <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#EDE8E0] mt-8 mb-4">Follow Us</p>
            <div className="flex items-center gap-3">
              {[
                {
                  href: twitter, label: "Twitter",
                  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.633 5.904-5.633zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                },
                {
                  href: linkedin, label: "LinkedIn",
                  icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                },
                {
                  href: `mailto:${email2}`, label: "Email",
                  icon: <Mail size={14} />
                },
              ].map((s) => (
                <a key={s.label} href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer" aria-label={s.label}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#6A6A74] hover:text-[#F4C05F] transition-colors duration-200"
                  style={{ border: "1px solid #2A2A2F" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
