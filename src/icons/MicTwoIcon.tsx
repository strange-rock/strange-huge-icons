import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import type { IconProps } from "../types";

const MIC =
  "M17 7V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7Z";

const STAND =
  "M20 11C20 15.4183 16.4183 19 12 19M12 19C7.58172 19 4 15.4183 4 11M12 19V22M12 22H15M12 22H9";

export function MicTwoIcon({
  size = 24,
  color = "currentColor",
  triggered,
  onClick,
  ...props
}: IconProps) {
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== undefined ? triggered : hovered;
  const controls = useAnimation();

  const handleHover = async (active: boolean) => {
    setHovered(active);
    if (active) {
      await controls.start({
        rotate: [-2, 2, -2, 2, -2, 2, 0],
        transition: { duration: 0.55, ease: "easeInOut", times: [0, 0.17, 0.33, 0.5, 0.67, 0.83, 1] },
      });
    } else {
      controls.stop();
      await controls.start({ rotate: 0, transition: { duration: 0.15 } });
    }
  };

  const pathProps = {
    stroke: color,
    strokeWidth: 1.5,
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
      animate={controls}
      {...props}
      onHoverStart={() => handleHover(true)}
      onHoverEnd={() => handleHover(false)}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : undefined, transformOrigin: "center bottom" }}
    >
      <path d={MIC} {...pathProps} />
      <path d={STAND} {...pathProps} />
    </motion.svg>
  );
}
