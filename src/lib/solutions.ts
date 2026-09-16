/**
 * Solution / product detail pages — expanded from home product copy.
 */

export type SolutionSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type SolutionPage = {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  overview: string;
  highlights: { title: string; description: string }[];
  sections: SolutionSection[];
  outcomes: { value: string; label: string }[];
  stack: string[];
  faqs: { question: string; answer: string }[];
  cta: { headline: string; body: string; cta: string };
};

export const solutions: SolutionPage[] = [
  {
    slug: "custom-ai-powered-erp",
    number: "00",
    eyebrow: "Featured suite",
    title: "Custom AI-Powered ERP Solutions",
    summary:
      "A next generation enterprise resource planning suite built to unify your operational ecosystem with predictive intelligence.",
    image: "/media/aeroven-product.jpg",
    overview:
      "Moving beyond rigid off-the-shelf software, our custom ERP leverages predictive machine learning models to deliver intelligent demand forecasting, real-time supply chain telemetry, dynamic financial reconciliations, automated resource allocation, and real-time executive dashboards. Built with modular API microservices, it scales with enterprise complexity without forcing your processes into a vendor template.",
    highlights: [
      {
        title: "Predictive demand forecasting",
        description:
          "Models trained on your historical and live signals to anticipate demand shifts before they hit inventory and cash flow.",
      },
      {
        title: "Supply chain telemetry",
        description:
          "Unified visibility across vendors, hubs, and lanes — from purchase order to last-mile confirmation.",
      },
      {
        title: "Automated reconciliation",
        description:
          "Finance workflows that close books faster with exception-first review instead of manual line hunting.",
      },
      {
        title: "Modular microservices",
        description:
          "Ship modules independently — inventory, finance, workforce, commerce — while sharing one secure data plane.",
      },
    ],
    sections: [
      {
        heading: "What we design and ship",
        body: "We architect ERP around your operating model: chart of accounts, fulfillment rules, approval chains, and compliance boundaries. Discovery workshops map constraints; feasibility spikes prove data readiness; then we blueprint a secure, scalable system with clear cost projections.",
        bullets: [
          "Core finance, inventory, procurement, and order management modules",
          "Role-based access, audit logging, and private-by-design data handling",
          "API-first integration with CRM, WMS, HRMS, and banking rails",
          "Executive dashboards with real-time KPIs and alerting",
        ],
      },
      {
        heading: "How delivery works",
        body: "Engagements typically start with fixed-scope discovery, then move to milestone-based builds with production-grade CI/CD from day one. You get working increments every sprint — not a big-bang cutover.",
        bullets: [
          "Discovery workshop with stakeholders and success metrics",
          "Technical spike for data, latency, and compliance constraints",
          "Iterative build with staging environments and automated tests",
          "Training, monitoring handover, and optional managed services",
        ],
      },
      {
        heading: "Who it is for",
        body: "Mid-market and enterprise operators who have outgrown spreadsheets or inflexible packaged ERP — especially teams that need AI-assisted planning without sacrificing auditability.",
      },
    ],
    outcomes: [
      { value: "Weeks", label: "to first production module" },
      { value: "1 plane", label: "shared data & identity" },
      { value: "API", label: "first integration posture" },
    ],
    stack: [
      "Cloud-native services",
      "Event-driven integrations",
      "PostgreSQL / data warehouse",
      "ML forecasting pipelines",
      "Observability & SLAs",
    ],
    faqs: [
      {
        question: "Can this replace our existing ERP?",
        answer:
          "Yes — either as a phased module-by-module replacement or as a parallel greenfield stack with controlled cutover. We design migration paths that protect production operations.",
      },
      {
        question: "Do you support multi-entity and multi-currency?",
        answer:
          "Yes. Multi-entity structures, multi-currency processing, and region-aware compliance are designed into the architecture from the start.",
      },
    ],
    cta: {
      headline: "Ready to blueprint your ERP?",
      body: "Book a consultation with our architects — we will map scope, engagement model, and a path to first production value.",
      cta: "Book a Consultation",
    },
  },
  {
    slug: "technology-consulting",
    number: "01",
    eyebrow: "Advisory",
    title: "Technology Consulting",
    summary:
      "High-conviction engineering strategy for leadership teams making complex digital decisions.",
    image: "/media/aeroven-hero.jpg",
    overview:
      "Navigate complex digital decisions with high-conviction engineering strategy. We partner with leadership teams to evaluate tech stacks, modernize legacy architectures, and design scalable cloud, data, and AI roadmaps. From technical due diligence and cost optimization to security compliance, we ensure your IT investments directly accelerate business performance and long-term operational resilience.",
    highlights: [
      {
        title: "Stack & architecture reviews",
        description:
          "Independent assessment of your current platforms, debt, and readiness for scale, AI, and multi-region delivery.",
      },
      {
        title: "Cloud & cost optimization",
        description:
          "Right-size spend without starving reliability — migrations, FinOps baselines, and performance targets.",
      },
      {
        title: "Security & compliance posture",
        description:
          "Private-by-design guidance for HIPAA, GDPR, SOC 2, and ISO-aligned delivery programs.",
      },
      {
        title: "AI opportunity assessment",
        description:
          "Separate hype from leverage: where models, automation, and data products create measurable ROI.",
      },
    ],
    sections: [
      {
        heading: "Engagement shapes",
        body: "Consulting can stand alone or precede a build. Typical formats include strategy sprints, architecture reviews, technical due diligence for investors or boards, and multi-quarter advisory retainers.",
        bullets: [
          "2–4 week strategy / architecture sprints",
          "Due diligence packs for M&A and fundraising",
          "Roadmaps with sequenced bets and capacity plans",
          "Optional follow-on build or augmentation",
        ],
      },
      {
        heading: "What you leave with",
        body: "Clear recommendations, not slideware theater. Decision memos, reference architectures, risk registers, and a prioritized backlog your teams can execute — with or without Aeroven engineers embedded.",
      },
      {
        heading: "How we stay accountable",
        body: "We write recommendations we would implement ourselves. When you ask us to build next, the same architects stay on the engagement so strategy does not get lost in handoff.",
      },
    ],
    outcomes: [
      { value: "Weeks", label: "to a decision-ready roadmap" },
      { value: "Board", label: "ready diligence artifacts" },
      { value: "Build", label: "optional next step" },
    ],
    stack: [
      "Architecture decision records",
      "Cloud cost & reliability baselines",
      "Security & compliance checklists",
      "AI feasibility frameworks",
    ],
    faqs: [
      {
        question: "Is this only advisory?",
        answer:
          "Consulting can be advisory-only. Many clients continue into end-to-end build or team augmentation with the same leadership continuity.",
      },
      {
        question: "Can you work with our existing vendors?",
        answer:
          "Yes. We regularly collaborate alongside internal teams, system integrators, and cloud partners without forcing a rip-and-replace agenda.",
      },
    ],
    cta: {
      headline: "Need a clear technical path?",
      body: "Talk with a senior architect about your stack, constraints, and the decisions that matter this quarter.",
      cta: "Book a Consultation",
    },
  },
  {
    slug: "supply-chain-wms",
    number: "02",
    eyebrow: "Logistics platforms",
    title: "Enterprise Supply Chain & Warehouse Management (WMS)",
    summary:
      "End-to-end logistics platforms with real-time telematics, IoT warehouse mapping, and predictive stock intelligence.",
    image: "/media/aeroven-office.jpg",
    overview:
      "End to end logistics platforms featuring real time fleet telematics, IoT warehouse mapping, automated stock balance predictions, and multi-vendor procurement pipelines. We build systems that keep inventory, carriers, and fulfillment sites synchronized — so operations can react in minutes, not overnight batch cycles.",
    highlights: [
      {
        title: "Fleet telematics",
        description:
          "Live location, ETA, and exception workflows for over-the-road and last-mile networks.",
      },
      {
        title: "IoT warehouse mapping",
        description:
          "Bin-level visibility, sensor feeds, and task orchestration for pick, pack, and replenishment.",
      },
      {
        title: "Stock prediction",
        description:
          "Automated balance forecasts and reorder signals tied to demand and lead-time variability.",
      },
      {
        title: "Multi-vendor procurement",
        description:
          "Pipelines that normalize supplier catalogs, SLAs, and inbound receiving across partners.",
      },
    ],
    sections: [
      {
        heading: "Platform capabilities",
        body: "We design WMS and supply chain control towers as modular systems: receiving, putaway, picking, packing, shipping, returns, and yard management — integrated with ERP, commerce, and carrier APIs.",
        bullets: [
          "Wave / batch / zone picking strategies",
          "ASN and dock scheduling",
          "Carrier rate shopping and label generation",
          "Exception dashboards for ops supervisors",
        ],
      },
      {
        heading: "Integration reality",
        body: "Logistics stacks fail at the seams. We prioritize reliable event streams between WMS, TMS, ERP, and marketplaces — with idempotent APIs, dead-letter handling, and observability from day one.",
      },
      {
        heading: "Rollout approach",
        body: "Pilot one site or lane, prove cycle-time and accuracy gains, then expand. Cutover playbooks protect peak seasons and include fallback paths for critical fulfillment paths.",
      },
    ],
    outcomes: [
      { value: "Live", label: "fleet & inventory signals" },
      { value: "Multi", label: "hub & vendor ready" },
      { value: "Ops", label: "exception-first UX" },
    ],
    stack: [
      "Event-driven services",
      "IoT / telemetry ingestion",
      "Maps & routing APIs",
      "Warehouse mobile clients",
      "ERP / commerce connectors",
    ],
    faqs: [
      {
        question: "Do you support multi-warehouse networks?",
        answer:
          "Yes. Multi-node inventory, transfer orders, and network-level ATP are standard design requirements for our WMS programs.",
      },
      {
        question: "Can you integrate our existing ERP?",
        answer:
          "Yes. We integrate with custom and packaged ERP systems through APIs, EDI where required, and staged data sync patterns.",
      },
    ],
    cta: {
      headline: "Ready to modernize logistics?",
      body: "Walk us through your network — hubs, carriers, and peak constraints — and we will outline a build path.",
      cta: "Book a Consultation",
    },
  },
  {
    slug: "hrms-workforce",
    number: "03",
    eyebrow: "People platforms",
    title: "HRMS & Workforce Intelligence Suite",
    summary:
      "Human capital management with compliant payroll, biometrics, performance pipelines, and retention intelligence.",
    image: "/media/aeroven-hero.jpg",
    overview:
      "Comprehensive human capital management featuring automated payroll compliant with global and regional labor frameworks, biometric integration, performance review pipelines, and predictive retention modeling. Built for organizations that need workforce systems to keep pace with multi-country operations and modern employee experience expectations.",
    highlights: [
      {
        title: "Compliant payroll automation",
        description:
          "Payroll engines aligned to regional labor rules, tax treatments, and audit trails.",
      },
      {
        title: "Biometric integration",
        description:
          "Attendance and access flows that connect devices to HRIS with privacy controls.",
      },
      {
        title: "Performance pipelines",
        description:
          "Review cycles, goals, and calibration workflows that managers actually complete.",
      },
      {
        title: "Retention modeling",
        description:
          "Predictive signals that help people teams intervene before attrition becomes a crisis.",
      },
    ],
    sections: [
      {
        heading: "Core HRMS modules",
        body: "We implement modular HRMS covering employee records, time & attendance, leave, payroll, benefits administration, recruiting handoff, and learning — with role-based portals for employees, managers, and HR ops.",
        bullets: [
          "Employee self-service and manager workflows",
          "Org structure, roles, and access governance",
          "Document vaults with retention policies",
          "Analytics for headcount, cost, and engagement",
        ],
      },
      {
        heading: "Compliance & privacy",
        body: "Workforce data is sensitive. Architectures are private-by-design with encryption, residency options, consent handling, and audit logging suitable for regulated industries.",
      },
      {
        heading: "Intelligence layer",
        body: "Beyond transactions: workforce intelligence surfaces capacity risks, overtime patterns, and retention predictors so HR and operations can act on evidence.",
      },
    ],
    outcomes: [
      { value: "Global", label: "labor-aware payroll" },
      { value: "Secure", label: "by-design HR data" },
      { value: "Predict", label: "retention risk" },
    ],
    stack: [
      "Secure HR data stores",
      "Biometric device adapters",
      "Workflow engines",
      "People analytics models",
      "SSO / identity providers",
    ],
    faqs: [
      {
        question: "Can you handle multi-country payroll rules?",
        answer:
          "We design for regional labor frameworks and partner with local payroll specialists where statutory filing must remain in-country.",
      },
      {
        question: "Will this replace our ATS / LMS?",
        answer:
          "It can integrate or gradually replace adjacent systems. We prefer API-first coexistence until you are ready to consolidate.",
      },
    ],
    cta: {
      headline: "Build a workforce platform that scales?",
      body: "Tell us about your countries, headcount, and compliance constraints — we will map the right module sequence.",
      cta: "Book a Consultation",
    },
  },
  {
    slug: "omnichannel-commerce",
    number: "04",
    eyebrow: "Commerce engines",
    title: "Omnichannel B2B & B2C Commerce Engines",
    summary:
      "Headless commerce for fast catalogs, unified inventory, and multi-tier pricing across complex networks.",
    image: "/media/aeroven-office.jpg",
    overview:
      "Headless digital commerce architectures engineered for lightning fast catalog browsing, unified inventory management across distributed hubs, and multi tier pricing support for complex vendor networks. Whether you sell B2C, B2B, or both, we build storefronts and commerce services that stay fast under load and honest about stock.",
    highlights: [
      {
        title: "Headless storefronts",
        description:
          "Composable frontends with CDN-friendly catalog APIs for web, mobile, and partner portals.",
      },
      {
        title: "Unified inventory",
        description:
          "ATP across hubs and channels so customers and sales teams see the same truth.",
      },
      {
        title: "Multi-tier pricing",
        description:
          "Contract, segment, and volume pricing for vendor networks and wholesale buyers.",
      },
      {
        title: "High concurrency",
        description:
          "Architectures tuned for peak traffic, flash events, and catalog-heavy browsing.",
      },
    ],
    sections: [
      {
        heading: "What we build",
        body: "Catalog services, cart and checkout, promotions, payments orchestration, order management, and customer accounts — integrated with ERP, WMS, CRM, and tax engines.",
        bullets: [
          "B2C storefronts and B2B account portals",
          "Search, merchandising, and personalization hooks",
          "Subscription and recurring order flows",
          "Returns, exchanges, and post-purchase journeys",
        ],
      },
      {
        heading: "Performance & SEO",
        body: "Commerce is a conversion surface. We obsess over Core Web Vitals, edge caching, and crawlable catalog structures so growth teams are not fighting the stack.",
      },
      {
        heading: "Operations alignment",
        body: "Orders only matter if fulfillment can keep up. We design OMS handoffs that respect warehouse capacity, carrier cutoffs, and split shipments.",
      },
    ],
    outcomes: [
      { value: "Fast", label: "catalog & PDP paths" },
      { value: "One", label: "inventory truth" },
      { value: "B2B+", label: "B2C on one engine" },
    ],
    stack: [
      "Headless CMS / catalog APIs",
      "Edge caching & CDN",
      "Payments & tax connectors",
      "OMS / WMS integration",
      "Search & merchandising",
    ],
    faqs: [
      {
        question: "Do you rebuild on Shopify / Salesforce / custom?",
        answer:
          "We meet you where you are. Some programs extend existing platforms; others move to custom headless when packaging limits become the bottleneck.",
      },
      {
        question: "Can you support marketplace sellers?",
        answer:
          "Yes. Multi-vendor catalogs, commission rules, and seller portals are supported patterns in our commerce engines.",
      },
    ],
    cta: {
      headline: "Ready to accelerate commerce?",
      body: "Share your channels, catalog size, and peak traffic profile — we will outline an architecture that converts and scales.",
      cta: "Book a Consultation",
    },
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

export function getAllSolutionSlugs() {
  return solutions.map((s) => s.slug);
}
