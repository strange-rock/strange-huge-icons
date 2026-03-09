import { useState } from "react";
import type { IconProps } from "@strange-huge/icons";

interface IconCardProps {
  name: string;
  Component: React.ComponentType<IconProps>;
  color: string;
  size: number;
}

export function IconCard({ name, Component, color, size }: IconCardProps) {
  const [hovered, setHovered] = useState(false);
  const [animate, setAnimate] = useState(false);

  const label = toLabel(name);

  function handleClick() {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 800);
  }

  return (
    <div
      style={{
        ...styles.card,
        background: hovered ? "#111" : "transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <div style={styles.iconWrap}>
        <Component
          size={size}
          color={color}
          animate={animate}
        />
      </div>
      <span style={styles.label}>{label}</span>
    </div>
  );
}

function toLabel(name: string) {
  return name
    .replace(/Icon$/, "")
    .replace(/([A-Z])/g, " $1")
    .trim();
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
