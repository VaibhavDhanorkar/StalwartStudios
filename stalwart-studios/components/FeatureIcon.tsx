export function FeatureIcon({ type }: { type: string }) {
  const stroke = "rgba(244,176,72,0.95)";
  const chip = "rgba(244,176,72,0.1)";
  if (type === "timer")
    return (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <rect x="2.6" y="2.6" width="24.8" height="24.8" rx="8" fill={chip} stroke="rgba(244,176,72,0.45)" />
        <circle cx="15" cy="16.4" r="6.4" stroke={stroke} strokeWidth="1.6" />
        <path d="M15 12.8v3.5l2.3 2.2" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12.2 8h5.6" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 8v1.8" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  if (type === "flame")
    return (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <rect x="2.6" y="2.6" width="24.8" height="24.8" rx="8" fill={chip} stroke="rgba(244,176,72,0.45)" />
        <path
          d="M12.1 21.1c.95 1 2.1 1.5 3.3 1.5 2.6 0 4.8-2 4.8-5.1 0-4.1-3.9-7.8-3.9-7.8s-.7 2.8-2.7 4.6c-1.5 1.4-2.7 3-2.7 4.7 0 .8.35 1.5 1.2 2.1Z"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <rect x="2.6" y="2.6" width="24.8" height="24.8" rx="8" fill={chip} stroke="rgba(244,176,72,0.45)" />
      <line x1="20.8" y1="21.8" x2="20.8" y2="12.6" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
      <line x1="15" y1="21.8" x2="15" y2="8.2" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
      <line x1="9.2" y1="21.8" x2="9.2" y2="16" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
