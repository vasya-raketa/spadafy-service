import { Plate } from "@/components/ui/Plate";
import { allIn } from "@/content/home";
import styles from "./AllIn.module.css";

// H3: When we're in, we're all in. The banner photo sits in a grid plate beside
// its text (CLIENT_FEEDBACK #5), not as a full-bleed band.
export function AllIn() {
  return (
    <section className="screen grid" aria-labelledby="allin-title">
      <Plate tone="mint-haze" span={7} rise={0} className={styles.text}>
        <h2 id="allin-title" className="t-display">
          {allIn.headline}
        </h2>
        <p className="t-body muted">
          {allIn.body}
        </p>
      </Plate>
      <Plate tone="grey" span={5} rise={1} flush className={`placeholder ${styles.media}`}>
        <span className="t-small">{allIn.media}</span>
      </Plate>
    </section>
  );
}
