import { Rail } from "@/components/ui/Rail";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { servicesScreen } from "@/content/home";
import { healthCheck, services } from "@/content/services";

// H4: Pick where to start. Seven parallel choices, so a horizontal rail to browse
// (motion map v2: horizontal scroll) rather than a dense grid. The free Health
// Check is the one charcoal emphasis plate.
export function Services() {
  return (
    <section id="services" className="screen grid" aria-labelledby="services-title">
      <Rail
        label="Services"
        span={4}
        header={
          <h2 id="services-title" className="t-display">
            {servicesScreen.headline}
          </h2>
        }
      >
        {services.map((s) => (
          <ServiceCard key={s.slug} service={s} tone={s === healthCheck ? "charcoal" : "grey"} />
        ))}
      </Rail>
    </section>
  );
}
