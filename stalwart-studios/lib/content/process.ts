export type ProcessStep = {
  title: string;
  description: string;
  youGet: string[];
};

export const deliverySteps: ProcessStep[] = [
  {
    title: "Discovery",
    description: "We map your users, goals, workflow, and data.",
    youGet: ["Requirements", "User flows", "Agreed scope", "A clear proposal"],
  },
  {
    title: "Design",
    description:
      "We design the experience and the architecture, and you approve both before build begins.",
    youGet: ["Clickable prototype", "Technical plan", "Sprint roadmap"],
  },
  {
    title: "Build",
    description: "We build in short sprints with regular demos.",
    youGet: ["Working software every sprint", "A live staging link"],
  },
  {
    title: "Test & launch",
    description: "We test, secure, and release.",
    youGet: ["QA and security checks", "Production or store release", "Analytics set up"],
  },
  {
    title: "Support & grow",
    description: "We monitor, maintain, and improve.",
    youGet: ["Updates", "Fixes", "A roadmap for what's next"],
  },
];
