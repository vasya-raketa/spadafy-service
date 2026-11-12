"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { serviceIcons } from "@/components/ui/ServiceIcon";
import { hero } from "@/content/home";
import { healthCheck, serviceHref, services } from "@/content/services";
import styles from "./Nav.module.css";

// No /services hub: "Services" opens a list of all seven service pages.
const primary = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesItem = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  // The Services list closes on navigation, Esc and any click outside it.
  useEffect(() => setServicesOpen(false), [pathname]);
  useEffect(() => {
    if (!servicesOpen) return;
    const onDown = (e: PointerEvent) => {
      if (!servicesItem.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setServicesOpen(false);
      servicesItem.current?.querySelector("button")?.focus();
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

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
            <li ref={servicesItem} className={styles.servicesItem}>
              <button
                type="button"
                className={styles.link}
                aria-expanded={servicesOpen}
                aria-controls="services-list"
                onClick={() => setServicesOpen((o) => !o)}
              >
                Services
                <svg className={styles.caret} data-open={servicesOpen || undefined} width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M2 4.5 6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
              <ul id="services-list" className={styles.servicesList} hidden={!servicesOpen}>
                {services.map((s) => {
                  const Icon = serviceIcons[s.slug];
                  const current = pathname.replace(/\/$/, "") === serviceHref(s); // export adds a trailing slash
                  return (
                    <li key={s.slug}>
                      <Link href={serviceHref(s)} className={styles.serviceLink} aria-current={current ? "page" : undefined}>
                        {Icon && <Icon size={20} strokeWidth={1.5} absoluteStrokeWidth aria-hidden="true" />}
                        {s.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
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
