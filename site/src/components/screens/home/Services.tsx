import { Plate } from "@/components/ui/Plate";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { servicesScreen } from "@/content/home";
import { healthCheck, services } from "@/content/services";

// H4: Pick where to start. Every service one click from the homepage
// (CLIENT_FEEDBACK #6), with the free Health Check as the one charcoal emphasis plate.
export function Services() {
  const rest = services.filter((s) => s !== healthCheck);
  return (
    <section id="services" className="screen grid" aria-labelledby="services-title">
      <Plate tone="grey" span={6} rise={0} className="flex items-end">
        <h2 id="services-title" className="t-display">
          {servicesScreen.headline}
        </h2>
      </Plate>
      <ServiceCard service={healthCheck} span={6} tone="charcoal" rise={1} />
      {rest.map((s, i) => (
        <ServiceCard key={s.slug} service={s} span={4} rise={2 + (i % 3)} />
      ))}
    </section>
  );
}
