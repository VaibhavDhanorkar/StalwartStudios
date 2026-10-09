export const CONTACT_TOPICS = [
  "Product support",
  "AI-enabled product",
  "Mobile app",
  "Web & SaaS platform",
  "Business & enterprise solution",
  "Product design",
  "Partnership",
  "Other",
] as const;

export type ContactTopic = (typeof CONTACT_TOPICS)[number];

export const DEFAULT_CONTACT_TOPIC: ContactTopic = "Product support";

const TOPIC_BY_PARAM: Record<string, ContactTopic> = {
  ai: "AI-enabled product",
  "ai-enabled-products": "AI-enabled product",
  "mobile-apps": "Mobile app",
  "web-saas-platforms": "Web & SaaS platform",
  "business-solutions": "Business & enterprise solution",
  "product-design": "Product design",
};

export function contactTopicFromParam(value: string | null | undefined): ContactTopic {
  if (!value) return DEFAULT_CONTACT_TOPIC;
  return TOPIC_BY_PARAM[value] ?? DEFAULT_CONTACT_TOPIC;
}

export const BUDGET_OPTIONS = [
  "Under ₹5L",
  "₹5L – ₹15L",
  "₹15L – ₹50L",
  "₹50L+",
  "Not sure yet",
] as const;

export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Just exploring",
] as const;
