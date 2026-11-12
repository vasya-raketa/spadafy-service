import { Plate } from "@/components/ui/Plate";
import { allIn } from "@/content/home";
import styles from "./AllIn.module.css";

// H3: When we're in, we're all in. The banner photo sits in a grid plate beside
// its text (CLIENT_FEEDBACK #5). Motion map v2: none, a calm beat after the intro.
export function AllIn() {
  return (
    <section className="screen grid" aria-labelledby="allin-title">
      <Plate tone="mint-haze" span={6} className={styles.text}>
        <h2 id="allin-title" className="t-display">
          {allIn.headline}
        </h2>
        <p className="t-body muted">{allIn.body}</p>
      </Plate>
      <Plate tone="grey" span={6} flush className={`placeholder ${styles.media}`}>
        <span className="t-small">{allIn.media}</span>
      </Plate>
    </section>
  );
}
