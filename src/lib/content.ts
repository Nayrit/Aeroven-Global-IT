/**
 * Aeroven marketing copy — extracted verbatim from HTML mockups.
 * Sources: Web Landing, Capabilities, Process, Engagement, Success, Careers, Consultation.
 */

/* -------------------------------------------------------------------------- */
/* Helper types                                                               */
/* -------------------------------------------------------------------------- */

export type Stat = {
  value: string;
  label: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type CardItem = {
  title: string;
  description: string;
};

export type NumberedCard = CardItem & {
  number: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export type Office = {
  city: string;
  address: string;
  region: string;
  isHq?: boolean;
};

export type ProcessStep = {
  number: string;
  stepLabel: string;
  title: string;
  description: string;
  tags?: string[];
};

export type EngagementModel = {
  number: string;
  title: string;
  description: string;
  features: string[];
  bestFor: string;
};

export type CapabilityDetail = {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  navLabel: string;
};

export type ProductItem = {
  title: string;
  description: string;
  featured?: boolean;
  badge?: string;
  tags?: string[];
};

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  company: string;
  industry: string;
  title: string;
  description: string;
  metrics: CaseStudyMetric[];
  featured?: boolean;
};

export type JobOpening = {
  title: string;
  department: string;
  location: string;
  type: string;
};

export type HiringStep = {
  number: string;
  title: string;
  description: string;
};

export type Benefit = {
  title: string;
  description: string;
};

export type FormField = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: "text" | "email" | "textarea" | "select" | "chips";
  options?: string[];
};

export type CompareRow = {
  label: string;
  values: string[];
};

export type CtaBlock = {
  headline: string;
  body: string;
  cta: string;
};

export type SectionHeader = {
  eyebrow?: string;
  headline: string;
  body?: string;
};

export type FooterColumn = {
  title: string;
  links: string[];
};

export type ContactInfo = {
  email: string;
  phone: string;
  address: string;
};

export type ConsultationHighlight = {
  title: string;
  description: string;
};

/* -------------------------------------------------------------------------- */
/* Shared site chrome                                                         */
/* -------------------------------------------------------------------------- */

export const brand = {
  name: "AEROVEN",
  legalName: "Aeroven Global IT Solutions",
  tagline: "Designing and building AI-powered, scalable solutions.",
  taglineLanding: "Designing and building AI powered, scalable solutions.",
  copyright: "© 2026 Aeroven Global IT Solutions. All rights reserved.",
} as const;

export const nav = {
  links: [
    { label: "Capabilities", href: "/capabilities" },
    { label: "Process", href: "/process" },
    { label: "Engagement", href: "/engagement" },
    { label: "Success", href: "/success" },
    { label: "Contact Us", href: "/consultation" },
  ] satisfies NavLink[],
  careersLink: { label: "Careers", href: "/careers" } satisfies NavLink,
  cta: "Book a Consultation",
  careersCta: "View Open Roles",
} as const;

export const footer = {
  company: {
    title: "Company",
    links: ["About", "Careers", "Newsroom", "Contact"],
  } satisfies FooterColumn,
  services: {
    title: "Services",
    links: ["AI Engineering", "Cloud", "Data", "Strategy"],
  } satisfies FooterColumn,
  capabilities: {
    title: "Capabilities",
    links: [
      "Digital Transformation",
      "Cloud & DevOps",
      "Data & Applied AI",
      "Quality & Security",
    ],
  } satisfies FooterColumn,
  explore: {
    title: "Explore",
    links: ["Capabilities", "Process", "Engagement", "Success"],
  } satisfies FooterColumn,
  resources: {
    title: "Resources",
    links: ["Case Studies", "Blog", "Docs", "Support"],
  } satisfies FooterColumn,
  legal: ["Privacy Policy", "Terms of Service", "Cookies"],
  trustedByLabel: "Trusted by",
  trustedBy: ["NORTHWIND", "VERTEX", "HELIOS", "ATLAS", "QUANTA"],
  trustedByExtended: [
    "NORTHWIND",
    "VERTEX",
    "HELIOS",
    "ATLAS",
    "QUANTA",
    "MERIDIAN",
  ],
  social: ["LinkedIn", "X", "GitHub", "YouTube"],
} as const;

export const offices: Office[] = [
  {
    city: "San Francisco",
    address: "525 Market St, Suite 2200",
    region: "Americas",
    isHq: true,
  },
  {
    city: "New York",
    address: "1440 Broadway, Floor 23",
    region: "Americas",
  },
  {
    city: "London",
    address: "30 St Mary Axe, EC3A",
    region: "EMEA",
  },
  {
    city: "Munich",
    address: "Maximilianstraße 13",
    region: "EMEA",
  },
  {
    city: "Bengaluru",
    address: "Prestige Tech Park, Marathahalli",
    region: "APAC",
  },
];

