// The Spadafy S, used as supplied: refs/dark.svg on light and brand surfaces,
// symbol/Group 2087333476.svg on charcoal. Never recoloured or redrawn.
// Both files share the same 2.12:1 proportions.

export function Logo({ on = "light", height = 24 }: { on?: "light" | "dark"; height?: number }) {
  const src = on === "dark" ? "/logo/spadafy-light.svg" : "/logo/spadafy-dark.svg";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" width={Math.round(height * 2.121)} height={height} style={{ display: "block" }} />
  );
}
