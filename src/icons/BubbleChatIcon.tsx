import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import type { IconProps } from "../types";

const BUBBLE =
  "M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C10.3719 21.5 8.8394 21.0904 7.5 20.3687C5.63177 19.362 4.37462 20.2979 3.26592 20.4658C3.09774 20.4913 2.93024 20.4302 2.80997 20.31C2.62741 20.1274 2.59266 19.8451 2.6935 19.6074C3.12865 18.5818 3.5282 16.6382 2.98341 15C2.6698 14.057 2.5 13.0483 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z";

const DOT_L = "M8.009 12H8.01797";
const DOT_C = "M12.0045 12H12.0135";
const DOT_R = "M16 12H16.009";

const T_IN  = { duration: 0.22, ease: "easeOut" as const };
const T_OUT = { duration: 0.15, ease: "easeIn"  as const };

export function BubbleChatIcon({
  size = 24,
  color = "currentColor",
  triggered,
  onClick,
  ...props
}: IconProps) {
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== undefined ? triggered : hovered;

  const d1 = useAnimation();
  const d2 = useAnimation();
  const d3 = useAnimation();

  useEffect(() => {
    let cancelled = false;

    if (isActive) {
      d1.set({ opacity: 0 });
      d2.set({ opacity: 0 });
      d3.set({ opacity: 0 });

      const run = async () => {
        if (cancelled) return;
        await d1.start({ opacity: 1, transition: T_IN });
        if (cancelled) return;
        await d2.start({ opacity: 1, transition: T_IN });
        if (cancelled) return;
        await d3.start({ opacity: 1, transition: T_IN });
      };
      run();
    } else {
      d1.stop(); d1.set({ opacity: 1 });
      d2.stop(); d2.set({ opacity: 1 });
      d3.stop(); d3.set({ opacity: 1 });
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
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      {...props}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : undefined }}
    >
      <motion.path d={DOT_L} {...dotProps} animate={d1} />
      <motion.path d={DOT_C} {...dotProps} animate={d2} />
      <motion.path d={DOT_R} {...dotProps} animate={d3} />
      <path d={BUBBLE} stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </motion.svg>
  );
}
