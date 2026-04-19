import { useMemo, useState } from "react";
import * as LobehubIcons from "@lobehub/icons/es/icons";
import toc from "@lobehub/icons/es/toc";

interface TocEntry {
  id: string;
  fullTitle: string;
  title: string;
  color: string;
  group: "model" | "provider" | "application";
  param: {
    hasAvatar: boolean;
    hasColor: boolean;
    hasCombine: boolean;
    hasText: boolean;
  };
}

type GroupFilter = "all" | "model" | "provider" | "application";
type Variant = "color" | "mono" | "avatar";

const GROUP_LABELS: Record<GroupFilter, string> = {
  all: "All",
  model: "Models",
  provider: "Providers",
  application: "Apps & Tools",
};

interface LlmGridProps {
  search: string;
  size: number;
}

export function LlmGrid({ search, size }: LlmGridProps) {
  const [group, setGroup] = useState<GroupFilter>("all");
  const [variant, setVariant] = useState<Variant>("color");
  const [hovered, setHovered] = useState<string | null>(null);

  const entries = useMemo(() => {
    const q = search.toLowerCase().trim();
    return (toc as TocEntry[])
      .filter((t) => group === "all" || t.group === group)
      .filter((t) =>
        q ? t.fullTitle.toLowerCase().includes(q) || t.id.toLowerCase().includes(q) : true
      );
  }, [search, group]);

  return (
    <div>
      {/* Sub-filter tabs */}
      <div style={s.subTabs}>
        {(["all", "model", "provider", "application"] as GroupFilter[]).map((g) => (
          <button
            key={g}
            style={{ ...s.subTab, ...(group === g ? s.subTabActive : {}) }}
            onClick={() => setGroup(g)}
          >
            {GROUP_LABELS[g]}
          </button>
        ))}
        <span style={s.subCount}>{entries.length} icons</span>

        {/* Variant toggle */}
        <div style={s.toggle}>
          {(["color", "mono", "avatar"] as Variant[]).map((v) => (
            <button
              key={v}
              style={{ ...s.toggleBtn, ...(variant === v ? s.toggleBtnActive : {}) }}
              onClick={() => setVariant(v)}
            >
              {v === "color" ? "Color" : v === "mono" ? "Mono" : "Avatar"}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {entries.length === 0 ? (
        <div style={s.empty}>No icons match "{search}"</div>
      ) : (
        <div style={s.grid}>
          {entries.map((entry) => {
            const Icon = (LobehubIcons as Record<string, any>)[entry.id];
            if (!Icon) return null;
            const isAvatar = variant === "avatar";
            const IconComponent =
              isAvatar && Icon.Avatar ? Icon.Avatar :
              variant === "color" && entry.param.hasColor && Icon.Color ? Icon.Color :
              Icon;
            return (
              <div
                key={entry.id}
                style={{
                  ...s.card,
                  background: hovered === entry.id ? "#111" : "transparent",
                }}
                onMouseEnter={() => setHovered(entry.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <IconComponent size={size} />
                <span style={s.label}>{entry.fullTitle}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  subTabs: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    padding: "10px 24px",
    borderBottom: "1px solid #111",
  },
  subTab: {
    padding: "5px 10px",
    fontSize: 12,
    fontWeight: 500,
    color: "#444",
    background: "none",
    border: "1px solid transparent",
    borderRadius: 6,
    cursor: "pointer",
    transition: "all 120ms ease",
  },
  subTabActive: {
    color: "#ccc",
    borderColor: "#2a2a2a",
    background: "#111",
  },
  subCount: {
    marginLeft: "auto",
    fontSize: 11,
    color: "#333",
    fontFamily: "monospace",
  },
  toggle: {
    display: "flex",
    alignItems: "center",
    background: "#0d0d0d",
    border: "1px solid #1f1f1f",
    borderRadius: 7,
    padding: 2,
    gap: 2,
  },
  toggleBtn: {
    padding: "3px 10px",
    fontSize: 11,
    fontWeight: 500,
    color: "#444",
    background: "none",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    transition: "all 120ms ease",
  },
  toggleBtnActive: {
    color: "#ddd",
    background: "#1f1f1f",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
    padding: "8px 16px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "16px 8px 12px",
    borderRadius: 10,
    cursor: "pointer",
    transition: "background 150ms ease",
    userSelect: "none",
  },
  label: {
    fontSize: 10,
    color: "#444",
    textAlign: "center",
    letterSpacing: "0.01em",
    lineHeight: 1.3,
    maxWidth: 84,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  empty: {
    textAlign: "center",
    color: "#333",
    fontSize: 13,
    marginTop: 80,
  },
};
