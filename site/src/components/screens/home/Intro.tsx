import { Plate, rise } from "@/components/ui/Plate";
import { intro } from "@/content/home";
import styles from "./Intro.module.css";

// H2: So, who are we? Compact, directly under the hero: "OK." starts at the plate's
// top padding, with no space above it.
export function Intro() {
  return (
    <section className="screen grid" aria-labelledby="intro-title">
      <Plate tone="pink-mist" className={styles.plate}>
        <p className="t-small" {...rise(0)}>
          {intro.eyebrow}
        </p>
        <h2 id="intro-title" className="t-display" {...rise(1)}>
          {intro.headline}
        </h2>
        <div className={`grid ${styles.lower}`}>
          <p className={`t-body muted ${styles.body}`} {...rise(2)}>
            {intro.body}
          </p>
          <p className={`t-title ${styles.supporting}`} {...rise(3)}>
            {intro.supporting}
          </p>
        </div>
      </Plate>
    </section>
  );
}
