export type ServiceItem = { name: string; description: string };

export type Service = {
  number: string;
  slug: string;
  title: string;
  summary: string;
  items: ServiceItem[];
};

export const HOME_ITEM_COUNT = 6;

export const services: Service[] = [
  {
    number: "01",
    slug: "ai-enabled-products",
    title: "AI-Enabled Products",
    summary:
      "AI built into products for businesses and consumers — from customer-facing agents to in-app assistants.",
    items: [
      {
        name: "Conversational agents",
        description:
          "Chat, WhatsApp, and voice agents that answer, qualify, and hand off with full context.",
      },
      {
        name: "AI agents & workflow automation",
        description: "Multi-step tasks completed across your tools, with approvals where they matter.",
      },
      {
        name: "Document processing",
        description: "Data extracted from PDFs, forms, and invoices straight into your systems.",
      },
      {
        name: "Knowledge assistants & AI search",
        description: "Answers across your documents, with a link to the source.",
      },
      {
        name: "In-app assistants",
        description: "Planning, summaries, and guidance inside consumer apps.",
      },
      {
        name: "Personalisation & recommendations",
        description: "Content, products, and plans that adapt to each user.",
      },
      {
        name: "Content generation tools",
        description: "On-brand drafts, descriptions, and summaries at volume.",
      },
      {
        name: "Voice & speech applications",
        description: "Transcription, voice interfaces, and call analytics.",
      },
      {
        name: "Predictive analytics",
        description: "Forecasts and risk scores built from your historical data.",
      },
      {
        name: "AI integration for existing software",
        description: "AI features added to the products you already run.",
      },
    ],
  },
  {
    number: "02",
    slug: "mobile-apps",
    title: "Mobile Apps",
    summary: "Android and iOS apps designed, built, and launched on Google Play and the App Store.",
    items: [
      { name: "Android apps", description: "Polished Android apps built for Google Play." },
      { name: "iOS apps", description: "iPhone and iPad apps built for the App Store." },
      {
        name: "Cross-platform Flutter apps",
        description: "One codebase, both platforms, native performance.",
      },
      { name: "Consumer apps", description: "Productivity, lifestyle, health, and utility apps." },
      {
        name: "Subscription & freemium apps",
        description: "Trials, paywalls, and in-app purchases built in.",
      },
      {
        name: "Offline-first apps",
        description: "Apps that work on patchy networks and sync when back online.",
      },
      { name: "App modernisation", description: "Existing apps rebuilt, refreshed, or extended." },
      {
        name: "Store launch & growth",
        description: "Store listings, release management, analytics, and updates.",
      },
    ],
  },
  {
    number: "03",
    slug: "web-saas-platforms",
    title: "Web & SaaS Platforms",
    summary: "Web applications and SaaS products built to grow with your users.",
    items: [
      {
        name: "SaaS products",
        description: "Multi-tenant products with subscriptions, roles, and billing.",
      },
      { name: "Web applications", description: "Custom web apps for complex workflows." },
      {
        name: "Business websites & landing pages",
        description: "Fast, SEO-ready sites built to convert.",
      },
      {
        name: "Dashboards & admin panels",
        description: "Clear views of the data your team runs on.",
      },
      {
        name: "Customer & partner portals",
        description: "Self-serve access to accounts, orders, and documents.",
      },
      { name: "E-commerce", description: "Storefronts, catalogues, and checkout flows." },
      {
        name: "APIs & integrations",
        description: "Your systems connected to payments, CRM, messaging, and more.",
      },
      {
        name: "Progressive web apps",
        description: "App-like experiences that install from the browser.",
      },
    ],
  },
  {
    number: "04",
    slug: "business-solutions",
    title: "Business & Enterprise Solutions",
    summary: "Software that runs how your organisation trains, sells, and operates.",
    items: [
      {
        name: "Learning management systems (LMS)",
        description: "Training portals with courses, assessments, and learner analytics.",
      },
      {
        name: "CRM & lead management",
        description: "Pipelines, follow-ups, and lead capture across every channel.",
      },
      {
        name: "HR & workforce tools",
        description: "Onboarding, attendance, and employee self-service.",
      },
      {
        name: "Operations & workflow automation",
        description: "Approvals, task routing, and repetitive work handled automatically.",
      },
      {
        name: "Internal tools",
        description: "Purpose-built tools that replace spreadsheets and manual steps.",
      },
      {
        name: "Booking & scheduling",
        description: "Appointments, resources, and reminders in one place.",
      },
      { name: "Reporting & BI dashboards", description: "Live reports across your business data." },
      {
        name: "Legacy modernisation",
        description: "Older systems rebuilt on a modern, maintainable stack.",
      },
    ],
  },
  {
    number: "05",
    slug: "product-design",
    title: "Product Design",
    summary:
      "Interfaces, prototypes, and brand systems that make products clear and easy to use.",
    items: [
      { name: "UI/UX design", description: "Interfaces that are clear, fast, and easy to learn." },
      {
        name: "UX research & usability testing",
        description: "Decisions backed by how real users behave.",
      },
      {
        name: "Prototyping & MVP design",
        description: "Clickable prototypes that validate ideas before build.",
      },
      { name: "Design systems", description: "Reusable components that keep products consistent." },
      { name: "Brand identity", description: "Logos, type, colour, and visual language." },
      {
        name: "App store & marketing assets",
        description: "Screenshots, icons, and launch visuals.",
      },
      {
        name: "Product audits",
        description: "A clear, prioritised review of an existing product.",
      },
    ],
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
