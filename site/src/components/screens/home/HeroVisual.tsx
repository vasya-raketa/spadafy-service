"use client";

import { useSearchParams } from "next/navigation";
import { Console } from "@/components/hero/Console";
import { HealthCheck } from "@/components/hero/HealthCheck";
import styles from "./Hero.module.css";

// Compare hero visuals with /?hero=a (console) and /?hero=b (health check, default).
// Read on the client so the homepage stays static (GitHub Pages export).
export function HeroVisual() {
  const visual = useSearchParams().get("hero") === "a" ? "a" : "b";
  return <HeroVisualFrame visual={visual} />;
}

export function HeroVisualFrame({ visual }: { visual: "a" | "b" }) {
  return (
    <div className={styles.visual} data-visual={visual}>
      {visual === "a" ? <Console /> : <HealthCheck />}
    </div>
  );
}
