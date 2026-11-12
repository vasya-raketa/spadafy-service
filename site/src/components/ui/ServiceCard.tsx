import Link from "next/link";
import { Arrow } from "@/components/ui/Button";
import type { PlateTone } from "@/components/ui/Plate";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { serviceHref, type Service } from "@/content/services";
import styles from "./ServiceCard.module.css";

// One service as one plate; the whole plate is the link to its page.
// Icon first, the name beside its meaning, then the description. No invented
// link label: the title names the link and the arrow marks it.
export function ServiceCard({ service, tone = "grey" }: { service: Service; tone?: PlateTone }) {
  return (
    <Link href={serviceHref(service)} className={`plate plate--${tone} ${styles.card}`}>
      <span className={styles.top}>
        <ServiceIcon slug={service.slug} />
        <span className={styles.more}>
          <Arrow />
        </span>
      </span>
      <h3 className="t-title">{service.title}</h3>
      <p className="t-body muted">{service.description}</p>
    </Link>
  );
}
