/**
 * Adapted from Magic UI "Animated Shiny Text" — https://magicui.design (MIT License, Copyright (c) Magic UI).
 * Changes: Tailwind arbitrary utilities replaced by the `.shiny-text` class in globals.css; the sheen
 * colour follows the surrounding text colour (set via --shiny-base / --shiny-sheen).
 */
import type { ComponentPropsWithoutRef, CSSProperties, FC } from "react";
import { cn } from "@/lib/cn";

export interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => (
  <span
    style={{ "--shiny-width": `${shimmerWidth}px` } as CSSProperties}
    className={cn("shiny-text", className)}
    {...props}
  >
    {children}
  </span>
);
