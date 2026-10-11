import { Workflow, PanelsTopLeft, Wrench } from "lucide-react";
export const services = [
  {
    slug: "business-software",
    icon: PanelsTopLeft,
    title: "Build a business system",
    description: "Give customers and staff a better way to get work done.",
    examples: "Ordering platforms · Customer portals · Internal tools",
    detail:
      "A system shaped around how your business works, whether customers need to place orders, staff need shared records, or you are bringing a new product to market.",
    deliverables: [
      "Workflow discovery and a defined scope",
      "Interface design and a working implementation",
      "Agreed testing and deployment",
      "Documentation and a handover plan",
    ],
  },
  {
    slug: "automation",
    icon: Workflow,
    title: "Automate repetitive work",
    description:
      "Connect the steps that currently require copying, chasing, and manual updates.",
    examples: "Enquiry routing · Reminders · Document processing",
    detail:
      "Start with one recurring task and a clear definition of success. Use dependable rules for predictable work and AI where understanding or drafting information adds value.",
    deliverables: [
      "A map of the current process and its exceptions",
      "A scoped automation or AI-assisted workflow",
      "Human review and handover where needed",
      "Monitoring, usage costs, and support options",
    ],
  },
  {
    slug: "platform-improvements",
    icon: Wrench,
    title: "Improve an existing platform",
    description:
      "Resolve friction and add the capabilities your business now needs.",
    examples: "Payment integrations · Reporting · Workflow improvements",
    detail:
      "Build on what you already have. Review the platform and its constraints, identify the most useful improvement, and agree a practical delivery path.",
    deliverables: [
      "Review of the existing platform and access needs",
      "A prioritised improvement proposal",
      "Integration or feature implementation",
      "Regression checks and a release plan",
    ],
  },
];
