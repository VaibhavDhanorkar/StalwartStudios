import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/** Sharp outer media frame — amber glow, no notch / bezel. */
export function ProductFrame({ children, className = "" }: Props) {
  return <div className={`product-frame ${className}`.trim()}>{children}</div>;
}
