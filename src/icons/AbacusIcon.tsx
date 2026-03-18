import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import type { IconProps } from "../types";

// Top row: beads at x=12, x=14.5 — slide LEFT by 3
//   left rod  M6 9H9.5  → right endpoint: 9.5 → 6.5
//   right rod M17 9H18  → left endpoint:  17  → 14
// Bottom row: bead at x=9.5 — slides RIGHT by 4
//   left rod  M7 15H6   → right endpoint: 7   → 11
//   right rod M18 15H12 → left endpoint:  12  → 16

const T = 0.38;
const EASE = "easeOut";

const TOP_LEFT_ROD_BASE  = "M6 9H9.5";
const TOP_LEFT_ROD_PEAK  = "M6 9H6.5";
const TOP_RIGHT_ROD_BASE = "M17 9H18";
const TOP_RIGHT_ROD_PEAK = "M14 9H18";
const BOT_LEFT_ROD_BASE  = "M7 15H6";
const BOT_LEFT_ROD_PEAK  = "M11 15H6";
const BOT_RIGHT_ROD_BASE = "M18 15H12";
const BOT_RIGHT_ROD_PEAK = "M18 15H16";

export function AbacusIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}: IconProps) {
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== undefined ? triggered : (animated ? hovered : false);

  const bead1        = useAnimation();
  const bead2        = useAnimation();
  const bead3        = useAnimation();
  const topLeftRod   = useAnimation();
  const topRightRod  = useAnimation();
  const botLeftRod   = useAnimation();
  const botRightRod  = useAnimation();

  useEffect(() => {
    if (isActive) {
      // beads bounce and return
      bead1.start({ x: [0, -3, 0], transition: { duration: T, ease: EASE } });
      bead2.start({ x: [0, -3, 0], transition: { duration: T, ease: EASE, delay: 0.07 } });
      bead3.start({ x: [0,  4, 0], transition: { duration: T, ease: EASE, delay: 0.14 } });
      // rods mirror the bead movement
      topLeftRod.start({ d: [TOP_LEFT_ROD_BASE, TOP_LEFT_ROD_PEAK, TOP_LEFT_ROD_BASE],   transition: { duration: T, ease: EASE } });
      topRightRod.start({ d: [TOP_RIGHT_ROD_BASE, TOP_RIGHT_ROD_PEAK, TOP_RIGHT_ROD_BASE], transition: { duration: T, ease: EASE } });
      botLeftRod.start({ d: [BOT_LEFT_ROD_BASE, BOT_LEFT_ROD_PEAK, BOT_LEFT_ROD_BASE],   transition: { duration: T, ease: EASE, delay: 0.14 } });
      botRightRod.start({ d: [BOT_RIGHT_ROD_BASE, BOT_RIGHT_ROD_PEAK, BOT_RIGHT_ROD_BASE], transition: { duration: T, ease: EASE, delay: 0.14 } });
    } else {
      bead1.stop();      bead1.set({ x: 0 });
      bead2.stop();      bead2.set({ x: 0 });
      bead3.stop();      bead3.set({ x: 0 });
      topLeftRod.stop();  topLeftRod.set({ d: TOP_LEFT_ROD_BASE });
      topRightRod.stop(); topRightRod.set({ d: TOP_RIGHT_ROD_BASE });
      botLeftRod.stop();  botLeftRod.set({ d: BOT_LEFT_ROD_BASE });
      botRightRod.stop(); botRightRod.set({ d: BOT_RIGHT_ROD_BASE });
    }
  }, [isActive]);

  const sharedStroke = {
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ cursor: "pointer" }}
      {...props}
    >
      {/* frame — static */}
      <path
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        {...sharedStroke}
      />
      {/* top rod — left segment */}
      <motion.path {...sharedStroke} d={TOP_LEFT_ROD_BASE} animate={topLeftRod} />
      {/* top rod — right segment */}
      <motion.path {...sharedStroke} d={TOP_RIGHT_ROD_BASE} animate={topRightRod} />
      {/* bottom rod — left segment */}
      <motion.path {...sharedStroke} d={BOT_LEFT_ROD_BASE} animate={botLeftRod} />
      {/* bottom rod — right segment */}
      <motion.path {...sharedStroke} d={BOT_RIGHT_ROD_BASE} animate={botRightRod} />
      {/* top bead 1 */}
      <motion.path {...sharedStroke} d="M12 8V10" initial={{ x: 0 }} animate={bead1} />
      {/* top bead 2 */}
      <motion.path {...sharedStroke} d="M14.5 8V10" initial={{ x: 0 }} animate={bead2} />
      {/* bottom bead */}
      <motion.path {...sharedStroke} d="M9.5 14V16" initial={{ x: 0 }} animate={bead3} />
    </motion.svg>
  );
}
