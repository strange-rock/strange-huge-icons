import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TocEntry {
  id: string;
  fullTitle: string;
  title: string;
  group: "model" | "provider" | "application";
  param: {
    hasAvatar: boolean;
    hasColor: boolean;
    hasCombine: boolean;
    hasText: boolean;
  };
}

type Variant = "color" | "mono" | "avatar";

interface LlmPreviewModalProps {
  entry: TocEntry;
  Icon: any;
  onClose: () => void;
}

const GROUP_LABEL: Record<TocEntry["group"], string> = {
  model: "Model",
  provider: "Provider",
  application: "Application",
};

export function LlmPreviewModal({ entry, Icon, onClose }: LlmPreviewModalProps) {
  const [previewSize, setPreviewSize] = useState(96);
  const availableVariants: Variant[] = [
    ...(entry.param.hasColor ? (["color"] as Variant[]) : []),
    "mono",
    ...(entry.param.hasAvatar ? (["avatar"] as Variant[]) : []),
  ];
  const [variant, setVariant] = useState<Variant>(availableVariants[0] ?? "mono");

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const IconComponent =
    variant === "avatar" && Icon.Avatar ? Icon.Avatar :
    variant === "color" && Icon.Color ? Icon.Color :
    Icon;

  const codeSnippet =
    variant === "avatar"
      ? `<${entry.id}.Avatar size={${previewSize}} shape="square" />`
      : variant === "color"
      ? `<${entry.id}.Color size={${previewSize}} />`
      : `<${entry.id} size={${previewSize}} />`;

  return (
    <AnimatePresence>
      <motion.div
        style={s.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        onClick={onClose}
      >
        <motion.div
          style={s.modal}
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div style={s.header}>
            <div style={s.headerMeta}>
              <p style={s.iconLabel}>{entry.fullTitle}</p>
              <div style={s.namePills}>
                <span style={s.pillFigma}>{entry.id}</span>
                <span style={s.pillGroup}>{GROUP_LABEL[entry.group]}</span>
              </div>
            </div>
            <button style={s.closeBtn} onClick={onClose}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1L11 11M11 1L1 11" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div style={s.rule} />

          {/* Stage */}
          <div style={s.stage}>
            <IconComponent size={previewSize} {...(variant === "avatar" ? { shape: "square" } : {})} />
          </div>

          <div style={s.rule} />

          {/* Props */}
          <div style={s.props}>
            <p style={s.sectionLabel}>PROPS</p>

            {/* variant */}
            <PropRow label="variant" hint="rendering style">
              <div style={s.toggle}>
                {availableVariants.map((v) => (
                  <button
                    key={v}
                    style={{ ...s.toggleBtn, ...(variant === v ? s.toggleBtnActive : {}) }}
                    onClick={() => setVariant(v)}
                  >
                    {v === "color" ? "Color" : v === "mono" ? "Mono" : "Avatar"}
                  </button>
                ))}
              </div>
            </PropRow>

            {/* size */}
            <PropRow label="size" hint={`${previewSize}px`}>
              <input
                type="range"
                min={24}
                max={160}
                value={previewSize}
                onChange={(e) => setPreviewSize(Number(e.target.value))}
                style={s.slider}
              />
            </PropRow>
          </div>

          <div style={s.rule} />

          {/* Code */}
          <div style={s.codeWrap}>
            <code style={s.code}>{codeSnippet}</code>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function PropRow({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div style={pr.row}>
      <div style={pr.labelWrap}>
        <span style={pr.label}>{label}</span>
        {hint && <span style={pr.hint}>{hint}</span>}
      </div>
      <div style={pr.control}>{children}</div>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  backdrop: {
    position: "fixed", inset: 0,
    background: "rgba(0,0,0,0.75)",
    backdropFilter: "blur(6px)",
    display: "flex", alignItems: "center", justifyContent: "center",
    zIndex: 100,
  },
  modal: {
    background: "#111",
    border: "1px solid #1f1f1f",
    borderRadius: 14,
    width: 380,
    overflow: "hidden",
  },
  header: {
    display: "flex", alignItems: "flex-start", justifyContent: "space-between",
    padding: "18px 20px 16px",
  },
  iconLabel: { fontSize: 15, fontWeight: 600, color: "#fff", letterSpacing: "-0.01em", marginBottom: 6 },
  headerMeta: { display: "flex", flexDirection: "column", gap: 0 },
  namePills: { display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" as const },
  pillFigma: {
    fontSize: 10, fontFamily: "monospace", color: "#666",
    background: "#0f0f0f", border: "1px solid #222",
    borderRadius: 4, padding: "2px 6px",
  },
  pillGroup: {
    fontSize: 10, fontFamily: "monospace", color: "#444",
    background: "#0f0f0f", border: "1px solid #1a1a1a",
    borderRadius: 4, padding: "2px 6px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.04em",
  },
  closeBtn: {
    width: 26, height: 26, background: "transparent", border: "none",
    borderRadius: 6, cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  rule: { height: 1, background: "#1a1a1a" },
  stage: {
    minHeight: 180,
    display: "flex", alignItems: "center", justifyContent: "center",
    background: "#0a0a0a",
  },
  props: { padding: "14px 20px", display: "flex", flexDirection: "column", gap: 2 },
  sectionLabel: { fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: "#333", marginBottom: 8 },
  slider: { width: 120, accentColor: "#fff", cursor: "pointer" },
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
  codeWrap: { padding: "12px 20px" },
  code: {
    display: "block", fontSize: 11, color: "#666", fontFamily: "monospace",
    background: "#0a0a0a", border: "1px solid #1a1a1a",
    borderRadius: 6, padding: "8px 12px", wordBreak: "break-all",
  },
};

const pr: Record<string, React.CSSProperties> = {
  row: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "8px 0", borderBottom: "1px solid #161616",
  },
  labelWrap: { display: "flex", alignItems: "baseline", gap: 8 },
  label: { fontSize: 12, fontWeight: 500, color: "#ccc" },
  hint: { fontSize: 11, color: "#3a3a3a" },
  control: { display: "flex", alignItems: "center" },
};