export const officesSummary =
  "San Francisco · New York · London · Munich · Bengaluru";

export const globalOfficesHeader = {
  headline: "Global Offices",
  body: officesSummary,
} satisfies SectionHeader;

/* -------------------------------------------------------------------------- */
/* Home / Landing                                                             */
/* -------------------------------------------------------------------------- */

export const homeHero = {
  badge: "Startup to Enterprise",
  headlineBefore: "We Engineer Your ",
  headlineAccent: "Digital Transformation",
  body: "We design and build bespoke, AI-powered solutions that help startups innovate fast and enterprises operate at global scale.",
  primaryCta: "Explore AI Solutions",
  secondaryCta: "View Case Studies",
  stats: [
    { value: "99%", label: "Uptime & SLA reliability" },
    { value: "100+", label: "Production Deployment" },
    { value: "< 2 hour", label: "Average Critical Response Time" },
  ] satisfies Stat[],
} as const;

export const homeCoreCapabilities = {
  eyebrow: "What we deliver",
  headline: "Core Capabilities",
  body: "End to end engineering built to scale with you, from first prototype to global production.",
  items: [
    {
      title: "Bespoke Engineering",
      description: "Custom solutions for your competitive advantage.",
    },
    {
      title: "Enterprise Grade Cloud Scalability",
      description: "Architecture built for global traffic.",
    },
    {
      title: "Data to Insights Pipelines",
      description: "Transform raw data into actionable intelligence.",
    },
    {
      title: "Strategy & Innovation",
      description: "Full lifecycle partnership.",
    },
  ] satisfies CardItem[],
} as const;

export const homeCapabilitiesDetail = {
  eyebrow: "Capabilities",
  headline:
    "Architecting the Future with Enterprise-Grade Digital Capabilities",
  body: "From intelligent system automation to high-concurrency cloud engineering, Aeroven Global IT Solutions empowers global enterprises to innovate rapidly, scale seamlessly, and operate with absolute agility.",
  items: [
    {
      title: "Enterprise Digital Transformation",
      description:
        "We modernize legacy architectures and orchestrate end to end digital roadmaps. By integrating data-driven workflows, smart automation, and agile delivery frameworks, we help global businesses adapt to changing markets and capture sustainable operational velocity.",
    },
    {
      title: "Custom Software Engineering",
      description:
        "Architected for security, fault tolerance, and massive concurrency. We design bespoke web, mobile, and distributed enterprise platforms tailored to precise domain requirements, ensuring your software serves as a long-term strategic asset.",
    },
    {
      title: "Cloud Engineering & DevOps",
      description:
        "Accelerate your release cycles and enhance platform resilience. Our cloud team delivers multi-cloud migrations, automated CI/CD pipelines, container orchestration (Kubernetes), infrastructure as code (IaC), and continuous 24/7 reliability management.",
    },
    {
      title: "Data Engineering & Applied AI",
      description:
        "Turn fragmented institutional data into actionable predictive foresight. We build modern data lakes, real-time analytics engines, and fine-tuned machine learning models designed to automate high-friction operational workflows.",
    },
    {
      title: "Quality Engineering & Security Audits",
      description:
        "Comprehensive automated testing, continuous integration checks, penetration testing, and code audits that ensure compliance, zero vulnerability drift, and enterprise-grade software stability.",
    },
  ] satisfies CardItem[],
} as const;

