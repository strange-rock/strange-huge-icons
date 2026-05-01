import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { IconProps } from "../types";

export function TickTwoIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  onClick,
  ...props
}: IconProps) {
  const [clicked, setClicked] = useState(false);
  const isInteractive = animated || triggered !== undefined;
  const isActive = triggered !== undefined ? triggered : animated ? clicked : false;
  const controls = useAnimation();
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!isInteractive) return;
    if (!hasMounted.current) {
      controls.set({ pathLength: isActive ? 1 : 0 });
      hasMounted.current = true;
      return;
    }
    if (isActive) {
      controls.set({ pathLength: 0 });
      controls.start({
        pathLength: 1,
        transition: { duration: 0.08, ease: "easeOut" },
      });
    } else {
      controls.start({
        pathLength: 0,
        transition: { duration: 0.04, ease: "easeIn" },
      });
    }
  }, [isActive, isInteractive]);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onClick={(e) => {
        if (animated && triggered === undefined) setClicked((c) => !c);
        if (typeof onClick === "function") onClick(e);
      }}
      style={isInteractive ? { cursor: "pointer" } : undefined}
      {...props}
    >
      <motion.path
        d="M5 14L8.5 17.5L19 6.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={isInteractive ? controls : undefined}
      />
    </motion.svg>
  );
}
