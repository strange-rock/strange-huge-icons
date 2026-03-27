import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import type { IconProps } from "../types";

const T = { duration: 0.28, ease: [0.4, 0, 0.2, 1] as const };

export function SourceCodeSquareIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  onClick,
  ...props
}: IconProps) {
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== undefined ? triggered : (animated ? hovered : false);
  const left = useAnimation();
  const right = useAnimation();

  useEffect(() => {
    if (isActive) {
      left.start({ x: -2, transition: T });
      right.start({ x: 2, transition: T });
    } else {
      left.start({ x: 0, transition: T });
      right.start({ x: 0, transition: T });
    }
  }, [isActive]);

  const p = { stroke: color, strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={onClick}
      style={{ cursor: "pointer" }}
      {...props}
    >
      {/* square — static */}
      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" {...p} />
      {/* slash — static */}
      <path d="M13 9L11 15" {...p} />
      {/* left bracket < */}
      <motion.path d="M8 10L6.77346 11.0572C6.25782 11.5016 6 11.7239 6 12C6 12.2761 6.25782 12.4984 6.77346 12.9428L8 14" {...p} animate={left} />
      {/* right bracket > */}
      <motion.path d="M16 10L17.2265 11.0572C17.7422 11.5016 18 11.7239 18 12C18 12.2761 17.7422 12.4984 17.2265 12.9428L16 14" {...p} animate={right} />
    </motion.svg>
  );
}
