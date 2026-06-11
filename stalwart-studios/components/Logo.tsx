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
      {/* Outer arch */}
      <path
        d={`M${cx - r} ${base} L${cx - r} ${cx} Q${cx - r} ${top} ${cx} ${top} Q${cx + r} ${top} ${cx + r} ${cx} L${cx + r} ${base}`}
        stroke="#F4C05F" strokeWidth={s * 0.075} fill="none" strokeLinecap="round"
      />
      {/* Middle arch */}
      <path
        d={`M${cx - r * 0.58} ${base} L${cx - r * 0.58} ${cx * 1.05} Q${cx - r * 0.58} ${top * 2.8} ${cx} ${top * 2.8} Q${cx + r * 0.58} ${top * 2.8} ${cx + r * 0.58} ${cx * 1.05} L${cx + r * 0.58} ${base}`}
        stroke="#F4C05F" strokeWidth={s * 0.042} fill="none" strokeLinecap="round" opacity="0.38"
      />
      {/* Inner teal arch */}
      <path
        d={`M${cx - r * 0.22} ${base} L${cx - r * 0.22} ${cx * 1.18} Q${cx - r * 0.22} ${top * 5} ${cx} ${top * 5} Q${cx + r * 0.22} ${top * 5} ${cx + r * 0.22} ${cx * 1.18} L${cx + r * 0.22} ${base}`}
        stroke="#158C7D" strokeWidth={s * 0.04} fill="none" strokeLinecap="round" opacity="0.75"
      />
      {/* Keystone dot */}
      <circle cx={cx} cy={top} r={s * 0.055} fill="#F4C05F" />
      {/* Base line */}
      <line x1={s * 0.04} y1={base} x2={s * 0.96} y2={base} stroke="#F4C05F" strokeWidth={s * 0.055} strokeLinecap="round" />
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
          className={`font-sans font-semibold tracking-[0.2em] uppercase ${cfg.wordSize} text-[#EDE8E0] transition-colors duration-300 group-hover:text-accent-gold leading-none`}
        >
          STALWART
        </span>
        {/* Gold line separator */}
        <span
          className="w-full h-px block transition-all duration-300 group-hover:opacity-80"
          style={{ background: "linear-gradient(90deg, #F4C05F 0%, rgba(244,192,95,0.3) 100%)" }}
        />
        <span
          className={`font-sans font-light tracking-[0.28em] uppercase ${cfg.subSize} text-[#EDE8E0]/80 transition-colors duration-300 group-hover:text-[#EDE8E0] leading-none`}
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
