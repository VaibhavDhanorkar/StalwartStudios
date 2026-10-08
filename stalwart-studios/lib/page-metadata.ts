import type { Metadata } from "next";

export function buildPageMetadata(title: string, description: string): Metadata {
  return {
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
}
