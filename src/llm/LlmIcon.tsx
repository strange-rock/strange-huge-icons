import React from "react";
import { LLM_COLOR } from "./data-color";
import { LLM_MONO } from "./data-mono";
import { LLM_AVATAR } from "./data-avatar";

export type LlmVariant = "color" | "mono" | "avatar";

export interface LlmIconProps {
  /** Icon ID matching the lobehub icon name, e.g. "GPT4", "Claude", "Gemini" */
  id: string;
  /** Render size in px (default: 24) */
  size?: number;
  /** Which variant to render (default: "color") */
  variant?: LlmVariant;
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
}

export function LlmIcon({ id, size = 24, variant = "color", className, style, alt }: LlmIconProps) {
  if (variant === "avatar") {
    const src = LLM_AVATAR[id] ?? null;
    if (!src) return null;
    return (
      <img
        src={src}
        width={size}
        height={size}
        alt={alt ?? id}
        className={className}
        style={{ display: "inline-block", ...style }}
      />
    );
  }

  const map = variant === "mono" ? LLM_MONO : LLM_COLOR;
  const raw = map[id] ?? LLM_COLOR[id] ?? LLM_MONO[id] ?? null;
  if (!raw) return null;

  const sized = raw
    .replace(/width="24"/, `width="${size}"`)
    .replace(/height="24"/, `height="${size}"`);
  const src = `data:image/svg+xml,${encodeURIComponent(sized)}`;

  return (
    <img
      src={src}
      width={size}
      height={size}
      alt={alt ?? id}
      className={className}
      style={{ display: "inline-block", flexShrink: 0, ...style }}
    />
  );
}
