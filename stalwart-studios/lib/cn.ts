/** Minimal class joiner for the copied Magic UI components (no clsx / tailwind-merge dependency). */
export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
