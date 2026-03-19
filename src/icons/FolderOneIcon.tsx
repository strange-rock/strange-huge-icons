import { motion } from "framer-motion";
import { useState } from "react";
import type { IconProps } from "../types";

interface FolderOneIconProps extends IconProps {
  variant?: "closed" | "open";
}

// ── Paths (in each layer's own viewBox coordinate space) ──────────────────────
// Each group has an SVG transform that maps from path coords → 24×24 frame.
// vectorEffect="non-scaling-stroke" keeps stroke at 1.5px regardless of scale.

// Closed BG  · viewBox 21.5×19.5 · inset(-1, -0.9)  → transform: translate(-0.9,-1) scale(1.2,1.333)
const CLOSED_BG =
  "M6.75 4.75008H15.5C17.6067 4.75008 18.66 4.75008 19.4167 5.25567C19.7443 5.47455 20.0255 5.7558 20.2444 6.08337C20.75 6.84004 20.75 7.89338 20.75 10.0001C20.75 13.5113 20.75 15.2668 19.9073 16.528C19.5426 17.0739 19.0738 17.5427 18.5279 17.9074C17.2667 18.7501 15.5112 18.7501 12 18.7501H10.75C6.03595 18.7501 3.67893 18.7501 2.21447 17.2856C0.75 15.8212 0.75 13.4641 0.75 8.75008V5.69435C0.75 3.87788 0.750001 2.96964 1.13032 2.28814C1.40142 1.80235 1.80227 1.4015 2.28806 1.1304C2.96956 0.75008 3.8778 0.75008 5.69427 0.75008C6.85802 0.75008 7.4399 0.75008 7.94926 0.94109C9.1122 1.3772 9.5918 2.43366 10.1166 3.48321L10.75 4.75008";

// Closed FG  · viewBox 32×32 · inset(0)             → transform: scale(0.75,0.75)  opacity 0 in closed
const CLOSED_FG =
  "M0.360642 5.85032C-0.0149774 3.21384 -0.202787 1.8956 0.330842 1.00226C0.366422 0.942761 0.404052 0.88522 0.443612 0.82978C1.03686 0 2.08674 0 4.1865 0H15.8135C17.9133 0 18.9631 0 19.5564 0.82978C19.5959 0.88522 19.6336 0.942761 19.6692 1.00226C20.2028 1.8956 20.015 3.21384 19.6394 5.85032C19.0993 9.6411 18.8292 11.5366 17.8109 12.7009C17.7414 12.7803 17.6698 12.8566 17.5961 12.9296C16.5163 14 15.0068 14 11.9876 14H8.01239C4.99323 14 3.48367 14 2.40387 12.9296C2.33022 12.8566 2.2586 12.7803 2.18914 12.7009C1.17075 11.5366 0.900721 9.6411 0.360642 5.85032Z";

// Open/Hover BG · viewBox 17.5×15.5 · inset(-1.29,-1.13) → transform: translate(-1.13,-1.29) scale(1.501,1.714)
const OPEN_BG =
  "M5.55 3.86121H12.55C14.2354 3.86121 15.078 3.86121 15.6834 4.25445C15.9454 4.42469 16.1704 4.64344 16.3455 4.89821C16.75 5.48674 16.75 6.306 16.75 7.94454C16.75 10.6755 16.75 12.0409 16.0758 13.0218C15.7841 13.4464 15.409 13.811 14.9723 14.0947C13.9634 14.7501 12.559 14.7501 9.75 14.7501H8.75C4.97876 14.7501 3.09314 14.7501 1.92158 13.611C0.750001 12.4721 0.750001 10.6388 0.750001 6.97232V4.59564C0.750001 3.18283 0.750001 2.47642 1.05426 1.94637C1.27114 1.56853 1.59182 1.25676 1.98045 1.0459C2.52565 0.7501 3.25224 0.7501 4.70542 0.7501C5.63642 0.7501 6.10192 0.7501 6.50941 0.898663C7.43976 1.23786 7.82344 2.05955 8.24328 2.87587L8.75 3.86121";

