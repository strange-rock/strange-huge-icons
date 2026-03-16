import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import type { IconProps } from "../types";

export function SearchOneIcon({
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
        scale: [1, 0.88, 1.05, 1],
        transition: { duration: 0.32, ease: "easeOut" },
      });
    } else {
      controls.stop();
      controls.set({ scale: 1 });
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
      <path
        d="M17 17L21 21"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