export const homeProducts = {
  eyebrow: "Products & Solutions",
  headline: "Next Generation Business Engines Built for Scale",
  body: "Modular, scalable, and intelligent software platforms designed to unify business functions and accelerate mission-critical operations.",
  featured: {
    badge: "FEATURED SUITE",
    title: "Custom AI-Powered ERP Solutions",
    description:
      "A next generation enterprise resource planning suite built from the ground up to unify your entire operational ecosystem. Moving beyond rigid off-the-shelf software, our custom ERP leverages predictive machine learning models to deliver intelligent demand forecasting, real-time supply chain telemetry, dynamic financial reconciliations, automated resource allocation, and real-time executive dashboards. Built with modular API micro-services, it scales seamlessly with enterprise complexity.",
    tags: [
      "Predictive demand forecasting",
      "Supply chain telemetry",
      "Automated reconciliation",
      "Modular API microservices",
    ],
  } satisfies ProductItem,
  items: [
    {
      title: "Technology Consulting",
      description:
        "Navigate complex digital decisions with high-conviction engineering strategy. We partner with leadership teams to evaluate tech stacks, modernize legacy architectures, and design scalable cloud, data, and AI roadmaps. From technical due diligence and cost optimization to security compliance, we ensure your IT investments directly accelerate business performance and long-term operational resilience.",
    },
    {
      title: "Enterprise Supply Chain & Warehouse Management (WMS)",
      description:
        "End to end logistics platforms featuring real time fleet telematics, IoT warehouse mapping, automated stock balance predictions, and multi-vendor procurement pipelines.",
    },
    {
      title: "HRMS & Workforce Intelligence Suite",
      description:
        "Comprehensive human capital management featuring automated payroll compliant with global and regional labor frameworks, biometric integration, performance review pipelines, and predictive retention modeling.",
    },
    {
      title: "Omnichannel B2B & B2C Commerce Engines",
      description:
        "Headless digital commerce architectures engineered for lightning fast catalog browsing, unified inventory management across distributed hubs, and multi tier pricing support for complex vendor networks.",
    },
  ] satisfies CardItem[],
} as const;

export const homeValues = {
  eyebrow: "How we build",
  headline: "Our Values",
  items: [
    {
      title: "Foundational Integrity",
      description: "Secure & private by design architecture.",
    },
    {
      title: "Agile Engineering",
      description: "Rapid deployment using modern DevOps.",
    },
    {
      title: "Future Proof Solutions",
      description: "Modular design for long term ROI.",
    },
    {
      title: "Customer Support",
      description: "Dedicated teams to cater your unique needs.",
    },
  ] satisfies CardItem[],
} as const;

export const homeProcess = {
  eyebrow: "Our process",
  headline: "Our Delivery Process",
  steps: [
    {
      number: "01",
      stepLabel: "Step 1",
      title: "Discovery Workshop",
      description:
        "Align on goals, constraints, and success metrics with your stakeholders.",
    },
    {
      number: "02",
      stepLabel: "Step 2",
      title: "Feasibility",
      description:
        "Validate models and data readiness with a scoped technical spike.",
    },
    {
      number: "03",
      stepLabel: "Step 3",
      title: "Architecture Design",
      description:
        "Blueprint a secure, scalable system with clear cost projections.",
    },
    {
      number: "04",
      stepLabel: "Step 4",
      title: "Scalable Build",
      description:
        "Ship in iterative sprints with production grade continuous integration/ continuous deployment from day one.",
    },
    {
      number: "05",
      stepLabel: "Step 5",
      title: "Enterprise Integration",
      description:
        "Roll out across teams with training, monitoring, and handover.",
    },
  ] satisfies ProcessStep[],
} as const;

export const homeEngagement = {
  eyebrow: "Work with us",
  headline: "Scalable Engagement",
  items: [
    {
      number: "01",
      title: "Team Augmentation",
      description: "Embed engineers directly into your teams.",
    },
    {
      number: "02",
      title: "End to End Build",
      description: "We own delivery from discovery to production launch.",
    },
    {
      number: "03",
      title: "Strategy Consulting",
      description:
        "Roadmaps, architecture reviews, and AI opportunity assessments.",
    },
    {
      number: "04",
      title: "Managed Services & Support",
      description: "24/7 monitoring, optimization, and SLA backed support.",
    },
  ] satisfies NumberedCard[],
} as const;

export const homeTestimonials = {
  eyebrow: "Client success",
  headline: "Trusted by teams that scale",
  items: [
    {
      quote:
        "Aeroven took our data pipeline from a proof of concept to production scale in ten weeks. Their engineers operate like part of our own team.",
      name: "Priya Nair",
      role: "VP Engineering · Northwind",
      initials: "PN",
    },
    {
      quote:
        "The scalability was the differentiator. We handle 40x the traffic we did a year ago and our infra cost per request actually dropped.",
      name: "Marcus Lang",
      role: "CTO · Vertex Labs",
      initials: "ML",
    },
    {
      quote:
        "A rare partner that gets both the AI and the enterprise compliance side right. Delivery was on time and audit-ready.",
      name: "Dana Reyes",
      role: "Director of Innovation · Helios",
      initials: "DR",
    },
  ] satisfies Testimonial[],
} as const;

