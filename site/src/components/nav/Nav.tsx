"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { hero } from "@/content/home";
import { healthCheck, serviceHref, services } from "@/content/services";
import styles from "./Nav.module.css";

const primary = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    trigger.current?.focus();
  }, []);

  // While the menu is open: the page behind is inert, scroll is locked, Esc closes,
  // and Tab stays inside the header (nav + menu plate).
  useEffect(() => {
    if (!open) return;
    const behind = document.querySelectorAll<HTMLElement>("[data-behind-menu]");
    behind.forEach((el) => (el.inert = true));
    document.documentElement.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab" || !header.current) return;
      const items = header.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      behind.forEach((el) => (el.inert = false));
      document.documentElement.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <header ref={header} className={styles.header} data-open={open || undefined}>
      <nav className={styles.bar} aria-label="Main">
        <div className={styles.pill}>
          <Link href="/" className={styles.home} aria-label="Spadafy, home" onClick={() => setOpen(false)}>
            <Logo height={24} />
          </Link>
          <ul className={styles.links}>
            {primary.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={styles.link} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            ref={trigger}
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={styles.menuIcon} aria-hidden="true" data-open={open || undefined}>
              <span />
              <span />
            </span>
            {open ? "Close" : "Menu"}
          </button>
        </div>
        <Link href={serviceHref(healthCheck)} className="btn btn--charcoal" onClick={() => setOpen(false)}>
          {hero.ctaHealthCheck}
        </Link>
      </nav>

      <div id="site-menu" className={styles.menu} hidden={!open} aria-label="Site menu" role="region">
        <div className={`grid ${styles.menuGrid}`}>
          <ul className={styles.menuPrimary}>
            {primary.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={`t-display ${styles.menuBig}`} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.menuServices}>
            <p className="t-small">Services</p>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={serviceHref(s)} className={`t-title ${styles.menuService}`} onClick={() => setOpen(false)}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
