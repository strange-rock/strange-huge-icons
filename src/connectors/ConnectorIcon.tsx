import React from "react";
import { CONNECTOR_COLOR, CONNECTOR_MONO } from "./data";

export interface ConnectorIconProps {
  /** Connector ID — lowercase e.g. "notion", "linear", "gmail". Case-insensitive. */
  id: string;
  /** Render size in px (default: 24) */
  size?: number;
  /** Render as monochrome (uses currentColor). Default: false (brand color) */
  mono?: boolean;
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
}

export function ConnectorIcon({
  id,
  size = 24,
  mono = false,
  className,
  style,
  alt,
}: ConnectorIconProps) {
  const key = id.toLowerCase();
  const map = mono ? CONNECTOR_MONO : CONNECTOR_COLOR;
  const raw = map[key] ?? CONNECTOR_COLOR[key] ?? null;
  if (!raw) return null;

  const sized = raw
    .replace(/width="24"/g, `width="${size}"`)
    .replace(/height="24"/g, `height="${size}"`);
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
