import { Plate } from "@/components/ui/Plate";
import { greenFlags } from "@/content/home";
import styles from "./GreenFlags.module.css";

// H5: Our green flags. The one green plate carries the headline; the proof sits
// beside it as a ruled column of mint stat plates.
export function GreenFlags() {
  return (
    <section className="screen grid" aria-labelledby="flags-title">
      <div className={styles.side}>
        <Plate tone="green" rise={0} className={styles.headline}>
          <h2 id="flags-title" className="t-display">
            {greenFlags.headline}
          </h2>
        </Plate>
        <Plate tone="mint-haze" rise={1} className={styles.tech}>
          <p className="t-title">{greenFlags.tech}</p>
        </Plate>
      </div>
      <dl className={styles.stats}>
        {greenFlags.stats.map((s, i) => (
          <Plate key={s.label} tone="mint-haze" rise={1 + i} className={styles.stat}>
            <dt className="t-body muted">{s.label}</dt>
            <dd className="t-title">{s.value}</dd>
          </Plate>
        ))}
      </dl>
    </section>
  );
}