export const homeFaq = {
  eyebrow: "Answers",
  headline: "Frequently Asked Questions",
  body: "Still curious? Talk to our team and we'll walk through your specific stack.",
  bodyLinkLabel: "Talk to our team",
  items: [
    {
      question: "What AI models do you support?",
      answer:
        "We work across foundation and open-source model families. Such as- GPT, Claude, Llama, and Mistral and fine tune or build bespoke models to fit your data, latency, and cost constraints.",
    },
    {
      question: "Do you handle HIPAA/GDPR compliance?",
      answer:
        "Yes. Our architectures are private-by-design with data residency, audit logging, and encryption in transit and at rest to meet HIPAA, GDPR, SOC 2, and ISO 27001 requirements.",
    },
    {
      question: "Can you migrate legacy systems?",
      answer:
        "We modernize monoliths incrementally — containerizing, re-platforming to the cloud, and layering AI services on top without disrupting production.",
    },
    {
      question: "How does the pricing model work?",
      answer:
        "Engagements start with a fixed-scope discovery, then move to milestone-based builds or a monthly retainer for managed services. You scale spend as you scale usage.",
    },
  ] satisfies FaqItem[],
} as const;

export const homeCta: CtaBlock = {
  headline: "Ready to Scale Your Team?",
  body: "Let's map your digital transformation roadmap and stand up a scalable architecture built for where you're headed.",
  cta: "Book a Consultation",
};

export const home = {
  hero: homeHero,
  coreCapabilities: homeCoreCapabilities,
  capabilitiesDetail: homeCapabilitiesDetail,
  products: homeProducts,
  values: homeValues,
  process: homeProcess,
  engagement: homeEngagement,
  testimonials: homeTestimonials,
  faq: homeFaq,
  cta: homeCta,
  offices: globalOfficesHeader,
} as const;

/* -------------------------------------------------------------------------- */
/* Capabilities page                                                          */
/* -------------------------------------------------------------------------- */

export const capabilitiesHero = {
  breadcrumb: "Capabilities",
  eyebrow: "Capabilities",
  headline:
    "Architecting the Future with Enterprise Grade Digital Capabilities",
  body: "From intelligent system automation to high concurrency cloud engineering, Aeroven Global IT Solutions empowers global enterprises to innovate rapidly, scale seamlessly, and operate with absolute agility.",
  anchors: [
    { label: "Digital Transformation", href: "#cap-1" },
    { label: "Custom Software", href: "#cap-2" },
    { label: "Cloud & DevOps", href: "#cap-3" },
    { label: "Data & Applied AI", href: "#cap-4" },
    { label: "Quality & Security", href: "#cap-5" },
  ],
} as const;

export const capabilities: CapabilityDetail[] = [
  {
    id: "cap-1",
    number: "Capability 01",
    title: "Enterprise Digital Transformation",
    description:
      "We modernize legacy architectures and orchestrate end-to-end digital roadmaps. By integrating data-driven workflows, smart automation, and agile delivery frameworks, we help global businesses adapt to changing markets and capture sustainable operational velocity.",
    features: [
      "Data-driven workflow orchestration",
      "Smart process automation",
      "Agile delivery frameworks",
    ],
    navLabel: "Digital Transformation",
  },
  {
    id: "cap-2",
    number: "Capability 02",
    title: "Custom Software Engineering",
    description:
      "Architected for security, fault tolerance, and massive concurrency. We design bespoke web, mobile, and distributed enterprise platforms tailored to precise domain requirements, ensuring your software serves as a long-term strategic asset.",
    features: [
      "Web, mobile & distributed platforms",
      "Security & fault tolerance by design",
      "Massive concurrency support",
    ],
    navLabel: "Custom Software",
  },
  {
    id: "cap-3",
    number: "Capability 03",
    title: "Cloud Engineering & DevOps",
    description:
      "Accelerate your release cycles and enhance platform resilience. Our cloud team delivers multi-cloud migrations, automated CI/CD pipelines, container orchestration (Kubernetes), infrastructure as code (IaC), and continuous 24/7 reliability management.",
    features: [
      "Multi-cloud migrations",
      "Automated CI/CD",
      "Kubernetes orchestration",
      "Infrastructure as code",
    ],
    navLabel: "Cloud & DevOps",
  },
  {
    id: "cap-4",
    number: "Capability 04",
    title: "Data Engineering & Applied AI",
    description:
      "Turn fragmented institutional data into actionable predictive foresight. We build modern data lakes, real-time analytics engines, and fine-tuned machine learning models designed to automate high-friction operational workflows.",
    features: [
      "Modern data lakes",
      "Real-time analytics engines",
      "Fine-tuned ML models",
    ],
    navLabel: "Data & Applied AI",
  },
  {
    id: "cap-5",
    number: "Capability 05",
    title: "Quality Engineering & Security Audits",
    description:
      "Comprehensive automated testing, continuous integration checks, penetration testing, and code audits that ensure compliance, zero vulnerability drift, and enterprise-grade software stability.",
    features: [
      "Automated testing",
      "Continuous integration checks",
      "Penetration testing",
      "Code audits",
    ],
    navLabel: "Quality & Security",
  },
];

