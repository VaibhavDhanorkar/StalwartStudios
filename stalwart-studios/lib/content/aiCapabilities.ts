export type AiAudience = "B2B" | "B2C" | "B2B · B2C";

export type AiCapability = {
  id: string;
  title: string;
  audience: AiAudience;
  oneLiner: string;
  example: string;
  guardrail: string;
};

export const aiCapabilities: AiCapability[] = [
  {
    id: "conversational-agents",
    title: "Conversational agents",
    audience: "B2B · B2C",
    oneLiner:
      "Answer, qualify, and route enquiries on WhatsApp, web chat, or voice, and hand off to a person with the full context.",
    example:
      "A property enquiry on WhatsApp is qualified on budget, location, and timeline before an agent picks it up.",
    guardrail:
      "Answers come from your approved pricing and policy. Low-confidence conversations go straight to a person.",
  },
  {
    id: "document-workflows",
    title: "Document workflows",
    audience: "B2B",
    oneLiner: "Turn PDFs, forms, and invoices into structured data your systems use immediately.",
    example:
      "Onboarding forms flow straight into your CRM, with low-confidence fields routed to a review queue.",
    guardrail: "Every extracted field carries a confidence score.",
  },
  {
    id: "knowledge-assistants",
    title: "Knowledge assistants",
    audience: "B2B",
    oneLiner: "Search and answer across your SOPs, policies, and internal docs, with a link to the source.",
    example:
      "A support agent asks about a refund rule and gets the answer plus the paragraph it came from.",
    guardrail: "Access follows your existing permissions.",
  },
  {
    id: "learning-enablement",
    title: "Learning & enablement",
    audience: "B2B · B2C",
    oneLiner: "Courses, assessments, and practice scenarios built from the material you already have.",
    example:
      "A process document becomes a module with a quiz and role-play practice for new hires.",
    guardrail: "Subject experts approve content before it goes live.",
  },
  {
    id: "in-app-assistants",
    title: "In-app assistants",
    audience: "B2C",
    oneLiner:
      "Assistants inside consumer apps that plan, summarise, and guide, in the moment the user needs them.",
    example: "A productivity app turns a long task list into a realistic plan for the day.",
    guardrail: "Users stay in control — every suggestion is editable.",
  },
  {
    id: "personalised-experiences",
    title: "Personalised experiences",
    audience: "B2C",
    oneLiner: "Content, recommendations, and plans that adapt to each user's behaviour and goals.",
    example: "A fitness app adjusts next week's plan based on the sessions completed this week.",
    guardrail: "Personal data is used with clear consent and deleted on request.",
  },
];
