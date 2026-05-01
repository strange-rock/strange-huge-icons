import { motion } from "framer-motion";
import type { IconProps } from "../types";

export function TickTwoAnimatedIcon({
  size = 24,
  color = "currentColor",
  animated,
  triggered,
  onClick,
  ...props
}: IconProps) {
  const useTrigger = triggered !== undefined;
  const isOn = useTrigger ? triggered : false;

  const drawTransition = { duration: 0.08, ease: "easeOut" } as const;
  const eraseTransition = { duration: 0.04, ease: "easeIn" } as const;

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      initial="off"
      animate={useTrigger ? (isOn ? "on" : "off") : undefined}
      whileHover={!useTrigger && animated ? "on" : undefined}
      {...props}
    >
      <motion.path
        d="M5 14L8.5 17.5L19 6.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          off: { pathLength: 0, transition: eraseTransition },
          on: { pathLength: 1, transition: drawTransition },
        }}
      />
    </motion.svg>
  );
}
