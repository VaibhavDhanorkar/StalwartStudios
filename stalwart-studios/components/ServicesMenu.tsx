"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { services } from "@/lib/content/services";
import { ServiceIcon } from "@/lib/content/serviceIcons";
import { Commitments } from "./Commitments";

type Props = {
  active: boolean;
};

const CLOSE_DELAY_MS = 150;

function navItemStyle(active: boolean) {
  return {
    color: active ? "var(--accent-gold)" : "var(--text-secondary)",
    textShadow: active ? "0 0 10px color-mix(in srgb, var(--accent-gold) 32%, transparent)" : "none",
  };
}

export function ServicesMenu({ active }: Props) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
  };

  useEffect(() => cancelClose, []);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const focusables = () =>
    Array.from(panelRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? []);

  const tiles = () =>
    Array.from(panelRef.current?.querySelectorAll<HTMLAnchorElement>("a[data-service-tile]") ?? []);

  const openAndFocus = () => {
    cancelClose();
    setOpen(true);
    requestAnimationFrame(() => tiles()[0]?.focus());
  };

  const close = (returnFocus = false) => {
    cancelClose();
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  };

  const onWrapperKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!open) return;
    if (e.key === "Escape") {
      e.preventDefault();
      close(true);
      return;
    }

    const tileList = tiles();
    const tileIndex = tileList.indexOf(document.activeElement as HTMLAnchorElement);
    if (tileIndex !== -1 && ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(e.key)) {
      e.preventDefault();
      const step = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
      tileList[(tileIndex + step + tileList.length) % tileList.length]?.focus();
      return;
    }

    if (e.key !== "Tab") return;
    const items = focusables();
    if (!items.length || !panelRef.current?.contains(document.activeElement)) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="h-[68px] flex items-center gap-1"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onKeyDown={onWrapperKeyDown}
    >
      <Link
        href="/services"
        onClick={() => close()}
        className="relative text-sm font-medium tracking-wide transition-colors duration-200 group"
        style={navItemStyle(active)}
      >
        Services
        {active ? (
          <span
            className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-gold"
            style={{ boxShadow: "0 0 8px color-mix(in srgb, var(--accent-gold) 70%, transparent)" }}
          />
        ) : (
          <span
            className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-px group-hover:w-full transition-all duration-200"
            style={{ background: "color-mix(in srgb, var(--accent-gold) 50%, transparent)" }}
          />
        )}
      </Link>
      <button
        ref={triggerRef}
        type="button"
        aria-label="Show services"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="services-menu-panel"
        onClick={() => (open ? close() : openAndFocus())}
        className="p-1 rounded-sm text-brand-secondary hover:text-brand-primary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
      >
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="services-menu"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -6, scale: 0.99 }}
            transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-50 pt-2"
            style={{ x: "-50%", transformOrigin: "top center" }}
          >
            <div
              id="services-menu-panel"
              ref={panelRef}
              className="glass-panel w-[min(calc(100vw-2rem),820px)] rounded-2xl p-3 grid gap-3 lg:grid-cols-[1fr_250px]"
            >
              <ul className="grid grid-cols-2 gap-1.5">
                {services.map((s, i) => {
                  const current = pathname === `/services/${s.slug}`;
                  return (
                    <li key={s.slug} className={i === 0 ? "col-span-2" : ""}>
                      <Link
                        href={`/services/${s.slug}`}
                        data-service-tile
                        aria-current={current ? "page" : undefined}
                        onClick={() => close()}
                        className={`group relative flex gap-3.5 h-full rounded-xl p-3.5 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold hover:bg-white/[0.04] focus-visible:bg-white/[0.04] ${
                          current ? "bg-white/[0.04]" : ""
                        }`}
                      >
                        <span className="service-icon">
                          <ServiceIcon slug={s.slug} size={18} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[10px] font-semibold tracking-[0.14em] text-brand-gold tabular-nums mb-0.5">
                            {s.number}
                          </span>
                          <span className="flex items-start gap-2 text-sm font-medium leading-snug text-brand-primary">
                            {s.title}
                            <ArrowRight
                              size={13}
                              aria-hidden="true"
                              className="ml-auto mt-0.5 shrink-0 text-brand-gold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-200"
                            />
                          </span>
                          <span className="mt-1 block text-[12px] leading-snug text-brand-muted line-clamp-2">
                            {s.summary}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div
                className="rounded-xl p-5 flex flex-col"
                style={{
                  background: "color-mix(in srgb, var(--bg-primary) 55%, transparent)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-brand-gold mb-4">
                  Start a project
                </p>
                <Commitments stacked className="mb-6" />
                <div className="mt-auto space-y-3">
                  <Link
                    href="/contact"
                    onClick={() => close()}
                    className="btn-primary w-full gap-2 px-4 py-2.5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-surface)]"
                  >
                    Start a project
                  </Link>
                  <Link
                    href="/services"
                    onClick={() => close()}
                    className="group flex items-center justify-center gap-1.5 text-sm font-medium text-brand-gold py-1.5 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                  >
                    All services
                    <ArrowRight
                      size={13}
                      aria-hidden="true"
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
