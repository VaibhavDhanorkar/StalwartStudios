"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ServicesMenu } from "./ServicesMenu";
import { navLinks } from "@/lib/site";
import { services } from "@/lib/content/services";
import { ServiceIcon } from "@/lib/content/serviceIcons";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navigation() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10">
        {/* Blur lives on a background layer: a backdrop-filter on <header> itself would stop the services panel from blurring the page behind it. */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#0A0A0B]/80 backdrop-blur-xl" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between">
          <Logo size="sm" />

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => {
              const active = isActivePath(pathname, l.href);
              if (l.href === "/services") {
                return <ServicesMenu key={l.label} active={active} />;
              }
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
            aria-expanded={menuOpen}
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
            className="fixed inset-0 z-40 flex flex-col pt-24 pb-10 px-8 overflow-y-auto bg-[#0A0A0B]/95 backdrop-blur-2xl"
          >
            {navLinks.map((l, i) => {
              const active = isActivePath(pathname, l.href);
              const linkStyle = {
                color: active ? "var(--accent-gold)" : "var(--text-primary)",
                textShadow: active
                  ? "0 0 14px color-mix(in srgb, var(--accent-gold) 35%, transparent)"
                  : "none",
              };
              return (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="border-b border-[#2A2A2F]"
                >
                  {l.href === "/services" ? (
                    <>
                      <div className="flex items-center justify-between">
                        <Link
                          href={l.href}
                          onClick={closeMenu}
                          className="font-fraunces text-3xl font-light block py-5 transition-colors duration-200"
                          style={linkStyle}
                        >
                          {l.label}
                        </Link>
                        <button
                          type="button"
                          aria-label="Show services"
                          aria-expanded={mobileServicesOpen}
                          aria-controls="mobile-services-list"
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          className="p-3 -mr-3 rounded-full text-brand-secondary hover:text-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                        >
                          <ChevronDown
                            size={22}
                            aria-hidden="true"
                            className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>
                      <div id="mobile-services-list">
                        <AnimatePresence initial={false}>
                          {mobileServicesOpen && (
                            <motion.div
                              key="mobile-services-list"
                              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={reduceMotion ? { opacity: 0, transition: { duration: 0 } } : { height: 0, opacity: 0 }}
                              transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <ul className="pb-4 space-y-1">
                                {services.map((s) => {
                                  const current = pathname === `/services/${s.slug}`;
                                  return (
                                    <li key={s.slug}>
                                      <Link
                                        href={`/services/${s.slug}`}
                                        onClick={closeMenu}
                                        aria-current={current ? "page" : undefined}
                                        className={`group flex items-center gap-3 min-h-[52px] rounded-xl px-2 py-2 transition-colors duration-200 hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                                          current ? "bg-white/[0.04]" : ""
                                        }`}
                                      >
                                        <span className="service-icon" style={{ width: 36, height: 36 }}>
                                          <ServiceIcon slug={s.slug} size={16} />
                                        </span>
                                        <span className="flex-1 text-[15px] text-brand-primary">
                                          <span className="text-[11px] font-semibold text-brand-gold tabular-nums mr-2">
                                            {s.number}
                                          </span>
                                          {s.title}
                                        </span>
                                        <ArrowRight size={14} aria-hidden="true" className="text-brand-muted group-hover:text-brand-gold transition-colors duration-200" />
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={l.href}
                      onClick={closeMenu}
                      className="font-fraunces text-3xl font-light block py-5 transition-colors duration-200"
                      style={linkStyle}
                    >
                      {l.label}
                    </Link>
                  )}
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32 }}
              className="mt-8"
            >
              <Link
                href="/contact"
                onClick={closeMenu}
                className="btn-secondary block text-center py-3 font-medium text-base"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
