import { Activity, CloudCog, Fingerprint, Laptop, MonitorCog, Server, Workflow, type LucideIcon } from "lucide-react";
import styles from "./ServiceIcon.module.css";

// One icon per service, all from Lucide: 24-grid, drawn at 32px, stroke 1.5,
// round caps and joins. They sit beside the service name, never instead of it.
export const serviceIcons: Record<string, LucideIcon> = {
  "vdi-managed-services": MonitorCog,
  "free-vdi-health-check": Activity,
  "vdi-infrastructure": Server,
  "healthcare-sso-authentication": Fingerprint,
  "igel-endpoint-solutions": Laptop,
  "nerdio-solutions": Workflow,
  "hybrid-cloud-infrastructure-modernization": CloudCog,
};

export function ServiceIcon({ slug }: { slug: string }) {
  const Icon = serviceIcons[slug];
  if (!Icon) return null;
  return (
    <span className={styles.ring} aria-hidden="true">
      <Icon size={32} strokeWidth={1.5} absoluteStrokeWidth />
    </span>
  );
}
