import type { Metadata } from "next";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { services } from "@/content/services";

// Review sheet for the service icons (not linked from the site).
export const metadata: Metadata = { title: "Spadafy icon sheet", robots: { index: false } };

const surfaces = ["paper", "grey", "orange", "green", "pink", "charcoal"] as const;

export default function IconSheet() {
  return (
    <main className="page" style={{ paddingTop: "var(--s-4)" }}>
      <div className="plate plate--grey" style={{ display: "grid", gap: "var(--s-4)" }}>
        <p className="t-small">Service icons · Lucide · 32px · stroke 1.5 · 64px hairline ring</p>
        <div className="grid" style={{ rowGap: "var(--s-4)" }}>
          {services.map((s) => (
            <div key={s.slug} style={{ gridColumn: "span 3 / span 3", display: "grid", gap: "var(--s-2)", justifyItems: "start" }}>
              <ServiceIcon slug={s.slug} />
              <p className="t-title">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid">
        {surfaces.map((tone) => (
          <div
            key={tone}
            className={`plate ${tone === "paper" ? "" : `plate--${tone}`}`}
            style={{ gridColumn: "span 2 / span 2", display: "grid", gap: "var(--s-2)", ...(tone === "paper" ? { boxShadow: "inset 0 0 0 1px var(--grey-300)" } : {}) }}
          >
            <p className="t-small">{tone}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--s-1)" }}>
              {services.map((s) => (
                <ServiceIcon key={s.slug} slug={s.slug} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
