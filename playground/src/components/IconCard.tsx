import { useState } from "react";
import type { IconProps } from "@strange-huge/icons";
import { toLabel, STAGE_BG } from "../lib/iconMeta";

interface IconCardProps {
  name: string;
  Component: React.ComponentType<IconProps>;
  color: string;
  size: number;
  onSelect: () => void;
}

export function IconCard({ name, Component, color, size, onSelect }: IconCardProps) {
  const [hovered, setHovered] = useState(false);
  const cardBg = STAGE_BG[name];

  return (
    <div
      style={{
        ...styles.card,
        background: cardBg
          ? (hovered ? cardBg : cardBg + "cc")
          : (hovered ? "#111" : "transparent"),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onSelect}
    >
      <div style={styles.iconWrap}>
        <Component size={size} color={color} animated />
      </div>
    </div>
  );
}


const styles: Record<string, React.CSSProperties> = {
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "20px 12px 16px",
    borderRadius: 10,
    cursor: "pointer",
    transition: "background 150ms ease",
    userSelect: "none",
  },
  iconWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 11,
    color: "#555",
    textAlign: "center",
    letterSpacing: "0.01em",
    lineHeight: 1.3,
  },
};
