import type { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** Icon size in px. Defaults to the value defined in Figma. */
  size?: number;
  /** Stroke/fill color. Defaults to currentColor (inherits from CSS). */
  color?: string;
  /** Whether to trigger the tap animation. */
  animate?: boolean;
}