export const capabilitiesStats: Stat[] = [
  { value: "< 2-Hour", label: "Average Critical Response Time" },
  { value: "99.99%", label: "Platform uptime SLA" },
  { value: "24/7", label: "Reliability management" },
  { value: "100+", label: "Production Deployments" },
];

export const capabilitiesCta: CtaBlock = {
  headline: "Ready to modernize your digital core?",
  body: "Talk to our architects about mapping these capabilities to your roadmap.",
  cta: "Book a Consultation",
};

export const capabilitiesPage = {
  hero: capabilitiesHero,
  items: capabilities,
  stats: capabilitiesStats,
  cta: capabilitiesCta,
} as const;

/* -------------------------------------------------------------------------- */
/* Process page                                                               */
/* -------------------------------------------------------------------------- */

export const processHero = {
  breadcrumb: "Process",
  eyebrow: "Our Process",
  headline: "A Proven Path from Discovery to Enterprise Scale",
  body: "Every engagement follows a disciplined five stage delivery model derisking AI investments early, validating architecture before build, and rolling out with production grade reliability across your organization.",
  stats: [
    { value: "5", label: "Delivery stages" },
    { value: "< 2-Hour", label: "Critical response time" },
    { value: "100+", label: "Production deployments" },
  ] satisfies Stat[],
} as const;

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    stepLabel: "Step 1",
    title: "Discovery Workshop",
    description:
      "Align on goals, constraints, and success metrics with your stakeholders. We map the current landscape, surface risks, and frame the problem before a single line of code is written.",
    tags: ["Stakeholder alignment", "Success metrics", "Scope brief"],
  },
  {
    number: "02",
    stepLabel: "Step 2",
    title: "Feasibility Study",
    description:
      "Validate models and data readiness with a scoped technical spike. We prove what's possible with your data and quantify the effort before committing to a full build.",
    tags: [
      "Model validation",
      "Data readiness assessment",
      "Technical spike report",
    ],
  },
  {
    number: "03",
    stepLabel: "Step 3",
    title: "Architecture Design",
    description:
      "Blueprint a secure, scalable system with clear cost projections. We design for fault tolerance and concurrency up front, so the platform holds up as traffic and complexity grow.",
    tags: ["System blueprint", "Security model", "Cost projections"],
  },
  {
    number: "04",
    stepLabel: "Step 4",
    title: "Scalable Build",
    description:
      "Ship in iterative sprints with production grade CI/CD from day one. Every increment is tested, reviewed, and deployable. No big bang releases and no surprise integration debt.",
    tags: ["Iterative sprints", "Production CI/CD", "Automated QA gates"],
  },
  {
    number: "05",
    stepLabel: "Step 5",
    title: "Enterprise Integration",
    description:
      "Roll out across teams with training, monitoring, and handover. We embed the platform into your operations and stand up 24/7 reliability management for the long term.",
    tags: ["Rollout plan", "Team training", "Monitoring & handover"],
  },
];

export const processPrinciples = {
  eyebrow: "How we operate",
  headline: "Principles that keep delivery predictable",
  items: [
    {
      title: "Derisk early",
      description:
        "Feasibility and architecture are validated before full build begins.",
    },
    {
      title: "Ship in increments",
      description:
        "Deployable value every sprint — never a single high-risk release.",
    },
    {
      title: "Secure by default",
      description:
        "Compliance, audits, and zero vulnerability drift are built in.",
    },
    {
      title: "Own the outcome",
      description:
        "24/7 reliability management and handover for the long term.",
    },
  ] satisfies CardItem[],
} as const;

export const processCta: CtaBlock = {
  headline: "Start with a discovery workshop",
  body: "Book a session and we'll frame the problem, define success metrics, and map the path to production.",
  cta: "Book a Consultation",
};

export const processPage = {
  hero: processHero,
  steps: processSteps,
  principles: processPrinciples,
  cta: processCta,
} as const;

/* -------------------------------------------------------------------------- */
/* Engagement page                                                            */
/* -------------------------------------------------------------------------- */

export const engagementHero = {
  breadcrumb: "Engagement",
  eyebrow: "Engagement Models",
  headline: "Flexible Ways to Partner, Built to Scale with You.",
  body: "Whether you need senior engineers embedded in your squads or a partner to own delivery end to end, choose the engagement model that fits your stage and evolve it as you grow.",
} as const;

