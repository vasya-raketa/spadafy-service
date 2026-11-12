"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./Rail.module.css";

// Horizontal scroll for a set to browse (services, team). User-driven only:
// arrows and native scrolling, `x proximity` snap, no autoplay. The next item
// peeks into the page margin so it's clear there is more.
export function Rail({
  label,
  span,
  header,
  footer,
  children,
}: {
  /** Accessible name for the list, e.g. "Services" */
  label: string;
  /** Page columns per item */
  span: number;
  header: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}) {
  const list = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const el = list.current;
    if (!el) return;
    const update = () =>
      setEdge({ start: el.scrollLeft <= 1, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = list.current;
    const item = el?.querySelector("li");
    if (!el || !item) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (item.getBoundingClientRect().width + gap), behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        {header}
        <div className={styles.arrows}>
          <button type="button" className={styles.arrow} onClick={() => step(-1)} disabled={edge.start} aria-label={`Previous: ${label}`}>
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M14 8H3M7 4 3 8l4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button type="button" className={styles.arrow} onClick={() => step(1)} disabled={edge.end} aria-label={`Next: ${label}`}>
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
      <ul ref={list} className={styles.list} aria-label={label} tabIndex={0} style={{ "--span": span } as React.CSSProperties}>
        {Children.map(children, (child) => (
          <li className={styles.item}>{child}</li>
        ))}
      </ul>
      {footer}
    </div>
  );
}
