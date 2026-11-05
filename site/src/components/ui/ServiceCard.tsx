import Link from "next/link";
import { Arrow } from "@/components/ui/Button";
import { riseStyle, type PlateTone } from "@/components/ui/Plate";
import { serviceHref, type Service } from "@/content/services";
import styles from "./ServiceCard.module.css";

// One service as one plate; the whole plate is the link to its page.
// No invented link label: the title names the link, the arrow beside it marks it.
export function ServiceCard({
  service,
  span,
  tone = "grey",
  rise,
}: {
  service: Service;
  span: number;
  tone?: PlateTone;
  rise?: number;
}) {
  return (
    <Link
      href={serviceHref(service)}
      className={`plate plate--${tone} ${styles.card}`}
      style={{ gridColumn: `span ${span} / span ${span}`, ...riseStyle(rise) }}
      {...(rise !== undefined ? { "data-rise": "" } : {})}
    >
      <span className={styles.head}>
        <h3 className="t-title">{service.title}</h3>
        <span className={styles.more}>
          <Arrow />
        </span>
      </span>
      <p className="t-body muted">{service.description}</p>
    </Link>
  );
}
