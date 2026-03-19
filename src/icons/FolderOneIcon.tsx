import { motion } from "framer-motion";
import { useState } from "react";
import type { IconProps } from "../types";

interface FolderOneIconProps extends IconProps {
  variant?: "closed" | "open";
}

// Colors are hardcoded per Figma: fill #F7F2ED, stroke #524B47.
// Both paths have identical SVG command structures — Framer Motion morphs d directly.
//
// 3-state interaction:
//   hover (while closed) → preview OPEN shape
//   unhover              → return to CLOSED
//   click                → commit toggle (CLOSED ↔ OPEN)

const CLOSED =
  "M6.75 4.75008H15.5C17.6067 4.75008 18.66 4.75008 19.4167 5.25567C19.7443 5.47455 20.0255 5.7558 20.2444 6.08337C20.75 6.84004 20.75 7.89338 20.75 10.0001C20.75 13.5113 20.75 15.2668 19.9073 16.528C19.5426 17.0739 19.0738 17.5427 18.5279 17.9074C17.2667 18.7501 15.5112 18.7501 12 18.7501H10.75C6.03595 18.7501 3.67893 18.7501 2.21447 17.2856C0.75 15.8212 0.75 13.4641 0.75 8.75008V5.69435C0.75 3.87788 0.750001 2.96964 1.13032 2.28814C1.40142 1.80235 1.80227 1.4015 2.28806 1.1304C2.96956 0.75008 3.8778 0.75008 5.69427 0.75008C6.85802 0.75008 7.4399 0.75008 7.94926 0.94109C9.1122 1.3772 9.5918 2.43366 10.1166 3.48321L10.75 4.75008";

const OPEN =
  "M5.55 3.86121H12.55C14.2354 3.86121 15.078 3.86121 15.6834 4.25445C15.9454 4.42469 16.1704 4.64344 16.3455 4.89821C16.75 5.48674 16.75 6.306 16.75 7.94454C16.75 10.6755 16.75 12.0409 16.0758 13.0218C15.7841 13.4464 15.409 13.811 14.9723 14.0947C13.9634 14.7501 12.559 14.7501 9.75 14.7501H8.75C4.97876 14.7501 3.09314 14.7501 1.92158 13.611C0.750001 12.4721 0.750001 10.6388 0.750001 6.97232V4.59564C0.750001 3.18283 0.750001 2.47642 1.05426 1.94637C1.27114 1.56853 1.59182 1.25676 1.98045 1.0459C2.52565 0.7501 3.25224 0.7501 4.70542 0.7501C5.63642 0.7501 6.10192 0.7501 6.50941 0.898663C7.43976 1.23786 7.82344 2.05955 8.24328 2.87587L8.75 3.86121";

export function FolderOneIcon({
  size = 24,
  animated: _animated,
  triggered: _triggered,
  onClick,
  variant,
  ...props
}: FolderOneIconProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const isOpen = variant !== undefined ? variant === "open" : internalOpen;
  // When closed: hover previews the open shape. When open: stays open regardless of hover.
  const targetD = isOpen ? OPEN : (hovered ? OPEN : CLOSED);

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (variant === undefined) setInternalOpen(o => !o);
    if (typeof onClick === "function") onClick(e as unknown as React.MouseEvent<SVGSVGElement>);
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
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <motion.path
        fill="#F7F2ED"
        stroke="#524B47"
        strokeWidth="1.5"
        strokeLinecap="round"
        animate={{ d: targetD }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      />
    </motion.svg>
  );
}
