import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Check } from "lucide-react";
import { Arrow } from "@/components/ui/Button";
import { rise } from "@/components/ui/Plate";
import { serviceIcons } from "@/components/ui/ServiceIcon";
import { contact, hero } from "@/content/home";
import type { ServicePage as Page } from "@/content/servicePages";
import { healthCheck, serviceHref, type Service } from "@/content/services";
import { Copy } from "./Copy";
import { Examples } from "./Examples";
import { InquiryForm, inquiryFormId } from "./Inquiry";
import styles from "./ServicePage.module.css";

// The service page template, on the block structure of prototype v3
// (69pixels.github.io/spadafy/prototype-v3): rounded fill blocks on a dark canvas,
// 8px margin and gaps. A sticky hero carries the essence and the body blocks slide
// over it; detail follows as blocks; a three-block CTA row; the next service grows
// out of a card. One component per block, so blocks can be removed or reordered.
//
// Motion map: hero slide-over → (opening steps none) → pressures rise → break none → capabilities none →
// options rise → (process none) → technologies none → examples pager (reader-driven) → expect none →
// FAQs none → CTA rise → next stretch. No two neighbours share a mechanic.

function Icon({ icon: I, size = 24 }: { icon?: LucideIcon; size?: number }) {
  if (!I) return <span className={styles.iconSlot} aria-hidden="true" />;
  return (
    <I
      className={styles.icon}
      size={size}
      strokeWidth={1.5}
      absoluteStrokeWidth
      aria-hidden="true"
    />
  );
}

