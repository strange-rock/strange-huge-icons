import { motion } from "framer-motion";
import type { IconProps } from "../types";

export function CancelOneIcon({
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
      <path d="M18 6L6.00081 17.9992M17.9992 18L6 6.00085" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
}