export const engagementModels: EngagementModel[] = [
  {
    number: "01",
    title: "Team Augmentation",
    description:
      "Embed senior engineers directly into your teams. Scale delivery capacity fast while keeping your own teams in control of direction and priorities.",
    features: [
      "Senior engineers in your teams",
      "You keep direction & priorities",
      "Flexible ramp up or down",
    ],
    bestFor: "Teams that need capacity and niche expertise fast.",
  },
  {
    number: "02",
    title: "End to End Build",
    description:
      "We own delivery from discovery to production launch. A dedicated Aeroven team takes accountability for the full lifecycle, so you can focus on the business outcome.",
    features: [
      "Full lifecycle ownership",
      "Dedicated cross-functional team",
      "Milestone-based delivery",
    ],
    bestFor: "New products or platforms that need a delivery partner.",
  },
  {
    number: "03",
    title: "Strategy Consulting",
    description:
      "Roadmaps, architecture reviews, and AI opportunity assessments. Get senior guidance to prioritize investments and derisk direction before committing to a build.",
    features: [
      "Opportunity assessments",
      "Architecture & cost reviews",
      "Prioritized delivery roadmap",
    ],
    bestFor: "Leaders shaping strategy before investing in build.",
  },
  {
    number: "04",
    title: "Managed Services & Support",
    description:
      "24/7 monitoring, optimization, and SLA backed support. Keep platforms resilient and continuously improving long after launch with a dedicated reliability team.",
    features: [
      "24/7 monitoring & response",
      "SLA-backed reliability",
      "Continuous optimization",
    ],
    bestFor: "Live platforms that need reliability and steady improvement.",
  },
];

export const engagementCompare = {
  eyebrow: "Compare models",
  headline: "Find the right fit",
  columns: ["Team Augmentation", "End-to-End Build", "Managed Services"],
  rows: [
    {
      label: "Who leads direction",
      values: ["Your team", "Aeroven", "Shared"],
    },
    {
      label: "Typical timeframe",
      values: ["Ongoing", "Project-based", "Retainer"],
    },
    {
      label: "Delivery accountability",
      values: ["Your team", "Aeroven", "Aeroven"],
    },
    {
      label: "Customer Support",
      values: ["Aeroven", "Aeroven", "Aeroven"],
    },
  ] satisfies CompareRow[],
  bestForPrefix: "Best for:",
} as const;

export const engagementCta: CtaBlock = {
  headline: "Not sure which model fits?",
  body: "Tell us where you are and we'll recommend the right engagement and how it evolves as you scale.",
  cta: "Book a Consultation",
};

export const engagementPage = {
  hero: engagementHero,
  models: engagementModels,
  compare: engagementCompare,
  cta: engagementCta,
} as const;

/* -------------------------------------------------------------------------- */
/* Success page                                                               */
/* -------------------------------------------------------------------------- */

export const successHero = {
  breadcrumb: "Client Success",
  eyebrow: "Client Success",
  headline: "Outcomes That Scales, Proven Across Industries.",
  body: "From startups shipping their first AI product to enterprises processing millions of transactions a day, our teams deliver measurable results that compound over time.",
  stats: [
    { value: "200+", label: "Enterprises scaled" },
    { value: "40x", label: "Avg. traffic growth" },
    { value: "98%", label: "Client retention" },
    { value: "10 wk", label: "Avg. to production" },
  ] satisfies Stat[],
} as const;

export const featuredCaseStudy: CaseStudy = {
  featured: true,
  company: "NORTHWIND",
  industry: "Logistics & Supply Chain · Enterprise",
  title: "From proof of concept to production scale in ten weeks",
  description:
    "Aeroven rebuilt Northwind's fragmented data pipeline into a real-time analytics engine with predictive demand forecasting. Embedded engineers worked alongside the internal team to ship incrementally and hand over a fully monitored, production-grade platform.",
  metrics: [
    { value: "10 wk", label: "PoC to production" },
    { value: "40x", label: "Traffic handled" },
    { value: "-28%", label: "Cost per request" },
  ],
};

export const featuredCaseStudyBadge = "FEATURED CASE STUDY";

