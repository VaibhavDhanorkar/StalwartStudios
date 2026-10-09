export type FaqItem = { question: string; answer: string };
export type FaqGroup = { heading: string; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    heading: "Working with us",
    items: [
      {
        question: "What do you build?",
        answer:
          "AI-enabled products, mobile apps, web and SaaS platforms, business and enterprise systems, and product design — for businesses and consumers.",
      },
      {
        question: "Who do you work with?",
        answer: "Startups, growing businesses, and enterprises, in India and worldwide.",
      },
      {
        question: "How do we get started?",
        answer:
          "Send a message from the contact page. We reply within one business day and start with a discovery call.",
      },
    ],
  },
  {
    heading: "Process & timeline",
    items: [
      {
        question: "What does the process look like?",
        answer:
          "Discovery, design, build, test and launch, then support. Each stage ends with a deliverable you approve.",
      },
      {
        question: "How involved will I be?",
        answer:
          "As involved as you like. You see working software in regular demos and approve each stage.",
      },
    ],
  },
  {
    heading: "Pricing",
    items: [
      {
        question: "How does pricing work?",
        answer:
          "Every project is scoped individually. After discovery you receive a fixed-price proposal or a phased plan matched to your budget.",
      },
      {
        question: "Can you work to a fixed budget?",
        answer: "Yes. We recommend the highest-impact scope that fits and phase the rest.",
      },
    ],
  },
  {
    heading: "Ownership & security",
    items: [
      {
        question: "Who owns the code?",
        answer: "You do. Code, designs, and documentation are yours on delivery.",
      },
      {
        question: "Will you sign an NDA?",
        answer: "Yes, before any detailed discussion.",
      },
    ],
  },
  {
    heading: "AI",
    items: [
      {
        question: "Can you add AI to our existing software?",
        answer:
          "Yes. We integrate AI features into the products and systems you already run.",
      },
      {
        question: "How do you keep AI features reliable?",
        answer:
          "Every AI feature is tested against real cases with a pass bar agreed up front, and low-confidence outputs route to human review.",
      },
    ],
  },
  {
    heading: "Support",
    items: [
      {
        question: "Do you support products after launch?",
        answer: "Yes — maintenance, updates, and ongoing improvements.",
      },
    ],
  },
];
