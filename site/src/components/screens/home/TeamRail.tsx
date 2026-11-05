"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { riseStyle } from "@/components/ui/Plate";
import styles from "./TeamRail.module.css";

type Member = { name: string; title: string };

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .replace(/[^A-Z]/gi, "");

// A row of team plates with horizontal snap (proximity) and ‹ › buttons.
// User-driven only: no autoplay.
export function TeamRail({ members, action }: { members: Member[]; action: ReactNode }) {
  const rail = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const el = rail.current;
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
    const el = rail.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + gap) * 2, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <div className={styles.wrap} data-rise="" style={riseStyle(1)}>
      <ul ref={rail} className={styles.rail} aria-label="The Spadafy team" tabIndex={0}>
        {members.map((m) => (
          <li key={m.name} className={styles.item}>
            <div className={`plate plate--grey placeholder ${styles.photo}`}>
              <span className="t-title" aria-hidden="true">
                {initials(m.name)}
              </span>
              <span className="t-small">[PLACEHOLDER: photo]</span>
            </div>
            <p className="t-small">{m.name}</p>
            <p className="t-small muted">{m.title}</p>
          </li>
        ))}
      </ul>
      <div className={styles.controls}>
        <div className={styles.arrows}>
          <button type="button" className={styles.arrow} onClick={() => step(-1)} disabled={edge.start} aria-label="Previous team members">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M14 8H3M7 4 3 8l4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button type="button" className={styles.arrow} onClick={() => step(1)} disabled={edge.end} aria-label="Next team members">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
        {action}
      </div>
    </div>
  );
}
