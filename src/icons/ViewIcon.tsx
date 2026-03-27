import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import type { IconProps } from "../types";

interface ViewIconProps extends IconProps {
  variant?: "visible" | "hidden";
}

// view# — open eye
const EYE_OUTLINE =
  "M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z";
const EYE_PUPIL =
  "M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z";

// view-off-slash# — broken eye + slash
const EYE_OFF_OUTLINE =
  "M19.439 15.439C20.3636 14.5212 21.0775 13.6091 21.544 12.955C21.848 12.5287 22 12.3155 22 12C22 11.6845 21.848 11.4713 21.544 11.045C20.1779 9.12944 16.6892 5 12 5C11.0922 5 10.2294 5.15476 9.41827 5.41827M6.74742 6.74742C4.73118 8.1072 3.24215 9.94266 2.45604 11.045C2.15201 11.4713 2 11.6845 2 12C2 12.3155 2.15201 12.5287 2.45604 12.955C3.8221 14.8706 7.31078 19 12 19C13.9908 19 15.7651 18.2557 17.2526 17.2526";
const EYE_OFF_PUPIL =
  "M9.85786 10C9.32783 10.53 9 11.2623 9 12.0711C9 13.6887 10.3113 15 11.9289 15C12.7377 15 13.47 14.6722 14 14.1421";
const SLASH = "M3 3L21 21";

export function ViewIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  variant,
  onClick,
  ...props
}: ViewIconProps) {
  const [isHidden, setIsHidden] = useState(variant === "hidden");

  // sync if variant changes externally
  useEffect(() => {
    if (variant !== undefined) setIsHidden(variant === "hidden");
  }, [variant]);

  const eyeOn  = useAnimation();
  const eyeOff = useAnimation();
  const slash  = useAnimation();

  useEffect(() => {
    if (isHidden) {
      // visible → hidden: quick crossfade, slash draws fast to ~half then eases to full
      eyeOn.start({ opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } });
      eyeOff.start({ opacity: 1, transition: { duration: 0.2, ease: "easeInOut" } });
      slash.start({
        opacity: 1,
        pathLength: [0, 0.5, 1],
        transition: {
          opacity: { duration: 0.01 },
          pathLength: {
            duration: 0.45,
            times: [0, 0.35, 1],
            ease: ["easeIn", [0.1, 0, 0.35, 1]],
          },
        },
      });
    } else {
      // hidden → visible: slash retracts, eyes crossfade back
      slash.start({
        pathLength: [1, 0.5, 0],
        transition: {
          pathLength: {
            duration: 0.45,
            times: [0, 0.65, 1],
            ease: [[0.65, 0, 0.9, 1], "easeOut"],
          },
        },
      });
      eyeOff.start({ opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } });
      eyeOn.start({ opacity: 1, transition: { duration: 0.2, ease: "easeInOut", delay: 0.1 } });
      setTimeout(() => slash.set({ opacity: 0 }), 500);
    }
  }, [isHidden]);

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    setIsHidden(h => !h);
    if (typeof onClick === "function") onClick(e as unknown as React.MouseEvent<SVGSVGElement>);
  };

  const p = {
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none",
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
      {...props}
    >
      {/* open eye — fades out when hidden */}
      <motion.g animate={eyeOn} initial={{ opacity: 1 }}>
        <path d={EYE_OUTLINE} {...p} strokeLinecap={undefined} />
        <path d={EYE_PUPIL}   {...p} strokeLinecap={undefined} />
      </motion.g>

      {/* broken eye — fades in when hidden */}
      <motion.g animate={eyeOff} initial={{ opacity: 0 }}>
        <path d={EYE_OFF_OUTLINE} {...p} />
        <path d={EYE_OFF_PUPIL}   {...p} />
      </motion.g>

      {/* slash — draws in when hidden */}
      <motion.path
        d={SLASH}
        {...p}
        animate={slash}
        initial={{ opacity: 0, pathLength: 0 }}
      />
    </motion.svg>
  );
}
