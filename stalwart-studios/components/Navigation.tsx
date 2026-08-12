"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/site";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const logHeaderState = (trigger: string) => {
      const styles = window.getComputedStyle(header);
      const rect = header.getBoundingClientRect();
      // #region agent log
      fetch("http://127.0.0.1:7794/ingest/432fa079-c6d8-4190-b4e5-54770ad25225", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "d0bf8e" },
        body: JSON.stringify({
          sessionId: "d0bf8e",
          runId: "nav-debug-pre-fix",
          hypothesisId: "A",
          location: "Navigation.tsx:logHeaderState",
          message: "Header computed layout on scroll/mount",
          data: {
            trigger,
            scrollY: window.scrollY,
            position: styles.position,
            top: styles.top,
            zIndex: styles.zIndex,
            className: header.className,
            rectTop: rect.top,
            rectHeight: rect.height,
          },
          timestamp: Date.now(),
        }),
      }).catch(() => {});
      // #endregion
    };

    logHeaderState("mount");

    const onScroll = () => logHeaderState("scroll");
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0B]/80 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between">
          <Logo size="sm" />

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => {
              const active = isActivePath(pathname, l.href);
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  className="relative text-sm font-medium tracking-wide transition-colors duration-200 group"
                  style={{
                    color: active ? "var(--accent-gold)" : "var(--text-secondary)",
                    textShadow: active
                      ? "0 0 10px color-mix(in srgb, var(--accent-gold) 32%, transparent)"
                      : "none",
                  }}
                >
                  {l.label}
                  {active && (
                    <span
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-gold"
                      style={{
                        boxShadow: "0 0 8px color-mix(in srgb, var(--accent-gold) 70%, transparent)",
                      }}
                    />
                  )}
                  {!active && (
                    <span
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-px group-hover:w-full transition-all duration-200"
                      style={{
                        background: "color-mix(in srgb, var(--accent-gold) 50%, transparent)",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex">
            <Link href="/contact" className="btn-secondary text-sm font-medium px-5 py-2 tracking-wide">
              Get in Touch
            </Link>
          </div>

          <button
            className="md:hidden text-brand-secondary hover:text-brand-primary transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-8 bg-[#0A0A0B]/95 backdrop-blur-2xl"
          >
            {navLinks.map((l, i) => {
              const active = isActivePath(pathname, l.href);
              return (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={l.href}
                    className="font-fraunces text-3xl font-light block border-b border-[#2A2A2F] py-5 transition-colors duration-200"
                    style={{
                      color: active ? "var(--accent-gold)" : "var(--text-primary)",
                      textShadow: active
                        ? "0 0 14px color-mix(in srgb, var(--accent-gold) 35%, transparent)"
                        : "none",
                    }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              className="mt-8"
            >
              <Link href="/contact" className="btn-secondary block text-center py-3 font-medium text-base">
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
