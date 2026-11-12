import { Plate, rise } from "@/components/ui/Plate";
import { testimonials } from "@/content/home";
import styles from "./Testimonials.module.css";

// H7: Other people vouch for us. Pink family: the loud plate on top, then one
// quote per row in pink-mist, so the eye takes one at a time and the next
// screen's orange never touches the pink. Motion map v2: rise.
export function Testimonials() {
  return (
    <section className="screen grid" aria-labelledby="quotes-title">
      <Plate tone="pink">
        <h2 id="quotes-title" className="t-display" {...rise(0)}>
          {testimonials.headline}
        </h2>
      </Plate>
      {testimonials.quotes.map((q, i) => (
        <Plate key={q.by} as="figure" tone="pink-mist" rise={1 + i} className={`grid ${styles.quote}`}>
          <blockquote className={`t-title ${styles.text}`}>{q.quote}</blockquote>
          <figcaption className={`t-small muted ${styles.by}`}>{q.by}</figcaption>
        </Plate>
      ))}
    </section>
  );
}
