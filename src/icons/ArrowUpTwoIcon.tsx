import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import type { IconProps } from "../types";

export function ArrowUpTwoIcon({
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
        y: [0, -3, 0],
        transition: { duration: 0.35, ease: "easeInOut" },
      });
    } else {
      controls.stop();
      controls.set({ y: 0 });
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
      <path d="M12 5.5V19" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 11C18 11 13.5811 5.00001 12 5C10.4188 4.99999 6 11 6 11" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
}
