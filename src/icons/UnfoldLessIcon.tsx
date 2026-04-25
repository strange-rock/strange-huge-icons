import { motion } from "framer-motion";
import type { IconProps } from "../types";

export function UnfoldLessIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}: IconProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      {...props}
    >
      <path
        d="M18 19C18 19 13.5811 14 12 14C10.4188 14 6 19 6 19"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 5.00004C18 5.00004 13.5811 9.99999 12 10C10.4188 10 6 5 6 5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
