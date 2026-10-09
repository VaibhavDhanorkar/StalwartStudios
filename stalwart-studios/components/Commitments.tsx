import { Check } from "lucide-react";

const COMMITMENTS = [
  "Reply within one business day",
  "NDA before any detailed discussion",
  "You own the code and IP",
] as const;

type Props = {
  className?: string;
  stacked?: boolean;
};

export function Commitments({ className = "", stacked = false }: Props) {
  if (stacked) {
    return (
      <ul className={`space-y-2.5 ${className}`}>
        {COMMITMENTS.map((c) => (
          <li key={c} className="flex items-start gap-2.5 text-[13px] text-brand-secondary leading-snug">
            <Check size={14} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-gold" />
            {c}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
      {COMMITMENTS.map((c) => (
        <li key={c} className="flex items-center gap-2 text-[13px] text-brand-secondary">
          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
          {c}
        </li>
      ))}
    </ul>
  );
}
