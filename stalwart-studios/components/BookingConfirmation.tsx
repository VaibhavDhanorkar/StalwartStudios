"use client";

import { useSearchParams } from "next/navigation";

export function BookingConfirmation() {
  const booked = useSearchParams().get("booked") === "1";
  if (!booked) return null;

  return (
    <p className="text-sm text-brand-teal leading-relaxed mb-6" role="status">
      Your call is booked. A calendar invite with the meeting link is on its way.
    </p>
  );
}
