import type { IconProps } from "../types";

export function AudioWaveOneIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}: IconProps) {
  const p = { stroke: color, strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" onClick={onClick} {...props}>
      <path d="M3 11V13" {...p} />
      <path d="M6 7V17" {...p} />
      <path d="M9 3V21" {...p} />
      <path d="M12 6V18" {...p} />
      <path d="M15 9V15" {...p} />
      <path d="M18 7V17" {...p} />
      <path d="M21 11V13" {...p} />
    </svg>
  );
}
