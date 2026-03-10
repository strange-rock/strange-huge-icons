import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import type { IconProps } from "../types";

export function AtomOneIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}: IconProps) {
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== undefined ? triggered : (animated ? hovered : false);
  const controls = useAnimation();

  useEffect(() => {
    if (isActive) {
      controls.start({
        rotate: 45,
        transition: { duration: 0.22, ease: "easeOut" },
      });
    } else {
      controls.start({
        rotate: 0,
        transition: { duration: 0.35, ease: "easeOut" },
      });
    }
  }, [isActive]);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      animate={controls}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ cursor: "pointer", transformOrigin: "center" }}
      {...props}
    >
      {/* center circle — rotationally symmetric, appears fixed */}
      <path
        d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* orbital dots */}
      <path
        d="M22 9H21.99M2.00995 9H2M12.005 22H11.995"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* orbital arcs */}
      <path
        d="M7.55556 21C4.47364 19.4999 2.37683 16.5285 2 13.1273M16.4444 21C19.5264 19.4999 21.6232 16.5285 22 13.1273M5.55555 4.25658C9.23956 1.24781 14.5382 1.24781 18.2222 4.25658"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
