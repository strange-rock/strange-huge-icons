/** Geometry for one drawn element of an icon. */
export interface PathData {
  /** SVG path data. Circles/rects from the source are converted to paths. */
  d: string;
  /** Stroked with the icon color. Defaults to true. */
  stroke?: boolean;
  /** Filled with the icon color. Defaults to false (`fill="none"`). */
  fill?: boolean;
  /** Defaults to 1.5 — the stroke weight of the HugeIcons stroke-rounded set. */
  strokeWidth?: number;
  /** Defaults to "round". */
  strokeLinecap?: "butt" | "round" | "square";
  /** Defaults to "round". */
  strokeLinejoin?: "miter" | "round" | "bevel";
  strokeMiterlimit?: number;
  fillRule?: "nonzero" | "evenodd";
  clipRule?: "nonzero" | "evenodd";
  opacity?: number;
}

/** A full icon as data — everything needed to draw it, in any library. */
export interface IconData {
  paths: PathData[];
  /** Defaults to "0 0 24 24". */
  viewBox?: string;
  /** Rendered size when the caller doesn't pass one. Defaults to 24. */
  defaultSize?: number;
}

/** Path data for one library in one style, keyed by canonical icon name. */
export type IconPathSet = Record<string, IconData>;
