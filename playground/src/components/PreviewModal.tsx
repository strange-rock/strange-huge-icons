import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IconProps } from "@strange-huge/icons";
import { FIGMA_NAMES, VARIANTS, toLabel } from "../lib/iconMeta";

interface PreviewModalProps {
  name: string;
  Component: React.ComponentType<IconProps & { variant?: string }>;
  color: string;
  onClose: () => void;
}

export function PreviewModal({ name, Component, color, onClose }: PreviewModalProps) {
  const variants = VARIANTS[name] ?? [];
  const hasVariants = variants.length > 0;

  const [previewSize, setPreviewSize] = useState(64);
  const [animated, setAnimated]       = useState(true);
  const [triggered, setTriggered]     = useState(false);
  const [useTrigger, setUseTrigger]   = useState(false);
  const [variant, setVariant]         = useState(variants[0] ?? "");

  const label = toLabel(name);

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Build the code snippet
  const codeProps = [
    hasVariants         ? `variant="${variant}"` : null,
    animated            ? `animated`             : null,
    useTrigger          ? `triggered={${triggered}}` : null,
  ].filter(Boolean).join(" ");
  const codeSnippet = `<${name}${codeProps ? " " + codeProps : ""} />`;

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
          {/* ── Header ── */}
          <div style={s.header}>
            <div style={s.headerMeta}>
              <p style={s.iconLabel}>{label}</p>
              <div style={s.namePills}>
                {FIGMA_NAMES[name]
                  ? <span style={s.pillFigma}>{FIGMA_NAMES[name]}</span>
                  : <span style={s.pillCode}>{name}</span>
                }
              </div>
            </div>
            <button style={s.closeBtn} onClick={onClose}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1L11 11M11 1L1 11" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div style={s.rule} />

          {/* ── Preview stage ── */}
          <div style={s.stage}>
            <Component
              size={previewSize}
              color={color}
              animated={animated}
              triggered={useTrigger ? triggered : undefined}
              variant={variant || undefined}
            />
          </div>

          <div style={s.rule} />

          {/* ── Props ── */}
          <div style={s.props}>
            <p style={s.sectionLabel}>PROPS</p>

            {/* animated */}
            <PropRow label="animated" hint="enables hover animation">
              <Switch value={animated} onChange={setAnimated} />
            </PropRow>

            {/* variant */}
            {hasVariants && (
              <PropRow label="variant" hint="animation style">
                <Select
                  value={variant}
                  options={variants}
                  onChange={setVariant}
                />
              </PropRow>
            )}

            {/* triggered */}
            <PropRow label="triggered" hint="link to external state">
              <div style={s.triggerGroup}>
                <Switch value={useTrigger} onChange={setUseTrigger} />
                {useTrigger && (
                  <Switch value={triggered} onChange={setTriggered} accent />
                )}
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

          {/* ── Code snippet ── */}
          <div style={s.codeWrap}>
            <code style={s.code}>{codeSnippet}</code>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Sub-components ──

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

function Switch({ value, onChange, accent = false }: { value: boolean; onChange: (v: boolean) => void; accent?: boolean }) {
  return (
    <button
      role="switch"
      aria-checked={value}
      onClick={() => onChange(!value)}
      style={{
        ...sw.track,
        background: value ? (accent ? "#4ade80" : "#fff") : "#222",
      }}
    >
      <motion.span
        style={sw.thumb}
        animate={{ x: value ? 14 : 0 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
    </button>
  );
}

function Select({ value, options, onChange }: { value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={sel.select}
    >
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  );
}


// ── Styles ──

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
  pillCode: {
    fontSize: 10, fontFamily: "monospace", color: "#666",
    background: "#0f0f0f", border: "1px solid #222",
    borderRadius: 4, padding: "2px 6px",
  },
  pillFigma: {
    fontSize: 10, fontFamily: "monospace", color: "#444",
    background: "#0f0f0f", border: "1px solid #1a1a1a",
    borderRadius: 4, padding: "2px 6px",
    display: "flex", alignItems: "center", gap: 4,
  },
  closeBtn: {
    width: 26, height: 26, background: "transparent", border: "none",
    borderRadius: 6, cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  rule: { height: 1, background: "#1a1a1a" },
  stage: {
    minHeight: 140,
    display: "flex", alignItems: "center", justifyContent: "center",
    backgroundImage: "radial-gradient(circle, #1a1a1a 1px, transparent 1px)",
    backgroundSize: "14px 14px",
    background: "#0a0a0a",
  },
  props: { padding: "14px 20px", display: "flex", flexDirection: "column", gap: 2 },
  sectionLabel: { fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", color: "#333", marginBottom: 8 },
  triggerGroup: { display: "flex", alignItems: "center", gap: 8 },
  slider: { width: 120, accentColor: "#fff", cursor: "pointer" },
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

const sw: Record<string, React.CSSProperties> = {
  track: {
    width: 32, height: 18, borderRadius: 99,
    border: "none", cursor: "pointer", padding: 2,
    display: "flex", alignItems: "center",
    transition: "background 150ms ease",
    flexShrink: 0,
  },
  thumb: {
    width: 14, height: 14, borderRadius: "50%",
    background: "#000", display: "block", flexShrink: 0,
  },
};

const sel: Record<string, React.CSSProperties> = {
  select: {
    background: "#0f0f0f", border: "1px solid #2a2a2a",
    borderRadius: 6, color: "#ccc", fontSize: 12,
    padding: "4px 8px", cursor: "pointer", outline: "none",
  },
};
