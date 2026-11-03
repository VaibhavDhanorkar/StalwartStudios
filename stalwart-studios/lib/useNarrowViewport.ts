"use client";

import { useSyncExternalStore } from "react";

export function useNarrowViewport(maxWidth = 767) {
  const query = `(max-width: ${maxWidth}px)`;
  return useSyncExternalStore(
    (onStoreChange) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onStoreChange);
      return () => media.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
