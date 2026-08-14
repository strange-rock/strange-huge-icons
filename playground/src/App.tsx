import { useState, useMemo } from "react";
import * as Icons from "@strange-huge/icons";
import {
  Icon,
  IconProvider,
  ICON_NAMES,
  availableLibraries,
  availableStyles,
} from "@strange-huge/icons";
import type { IconProps, IconLibrary, IconStyle } from "@strange-huge/icons";
import { IconCard } from "./components/IconCard";
import { LlmGrid } from "./components/LlmGrid";
import { PreviewModal } from "./components/PreviewModal";
import toc from "@lobehub/icons/es/toc";
import { LLM_ICONS } from "./lib/iconMeta";

type IconComponent = React.ComponentType<IconProps>;
type Tab = "all" | "llm";
/** "legacy" → <SearchOneIcon />, "registry" → <Icon name="search" /> */
type ApiMode = "legacy" | "registry";

// Icon components are the PascalCase `*Icon` exports — skips helpers like
// `resolveIcon` and the universal `Icon` itself.
const allIcons = Object.entries(Icons).filter(
  ([name, v]) =>
    typeof v === "function" && name.endsWith("Icon") && name !== "Icon" && /^[A-Z]/.test(name)
) as [string, IconComponent][];

/** Same grid, drawn through the canonical registry instead of named exports. */
const registryIcons = ICON_NAMES.map((name) => [
  name,
  (props: IconProps) => <Icon {...props} name={name} />,
]) as [string, IconComponent][];