export const caseStudies: CaseStudy[] = [
  featuredCaseStudy,
  {
    company: "VERTEX LABS",
    industry: "FinTech · Core Banking",
    title: "High-throughput ledger rebuilt for 40x growth",
    description:
      "A bank-grade transactional core with automated KYC/AML workflows and multi-currency processing — scaled without raising cost per request.",
    metrics: [
      { value: "40x", label: "Throughput" },
      { value: "99.99%", label: "Uptime" },
    ],
  },
  {
    company: "HELIOS",
    industry: "Healthcare · Compliance",
    title: "HIPAA-compliant AI delivered audit-ready",
    description:
      "Private-by-design architecture with data residency and full audit logging — models fine-tuned to automate high-friction clinical workflows.",
    metrics: [
      { value: "100%", label: "Audit pass" },
      { value: "-45%", label: "Manual work" },
    ],
  },
  {
    company: "ATLAS",
    industry: "Retail · Omnichannel Commerce",
    title: "Headless commerce engine across 40 markets",
    description:
      "Unified inventory and multi-tier pricing on a headless architecture — lightning-fast catalog browsing at global scale.",
    metrics: [
      { value: "40", label: "Markets" },
      { value: "2.1x", label: "Conversion" },
    ],
  },
];

export const successTestimonials = {
  eyebrow: "In their words",
  headline: "Trusted by teams that scale",
  items: homeTestimonials.items,
} as const;

export const successLogos = {
  label: "Trusted by teams worldwide",
  brands: footer.trustedByExtended,
} as const;

export const successCta: CtaBlock = {
  headline: "Your success story starts here",
  body: "Let's talk about the outcome you're after and how we'll get you to production.",
  cta: "Book a Consultation",
};

export const successPage = {
  hero: successHero,
  featuredBadge: featuredCaseStudyBadge,
  featured: featuredCaseStudy,
  caseStudies: caseStudies.filter((c) => !c.featured),
  testimonials: successTestimonials,
  logos: successLogos,
  cta: successCta,
} as const;

/* -------------------------------------------------------------------------- */
/* Careers page                                                               */
/* -------------------------------------------------------------------------- */

export const careersHero = {
  breadcrumb: "Careers",
  eyebrow: "Careers",
  headline: "Build Platforms That Scale the World's Enterprises",
  body: "Join a distributed team of engineers, architects, and strategists solving hard problems at massive concurrency with the autonomy to own outcomes and the support to grow fast.",
  primaryCta: "See Open Roles",
  secondaryCta: "Life at Aeroven",
  stats: [
    { value: "2", label: "Dhaka Offices" },
    { value: "90%+", label: "Remote-friendly" },
    { value: "5+", label: "Open positions" },
  ] satisfies Stat[],
} as const;

export const careersLife = {
  eyebrow: "Life at Aeroven",
  headline: "A place to do the best engineering of your career",
  items: [
    {
      title: "Ownership from day one",
      description:
        "You lead real decisions on production systems, not tickets. Autonomy is the default and impact is visible.",
    },
    {
      title: "Mobility Rate",
      description: "1 in 3 Promoted Annually",
    },
    {
      title: "Grow fast, learn always",
      description:
        "A learning budget, mentorship, and hard problems at scale keep your craft sharp and your career moving.",
    },
  ] satisfies CardItem[],
} as const;

export const careersBenefits = {
  eyebrow: "Benefits & perks",
  headline: "We invest in our people",
  items: [
    {
      title: "Flexible time off",
      description:
        "Take the time you need to recharge and do your best work.",
    },
    {
      title: "Learning budget",
      description:
        "Annual stipend for courses, conferences, and certifications.",
    },
    {
      title: "Equity & bonus",
      description:
        "Share in the upside you help create with meaningful equity.",
    },
    {
      title: "Parental leave",
      description: "Generous, inclusive leave for all new parents.",
    },
  ] satisfies Benefit[],
} as const;

export const careersOpenRoles = {
  eyebrow: "Open roles",
  headline: "Find your next role",
  filters: ["All", "Engineering", "Data & AI", "Design", "Operations"],
  applyLabel: "Apply",
  emptyPrompt:
    "Don't see your role? Send us your details — we're always meeting great people.",
  emptyPromptLinkLabel: "Send us your details",
  jobs: [
    {
      title: "Senior Engineer",
      department: "Data & AI",
      location: "Dhaka",
      type: "Full-time",
    },
    {
      title: "Cloud Platform Engineer",
      department: "Engineering",
      location: "Dhaka",
      type: "Full-time",
    },
    {
      title: "Solutions Architect",
      department: "Engineering",
      location: "Dhaka",
      type: "Full-time",
    },
    {
      title: "Data Engineer",
      department: "Data & AI",
      location: "Dhaka",
      type: "Full-time",
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Dhaka",
      type: "Full-time",
    },
    {
      title: "Product Manager",
      department: "Operations",
      location: "Dhaka",
      type: "Part-time",
    },
  ] satisfies JobOpening[],
} as const;

