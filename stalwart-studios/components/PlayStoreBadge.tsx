import { site } from "@/lib/site";

type Props = {
  url?: string | null;
  className?: string;
};

export function PlayStoreBadge({ url, className = "" }: Props) {
  const href = (url && url.length > 0 ? url : site.playStoreUrl) || "";
  const live = Boolean(href);

  const inner = (
    <span
      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-md border text-sm font-medium transition-all duration-200 ${className}`}
      style={{
        borderColor: live
          ? "color-mix(in srgb, var(--accent-gold) 55%, transparent)"
          : "var(--border)",
        color: live ? "var(--accent-gold)" : "var(--text-muted)",
        background: live
          ? "color-mix(in srgb, var(--accent-gold) 8%, transparent)"
          : "transparent",
        opacity: live ? 1 : 0.65,
        cursor: live ? "pointer" : "default",
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3.18 23.76c.28.15.6.2.9.13l13.2-7.62-2.88-2.88-11.22 10.37zm-1.5-20.3c-.1.23-.17.5-.17.8v15.48c0 .3.06.57.17.8l.08.08L9.9 12.7v-.2L1.75 3.38l-.07.08zM20.7 10.37l-2.7-1.56-3.06 3.06 3.06 3.06 2.7-1.57c.77-.44.77-1.16.01-1.6l-.01.01zM4.08.24L17.28 7.86l-2.88 2.88L3.18.37c.28-.15.6-.2.9-.13z" />
      </svg>
      {live ? "Get it on Google Play" : "Google Play — launching soon"}
    </span>
  );

  if (!live) {
    return (
      <span className="inline-block" title="Play Store listing coming soon" aria-disabled="true">
        {inner}
      </span>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-[1.02] transition-transform duration-200">
      {inner}
    </a>
  );
}
