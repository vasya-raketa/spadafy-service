import type { CSSProperties, HTMLAttributes } from "react";

export type PlateTone =
  | "orange"
  | "pink"
  | "green"
  | "orange-mist"
  | "pink-mist"
  | "mint-haze"
  | "grey"
  | "charcoal";

type PlateProps = HTMLAttributes<HTMLElement> & {
  as?: "div" | "article" | "li" | "figure" | "blockquote";
  tone: PlateTone;
  /** Whole grid columns, 1–12. Plates never sit off the grid. */
  span?: number;
  /** Reading-order index for the rise stagger. Leave out to skip the rise. */
  rise?: number;
  flush?: boolean;
};

export function Plate({ as: Tag = "div", tone, span = 12, rise, flush, className = "", style, ...rest }: PlateProps) {
  return (
    <Tag
      {...rest}
      {...(rise !== undefined ? { "data-rise": "" } : {})}
      className={`plate plate--${tone}${flush ? " plate--flush" : ""} ${className}`}
      style={{ gridColumn: `span ${span} / span ${span}`, ...riseStyle(rise), ...style }}
    />
  );
}

export function riseStyle(i?: number) {
  return i === undefined ? undefined : ({ "--rise-i": i } as CSSProperties);
}

/** Spread on any element that should rise in on entry: `<p {...rise(1)}>` */
export function rise(i: number) {
  return { "data-rise": "", style: riseStyle(i) };
}
