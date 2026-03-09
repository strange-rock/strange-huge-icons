import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useId } from "react";
import type { IconProps } from "../types";

const SLIDE = -4;

const FRAME_PATH =
  "M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91554C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91554C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z";

export interface SidebarLeftIconProps extends IconProps {
  /** Controls the hover animation style.
   *  "close" → sidebar content slides out left, signalling the panel will close.
   *  "open"  → sidebar content slides in from left, signalling the panel will open. */
  variant?: "close" | "open";
}

export function SidebarLeftIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  variant = "close",
  ...props
}: SidebarLeftIconProps) {
  const uid = useId();
  const clipId = `sh-sidebar-clip-${uid}`;
  const [hovered, setHovered] = useState(false);

  const isActive = triggered !== undefined ? triggered : (animated ? hovered : false);

  const divider = useAnimation();
  const line1 = useAnimation();
  const line2 = useAnimation();

  useEffect(() => {
    if (isActive) {
      if (variant === "close") {
        // Slide out to left, staggered forward
        divider.start({ x: SLIDE, transition: { duration: 0.2, ease: "easeIn", delay: 0 } });
        line1.start({   x: SLIDE, transition: { duration: 0.2, ease: "easeIn", delay: 0.04 } });
        line2.start({   x: SLIDE, transition: { duration: 0.2, ease: "easeIn", delay: 0.08 } });
      } else {
        // Slide in from left: snap to SLIDE then animate to 0, staggered
        divider.start({ x: [SLIDE, 0], transition: { duration: 0.25, ease: "easeOut", delay: 0 } });
        line1.start({   x: [SLIDE, 0], transition: { duration: 0.25, ease: "easeOut", delay: 0.05 } });
        line2.start({   x: [SLIDE, 0], transition: { duration: 0.25, ease: "easeOut", delay: 0.1 } });
      }
    } else {
      if (variant === "close") {
        // Slide back in from left, staggered reverse
        line2.start({   x: 0, transition: { duration: 0.25, ease: "easeOut", delay: 0 } });
        line1.start({   x: 0, transition: { duration: 0.25, ease: "easeOut", delay: 0.04 } });
        divider.start({ x: 0, transition: { duration: 0.25, ease: "easeOut", delay: 0.08 } });
      } else {
        // Snap back to rest
        divider.set({ x: 0 });
        line1.set({ x: 0 });
        line2.set({ x: 0 });
      }
    }
  }, [isActive, variant]);

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

      {/* Outer frame — static, never clipped */}
      <path
        d={FRAME_PATH}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Animated elements — clipped to frame */}
      <g clipPath={`url(#${clipId})`}>
        <motion.path
          d="M9.5 3V21"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ x: 0 }}
          animate={divider}
        />
        <motion.path
          d="M5 7H6"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ x: 0 }}
          animate={line1}
        />
        <motion.path
          d="M5 10H6"
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
