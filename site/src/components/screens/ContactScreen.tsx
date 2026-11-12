import { ButtonLink } from "@/components/ui/Button";
import { Plate } from "@/components/ui/Plate";
import { contact } from "@/content/home";
import styles from "./ContactScreen.module.css";

// H8 (and the last screen of every page): Let's talk. Back on orange to close
// the page, centred as the one centred moment. Motion map v2: none, the final
// ask stays still. Body copy is ink on orange (5.7:1).
export function ContactScreen() {
  return (
    <section id="contact" className="screen grid" aria-labelledby="contact-title">
      <Plate tone="orange" className={styles.plate}>
        <h2 id="contact-title" className="t-display">
          {contact.headline}
        </h2>
        <p className={`t-title ${styles.body}`}>{contact.body}</p>
        <ButtonLink href={contact.href} variant="charcoal" arrow title="[PLACEHOLDER: contact destination]">
          {contact.button}
        </ButtonLink>
      </Plate>
    </section>
  );
}
