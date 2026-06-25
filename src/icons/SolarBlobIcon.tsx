import { motion } from "framer-motion";
import type { IconProps } from "../types";

export function SolarBlobIcon({
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
      viewBox="0 0 21.5 21.5"
      fill="none"
      onClick={onClick}
      {...props}
    >
      <path
        d="M0 10.75C0 8.821 0.51 6.949 1.48 5.302C1.17 4.848 1 4.307 1 3.75C1 2.234 2.234 1 3.75 1C4.308 1 4.849 1.171 5.302 1.48C6.949 0.51 8.82 0 10.75 0C16.678 0 21.5 4.822 21.5 10.75C21.5 12.678 20.99 14.55 20.019 16.198C20.322 16.64 20.5 17.175 20.5 17.75C20.5 19.266 19.266 20.5 17.75 20.5C17.192 20.5 16.651 20.329 16.198 20.02C14.551 20.99 12.68 21.5 10.75 21.5C4.822 21.5 0 16.678 0 10.75Z"
        fill={color}
      />
    </motion.svg>
  );
}
