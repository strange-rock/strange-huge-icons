import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import type { IconProps } from "../types";

export function AiVisionRecognitionIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  onClick,
  ...props
}: IconProps) {
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== undefined ? triggered : (animated ? hovered : false);
  const diamond = useAnimation();

  useEffect(() => {
    if (isActive) {
      diamond.start({
        scale: [1, 1.3, 0.9, 1.1, 1],
        transition: { duration: 0.45, ease: "easeInOut" },
      });
    } else {
      diamond.stop();
      diamond.set({ scale: 1 });
    }
  }, [isActive]);

  const p = { stroke: color, strokeWidth: 1.5, strokeLinejoin: "round" as const, fill: "none" };

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
      {/* eye outline — static */}
      <path d="M22 12C22 12 19 19 12 19C5 19 2 12 2 12C2 12 5 5 12 5C18.5 5 22 12 22 12Z" {...p} />
      {/* inner diamond — pulses */}
      <motion.path
        d="M11.6769 8.67738C11.8274 8.44087 12.1726 8.44087 12.3231 8.67738L12.7586 9.36157C13.2401 10.1182 13.8818 10.7599 14.6384 11.2414L15.3226 11.6769C15.5591 11.8274 15.5591 12.1726 15.3226 12.3231L14.6384 12.7586C13.8818 13.2401 13.2401 13.8818 12.7586 14.6384L12.3231 15.3226C12.1726 15.5591 11.8274 15.5591 11.6769 15.3226L11.2414 14.6384C10.7599 13.8818 10.1182 13.2401 9.36157 12.7586L8.67738 12.3231C8.44087 12.1726 8.44087 11.8274 8.67738 11.6769L9.36157 11.2414C10.1182 10.7599 10.7599 10.1182 11.2414 9.36157L11.6769 8.67738Z"
        {...p}
        animate={diamond}
        style={{ transformOrigin: "12px 12px" }}
      />
    </motion.svg>
  );
}
