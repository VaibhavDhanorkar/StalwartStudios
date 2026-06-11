"use client";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  asLink?: boolean;
}

// The archway SVG rendered inline for crisp rendering at all sizes
function ArchIcon({ size }: { size: number }) {
  const s = size;
  const cx = s * 0.5;
  const top = s * 0.06;
  const base = s * 0.92;
  const r = s * 0.44;

  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none" aria-hidden="true">
      <defs>
        <filter id={`logoGlow-${s}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation={s * 0.014} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Outer arch */}
      <path
        d={`M${cx - r} ${base} L${cx - r} ${cx} Q${cx - r} ${top} ${cx} ${top} Q${cx + r} ${top} ${cx + r} ${cx} L${cx + r} ${base}`}
        stroke="rgba(244,176,72,0.98)" strokeWidth={s * 0.075} fill="none" strokeLinecap="round" filter={`url(#logoGlow-${s})`}
      />
      {/* Middle arch */}
      <path
        d={`M${cx - r * 0.58} ${base} L${cx - r * 0.58} ${cx * 1.05} Q${cx - r * 0.58} ${top * 2.8} ${cx} ${top * 2.8} Q${cx + r * 0.58} ${top * 2.8} ${cx + r * 0.58} ${cx * 1.05} L${cx + r * 0.58} ${base}`}
        stroke="rgba(244,176,72,0.86)" strokeWidth={s * 0.042} fill="none" strokeLinecap="round" opacity="0.48" filter={`url(#logoGlow-${s})`}
      />
      {/* Inner teal arch */}
      <path
        d={`M${cx - r * 0.22} ${base} L${cx - r * 0.22} ${cx * 1.18} Q${cx - r * 0.22} ${top * 5} ${cx} ${top * 5} Q${cx + r * 0.22} ${top * 5} ${cx + r * 0.22} ${cx * 1.18} L${cx + r * 0.22} ${base}`}
        stroke="rgba(244,176,72,0.78)" strokeWidth={s * 0.04} fill="none" strokeLinecap="round" opacity="0.75" filter={`url(#logoGlow-${s})`}
      />
      {/* Keystone dot */}
      <circle cx={cx} cy={top} r={s * 0.055} fill="rgba(244,176,72,1)" />
      {/* Base line */}
      <line x1={s * 0.04} y1={base} x2={s * 0.96} y2={base} stroke="rgba(244,176,72,0.98)" strokeWidth={s * 0.055} strokeLinecap="round" filter={`url(#logoGlow-${s})`} />
    </svg>
  );
}

export function Logo({ size = "md", className = "", asLink = true }: LogoProps) {
  const cfg = {
    sm: { iconSize: 28, wordSize: "text-[13px]", subSize: "text-[9.5px]", gap: "gap-[2.5px]" },
    md: { iconSize: 34, wordSize: "text-[15px]", subSize: "text-[11px]", gap: "gap-[3px]" },
    lg: { iconSize: 44, wordSize: "text-[19px]", subSize: "text-[13px]", gap: "gap-[4px]" },
  }[size];

  const content = (
    <span className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Archway icon */}
      <span className="flex-shrink-0 transition-opacity duration-300 group-hover:opacity-90">
        <ArchIcon size={cfg.iconSize} />
      </span>

      {/* Wordmark */}
      <span className={`flex flex-col ${cfg.gap}`}>
        <span
          className={`font-sans font-semibold tracking-[0.2em] uppercase ${cfg.wordSize} text-brand-primary transition-colors duration-300 group-hover:text-brand-gold leading-none`}
        >
          STALWART
        </span>
        {/* Gold line separator */}
        <span
          className="w-full h-px block transition-all duration-300 group-hover:opacity-80"
          style={{ background: "linear-gradient(90deg, var(--accent-gold) 0%, rgba(244,192,95,0.3) 100%)" }}
        />
        <span
          className={`font-sans font-light tracking-[0.28em] uppercase ${cfg.subSize} text-brand-primary/80 transition-colors duration-300 group-hover:text-brand-primary leading-none`}
        >
          STUDIOS
        </span>
      </span>
    </span>
  );

  if (!asLink) return content;
  return (
    <Link href="/" aria-label="Stalwart Studios home">
      {content}
    </Link>
  );
}
