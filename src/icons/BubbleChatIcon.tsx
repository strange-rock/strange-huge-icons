import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import type { IconProps } from "../types";

const BUBBLE =
  "M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C10.3719 21.5 8.8394 21.0904 7.5 20.3687C5.63177 19.362 4.37462 20.2979 3.26592 20.4658C3.09774 20.4913 2.93024 20.4302 2.80997 20.31C2.62741 20.1274 2.59266 19.8451 2.6935 19.6074C3.12865 18.5818 3.5282 16.6382 2.98341 15C2.6698 14.057 2.5 13.0483 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z";

const DOT_L = "M8.009 12H8.01797";
const DOT_C = "M12.0045 12H12.0135";
const DOT_R = "M16 12H16.009";

const T_UP   = { duration: 0.18, ease: "easeOut" as const };
const T_DOWN = { duration: 0.18, ease: "easeIn"  as const };

export function BubbleChatIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  onClick,
  ...props
}: IconProps) {
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== undefined ? triggered : (animated ? hovered : false);

  const d1 = useAnimation();
  const d2 = useAnimation();
  const d3 = useAnimation();

  useEffect(() => {
    let cancelled = false;

    if (isActive) {
      const run = async () => {
        while (!cancelled) {
          await d1.start({ y: -2.5, transition: T_UP });
          await d1.start({ y:    0, transition: T_DOWN });
          await d2.start({ y: -2.5, transition: T_UP });
          await d2.start({ y:    0, transition: T_DOWN });
          await d3.start({ y: -2.5, transition: T_UP });
          await d3.start({ y:    0, transition: T_DOWN });
          // brief pause before next cycle
          await new Promise<void>(r => setTimeout(r, 120));
        }
      };
      run();
    } else {
      d1.stop(); d1.set({ y: 0 });
      d2.stop(); d2.set({ y: 0 });
      d3.stop(); d3.set({ y: 0 });
    }

    return () => { cancelled = true; };
  }, [isActive]);

  const dotProps = {
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    fill: "none",
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : undefined }}
    >
      <path d={BUBBLE} stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <motion.path d={DOT_L} {...dotProps} animate={d1} />
      <motion.path d={DOT_C} {...dotProps} animate={d2} />
      <motion.path d={DOT_R} {...dotProps} animate={d3} />
    </motion.svg>
  );
}
