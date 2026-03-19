import { motion } from "framer-motion";
import { useState } from "react";
import type { IconProps } from "../types";

interface FolderOneIconProps extends IconProps {
  variant?: "closed" | "open";
}

const CLOSED_BG =
  "M8 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C22 9.08996 22 10.1433 22 12.25C22 15.7612 22 17.5167 21.1573 18.7779C20.7926 19.3238 20.3238 19.7926 19.7779 20.1573C18.5167 21 16.7612 21 13.25 21H12C7.28595 21 4.92893 21 3.46447 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38032 4.53806C2.65142 4.05227 3.05227 3.65142 3.53806 3.38032C4.21956 3 5.1278 3 6.94427 3C8.10802 3 8.6899 3 9.19926 3.19101C10.3622 3.62712 10.8418 4.68358 11.3666 5.73313L12 7";

const OPEN_BG =
  "M8.8 6.11111H15.8C17.4854 6.11111 18.328 6.11111 18.9334 6.50435C19.1954 6.67459 19.4204 6.89334 19.5955 7.14811C20 7.73664 20 8.5559 20 10.1944C20 12.9254 20 14.2908 19.3258 15.2717C19.0341 15.6963 18.659 16.0609 18.2223 16.3446C17.2134 17 15.809 17 13 17H12C8.22876 17 6.34314 17 5.17158 15.8609C4 14.722 4 12.8887 4 9.22222V6.84554C4 5.43273 4 4.72632 4.30426 4.19627C4.52114 3.81843 4.84182 3.50666 5.23045 3.2958C5.77565 3 6.50224 3 7.95542 3C8.88642 3 9.35192 3 9.75941 3.14856C10.6898 3.48776 11.0734 4.30945 11.4933 5.12577L12 6.11111";

const HOVER_FG =
  "M3.32458 14.0146C2.98652 11.7547 2.81749 10.6248 3.29776 9.85908C3.32978 9.80808 3.36365 9.75876 3.39925 9.71124C3.93317 9 4.87807 9 6.76785 9H17.2321C19.122 9 20.0668 9 20.6007 9.71124C20.6363 9.75876 20.6702 9.80808 20.7023 9.85908C21.1825 10.6248 21.0135 11.7547 20.6754 14.0146C20.1893 17.2638 19.9463 18.8885 19.0298 19.8865C18.9672 19.9546 18.9028 20.02 18.8365 20.0825C17.8647 21 16.5061 21 13.7888 21H10.2112C7.4939 21 6.1353 21 5.16348 20.0825C5.0972 20.02 5.03274 19.9546 4.97023 19.8865C4.05368 18.8885 3.81065 17.2638 3.32458 14.0146Z";

const OPEN_FG =
  "M2.36064 15.1788C1.98502 13.2956 1.79721 12.354 2.33084 11.7159C2.36642 11.6734 2.40405 11.6323 2.44361 11.5927C3.03686 11 4.08674 11 6.1865 11H17.8135C19.9133 11 20.9631 11 21.5564 11.5927C21.5959 11.6323 21.6336 11.6734 21.6692 11.7159C22.2028 12.354 22.015 13.2956 21.6394 15.1788C21.0993 17.8865 20.8292 19.2404 19.8109 20.0721C19.7414 20.1288 19.6698 20.1833 19.5961 20.2354C18.5163 21 17.0068 21 13.9876 21H10.0124C6.99323 21 5.48367 21 4.40387 20.2354C4.33022 20.1833 4.2586 20.1288 4.18914 20.0721C3.17075 19.2404 2.90072 17.8865 2.36064 15.1788Z";

const T = { duration: 0.28, ease: [0.4, 0, 0.2, 1] as const };

const pathProps = {
  fill: "#F7F2ED" as const,
  stroke: "#524B47" as const,
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
};

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
  const showFg = isOpen || hovered;

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
      {/* BG: morphs between closed and open shape */}
      <motion.path
        {...pathProps}
        initial={{ d: CLOSED_BG }}
        animate={{ d: showFg ? OPEN_BG : CLOSED_BG }}
        transition={T}
      />
      {/* FG: fades in on hover/open, morphs between hover and open positions */}
      <motion.path
        {...pathProps}
        initial={{ d: HOVER_FG, opacity: 0 }}
        animate={{
          d: isOpen ? OPEN_FG : HOVER_FG,
          opacity: showFg ? 1 : 0,
        }}
        transition={T}
      />
    </motion.svg>
  );
}
