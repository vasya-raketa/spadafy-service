import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { serviceHref, services } from "@/content/services";
import styles from "./Footer.module.css";

// One of the page's two charcoal plates: compact, inset like any plate, never a band.
export function Footer() {
  return (
    <footer className={`page ${styles.footer}`} data-behind-menu>
      <div className="grid">
        <div className={`plate plate--charcoal ${styles.plate}`} style={{ gridColumn: "1 / -1" }}>
          <div className="grid">
            <div className={styles.brand}>
              <Link href="/" aria-label="Spadafy, home">
                <Logo on="dark" height={32} />
              </Link>
              <p className="t-small">[PLACEHOLDER: legal line]</p>
            </div>
            <nav className={styles.col} aria-label="Services">
              <p className="t-small">Services</p>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={serviceHref(s)} className={styles.link}>
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className={styles.colSmall} aria-label="Company">
              <p className="t-small">Spadafy</p>
              <ul>
                <li><Link href="/about" className={styles.link}>About</Link></li>
                <li><Link href="#contact" className={styles.link}>Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
