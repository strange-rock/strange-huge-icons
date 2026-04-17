import { motion } from "framer-motion";
import type { IconProps } from "../types";

export function ArrowRightThreeIcon({
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
      <path d="M20.0001 18L20.0001 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16.0001 11.9995L4.00012 11.9995" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.0002 8C12.0002 8 16.0001 10.946 16.0001 12C16.0001 13.0541 12.0001 16 12.0001 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
}
