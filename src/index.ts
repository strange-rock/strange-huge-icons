// Universal API — canonical names, swappable library + style
export { Icon } from "./Icon";
export type { UniversalIconProps } from "./Icon";
export { IconProvider, useIconConfig } from "./IconProvider";
export type { IconConfig, IconLibrary, IconStyle, IconProviderProps } from "./IconProvider";
export { CANONICAL_MAP, COMPONENT_TO_CANONICAL, ICON_NAMES, isIconName } from "./registry";
export type { IconName } from "./registry";
export { resolveIcon, availableLibraries, availableStyles } from "./resolver";
export { ANIMATIONS, CUSTOM_COMPONENTS, getAnimation, getCustomComponent } from "./animations";
export type { AnimationDef, AnimationType } from "./animations";
export type { IconData, PathData, IconPathSet } from "./libraries/types";

// Legacy API — direct named exports, still fully supported
export type { IconProps } from "./types";
export * from "./icons";
