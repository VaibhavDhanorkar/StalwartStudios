"use client";

import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";
import { getCalApi } from "@calcom/embed-react";

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL;

function calLinkFromUrl(url: string) {
  try {
    return new URL(url).pathname.replace(/^\//, "").replace(/\/$/, "");
  } catch {
    return "";
  }
}

type Props = {
  children?: ReactNode;
};

export function BookCallButton({ children = "Schedule a consultation call" }: Props) {
  const readyRef = useRef(false);

  useEffect(() => {
    if (!BOOKING_URL) return;
    let cancelled = false;
    getCalApi({ namespace: "intro" }).then((cal) => {
      if (cancelled) return;
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          dark: { "cal-brand": "#F4C05F" },
          light: { "cal-brand": "#F4C05F" },
        },
      });
      readyRef.current = true;
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const calLink = BOOKING_URL ? calLinkFromUrl(BOOKING_URL) : "";
  if (!BOOKING_URL || !calLink) return null;

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (readyRef.current) e.preventDefault();
  };

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-cal-namespace="intro"
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      aria-label="Schedule a 30-minute consultation call (opens scheduler)"
      onClick={onClick}
      className="btn-primary px-6 py-3 text-sm"
    >
      {children}
    </a>
  );
}