// Hover FG · viewBox 19.5×13.5 · inset(-1.5,-1)     → transform: translate(-1,-1.5) scale(1.333,2.0)
const HOVER_FG =
  "M1.0746 5.76456C0.736547 3.50472 0.567518 2.37481 1.04778 1.60909C1.07981 1.55809 1.11367 1.50876 1.14928 1.46124C1.6832 0.750005 2.62809 0.750005 4.51787 0.750005H14.9822C16.872 0.750005 17.8168 0.750005 18.3508 1.46124C18.3863 1.50876 18.4202 1.55809 18.4523 1.60909C18.9325 2.37481 18.7635 3.50472 18.4255 5.76456C17.9394 9.0138 17.6963 10.6385 16.7798 11.6365C16.7173 11.7046 16.6528 11.77 16.5865 11.8325C15.6147 12.75 14.2561 12.75 11.5389 12.75H7.96118C5.24393 12.75 3.88533 12.75 2.91351 11.8325C2.84722 11.77 2.78277 11.7046 2.72025 11.6365C1.8037 10.6385 1.56068 9.0138 1.0746 5.76456Z";

// Open FG  · viewBox 21.5×11.5 · inset(-1.8,-0.9)   → transform: translate(-0.9,-1.8) scale(1.2,2.4)
const OPEN_FG =
  "M1.1106 4.9288C0.734982 3.0456 0.547172 2.104 1.0808 1.4659C1.11638 1.4234 1.15401 1.3823 1.19357 1.3427C1.78682 0.750001 2.8367 0.750001 4.93646 0.750001H16.5635C18.6633 0.750001 19.7131 0.750001 20.3064 1.3427C20.3459 1.3823 20.3836 1.4234 20.4192 1.4659C20.9528 2.104 20.765 3.0456 20.3894 4.9288C19.8493 7.6365 19.5792 8.9904 18.5609 9.8221C18.4914 9.8788 18.4198 9.9333 18.3461 9.9854C17.2663 10.75 15.7568 10.75 12.7376 10.75H8.76236C5.74319 10.75 4.23363 10.75 3.15383 9.9854C3.08018 9.9333 3.00856 9.8788 2.9391 9.8221C1.92071 8.9904 1.65068 7.6365 1.1106 4.9288Z";

const pathProps = {
  fill: "#F7F2ED" as const,
  stroke: "#524B47" as const,
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  vectorEffect: "non-scaling-stroke" as const,
};

const T = { duration: 0.28, ease: [0.4, 0, 0.2, 1] as const };

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

  // Which state is active
  const showClosed = !isOpen && !hovered;
  const showHover  = !isOpen && hovered;
  const showOpen   = isOpen;

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
      overflow="visible"
      {...props}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      {/* ── CLOSED state ── */}
      <motion.g animate={{ opacity: showClosed ? 1 : 0 }} initial={{ opacity: 1 }} transition={T}>
        <g transform="translate(-0.9,-1) scale(1.2,1.333)">
          <path d={CLOSED_BG} {...pathProps} />
        </g>
        {/* FG exists in closed state at opacity 0 — not rendered since group is already fading */}
      </motion.g>

      {/* ── HOVER state ── */}
      <motion.g animate={{ opacity: showHover ? 1 : 0 }} initial={{ opacity: 0 }} transition={T}>
        <g transform="translate(-1.13,-1.29) scale(1.501,1.714)">
          <path d={OPEN_BG} {...pathProps} />
        </g>
        <g transform="translate(-1,-1.5) scale(1.333,2.0)">
          <path d={HOVER_FG} {...pathProps} />
        </g>
      </motion.g>

      {/* ── OPEN state ── */}
      <motion.g animate={{ opacity: showOpen ? 1 : 0 }} initial={{ opacity: 0 }} transition={T}>
        <g transform="translate(-1.13,-1.29) scale(1.501,1.714)">
          <path d={OPEN_BG} {...pathProps} />
        </g>
        <g transform="translate(-0.9,-1.8) scale(1.2,2.4)">
          <path d={OPEN_FG} {...pathProps} />
        </g>
      </motion.g>
    </motion.svg>
  );
}