/** Hero: the essence and the first CTA, on a full-height media block that stays put. */
function Hero({ page, service }: { page: Page; service: Service }) {
  const Glyph = serviceIcons[service.slug];
  return (
    <section className={styles.hero} aria-labelledby="lead">
      <p className={`t-small ${styles.heroMediaLabel}`}>
        [IMAGE: service photo, full block, white text sits on it]
      </p>
      <div className={styles.heroText}>
        <p className={`t-small ${styles.eyebrow}`}>
          <Icon icon={Glyph} size={20} />
          {service.title}
        </p>
        <h1 id="lead" className="t-display">
          {page.lead}
        </h1>
        <p className="t-body">{page.essence}</p>
        <div className={styles.ctas}>
          <a href="#inquiry" className="btn btn--white">
            {page.cta}
            <Arrow />
          </a>
          {service.slug !== healthCheck.slug && (
            <Link href={serviceHref(healthCheck)} className={styles.textLink}>
              {hero.ctaHealthCheck}
              <Arrow />
            </Link>
          )}
        </div>
      </div>
      {page.technologies.items.length > 0 && (
        <ul className={styles.heroLogos} aria-label="Technologies">
          {page.technologies.items.map((t) => (
            <li key={t.name} className={styles.textLogo}>
              {t.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

/** Opening steps (Health Check): the homepage CTA row, right under the hero (v3 CTA row). No motion. */
function OpeningSteps({ page }: { page: Page }) {
  if (!page.openingSteps) return null;
  const { title, steps } = page.openingSteps;
  return (
    <section className={styles.ctaRow} aria-labelledby="opening-steps">
      <div
        className={`${styles.block} ${styles.blockAccent} ${styles.stepsTitle}`}
      >
        <h2 id="opening-steps" className="t-display">
          {title}
        </h2>
      </div>
      <ol className={`${styles.block} ${styles.stepsList}`}>
        {steps.map((s, i) => (
          <li key={i} className={styles.step}>
            <span className="t-title muted">{i + 1}.</span>
            <div className={styles.rowText}>
              {s.title && <h3 className="t-title">{s.title}</h3>}
              <Copy text={s.text} className="t-body muted" />
            </div>
          </li>
        ))}
      </ol>
      <a
        href="#inquiry"
        className={`${styles.block} ${styles.blockInverse} ${styles.ctaSend}`}
      >
        <ArrowUpRight
          className={styles.ctaArrow}
          size={48}
          strokeWidth={1.5}
          absoluteStrokeWidth
          aria-hidden="true"
        />
        <span className="t-title">{page.cta}</span>
      </a>
    </section>
  );
}

/** Pressures: split block (v3 green flags): title block + list block. Rows rise. */
function Pressures({ page }: { page: Page }) {
  return (
    <section className={styles.split} aria-labelledby="pressures">
      <div
        className={`${styles.block} ${styles.blockAccent} ${styles.splitTitle}`}
      >
        <h2 id="pressures" className="t-display">
          The challenge
        </h2>
      </div>
      <ul className={`${styles.block} ${styles.splitList}`}>
        {page.pressures.map((p, i) => (
          <li key={i} className={styles.pressure} {...rise(i)}>
            <Icon icon={p.icon} size={32} />
            <Copy text={p.text} className="t-title" />
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Break: text straight on the canvas (v3 "something you should know"). No motion. */
function Overview({ service }: { service: Service }) {
  return (
    <section className={styles.break} aria-labelledby="overview">
      <h2 id="overview" className={`t-small ${styles.breakLabel}`}>
        What it covers
      </h2>
      <p className="t-title">{service.description}</p>
    </section>
  );
}

/** Capabilities: one large panel (v3 services panel): text and list left, media right. */
function Capabilities({ page }: { page: Page }) {
  return (
    <section
      className={`${styles.block} ${styles.blockSoft} ${styles.panel}`}
      aria-labelledby="capabilities"
    >
      <div className={styles.panelText}>
        <h2 id="capabilities" className="t-display">
          {page.capabilities.title}
        </h2>
        <ul className={styles.panelList}>
          {page.capabilities.items.map((c, i) => (
            <li key={i} className={styles.panelItem}>
              <Icon icon={c.icon} />
              <div className={styles.rowText}>
                {c.title && <h3 className="t-title">{c.title}</h3>}
                <Copy text={c.text} className="t-body" />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.panelMedia}>
        <p className={`t-small ${styles.mediaLabel}`}>
          [IMAGE: product or people photo, 7 columns]
        </p>
        {page.technologies.items.length > 0 && (
          <ul className={styles.pills} aria-label="Technologies">
            {page.technologies.items.map((t) => (
              <li key={t.name}>
                <Check
                  size={16}
                  strokeWidth={1.5}
                  absoluteStrokeWidth
                  aria-hidden="true"
                />
                {t.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

/** Options: a row of blocks (v3 CTA row shape): title block + one block per option. Rise. */
function Options({ page }: { page: Page }) {
  if (!page.options) return null;
  return (
    <section className={styles.row3} aria-label="Service options">
      <div
        className={`${styles.block} ${styles.blockAccent} ${styles.rowTitle}`}
      >
        <Copy as="h2" text={page.options.title} className="t-display" />
      </div>
      {page.options.items.map((o, i) => (
        <article
          key={i}
          className={`${styles.block} ${styles.option}`}
          {...rise(i)}
        >
          <Icon icon={o.icon} size={32} />
          <Copy as="h3" text={o.title} className="t-title" />
          <Copy text={o.text} className="t-body" />
          <ul className={styles.bullets}>
            {o.bullets.map((b, j) => (
              <li key={j}>
                <Copy text={b} as="span" className="t-body" />
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

/** How it works (Health Check): numbered steps in a white block (v3 CTA steps). No motion. */
function Process({ page }: { page: Page }) {
  if (!page.process) return null;
  return (
    <section
      className={`${styles.block} ${styles.faqBlock}`}
      aria-labelledby="process"
    >
      <h2 id="process" className="t-display">
        {page.process.title}
      </h2>
      <ol className={styles.steps}>
        {page.process.steps.map((s, i) => (
          <li key={i} className={styles.step}>
            <span className="t-title muted">{i + 1}.</span>
            <div className={styles.rowText}>
              {s.title && <h3 className="t-title">{s.title}</h3>}
              <Copy text={s.text} className="t-body muted" />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Technologies: white block with a head row and a row of cards (v3 team block). No motion. */
function Technologies({ page }: { page: Page }) {
  const { title, intro, items, placeholder } = page.technologies;
  return (
    <section
      className={`${styles.block} ${styles.cardsBlock}`}
      aria-labelledby="technologies"
    >
      <div className={styles.cardsHead}>
        <h2 id="technologies" className="t-display">
          {title}
        </h2>
        {intro && <Copy text={intro} className="t-body muted" />}
      </div>
      {items.length > 0 && (
        <ul
          className={styles.cards}
          style={{ "--n": Math.max(items.length, 4) } as React.CSSProperties}
        >
          {items.map((t) => (
            <li key={t.name} className={styles.card}>
              <span className="t-small muted">{t.kind}</span>
              <div className={styles.cardFoot}>
                <span className={styles.textLogo}>{t.name}</span>
                <Copy text={t.note} className="t-body muted" />
              </div>
            </li>
          ))}
        </ul>
      )}
      {placeholder && <Copy text={placeholder} className="t-body" />}
    </section>
  );
}

/** Expect: a second break on the canvas, as a checklist. No motion. */
function Expect({ page }: { page: Page }) {
  return (
    <section
      className={`${styles.break} ${styles.expect}`}
      aria-labelledby="expect"
    >
      <h2 id="expect" className="t-display">
        {page.expect.title}
      </h2>
      <ul className={styles.checklist}>
        {page.expect.items.map((x, i) => (
          <li key={i} className={styles.checkRow}>
            <Check
              className={styles.iconInverse}
              size={24}
              strokeWidth={1.5}
              absoluteStrokeWidth
              aria-hidden="true"
            />
            <div className={styles.rowText}>
              {x.title && <h3 className="t-title">{x.title}</h3>}
              <Copy text={x.text} className="t-body" />
            </div>
          </li>
        ))}
      </ul>
      {page.expect.note && (
        <Copy
          text={page.expect.note}
          className={`t-small ${styles.breakLabel}`}
        />
      )}
    </section>
  );
}

/** FAQs: white block, title left, native disclosures right. Opened by the reader. */
function Faqs({ page }: { page: Page }) {
  if (!page.faqs) return null;
  return (
    <section
      className={`${styles.block} ${styles.faqBlock}`}
      aria-labelledby="faqs"
    >
      <h2 id="faqs" className="t-display">
        {page.faqs.title}
      </h2>
      <div className={styles.faqs}>
        {page.faqs.items.map((f, i) => (
          <details key={i} className={styles.faq}>
            <summary>
              <Copy text={f.q} as="span" className="t-title" />
              <span className={styles.plus} aria-hidden="true" />
            </summary>
            <Copy text={f.a} className="t-body muted" />
          </details>
        ))}
      </div>
    </section>
  );
}

/** CTA row (v3): headline block, form block, and the send block. Rises in as one. */
function Inquiry({ page, service }: { page: Page; service: Service }) {
  return (
    <section
      id="inquiry"
      className={styles.ctaRow}
      aria-labelledby="inquiry-title"
      {...rise(0)}
    >
      <div
        className={`${styles.block} ${styles.blockInverse} ${styles.ctaHead}`}
      >
        <p className={`t-small ${styles.breakLabel}`}>{service.title}</p>
        <h2 id="inquiry-title" className="t-display">
          {page.ctaHeadline ?? page.cta}
        </h2>
        <p className="t-body">{contact.body}</p>
      </div>
      <div className={`${styles.block} ${styles.ctaForm}`}>
        <InquiryForm slug={service.slug} />
      </div>
      <button
        type="submit"
        form={inquiryFormId}
        className={`${styles.block} ${styles.blockAccent} ${styles.ctaSend}`}
      >
        <ArrowUpRight
          className={styles.ctaArrow}
          size={48}
          strokeWidth={1.5}
          absoluteStrokeWidth
          aria-hidden="true"
        />
        <span className="t-title">{contact.button}</span>
      </button>
    </section>
  );
}

/** Next service (v3 "fall into the next page"): a card that stretches to the full block.
    Only the fill is clipped, so the title stays readable while the card is small. */
function NextService({ next }: { next: Service }) {
  return (
    <section className={styles.nextTrack} aria-label="Next service">
      <div className={styles.nextStage}>
        <Link href={serviceHref(next)} className={styles.nextCard}>
          <span className={styles.nextFill}>
            <span className={`t-small ${styles.nextMedia}`}>
              [IMAGE: {next.title} photo]
            </span>
          </span>
          <span className={`t-small ${styles.nextLabel}`}>Next service</span>
          <span className={`t-display ${styles.nextTitle}`}>{next.title}</span>
        </Link>
      </div>
    </section>
  );
}

export function ServicePage({
  page,
  service,
  next,
}: {
  page: Page;
  service: Service;
  next: Service;
}) {
  return (
    <>
      <Hero page={page} service={service} />
      <div className={styles.body}>
        <OpeningSteps page={page} />
        <Pressures page={page} />
        <Overview service={service} />
        <Capabilities page={page} />
        <Options page={page} />
        <Process page={page} />
        <Technologies page={page} />
        <Examples title={page.examples.title} items={page.examples.items} />
        <Expect page={page} />
        <Faqs page={page} />
        <Inquiry page={page} service={service} />
        <NextService next={next} />
      </div>
    </>
  );
}
