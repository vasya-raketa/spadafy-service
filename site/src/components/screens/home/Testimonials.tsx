import { Plate } from "@/components/ui/Plate";
import { testimonials } from "@/content/home";
import styles from "./Testimonials.module.css";

// H7: Other people vouch for us. Pink family: the loud plate on top, the quotes
// in pink-mist below it, so the next screen's orange never touches the pink.
export function Testimonials() {
  return (
    <section className="screen grid" aria-labelledby="quotes-title">
      <Plate tone="pink" rise={0}>
        <h2 id="quotes-title" className="t-display">
          {testimonials.headline}
        </h2>
      </Plate>
      {testimonials.quotes.map((q, i) => (
        <Plate key={q.by} as="figure" tone="pink-mist" span={4} rise={1 + i} className={styles.quote}>
          <blockquote className="t-body">{q.quote}</blockquote>
          <figcaption className="t-small muted">{q.by}</figcaption>
        </Plate>
      ))}
    </section>
  );
}
