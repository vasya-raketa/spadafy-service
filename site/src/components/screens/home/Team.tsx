import { ButtonLink } from "@/components/ui/Button";
import { Rail } from "@/components/ui/Rail";
import { team } from "@/content/home";
import styles from "./Team.module.css";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .replace(/[^A-Z]/gi, "");

// H6: Serious, not too serious. A neutral screen between the green and pink
// families; the twelve people in a row to toggle left and right (copy.md).
export function Team() {
  return (
    <section className="screen grid" aria-labelledby="team-title">
      <Rail
        label="The Spadafy team"
        span={3}
        header={
          <h2 id="team-title" className="t-display">
            {team.headline}
          </h2>
        }
        footer={
          <div>
            <ButtonLink href="/about" variant="outline" arrow>
              {team.button}
            </ButtonLink>
          </div>
        }
      >
        {team.members.map((m) => (
          <figure key={m.name} className={styles.person}>
            <div className={`plate plate--grey placeholder ${styles.photo}`}>
              <span className="t-title" aria-hidden="true">
                {initials(m.name)}
              </span>
              <span className="t-small">[PLACEHOLDER: photo]</span>
            </div>
            <figcaption className={styles.caption}>
              <span className="t-body">{m.name}</span>
              <span className="t-small muted">{m.title}</span>
            </figcaption>
          </figure>
        ))}
      </Rail>
    </section>
  );
}
