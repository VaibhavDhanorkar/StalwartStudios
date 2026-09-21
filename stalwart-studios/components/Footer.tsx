import Link from "next/link";
import { Logo } from "./Logo";
import { site, navLinks, footerLegalLinks, footerSnugloopLinks, footerFovenaLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-subtle)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-brand-subtle">
          <div className="col-span-2 md:col-span-1">
            <Logo size="sm" className="mb-4" />
            <p className="text-xs text-brand-dim leading-relaxed max-w-[220px] mt-4">
              {site.tagline}
            </p>
            <p className="text-xs text-brand-dim mt-5">
              © {site.copyrightYear} {site.entity}. All rights reserved.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-brand-primary mb-5">
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-sm text-brand-muted hover:text-brand-primary transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-brand-primary mb-5">
              Legal
            </p>
            <div className="flex flex-col gap-3">
              {footerLegalLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-sm text-brand-muted hover:text-brand-primary transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
              {footerSnugloopLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-sm text-brand-muted hover:text-brand-primary transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
              {footerFovenaLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-sm text-brand-muted hover:text-brand-primary transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.16em] uppercase text-brand-primary mb-5">
              Contact
            </p>
            <a
              href={`mailto:${site.supportEmail}`}
              className="text-sm text-brand-muted hover:text-brand-primary transition-colors duration-200 block mb-2"
            >
              {site.supportEmail}
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="text-sm text-brand-muted hover:text-brand-primary transition-colors duration-200 block mb-2"
            >
              {site.phone}
            </a>
            <p className="text-xs text-brand-dim leading-relaxed mt-3">{site.address}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
