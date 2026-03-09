import { useState, useMemo } from "react";
import * as Icons from "@strange-huge/icons";
import type { IconProps } from "@strange-huge/icons";
import { IconCard } from "./components/IconCard";

type IconComponent = React.ComponentType<IconProps>;

const allIcons = Object.entries(Icons).filter(
  ([, v]) => typeof v === "function"
) as [string, IconComponent][];

export default function App() {
  const [search, setSearch] = useState("");
  const [activeColor, setActiveColor] = useState("#ffffff");
  const [activeSize, setActiveSize] = useState(24);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return allIcons;
    return allIcons.filter(([name]) => name.toLowerCase().includes(q));
  }, [search]);

  return (
    <div style={styles.root}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <span style={styles.packageName}>@strange-huge/icons</span>
          <span style={styles.count}>{allIcons.length} icons</span>
        </div>
        <div style={styles.controls}>
          {/* Color picker */}
          <label style={styles.controlLabel}>
            Color
            <input
              type="color"
              value={activeColor}
              onChange={(e) => setActiveColor(e.target.value)}
              style={styles.colorInput}
            />
          </label>
          {/* Size slider */}
          <label style={styles.controlLabel}>
            Size&nbsp;
            <span style={styles.sizeValue}>{activeSize}px</span>
            <input
              type="range"
              min={12}
              max={64}
              value={activeSize}
              onChange={(e) => setActiveSize(Number(e.target.value))}
              style={styles.slider}
            />
          </label>
        </div>
      </header>

      {/* Search */}
      <div style={styles.searchWrap}>
        <input
          placeholder="Search icons…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div style={styles.empty}>No icons match "{search}"</div>
      )}

      {/* Grid */}
      <div style={styles.grid}>
        {filtered.map(([name, Component]) => (
          <IconCard
            key={name}
            name={name}
            Component={Component}
            color={activeColor}
            size={activeSize}
          />
        ))}
      </div>

      {/* Footer hint */}
      <p style={styles.hint}>Hover to preview · Click to trigger tap animation</p>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  root: {
    minHeight: "100vh",
    padding: "0 0 64px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "24px 32px",
    borderBottom: "1px solid #1f1f1f",
    position: "sticky",
    top: 0,
    background: "#0a0a0a",
    zIndex: 10,
  },
  headerLeft: {
    display: "flex",
    alignItems: "baseline",
    gap: 12,
  },
  packageName: {
    fontSize: 16,
    fontWeight: 600,
    color: "#fff",
    letterSpacing: "-0.01em",
  },
  count: {
    fontSize: 13,
    color: "#555",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    gap: 24,
  },
  controlLabel: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13,
    color: "#666",
    cursor: "pointer",
  },
  sizeValue: {
    color: "#aaa",
    minWidth: 36,
  },
  colorInput: {
    width: 28,
    height: 28,
    padding: 0,
    border: "1px solid #2a2a2a",
    borderRadius: 6,
    cursor: "pointer",
    background: "none",
  },
  slider: {
    width: 100,
    accentColor: "#fff",
    cursor: "pointer",
  },
  searchWrap: {
    padding: "20px 32px 0",
  },
  search: {
    width: "100%",
    maxWidth: 360,
    background: "#111",
    border: "1px solid #222",
    borderRadius: 8,
    padding: "9px 14px",
    color: "#fff",
    fontSize: 14,
    outline: "none",
  },
  empty: {
    textAlign: "center",
    color: "#444",
    fontSize: 14,
    marginTop: 80,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: 2,
    padding: "20px 32px 0",
  },
  hint: {
    textAlign: "center",
    color: "#333",
    fontSize: 12,
    marginTop: 48,
    letterSpacing: "0.02em",
  },
};
