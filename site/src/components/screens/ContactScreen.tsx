import { ButtonLink } from "@/components/ui/Button";
import { Plate, rise } from "@/components/ui/Plate";
import { contact } from "@/content/home";
import styles from "./ContactScreen.module.css";

// H8 (and the last screen of every other page): Let's talk. Content-sized,
// back on orange to close the page. Body copy is ink on orange (5.7:1).
export function ContactScreen() {
  return (
    <section id="contact" className="screen grid" aria-labelledby="contact-title">
      <Plate tone="orange" className={styles.plate}>
        <h2 id="contact-title" className="t-display" {...rise(0)}>
          {contact.headline}
        </h2>
        <div className={`grid ${styles.row}`} {...rise(1)}>
          <p className={`t-title ${styles.body}`}>{contact.body}</p>
          <div className={styles.cta}>
            <ButtonLink href={contact.href} variant="charcoal" arrow title="[PLACEHOLDER: contact destination]">
              {contact.button}
            </ButtonLink>
          </div>
        </div>
      </Plate>
    </section>
  );
}
