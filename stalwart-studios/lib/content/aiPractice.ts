export const aiBuildPrinciples = [
  {
    title: "Workflow first",
    description:
      "We map the job, the people doing it, and the cost of a wrong answer before choosing a model.",
  },
  {
    title: "Measured from day one",
    description:
      "Every AI feature ships with a test set of real cases and a pass bar agreed up front.",
  },
  {
    title: "People in the loop",
    description: "Low-confidence outputs route to human review automatically.",
  },
  {
    title: "Model-agnostic",
    description:
      "We choose models per task on quality, speed, and cost, and switch when a better one ships.",
  },
  {
    title: "Your data stays yours",
    description:
      "Your data trains models only with your written consent, and access follows your permissions.",
  },
  {
    title: "Predictable costs",
    description: "We set a cost and response-time budget per task and design to it.",
  },
] as const;

export const aiEngagementSteps = [
  {
    title: "Discovery",
    description: "We map the users, the workflow, the data, and where the time goes.",
  },
  {
    title: "Scoped prototype",
    description: "One workflow, real data, measured against the agreed test set.",
  },
  {
    title: "Production build",
    description: "Integrations, monitoring, launch, and a clean handover.",
  },
] as const;
