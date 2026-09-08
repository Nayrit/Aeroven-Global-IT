import {
  Boxes,
  Cloud,
  Code2,
  Cpu,
  Database,
  Handshake,
  Layers,
  LineChart,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "Bespoke Engineering": Code2,
  "Enterprise Grade Cloud Scalability": Cloud,
  "Data to Insights Pipelines": Database,
  "Strategy & Innovation": Sparkles,
  "Enterprise Digital Transformation": Workflow,
  "Custom Software Engineering": Code2,
  "Cloud Engineering & DevOps": Cloud,
  "Data Engineering & Applied AI": Cpu,
  "Quality Engineering & Security Audits": ShieldCheck,
  "Technology Consulting": Handshake,
  "Enterprise Supply Chain & Warehouse Management (WMS)": Boxes,
  "HRMS & Workforce Intelligence Suite": Users,
  "Omnichannel B2B & B2C Commerce Engines": Layers,
  "Foundational Integrity": ShieldCheck,
  "Agile Engineering": Rocket,
  "Future Proof Solutions": LineChart,
  "Customer Support": Handshake,
  "Global Support": Handshake,
  "Team Augmentation": Users,
  "End to End Build": Rocket,
  "Strategy Consulting": Sparkles,
  "Managed Services & Support": Handshake,
};

export function FeatureIcon({
  title,
  className = "size-5",
}: {
  title: string;
  className?: string;
}) {
  const Icon = iconMap[title] ?? Sparkles;
  return <Icon className={className} strokeWidth={2} />;
}
