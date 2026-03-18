import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import type { IconProps } from "../types";

export function AbacusIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}: IconProps) {
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== undefined ? triggered : (animated ? hovered : false);

  const bead1 = useAnimation(); // top bead at x=12
  const bead2 = useAnimation(); // top bead at x=14.5
  const bead3 = useAnimation(); // bottom bead at x=9.5

  useEffect(() => {
    if (isActive) {
      bead1.start({ x: [0, -3, 0], transition: { duration: 0.38, ease: "easeOut" } });
      bead2.start({ x: [0, -3, 0], transition: { duration: 0.38, ease: "easeOut", delay: 0.07 } });
      bead3.start({ x: [0, 4, 0], transition: { duration: 0.38, ease: "easeOut", delay: 0.14 } });
    } else {
      bead1.stop(); bead1.set({ x: 0 });
      bead2.stop(); bead2.set({ x: 0 });
      bead3.stop(); bead3.set({ x: 0 });
    }
  }, [isActive]);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeLinejoin="round"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ cursor: "pointer" }}
      {...props}
    >
      {/* frame — static */}
      <path
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        stroke={color}
        strokeWidth="1.5"
      />
      {/* top rod segments — static */}
      <path d="M6 9H9.5M17 9H18" stroke={color} strokeWidth="1.5" />
      {/* bottom rod segments — static */}
      <path d="M18 15H12M7 15H6" stroke={color} strokeWidth="1.5" />
      {/* top bead 1 */}
      <motion.path
        d="M12 8V10"
        stroke={color}
        strokeWidth="1.5"
        initial={{ x: 0 }}
        animate={bead1}
      />
      {/* top bead 2 */}
      <motion.path
        d="M14.5 8V10"
        stroke={color}
        strokeWidth="1.5"
        initial={{ x: 0 }}
        animate={bead2}
      />
      {/* bottom bead */}
      <motion.path
        d="M9.5 14V16"
        stroke={color}
        strokeWidth="1.5"
        initial={{ x: 0 }}
        animate={bead3}
      />
    </motion.svg>
  );
}
