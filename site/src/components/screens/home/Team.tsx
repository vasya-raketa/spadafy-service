import { ButtonLink } from "@/components/ui/Button";
import { Plate } from "@/components/ui/Plate";
import { team } from "@/content/home";
import { TeamRail } from "./TeamRail";

// H6: Serious, not too serious. A neutral screen (between the green and pink
// families) with the twelve people in a row you can step through.
export function Team() {
  return (
    <section className="screen grid" aria-labelledby="team-title">
      <Plate tone="grey" rise={0}>
        <h2 id="team-title" className="t-display">
          {team.headline}
        </h2>
      </Plate>
      <TeamRail
        members={team.members}
        action={
          <ButtonLink href="/about" variant="outline" arrow>
            {team.button}
          </ButtonLink>
        }
      />
    </section>
  );
}
