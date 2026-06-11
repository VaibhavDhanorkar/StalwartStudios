"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import type { SiteSettings } from "@/lib/sanity.fetch";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

interface Props { siteSettings?: SiteSettings | null; }

export function Navigation({ siteSettings }: Props) {
  void siteSettings;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = ["home", "products", "about", "contact"];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "backdrop-blur-2xl border-b"
            : "bg-transparent"
        }`}
        style={scrolled ? { background: "rgba(10,10,11,0.85)", borderColor: "rgba(42,42,47,0.8)" } : undefined}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <Logo size="sm" />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => {
              const id = l.href.replace("#", "");
              const isActive = active === id;
              return (
                <button
                  key={l.label}
                  onClick={() => go(l.href)}
                  className="relative text-sm font-medium tracking-wide transition-colors duration-200 group"
                  style={{
                    color: isActive ? "var(--accent-gold)" : "var(--text-secondary)",
                    textShadow: isActive ? "0 0 10px rgba(244,176,72,0.32)" : "none",
                  }}
                >
                  {l.label}
                  {/* Active dot */}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-gold" style={{ boxShadow: "0 0 8px rgba(244,176,72,0.7)" }} />
                  )}
                  {!isActive && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-px group-hover:w-full transition-all duration-300" style={{ background: "rgba(244,192,95,0.5)" }} />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <button
              onClick={() => go("#contact")}
              className="text-sm font-medium px-5 py-2 rounded-md border transition-all duration-200 tracking-wide"
              style={{ borderColor: "rgba(244,192,95,0.6)", color: "var(--accent-gold)", background: "transparent" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(244,192,95,0.08)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              title="Get in Touch"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-brand-secondary hover:text-brand-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 backdrop-blur-2xl flex flex-col pt-24 px-8"
            style={{ background: "rgba(10,10,11,0.96)" }}
          >
            {navLinks.map((l, i) => (
              <motion.button
                key={l.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => go(l.href)}
                className="font-fraunces text-3xl font-light text-brand-primary text-left border-b py-5 hover:text-brand-gold transition-colors"
                style={{ borderColor: "var(--border)" }}
              >
                {l.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}
              onClick={() => go("#contact")}
              className="mt-8 py-3 rounded-md border font-medium text-base"
              style={{ borderColor: "rgba(244,192,95,0.6)", color: "var(--accent-gold)" }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
