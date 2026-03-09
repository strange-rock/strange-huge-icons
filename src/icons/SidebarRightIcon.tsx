import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useId } from "react";
import type { IconProps } from "../types";

const SLIDE = 4;

const FRAME_PATH =
  "M2 12C2 8.3109 2 6.46633 2.81382 5.1588C3.1149 4.67505 3.48891 4.2543 3.91891 3.91557C5.08116 3.00003 6.72077 3.00003 10 3.00003H14C17.2792 3.00003 18.9188 3.00003 20.0811 3.91557C20.5111 4.2543 20.8851 4.67505 21.1862 5.1588C22 6.46633 22 8.3109 22 12C22 15.6892 22 17.5337 21.1862 18.8413C20.8851 19.325 20.5111 19.7458 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7458 3.1149 19.325 2.81382 18.8413C2 17.5337 2 15.6892 2 12Z";

export interface SidebarRightIconProps extends IconProps {
  /** Controls the hover animation style.
   *  "slide-out" → elements slide out to the right on hover, return on exit.
   *  "slide-in"  → elements slide in from the right on hover, reset on exit. */
  variant?: "slide-out" | "slide-in";
}

export function SidebarRightIcon({
  size = 24,
  color = "currentColor",
  animate: _animate = false,
  variant = "slide-out",
  ...props
}: SidebarRightIconProps) {
  const uid = useId();
  const clipId = `sh-sidebar-right-clip-${uid}`;
  const [hovered, setHovered] = useState(false);

  const divider = useAnimation();
  const line1 = useAnimation();
  const line2 = useAnimation();

  useEffect(() => {
    if (hovered) {
      if (variant === "slide-out") {
        // Slide out to the right, staggered forward
        divider.start({ x: SLIDE,        transition: { duration: 0.2, ease: "easeIn", delay: 0 } });
        line1.start({   x: SLIDE,        transition: { duration: 0.2, ease: "easeIn", delay: 0.04 } });
        line2.start({   x: SLIDE,        transition: { duration: 0.2, ease: "easeIn", delay: 0.08 } });
      } else {
        // Slide in from the right: snap to +SLIDE then animate to 0, staggered
        divider.start({ x: [SLIDE, 0],   transition: { duration: 0.25, ease: "easeOut", delay: 0 } });
        line1.start({   x: [SLIDE, 0],   transition: { duration: 0.25, ease: "easeOut", delay: 0.05 } });
        line2.start({   x: [SLIDE, 0],   transition: { duration: 0.25, ease: "easeOut", delay: 0.1 } });
      }
    } else {
      if (variant === "slide-out") {
        // Return from the right, staggered reverse
        line2.start({   x: 0,            transition: { duration: 0.25, ease: "easeOut", delay: 0 } });
        line1.start({   x: 0,            transition: { duration: 0.25, ease: "easeOut", delay: 0.04 } });
        divider.start({ x: 0,            transition: { duration: 0.25, ease: "easeOut", delay: 0.08 } });
      } else {
        divider.set({ x: 0 });
        line1.set({ x: 0 });
        line2.set({ x: 0 });
      }
    }
  }, [hovered, variant]);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ cursor: "pointer" }}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d={FRAME_PATH} />
        </clipPath>
      </defs>

      {/* Outer frame — static */}
      <path
        d={FRAME_PATH}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Animated elements — clipped to frame */}
      <g clipPath={`url(#${clipId})`}>
        <motion.path
          d="M14.5 3.00003V21"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ x: 0 }}
          animate={divider}
        />
        <motion.path
          d="M18 7.00006H19"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ x: 0 }}
          animate={line1}
        />
        <motion.path
          d="M18 10.0001H19"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ x: 0 }}
          animate={line2}
        />
      </g>
    </motion.svg>
  );
}
