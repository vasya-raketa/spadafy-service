"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Badge, Bar, Card, Check, Count, Stage, States, Window, type Act } from "@/stageshow/kit";
import "./console.css";

// The hero's one moving visual (stageshow, "what the system does", no cursor).
// A VDI operations console: a desktop pool slows down, a Spadafy health check
// finds why, the fix lands, logon time drops and the users come back.
// Two scenes on two platforms, each ending where the next begins: nothing rewinds.

const SAT_W = 264;
const GUTTER = 24;
const SIDEBAR = 180;

type Status = "ok" | "slow";
type Pool = { name: string; sessions: number; logon: number };
type Scene = { pool: number; logon: number; sessions: number; finding: string; fix: string };

const POOLS: Pool[] = [
  { name: "Omnissa Horizon", sessions: 1318, logon: 12 },
  { name: "Azure Virtual Desktop", sessions: 486, logon: 11 },
  { name: "Citrix", sessions: 312, logon: 14 },
];

const SCENES: Scene[] = [
  { pool: 0, logon: 41, sessions: 1204, finding: "Profile storage latency", fix: "Storage tier rebalanced" },
  { pool: 1, logon: 38, sessions: 402, finding: "Session host capacity", fix: "Autoscale schedule updated" },
];

type S = {
  status: Status[];
  logon: number[];
  sessions: number[];
  sat: { show: boolean; scene: number; resolved: boolean; done: number; pending: number };
};

const INITIAL: S = {
  status: POOLS.map(() => "ok"),
  logon: POOLS.map((p) => p.logon),
  sessions: POOLS.map((p) => p.sessions),
  sat: { show: false, scene: 0, resolved: false, done: 0, pending: -1 },
};

// The frame most people see (reduced motion, thumbnails): scene A, resolved.
const POSTER: S = { ...INITIAL, sat: { show: true, scene: 0, resolved: true, done: 3, pending: -1 } };

const at = <T,>(list: T[], i: number, v: T) => list.map((x, k) => (k === i ? v : x));

async function script(a: Act<S>) {
  await a.wait(1200);
  for (let sc = 0; sc < SCENES.length; sc++) {
    const { pool, logon, sessions } = SCENES[sc];
    a.mark(`scene-${sc}`);

    // The pool slows down: logon time climbs, some users drop off
    await a.set((s) => ({ status: at(s.status, pool, "slow"), logon: at(s.logon, pool, logon) }));
    await a.wait(500);
    await a.set((s) => ({ sessions: at(s.sessions, pool, sessions) }));
    await a.wait(1100);

    // The health check arrives with what it found
    await a.set({ sat: { show: true, scene: sc, resolved: false, done: 0, pending: -1 } });
    await a.wait(1100);

    // Three fixes go in, one after the other
    for (let i = 0; i < 3; i++) {
      await a.set((s) => ({ sat: { ...s.sat, pending: i } }));
      await a.wait(420);
      await a.set((s) => ({ sat: { ...s.sat, done: i + 1, pending: -1 } }));
      await a.wait(120);
    }
    await a.wait(300);

    // Payoff: logon time falls back, the pill turns healthy on itself, users return
    await a.set((s) => ({
      status: at(s.status, pool, "ok"),
      logon: at(s.logon, pool, POOLS[pool].logon),
      sat: { ...s.sat, resolved: true },
    }));
    await a.wait(600);
    await a.set((s) => ({ sessions: at(s.sessions, pool, POOLS[pool].sessions) }));
    await a.wait(2000);

    // The finding is closed and leaves; the console is back to its opening frame
    await a.set((s) => ({ sat: { ...s.sat, show: false } }));
    await a.wait(900);
  }
}

export function Console() {
  const slot = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);

  // The stage is as wide and tall as its grid slot, so the UI keeps its native
  // size at every desktop width: a wider screen shows more table, not bigger type.
  useLayoutEffect(() => {
    const el = slot.current;
    if (!el) return;
    const measure = () => setSize({ w: Math.round(el.clientWidth), h: Math.round(el.clientHeight) });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={slot} className="console-slot" aria-hidden="true">
      {size && size.w > 0 && (
        <Stage
          key={`${size.w}x${size.h}`}
          width={size.w}
          height={size.h}
          initial={INITIAL}
          poster={POSTER}
          script={script}
          className="look-spadafy"
        >
          {(s) => <Scene s={s} w={size.w} h={size.h} />}
        </Stage>
      )}
    </div>
  );
}

