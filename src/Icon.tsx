import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import type { IconProps } from "./types";
import type { IconName } from "./registry";
import { useIconConfig } from "./IconProvider";
import { resolveIcon } from "./resolver";
import { getAnimation, getCustomComponent } from "./animations";

export interface UniversalIconProps extends IconProps {
  /** Canonical icon name — library-agnostic. */
  name: IconName;
}

/**
 * Draws any icon by canonical name, using whichever library + style the nearest
 * `<IconProvider>` has active. Icons whose animation (or artwork) can't be
 * expressed as flat path data delegate to their hand-built component.
 */
export function Icon({
  name,
  size,
  color = "currentColor",
  animated = false,
  triggered,
  onClick,
  style,
  ...props
}: UniversalIconProps) {
  const config = useIconConfig();
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();

  const data = resolveIcon(config.library, config.style, name);
  const animation = getAnimation(name);
  const CustomComponent = getCustomComponent(name);
  const wantsAnimation = animated || triggered !== undefined;

  // No path data means the icon can only be drawn by its component.
  const useCustom =
    !!CustomComponent && (!data || (animation?.type === "custom" && wantsAnimation));

  const transform = animation?.type === "transform" ? animation : undefined;
  const isActive = triggered !== undefined ? triggered : animated ? hovered : false;

  useEffect(() => {
    if (!transform || useCustom) return;

    if (isActive) {
      controls.start({
        ...transform.active,
        transition: {
          duration: transform.duration,
          ease: transform.ease,
          times: transform.times,
        },
      } as any);
    } else if (transform.restDuration) {
      controls.start({
        ...transform.rest,
        transition: {
          duration: transform.restDuration,
          ease: transform.restEase ?? transform.ease,
        },
      } as any);
    } else {
      controls.stop();
      if (transform.rest) controls.set(transform.rest);
    }
  }, [isActive, useCustom, transform]);

  if (useCustom && CustomComponent) {
    return (
      <CustomComponent
        size={size}
        color={color}
        animated={animated}
        triggered={triggered}
        onClick={onClick}
        style={style}
        {...props}
      />
    );
  }

  if (!data) return null;

  const resolvedSize = size ?? data.defaultSize ?? 24;
  const interactive = !!transform || !!onClick;

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={resolvedSize}
      height={resolvedSize}
      viewBox={data.viewBox ?? "0 0 24 24"}
      fill="none"
      animate={transform ? controls : undefined}
      onHoverStart={transform ? () => setHovered(true) : undefined}
      onHoverEnd={transform ? () => setHovered(false) : undefined}
      onClick={onClick}
      {...props}
      style={{
        ...(interactive ? { cursor: "pointer" } : null),
        ...(transform ? { transformOrigin: "center" } : null),
        ...style,
      }}
    >
      {data.paths.map((path, i) => {
        const stroked = path.stroke !== false;
        return (
          <path
            key={i}
            d={path.d}
            stroke={stroked ? color : undefined}
            fill={path.fill ? color : "none"}
            strokeWidth={stroked ? path.strokeWidth ?? 1.5 : undefined}
            strokeLinecap={stroked ? path.strokeLinecap ?? "round" : undefined}
            strokeLinejoin={stroked ? path.strokeLinejoin ?? "round" : undefined}
            strokeMiterlimit={path.strokeMiterlimit}
            fillRule={path.fillRule}
            clipRule={path.clipRule}
            opacity={path.opacity}
          />
        );
      })}
    </motion.svg>
  );
}
