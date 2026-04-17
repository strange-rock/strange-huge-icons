import { motion } from "framer-motion";
import type { IconProps } from "../types";

export function CircleIcon({
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
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </motion.svg>
  );
}
