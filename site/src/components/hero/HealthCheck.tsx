"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Badge, Bar, Card, Check, Stage, States, type Act } from "@/stageshow/kit";
import "./console.css";
import "./health-check.css";

// Hero B (stageshow, "what the system does", no cursor). One object, one story:
// the Free VDI Health Check runs on an environment. Four checks resolve in turn,
// then the findings arrive. Calmer than Hero A: one card, real words only from
// copy.md Screen 7, lots of air on an orange-mist stage.

const CHECKS = ["Platform health", "Configuration", "Performance", "Capacity"];
const W = 640;
const FILLER = [180, 140, 200, 160, 120, 190, 150];

type S = { done: number; pending: number; findings: boolean };

const INITIAL: S = { done: 0, pending: -1, findings: false };
// The frame most people see (reduced motion, thumbnails): every check done, findings in.
const POSTER: S = { done: CHECKS.length, pending: -1, findings: true };

async function script(a: Act<S>) {
  await a.wait(1000);
  for (let i = 0; i < CHECKS.length; i++) {
    await a.set({ pending: i });
    await a.wait(700);
    await a.set({ done: i + 1, pending: -1 });
    await a.wait(900);
  }
  await a.set({ findings: true });
  await a.wait(2400);

  // Reset in place as one quick reverse stagger, last change first: a re-run.
  await a.set({ findings: false });
  await a.wait(300);
  for (let i = CHECKS.length - 1; i >= 0; i--) {
    await a.set({ done: i });
    await a.wait(70);
  }
  await a.wait(700);
}

export function HealthCheck() {
  const slot = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);

  // The stage is as tall as the plate leaves it, so the card always runs off the
  // bottom edge (never floats) at every desktop height.
  useLayoutEffect(() => {
    const el = slot.current;
    if (!el) return;
    const measure = () => setH(Math.round(el.clientHeight - parseFloat(getComputedStyle(el).paddingTop)));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={slot} className="hc-slot" aria-hidden="true">
      {h > 0 && (
        <Stage key={h} width={W} height={h} initial={INITIAL} poster={POSTER} script={script} className="look-spadafy hc-stage">
          {(s) => <HealthCard s={s} />}
        </Stage>
      )}
    </div>
  );
}

function HealthCard({ s }: { s: S }) {
  return (
    <div className="hc-card">
      <Card pad="large" gap={0}>
        <div className="hc-head">
          <span className="hc-title">Free VDI Health Check</span>
          {/* The payoff lands on the progress itself: the dots become the findings. */}
          <States
            align="end"
            value={s.findings ? "found" : "running"}
            states={{
              running: (
                <span className="hc-dots">
                  {CHECKS.map((c, i) => (
                    <span key={c} className="hc-dot" data-on={s.done > i || undefined} />
                  ))}
                </span>
              ),
              found: (
                <Badge tone="success" dot>
                  Prioritized findings
                </Badge>
              ),
            }}
          />
        </div>
        <div className="hc-rows">
          {CHECKS.map((c, i) => (
            <div key={c} className="hc-row" data-on={s.done > i || undefined}>
              <Check on={s.done > i} pending={s.pending === i} size={20} />
              <span>{c}</span>
            </div>
          ))}
          {/* Quiet rows past the plate's bottom edge, so the card runs off it
              instead of floating with air on four sides. */}
          {FILLER.map((w) => (
            <div key={w} className="hc-row" aria-hidden>
              <Bar w={20} h={20} r={10} tone={2} />
              <Bar w={w} h={6} tone={2} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