function Scene({ s, w, h }: { s: S; w: number; h: number }) {
  // Wide hero: the window sits centred across the plate at 1:1 and runs off the
  // bottom; the health check straddles its left edge over the sidebar.
  const width = Math.round(Math.min(1160, Math.max(900, w * 0.72)));
  const left = Math.round((w - width) / 2);
  const satLeft = left - SAT_W / 2;
  const scene = SCENES[s.sat.scene];

  return (
    <>
      <Window
        className="console-window"
        title="Desktop pools"
        sidebar={<Sidebar />}
        sidebarWidth={SIDEBAR}
        lights="grey"
        style={{ position: "absolute", left, top: 0, width, height: h + 80 }}
      >
        <div className="console-table">
          <div className="console-head">
            <span>Pool</span>
            <span>Sessions</span>
            <span>Logon time</span>
            <span>Status</span>
          </div>
          {POOLS.map((p, i) => (
            <div key={p.name} className="console-row" data-slow={s.status[i] === "slow" || undefined}>
              <span className="console-name">
                <span className="console-name__title">{p.name}</span>
                <Bar w={[64, 52, 72][i]} h={5} tone={3} />
              </span>
              <Count className="console-num" value={s.sessions[i]} duration={900} />
              <Count className="console-num" value={s.logon[i]} duration={700} format={(n) => `${Math.round(n)}s`} />
              <Badge tone={s.status[i] === "slow" ? "warning" : "success"} dot>
                <States
                  align="start"
                  value={s.status[i]}
                  states={{ ok: "Healthy", slow: "Slow logons" }}
                />
              </Badge>
            </div>
          ))}
          {fillers(h).map((bw, i) => (
            <div key={i} className="console-row console-row--filler" aria-hidden>
              <span className="console-name">
                <Bar w={bw * 1.6} h={6} tone={3} />
                <Bar w={bw} h={5} tone={2} />
              </span>
              <Bar w={32} h={6} tone={2} />
              <Bar w={24} h={6} tone={2} />
              <Bar w={56} h={14} r={7} tone={2} />
            </div>
          ))}
        </div>
      </Window>

      <div className="console-sat" data-show={s.sat.show || undefined} style={{ left: Math.max(GUTTER, satLeft), top: 72, width: SAT_W }}>
        <Card pad="medium" gap={12}>
          <div className="console-sat__head">
            <span className="console-strong">Health check</span>
            <Badge tone={s.sat.resolved ? "success" : "warning"}>
              <States align="end" value={s.sat.resolved ? "done" : "open"} states={{ open: "Finding", done: "Resolved" }} />
            </Badge>
          </div>
          <span className="console-finding">{scene.finding}</span>
          <div className="console-checks">
            {[0, 1, 2].map((i) => (
              <div key={i} className="console-check">
                <Check on={s.sat.done > i} pending={s.sat.pending === i} size={16} />
                {i === 0 ? <span className="console-fix">{scene.fix}</span> : <Bar w={[0, 120, 96][i]} h={6} tone={3} />}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

// Quiet rows under the real ones, enough to reach past the plate's bottom edge so
// the window never shows an empty band, whatever the screen height.
function fillers(h: number) {
  const rows = Math.max(2, Math.ceil((h + 80 - 52 - 40 - POOLS.length * 56) / 56));
  return Array.from({ length: rows }, (_, i) => [58, 70, 52, 64][i % 4]);
}

function Sidebar() {
  return (
    <div className="console-side">
      {[52, 68, 44, 60, 48].map((bw, i) => (
        <div key={i} className="console-nav" data-on={i === 1 || undefined}>
          <Bar w={12} h={12} r={3} tone={i === 1 ? 5 : 3} />
          <Bar w={bw} h={6} tone={i === 1 ? 5 : 3} />
        </div>
      ))}
    </div>
  );
}
