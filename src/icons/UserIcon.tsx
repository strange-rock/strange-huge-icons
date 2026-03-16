import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import type { IconProps } from "../types";

export function UserIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}: IconProps) {
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== undefined ? triggered : (animated ? hovered : false);
  const headControls = useAnimation();

  useEffect(() => {
    if (isActive) {
      headControls.start({
        y: [0, -2.5, 0],
        transition: { duration: 0.35, ease: "easeInOut" },
      });
    } else {
      headControls.stop();
      headControls.set({ y: 0 });
    }
  }, [isActive]);

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
      {/* head — bounces up */}
      <motion.path
        d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ y: 0 }}
        animate={headControls}
      />
      {/* body — static */}
      <path
        d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
