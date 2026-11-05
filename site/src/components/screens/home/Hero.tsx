import { Console } from "@/components/hero/Console";
import { Plate } from "@/components/ui/Plate";
import { ButtonLink } from "@/components/ui/Button";
import { hero } from "@/content/home";
import { healthCheck, serviceHref } from "@/content/services";
import styles from "./Hero.module.css";

// H1: Your first and last VDI partner. One orange plate: the message, the platforms
// we run and both CTAs above the fold, then the console loop across the plate,
// running off its bottom edge (stageshow "wide hero").
export function Hero() {
  return (
    <section className="screen grid" aria-labelledby="hero-title">
      <Plate tone="orange" className={styles.plate}>
        <h1 id="hero-title" className="t-display">
          {hero.headline}
        </h1>
        <div className={`grid ${styles.row}`}>
          <div className={styles.platforms}>
            <p className="t-title">{hero.platforms}</p>
          </div>
          <div className={styles.ctas}>
            <ButtonLink href={serviceHref(healthCheck)} variant="charcoal" arrow>
              {hero.ctaHealthCheck}
            </ButtonLink>
            <ButtonLink href="/services" variant="outline">
              {hero.ctaServices}
            </ButtonLink>
          </div>
        </div>
        <div className={styles.visual}>
          <Console />
        </div>
      </Plate>
    </section>
  );
}