export default function App() {
  const [search, setSearch] = useState("");
  const [activeColor, setActiveColor] = useState("#ffffff");
  const [activeSize, setActiveSize] = useState(24);
  const [selected, setSelected] = useState<[string, IconComponent] | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [apiMode, setApiMode] = useState<ApiMode>("legacy");
  const [library, setLibrary] = useState<IconLibrary>("hugeicons");
  const [style, setStyle] = useState<IconStyle>("stroke");

  const filtered = useMemo(() => {
    const source = apiMode === "registry" ? registryIcons : allIcons;
    const base = activeTab === "llm"
      ? source.filter(([name]) => LLM_ICONS.includes(name))
      : source;
    const q = search.toLowerCase().trim();
    if (!q) return base;
    return base.filter(([name]) => name.toLowerCase().includes(q));
  }, [search, activeTab, apiMode]);

  return (
    <div style={s.root}>

      {/* ── Top bar ── */}
      <header style={s.topbar}>
        <div style={s.topbarLeft}>
          <span style={s.scope}>@strange-huge</span>
          <span style={s.slash}>/</span>
          <span style={s.pkg}>icons</span>
        </div>
        <div style={s.topbarRight}>
          <span style={s.version}>v0.0.1</span>
        </div>
      </header>

      {/* ── Tabs ── */}
      <div style={s.tabBar}>
        {(["all", "llm"] as Tab[]).map((tab) => (
          <button
            key={tab}
            style={{ ...s.tab, ...(activeTab === tab ? s.tabActive : {}) }}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "all" ? "All" : "LLM"}
            {tab === "llm" && (
              <span style={s.tabCount}>{(toc as any[]).filter((t: any) => t.param.hasAvatar).length}</span>
            )}
            {tab === "all" && (
              <span style={s.tabCount}>{allIcons.length}</span>
            )}
          </button>
        ))}
      </div>

      {/* ── Controls bar ── */}
      <div style={s.controlsBar}>
        <div style={s.searchWrap}>
          <svg style={s.searchIcon} width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="6" cy="6" r="4.5" stroke="#444" strokeWidth="1.2" />
            <path d="M9.5 9.5L13 13" stroke="#444" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <input
            placeholder="Search icons…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={s.search}
          />
        </div>

        <div style={s.controls}>
          <label style={s.controlItem}>
            <span style={s.controlLabel}>Color</span>
            <input
              type="color"
              value={activeColor}
              onChange={(e) => setActiveColor(e.target.value)}
              style={s.colorInput}
            />
          </label>

          <div style={s.controlDivider} />

          <label style={s.controlItem}>
            <span style={s.controlLabel}>Size</span>
            <input
              type="range"
              min={12}
              max={64}
              value={activeSize}
              onChange={(e) => setActiveSize(Number(e.target.value))}
              style={s.slider}
            />
            <span style={s.sizeValue}>{activeSize}px</span>
          </label>

          <div style={s.controlDivider} />

          <div style={s.controlItem}>
            <span style={s.controlLabel}>API</span>
            <div style={s.segmented}>
              {(["legacy", "registry"] as ApiMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setApiMode(mode)}
                  style={{ ...s.segment, ...(apiMode === mode ? s.segmentActive : {}) }}
                  title={
                    mode === "legacy"
                      ? "<SearchOneIcon size={24} />"
                      : '<Icon name="search" size={24} />'
                  }
                >
                  {mode === "legacy" ? "Named" : "Registry"}
                </button>
              ))}
            </div>
          </div>

          {apiMode === "registry" && (
            <>
              <div style={s.controlDivider} />

              <label style={s.controlItem}>
                <span style={s.controlLabel}>Library</span>
                <select
                  value={library}
                  onChange={(e) => setLibrary(e.target.value as IconLibrary)}
                  style={s.select}
                >
                  {availableLibraries().map((lib) => (
                    <option key={lib} value={lib}>{lib}</option>
                  ))}
                </select>
              </label>

              <label style={s.controlItem}>
                <span style={s.controlLabel}>Style</span>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value as IconStyle)}
                  style={s.select}
                >
                  {availableStyles(library).map((st) => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </label>
            </>
          )}
        </div>
      </div>

      {activeTab === "llm" ? (
        <LlmGrid search={search} size={activeSize} />
      ) : (
        <>
          {/* ── Grid header ── */}
          <div style={s.gridHeader}>
            <span style={s.gridLabel}>
              {search
                ? `${filtered.length} result${filtered.length !== 1 ? "s" : ""} for "${search}"`
                : apiMode === "registry"
                  ? `Canonical names · ${registryIcons.length} · ${library}/${style}`
                  : `All icons · ${allIcons.length}`}
            </span>
          </div>

          {/* ── Grid ── */}
          {filtered.length === 0 ? (
            <div style={s.empty}>No icons match "{search}"</div>
          ) : (
            <IconProvider library={library} style={style}>
              <div style={s.grid}>
                {filtered.map(([name, Component]) => (
                  <IconCard
                    key={name}
                    name={name}
                    Component={Component}
                    color={activeColor}
                    size={activeSize}
                    onSelect={() => setSelected([name, Component])}
                  />
                ))}
              </div>
            </IconProvider>
          )}
        </>
      )}

      {/* ── Preview modal ── */}
      {selected && (
        <IconProvider library={library} style={style}>
          <PreviewModal
            name={selected[0]}
            Component={selected[1]}
            color={activeColor}
            onClose={() => setSelected(null)}
          />
        </IconProvider>
      )}
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  root: {
    minHeight: "100vh",
    paddingBottom: 80,
  },

  // Top bar
  topbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 24px",
    borderBottom: "1px solid #161616",
  },
  topbarLeft: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  scope: {
    fontSize: 13,
    fontWeight: 500,
    color: "#555",
  },
  slash: {
    fontSize: 13,
    color: "#2a2a2a",
    margin: "0 1px",
  },
  pkg: {
    fontSize: 13,
    fontWeight: 600,
    color: "#fff",
  },
  topbarRight: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  version: {
    fontSize: 11,
    color: "#333",
    fontFamily: "monospace",
  },

  // Tabs
  tabBar: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    padding: "0 24px",
    borderBottom: "1px solid #161616",
  },
  tab: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "10px 12px",
    fontSize: 13,
    fontWeight: 500,
    color: "#444",
    background: "none",
    border: "none",
    borderBottom: "2px solid transparent",
    marginBottom: -1,
    cursor: "pointer",
    transition: "color 150ms ease",
  },
  tabActive: {
    color: "#fff",
    borderBottomColor: "#fff",
  },
  tabCount: {
    fontSize: 11,
    color: "#333",
    fontFamily: "monospace",
  },

  // Controls bar
  controlsBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 24px",
    borderBottom: "1px solid #161616",
    gap: 16,
  },
  searchWrap: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  searchIcon: {
    position: "absolute",
    left: 10,
    pointerEvents: "none",
  },
  search: {
    background: "#0f0f0f",
    border: "1px solid #1f1f1f",
    borderRadius: 7,
    padding: "7px 12px 7px 32px",
    color: "#fff",
    fontSize: 13,
    outline: "none",
    width: 220,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  controlItem: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
  },
  controlLabel: {
    fontSize: 11,
    fontWeight: 500,
    color: "#444",
    letterSpacing: "0.04em",
    textTransform: "uppercase" as const,
  },
  controlDivider: {
    width: 1,
    height: 16,
    background: "#1f1f1f",
  },
  segmented: {
    display: "flex",
    padding: 2,
    gap: 2,
    borderRadius: 6,
    background: "#111",
    border: "1px solid #1f1f1f",
  },
  segment: {
    padding: "3px 10px",
    fontSize: 11,
    fontWeight: 500,
    color: "#555",
    background: "none",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
  segmentActive: {
    color: "#fff",
    background: "#222",
  },
  select: {
    padding: "3px 6px",
    fontSize: 11,
    color: "#ccc",
    background: "#111",
    border: "1px solid #1f1f1f",
    borderRadius: 5,
    cursor: "pointer",
  },
  colorInput: {
    width: 24,
    height: 24,
    padding: 0,
    border: "1px solid #2a2a2a",
    borderRadius: 5,
    cursor: "pointer",
    background: "none",
  },
  slider: {
    width: 88,
    accentColor: "#fff",
    cursor: "pointer",
  },
  sizeValue: {
    fontSize: 11,
    color: "#444",
    minWidth: 30,
    fontFamily: "monospace",
  },

  // Grid header
  gridHeader: {
    padding: "20px 24px 12px",
    borderBottom: "1px solid #111",
  },
  gridLabel: {
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.05em",
    color: "#333",
    textTransform: "uppercase" as const,
  },

  // Grid
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
    padding: "8px 16px",
  },
  empty: {
    textAlign: "center",
    color: "#333",
    fontSize: 13,
    marginTop: 80,
  },
};
