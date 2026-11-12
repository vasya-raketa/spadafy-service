import { Suspense } from "react";
import { Plate } from "@/components/ui/Plate";
import { ButtonLink } from "@/components/ui/Button";
import { hero } from "@/content/home";
import { healthCheck, serviceHref } from "@/content/services";
import { HeroVisual, HeroVisualFrame } from "./HeroVisual";
import styles from "./Hero.module.css";

// H1: Your first and last VDI partner. One orange plate: the message, the platforms
// we run and both CTAs above the fold, then the console loop across the plate,
// running off its bottom edge. v2: centred, after refs 2 (Wise).
// The visual is "a" (the v1 console loop, Hero A) or "b" (the v2 health check, Hero B),
// picked with ?hero= on the client; the static HTML ships Hero B.
export function Hero() {
  return (
    <section className="screen grid" aria-labelledby="hero-title">
      <Plate tone="orange" className={styles.plate}>
        <h1 id="hero-title" className="t-display">
          {hero.headline}
        </h1>
        <p className={`t-title ${styles.platforms}`}>{hero.platforms}</p>
        <div className={styles.ctas}>
          <ButtonLink href={serviceHref(healthCheck)} variant="charcoal" arrow>
            {hero.ctaHealthCheck}
          </ButtonLink>
          <ButtonLink href="/#services" variant="outline">
            {hero.ctaServices}
          </ButtonLink>
        </div>
        <Suspense fallback={<HeroVisualFrame visual="b" />}>
          <HeroVisual />
        </Suspense>
      </Plate>
    </section>
  );
}
