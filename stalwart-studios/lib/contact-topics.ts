export const CONTACT_TOPICS = [
  "Product support",
  "AI-enabled build",
  "Enterprise SaaS",
  "Partnership",
  "Other",
] as const;

export type ContactTopic = (typeof CONTACT_TOPICS)[number];

export const DEFAULT_CONTACT_TOPIC: ContactTopic = "Product support";

export function contactTopicFromParam(value: string | null | undefined): ContactTopic {
  if (value === "ai") return "AI-enabled build";
  if (value && CONTACT_TOPICS.includes(value as ContactTopic)) {
    return value as ContactTopic;
  }
  return DEFAULT_CONTACT_TOPIC;
}
