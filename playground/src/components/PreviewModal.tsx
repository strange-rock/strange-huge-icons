import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IconProps } from "@strange-huge/icons";

interface PreviewModalProps {
  name: string;
  Component: React.ComponentType<IconProps & { variant?: string }>;
  color: string;
  onClose: () => void;
}

export function PreviewModal({ name, Component, color, onClose }: PreviewModalProps) {
  const [previewSize, setPreviewSize] = useState(64);
  const label = toLabel(name);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

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
            <div>
              <p style={s.iconLabel}>{label}</p>
              <p style={s.iconExport}>{name}</p>
            </div>
            <button style={s.closeBtn} onClick={onClose} aria-label="Close">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1L11 11M11 1L1 11" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* ── Divider ── */}
          <div style={s.rule} />

          {/* ── Variants section ── */}
          <div style={s.section}>
            <p style={s.sectionLabel}>VARIANTS</p>
            <div style={s.variantRow}>
              <VariantCard
                Component={Component}
                color={color}
                size={previewSize}
                variant="slide-out"
                label="Slide Out"
                description='hover → slides out left'
                codeProp={`variant="slide-out"`}
              />
              <VariantCard
                Component={Component}
                color={color}
                size={previewSize}
                variant="slide-in"
                label="Slide In"
                description='hover → slides in from left'
                codeProp={`variant="slide-in"`}
              />
            </div>
          </div>

          {/* ── Divider ── */}
          <div style={s.rule} />

          {/* ── Size section ── */}
          <div style={s.section}>
            <p style={s.sectionLabel}>SIZE</p>
            <div style={s.sizeRow}>
              <input
                type="range"
                min={24}
                max={140}
                value={previewSize}
                onChange={(e) => setPreviewSize(Number(e.target.value))}
                style={s.slider}
              />
              <span style={s.sizeValue}>{previewSize}px</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function VariantCard({
  Component,
  color,
  size,
  variant,
  label,
  description,
  codeProp,
}: {
  Component: React.ComponentType<IconProps & { variant?: string }>;
  color: string;
  size: number;
  variant: string;
  label: string;
  description: string;
  codeProp: string;
}) {
  return (
    <div style={vc.wrap}>
      <div style={vc.stage}>
        <Component size={size} color={color} variant={variant} />
      </div>
      <div style={vc.meta}>
        <p style={vc.label}>{label}</p>
        <p style={vc.desc}>{description}</p>
        <code style={vc.code}>{codeProp}</code>
      </div>
    </div>
  );
}

function toLabel(name: string) {
  return name
    .replace(/Icon$/, "")
    .replace(/([A-Z])/g, " $1")
    .trim();
}

const s: Record<string, React.CSSProperties> = {
  backdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.75)",
    backdropFilter: "blur(6px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  modal: {
    background: "#111",
    border: "1px solid #1f1f1f",
    borderRadius: 14,
    width: 460,
    overflow: "hidden",
  },
  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "20px 20px 18px",
  },
  iconLabel: {
    fontSize: 15,
    fontWeight: 600,
    color: "#fff",
    letterSpacing: "-0.01em",
    marginBottom: 3,
  },
  iconExport: {
    fontSize: 11,
    color: "#3a3a3a",
    fontFamily: "monospace",
  },
  closeBtn: {
    width: 26,
    height: 26,
    background: "transparent",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  rule: {
    height: 1,
    background: "#1a1a1a",
  },
  section: {
    padding: "16px 20px",
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: "0.08em",
    color: "#3a3a3a",
    marginBottom: 12,
  },
  variantRow: {
    display: "flex",
    gap: 10,
  },
  sizeRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  slider: {
    flex: 1,
    accentColor: "#fff",
    cursor: "pointer",
  },
  sizeValue: {
    fontSize: 12,
    color: "#555",
    minWidth: 36,
    textAlign: "right",
  },
};

const vc: Record<string, React.CSSProperties> = {
  wrap: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  stage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0a0a0a",
    borderRadius: 10,
    minHeight: 110,
    backgroundImage: "radial-gradient(circle, #1a1a1a 1px, transparent 1px)",
    backgroundSize: "14px 14px",
  },
  meta: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  label: {
    fontSize: 12,
    fontWeight: 600,
    color: "#ccc",
  },
  desc: {
    fontSize: 11,
    color: "#444",
    lineHeight: 1.4,
  },
  code: {
    fontSize: 10,
    color: "#555",
    fontFamily: "monospace",
    background: "#0a0a0a",
    border: "1px solid #1f1f1f",
    borderRadius: 4,
    padding: "3px 6px",
    display: "inline-block",
    marginTop: 2,
  },
};
