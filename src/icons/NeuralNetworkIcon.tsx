import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import type { IconProps } from "../types";

export function NeuralNetworkIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}: IconProps) {
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== undefined ? triggered : (animated ? hovered : false);
  const c1Controls = useAnimation();
  const c2Controls = useAnimation();
  const c3Controls = useAnimation();

  useEffect(() => {
    if (isActive) {
      c1Controls.start({
        pathLength: [0, 1],
        transition: { duration: 0.28, ease: "easeOut", delay: 0 },
      });
      c2Controls.start({
        pathLength: [0, 1],
        transition: { duration: 0.28, ease: "easeOut", delay: 0.22 },
      });
      c3Controls.start({
        pathLength: [0, 1],
        transition: { duration: 0.28, ease: "easeOut", delay: 0.44 },
      });
    } else {
      c1Controls.stop(); c1Controls.set({ pathLength: 1 });
      c2Controls.stop(); c2Controls.set({ pathLength: 1 });
      c3Controls.stop(); c3Controls.set({ pathLength: 1 });
    }
  }, [isActive]);

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
      {/* nodes — static */}
      <path d="M21.5 12C21.5 13.3807 20.3807 14.5 19 14.5C17.6193 14.5 16.5 13.3807 16.5 12C16.5 10.6193 17.6193 9.5 19 9.5C20.3807 9.5 21.5 10.6193 21.5 12Z" stroke={color} strokeWidth="1.5" />
      <path d="M13.5 4C13.5 4.82843 12.8284 5.5 12 5.5C11.1716 5.5 10.5 4.82843 10.5 4C10.5 3.17157 11.1716 2.5 12 2.5C12.8284 2.5 13.5 3.17157 13.5 4Z" stroke={color} strokeWidth="1.5" />
      <path d="M12.5 11.5C12.5 12.3284 11.8284 13 11 13C10.1716 13 9.5 12.3284 9.5 11.5C9.5 10.6716 10.1716 10 11 10C11.8284 10 12.5 10.6716 12.5 11.5Z" stroke={color} strokeWidth="1.5" />
      <path d="M6.5 7.5C6.5 8.60457 5.60457 9.5 4.5 9.5C3.39543 9.5 2.5 8.60457 2.5 7.5C2.5 6.39543 3.39543 5.5 4.5 5.5C5.60457 5.5 6.5 6.39543 6.5 7.5Z" stroke={color} strokeWidth="1.5" />
      <path d="M10.5 19.5C10.5 20.6046 9.60457 21.5 8.5 21.5C7.39543 21.5 6.5 20.6046 6.5 19.5C6.5 18.3954 7.39543 17.5 8.5 17.5C9.60457 17.5 10.5 18.3954 10.5 19.5Z" stroke={color} strokeWidth="1.5" />

      {/* static connections */}
      <path d="M13.5 5L17.5 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14.5 15.5L10.5 18.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 17.5L5 9.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

      {/* animated connections — signal propagates left → top → middle → right */}
      <motion.path
        d="M6.31298 6.65431L10.5 4.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 1 }}
        animate={c1Controls}
      />
      <motion.path
        d="M12 5.5L11 10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 1 }}
        animate={c2Controls}
      />
      <motion.path
        d="M12.5 11.5L16.505 11.8443"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 1 }}
        animate={c3Controls}
      />
    </motion.svg>
  );
}
