import { Plate, rise } from "@/components/ui/Plate";
import { greenFlags } from "@/content/home";
import styles from "./GreenFlags.module.css";

// H5: Our green flags. Two plates only: the green one carries the headline and the
// platforms we manage; the mint one lists the proof as a hairline-ruled column.
// Motion map v2: rise, row by row in reading order.
export function GreenFlags() {
  return (
    <section className="screen grid" aria-labelledby="flags-title">
      <Plate tone="green" span={5} className={styles.headline}>
        <h2 id="flags-title" className="t-display" {...rise(0)}>
          {greenFlags.headline}
        </h2>
        <p className="t-title" {...rise(1)}>
          {greenFlags.tech}
        </p>
      </Plate>
      <Plate tone="mint-haze" span={7}>
        <dl className={styles.stats}>
          {greenFlags.stats.map((s, i) => (
            <div key={s.label} className={styles.stat} {...rise(1 + i)}>
              <dt className="t-body muted">{s.label}</dt>
              <dd className="t-title">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Plate>
    </section>
  );
}
