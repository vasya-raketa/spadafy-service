"use client";

import { useEffect } from "react";

// One observer for the whole page: every [data-rise] element fades up once,
// the first time 15% of it is in view. The CSS (globals.css) owns the motion and
// skips it entirely under prefers-reduced-motion.
export function RiseObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-rise]:not(.is-in)");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
