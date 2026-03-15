import type { SVGMotionProps } from "framer-motion";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
  /** Icon size in px. Defaults to the value defined in Figma. */
  size?: number;
  /** Stroke/fill color. Defaults to currentColor (inherits from CSS). */
  color?: string;
  /** Enables hover-driven animation. False by default — icon is static unless
   *  this is set or `triggered` is provided. */
  animated?: boolean;
  /** External trigger for the animation. When provided, drives the animation
   *  directly from your app state — hover is ignored. */
  triggered?: boolean;
}
