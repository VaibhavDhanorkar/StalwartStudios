"use client";

import type { CSSProperties, ReactNode, RefObject } from "react";

type SectionShellProps = {
  id?: string;
  sectionRef?: RefObject<HTMLElement | null>;
  label: string;
  heading?: ReactNode;
  children: ReactNode;
  sectionClassName?: string;
  sectionStyle?: CSSProperties;
  cardClassName?: string;
  cardStyle?: CSSProperties;
  headingClassName?: string;
  headerClassName?: string;
};

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function SectionShell({
  id,
  sectionRef,
  label,
  heading,
  children,
  sectionClassName,
  sectionStyle,
  cardClassName,
  cardStyle,
  headingClassName,
  headerClassName,
}: SectionShellProps) {
  return (
    <section
      id={id}
      ref={sectionRef}
      className={joinClasses("relative py-14", sectionClassName)}
      style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-subtle)", ...sectionStyle }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        <div
          className={joinClasses("section-card rounded-2xl px-6 md:px-10 py-6 md:py-8", cardClassName)}
          style={cardStyle}
        >
          <div className={joinClasses("mb-8", headerClassName)}>
            <div className="flex items-center gap-3 mb-3">
              <span className="section-heading-line" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-brand-gold">
                {label}
              </span>
            </div>
            {heading ? (
              <h2
                className={joinClasses(
                  "font-fraunces font-semibold text-brand-primary leading-[1.1]",
                  headingClassName,
                )}
                style={{ fontSize: "clamp(1.7rem, 3vw, 2.5rem)" }}
              >
                {heading}
              </h2>
            ) : null}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
