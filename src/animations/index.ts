import type { ComponentType } from "react";
import type { IconName } from "../registry";
import type { IconProps } from "../types";

import { AbacusIcon } from "../icons/AbacusIcon";
import { BubbleChatAddIcon } from "../icons/BubbleChatAddIcon";
import { BubbleChatIcon } from "../icons/BubbleChatIcon";
import { ChatOneIcon } from "../icons/ChatOneIcon";
import { FolderAddIcon } from "../icons/FolderAddIcon";
import { FolderOneIcon } from "../icons/FolderOneIcon";
import { ImageAddTwoIcon } from "../icons/ImageAddTwoIcon";
import { ImageDownloadTwoIcon } from "../icons/ImageDownloadTwoIcon";
import { ImageNotFoundOneIcon } from "../icons/ImageNotFoundOneIcon";
import { ImageTwoIcon } from "../icons/ImageTwoIcon";
import { LogoIcon } from "../icons/LogoIcon";
import { NeuralNetworkIcon } from "../icons/NeuralNetworkIcon";
import { SidebarLeftIcon } from "../icons/SidebarLeftIcon";
import { SidebarRightIcon } from "../icons/SidebarRightIcon";
import { TickTwoIcon } from "../icons/TickTwoIcon";
import { UserAiIcon } from "../icons/UserAiIcon";
import { UserIcon } from "../icons/UserIcon";
import { ViewIcon } from "../icons/ViewIcon";

export type AnimationType = "transform" | "custom";

export interface AnimationDef {
  /**
   * "transform" — a whole-icon transform that works with any library's paths.
   * "custom"    — per-element choreography that only the hand-built component
   *               can express; `<Icon>` delegates to it when animation is on.
   */
  type: AnimationType;
  /** Target (or keyframes) while the icon is active. */
  active?: Record<string, number | number[]>;
  /** Target when the icon goes back to rest. */
  rest?: Record<string, number>;
  duration?: number;
  ease?: string | number[];
  /** Keyframe timing, matching framer-motion's `times`. */
  times?: number[];
  /** Seconds to animate back to `rest`. 0 (default) snaps instantly. */
  restDuration?: number;
  restEase?: string | number[];
}

/**
 * Animation is defined per canonical name, not per library — the same keyframes
 * apply whichever library draws the paths. Icons with no entry are static.
 */
export const ANIMATIONS: Partial<Record<IconName, AnimationDef>> = {
  search: {
    type: "transform",
    active: { scale: [1, 0.88, 1.05, 1] },
    rest: { scale: 1 },
    duration: 0.32,
    ease: "easeOut",
  },
  plus: {
    type: "transform",
    active: { scale: [1, 0.72, 1.08, 1] },
    rest: { scale: 1 },
    duration: 0.35,
    ease: "easeOut",
  },
  "arrow-down": {
    type: "transform",
    active: { y: [0, 3, 0] },
    rest: { y: 0 },
    duration: 0.35,
    ease: "easeInOut",
  },
  "arrow-up": {
    type: "transform",
    active: { y: [0, -3, 0] },
    rest: { y: 0 },
    duration: 0.35,
    ease: "easeInOut",
  },
  pin: {
    type: "transform",
    active: { y: [0, 4, -1.5, 0], rotate: [0, -4, 1, 0] },
    rest: { y: 0, rotate: 0 },
    duration: 0.4,
    ease: "easeOut",
  },
  mic: {
    type: "transform",
    active: { rotate: [-8, 6, -3, 1, 0] },
    rest: { rotate: 0 },
    duration: 0.6,
    ease: "easeInOut",
    times: [0, 0.25, 0.5, 0.75, 1],
    restDuration: 0.15,
  },
  atom: {
    type: "transform",
    active: { rotate: 45 },
    rest: { rotate: 0 },
    duration: 0.22,
    ease: "easeOut",
    restDuration: 0.35,
    restEase: "easeOut",
  },
  exchange: {
    type: "transform",
    active: { rotate: 180 },
    rest: { rotate: 0 },
    duration: 0.4,
    ease: [0.4, 0, 0.2, 1],
  },

  // Per-element choreography — handled by the custom components below.
  abacus: { type: "custom" },
  chat: { type: "custom" },
  "chat-add": { type: "custom" },
  "chat-alt": { type: "custom" },
  check: { type: "custom" },
  eye: { type: "custom" },
  folder: { type: "custom" },
  "folder-add": { type: "custom" },
  image: { type: "custom" },
  "image-add": { type: "custom" },
  "image-download": { type: "custom" },
  "image-not-found": { type: "custom" },
  "neural-network": { type: "custom" },
  "sidebar-left": { type: "custom" },
  "sidebar-right": { type: "custom" },
  user: { type: "custom" },
  "user-ai": { type: "custom" },
};

/**
 * Icons that can't be drawn from flat path data (clip paths, groups, fixed
 * palettes) or whose animation lives on individual elements. `<Icon>` renders
 * these components directly.
 */
export const CUSTOM_COMPONENTS: Partial<Record<IconName, ComponentType<IconProps>>> = {
  abacus: AbacusIcon,
  chat: BubbleChatIcon,
  "chat-add": BubbleChatAddIcon,
  "chat-alt": ChatOneIcon,
  check: TickTwoIcon,
  eye: ViewIcon,
  folder: FolderOneIcon,
  "folder-add": FolderAddIcon,
  image: ImageTwoIcon,
  "image-add": ImageAddTwoIcon,
  "image-download": ImageDownloadTwoIcon,
  "image-not-found": ImageNotFoundOneIcon,
  logo: LogoIcon,
  "neural-network": NeuralNetworkIcon,
  "sidebar-left": SidebarLeftIcon,
  "sidebar-right": SidebarRightIcon,
  user: UserIcon,
  "user-ai": UserAiIcon,
};

export function getAnimation(name: string): AnimationDef | undefined {
  return ANIMATIONS[name as IconName];
}

export function getCustomComponent(name: string): ComponentType<IconProps> | undefined {
  return CUSTOM_COMPONENTS[name as IconName];
}
