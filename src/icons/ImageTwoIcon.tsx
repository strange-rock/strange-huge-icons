import { motion, useAnimation } from "framer-motion";
import { useEffect, useId, useState } from "react";
import type { IconProps } from "../types";

export function ImageTwoIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}: IconProps) {
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== undefined ? triggered : (animated ? hovered : false);
  const sunControls = useAnimation();
  const clipId = useId();

  useEffect(() => {
    if (isActive) {
      sunControls.start({
        y: [5, 0],
        transition: { duration: 0.5, ease: "easeOut" },
      });
    } else {
      sunControls.stop();
      sunControls.set({ y: 0 });
    }
  }, [isActive]);

  const framePath =
    "M3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12C2.5 7.77027 2.5 5.6554 3.69797 4.25276C3.86808 4.05358 4.05358 3.86808 4.25276 3.69797C5.6554 2.5 7.77027 2.5 12 2.5C16.2297 2.5 18.3446 2.5 19.7472 3.69797C19.9464 3.86808 20.1319 4.05358 20.302 4.25276C21.5 5.6554 21.5 7.77027 21.5 12C21.5 16.2297 21.5 18.3446 20.302 19.7472C20.1319 19.9464 19.9464 20.1319 19.7472 20.302C18.3446 21.5 16.2297 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472Z";

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
      <defs>
        <clipPath id={clipId}>
          <path d={framePath} />
        </clipPath>
      </defs>

      {/* frame — static */}
      <path
        d={framePath}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* sun — animates upward, clipped to frame */}
      <g clipPath={`url(#${clipId})`}>
        <motion.path
          d="M15.5 8C15.7761 8 16 7.77614 16 7.5C16 7.22386 15.7761 7 15.5 7M15.5 8C15.2239 8 15 7.77614 15 7.5C15 7.22386 15.2239 7 15.5 7M15.5 8V7"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ y: 0 }}
          animate={sunControls}
        />
      </g>

      {/* mountains — rendered after sun so they sit visually on top */}
      <path
        d="M3 16L7.46967 11.5303C7.80923 11.1908 8.26978 11 8.75 11C9.23022 11 9.69077 11.1908 10.0303 11.5303L14 15.5M14 15.5L15.5 17M14 15.5L15.9697 13.5303C16.3092 13.1908 16.7698 13 17.25 13C17.7302 13 18.1908 13.1908 18.5303 13.5303L21 16"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