export const careersHiring = {
  eyebrow: "How we hire",
  headline: "A clear, respectful process",
  steps: [
    {
      number: "01",
      title: "Intro call",
      description:
        "A 30 minute chat to align on the role and your goals.",
    },
    {
      number: "02",
      title: "Technical deep-dive",
      description:
        "A practical session on real problems, no trick puzzles.",
    },
    {
      number: "03",
      title: "Team fit",
      description: "Meet the people you'll work with day to day.",
    },
    {
      number: "04",
      title: "Offer",
      description:
        "A transparent offer and a warm welcome to the team.",
    },
  ] satisfies HiringStep[],
} as const;

export const careersCta: CtaBlock = {
  headline: "Ready to build what's next?",
  body: "Browse open roles and take the first step toward joining Aeroven.",
  cta: "View Open Roles",
};

export const careersPage = {
  hero: careersHero,
  life: careersLife,
  benefits: careersBenefits,
  openRoles: careersOpenRoles,
  hiring: careersHiring,
  cta: careersCta,
} as const;

/* -------------------------------------------------------------------------- */
/* Consultation page                                                          */
/* -------------------------------------------------------------------------- */

export const consultationHero = {
  breadcrumb: "Book a Consultation",
  eyebrow: "Let's talk",
  headline: "Book a Consultation with Our Architects",
  body: "Tell us where you are and what you're trying to achieve. We'll map the right capabilities and engagement model and outline a path to production.",
} as const;

export const consultationHighlights: ConsultationHighlight[] = [
  {
    title: "30-minute discovery call",
    description: "A focused session with a senior architect. No sales pitch.",
  },
  {
    title: "Tailored recommendation",
    description:
      "A clear view of scope, engagement model, and next steps.",
  },
  {
    title: "< 2-hour response",
    description: "We reply fast to get a time on the calendar.",
  },
];

export const consultationContact: ContactInfo = {
  email: "hello@aeroven.com",
  phone: "+1 (415) 555-0199",
  address: "525 Market St, Suite 2200, San Francisco",
};

export const consultationForm = {
  headline: "Tell us about your project",
  requiredNote: "Fields marked with * are required.",
  requiredMarker: "*",
  submitLabel: "Request My Consultation",
  privacyNote:
    "By submitting, you agree to our Privacy Policy. We'll never share your details.",
  privacyLinkLabel: "Privacy Policy",
  fields: [
    {
      name: "firstName",
      label: "First name",
      placeholder: "Jordan",
      required: true,
      type: "text",
    },
    {
      name: "lastName",
      label: "Last name",
      placeholder: "Rivera",
      required: true,
      type: "text",
    },
    {
      name: "email",
      label: "Work email",
      placeholder: "jordan@company.com",
      required: true,
      type: "email",
    },
    {
      name: "company",
      label: "Company",
      placeholder: "Company name",
      required: false,
      type: "text",
    },
    {
      name: "helpWith",
      label: "What can we help with?",
      required: true,
      type: "chips",
      options: [
        "AI & Data",
        "Cloud & DevOps",
        "Custom Software",
        "Product & ERP",
        "Not sure yet",
      ],
    },
    {
      name: "engagement",
      label: "Preferred engagement",
      type: "select",
      options: [
        "Team Augmentation",
        "End-to-End Build",
        "Strategy Consulting",
        "Managed Services & Support",
        "Not sure yet",
      ],
    },
    {
      name: "timeline",
      label: "Timeline",
      type: "select",
      options: ["ASAP", "1–3 months", "3–6 months", "Just exploring"],
    },
    {
      name: "details",
      label: "Project details",
      placeholder:
        "A few lines on your goals, current stack, and constraints…",
      type: "textarea",
    },
  ] satisfies FormField[],
} as const;

export const consultationTrust = {
  label: "Trusted by teams that scale",
  brands: footer.trustedBy,
} as const;

export const consultationPage = {
  hero: consultationHero,
  highlights: consultationHighlights,
  contact: consultationContact,
  form: consultationForm,
  trust: consultationTrust,
} as const;

/* -------------------------------------------------------------------------- */
/* Aggregate export                                                           */
/* -------------------------------------------------------------------------- */

export const siteContent = {
  brand,
  nav,
  footer,
  offices,
  officesSummary,
  home,
  capabilities: capabilitiesPage,
  process: processPage,
  engagement: engagementPage,
  success: successPage,
  careers: careersPage,
  consultation: consultationPage,
} as const;

export type SiteContent = typeof siteContent;
