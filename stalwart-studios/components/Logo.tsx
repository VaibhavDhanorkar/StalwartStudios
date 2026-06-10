"use client";

import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: { word: "text-sm", gap: "gap-[1px]" },
    md: { word: "text-base", gap: "gap-[2px]" },
    lg: { word: "text-xl", gap: "gap-[3px]" },
  };
  const s = sizes[size];

  return (
    <Link href="/" className={`inline-flex flex-col ${s.gap} group ${className}`}>
      <span
        className={`font-fraunces font-semibold tracking-[0.18em] uppercase ${s.word} text-text-primary group-hover:text-accent-gold transition-colors duration-300`}
        style={{ letterSpacing: "0.18em" }}
      >
        STALWART
      </span>
      <div className="relative">
        <div
          className="h-[1.5px] w-full bg-accent-gold mb-[2px] transition-all duration-300 group-hover:w-[115%]"
          style={{ boxShadow: "0 0 6px rgba(244,192,95,0.4)" }}
        />
        <span
          className={`font-fraunces font-light tracking-[0.22em] uppercase ${s.word} text-text-primary group-hover:text-accent-gold transition-colors duration-300`}
          style={{ letterSpacing: "0.22em" }}
        >
          STUDIOS
        </span>
      </div>
    </Link>
  );
}
