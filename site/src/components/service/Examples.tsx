"use client";

import { useState } from "react";
import { Copy } from "./Copy";
import styles from "./ServicePage.module.css";

// Practical examples as a pager (prototype v3 testimonials block): bars to pick
// a story, one story at a time, Prev. / Next. Reader-driven, nothing auto-advances.
export function Examples({ title, items }: { title: string; items: string[] }) {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((n) => (n + d + items.length) % items.length);

  return (
    <section className={`${styles.block} ${styles.examples}`} aria-labelledby="examples">
      <div className={styles.examplesTop}>
        <div className={styles.bars} role="tablist" aria-label="Choose an example">
          {items.map((_, k) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={k === i}
              aria-label={`Example ${k + 1}`}
              className={styles.bar}
              onClick={() => setI(k)}
            />
          ))}
        </div>
        <h2 id="examples" className="t-display">
          {title}
        </h2>
      </div>
      <div className={styles.exampleBody} aria-live="polite">
        <div className={`${styles.exampleImage} ${styles.ph}`} role="img" aria-label="Placeholder: project photo">
          [IMAGE: project photo {i + 1}, 4:3]
        </div>
        <div className={styles.exampleText}>
          <p className="t-small muted">
            Example {i + 1} of {items.length}
          </p>
          <Copy text={items[i]} className="t-title" />
        </div>
      </div>
      <div className={styles.pager}>
        <button type="button" onClick={() => go(-1)}>
          Prev.
        </button>
        <button type="button" onClick={() => go(1)}>
          Next
        </button>
      </div>
    </section>
  );
}
