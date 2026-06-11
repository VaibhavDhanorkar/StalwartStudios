import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Client is only fully usable when projectId is set.
// During build without env vars it returns null-safe responses.
export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion: "2024-06-01",
  useCdn: process.env.NODE_ENV === "production",
});

export const isSanityConfigured =
  !!projectId && projectId !== "placeholder" && projectId !== "your_project_id_here";
