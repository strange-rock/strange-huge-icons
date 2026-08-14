/**
 * Verifies `<Icon name="…" />` draws exactly what the legacy component draws.
 *
 * Both are server-rendered and compared element by element on the attributes
 * that affect pixels (geometry, paint, caps/joins, viewBox, size). Attributes
 * that only exist to drive animation (pathLength, dash offsets, inline
 * transform-origin) are ignored, since the resting frame is identical.
 *
 * Run: node scripts/verify-icon-parity.mjs
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const TMP = resolve(ROOT, ".tmp-verify");
const COLOR = "__COLOR__";

const PAINT_ATTRS = [
  "d",
  "cx",
  "cy",
  "r",
  "stroke",
  "fill",
  "stroke-width",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "fill-rule",
  "clip-rule",
  "opacity",
];

mkdirSync(TMP, { recursive: true });
writeFileSync(
  resolve(TMP, "entry.tsx"),
  `import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as Icons from "../src/icons/index";
import { Icon } from "../src/Icon";
import { CANONICAL_MAP } from "../src/registry";

export function renderPairs() {
  const out = {};
  for (const [canonical, component] of Object.entries(CANONICAL_MAP)) {
    out[canonical] = {
      component,
      legacy: renderToStaticMarkup(
        React.createElement(Icons[component], { color: "${COLOR}" })
      ),
      universal: renderToStaticMarkup(
        React.createElement(Icon, { name: canonical, color: "${COLOR}" })
      ),
    };
  }
  return out;
}
`
);

execFileSync(
  "npx",
  [
    "esbuild",
    resolve(TMP, "entry.tsx"),
    "--bundle",
    "--format=esm",
    "--platform=node",
    "--external:react",
    "--external:react-dom",
    "--external:framer-motion",
    `--outfile=${resolve(TMP, "bundle.mjs")}`,
    "--log-level=warning",
  ],
  { cwd: ROOT, stdio: "inherit" }
);

const { renderPairs } = await import(pathToFileURL(resolve(TMP, "bundle.mjs")).href);

function attrsOf(raw) {
  const attrs = {};
  for (const m of raw.matchAll(/([a-zA-Z-]+)="([^"]*)"/g)) attrs[m[1]] = m[2];
  return attrs;
}

/** Circles and their two-arc path equivalent must compare equal. */
function normalizeShape(tag, attrs) {
  if (tag !== "circle") return attrs.d;
  const [x, y, r] = [Number(attrs.cx), Number(attrs.cy), Number(attrs.r)];
  return `M${x - r} ${y}A${r} ${r} 0 1 0 ${x + r} ${y}A${r} ${r} 0 1 0 ${x - r} ${y}Z`;
}

function normalize(markup) {
  const root = attrsOf(markup.match(/^<svg([^>]*)>/)[1]);
  const inner = markup.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "");
  const shapes = [];

  for (const el of inner.matchAll(/<(path|circle)([^>]*?)\/?>/g)) {
    const attrs = attrsOf(el[2]);
    const shape = { d: normalizeShape(el[1], attrs) };
    for (const key of PAINT_ATTRS) {
      if (key === "d" || key === "cx" || key === "cy" || key === "r") continue;
      if (attrs[key] !== undefined) shape[key] = attrs[key];
    }
    // SVG defaults, spelled out so an omitted attribute compares equal to an
    // explicitly-set default.
    shape.fill ??= "none";
    shape["stroke-width"] ??= "1";
    shape["stroke-linecap"] ??= "butt";
    shape["stroke-linejoin"] ??= "miter";
    shape.opacity ??= "1";
    // Key order is an artifact of how each renderer emits attributes.
    shapes.push(Object.fromEntries(Object.entries(shape).sort(([a], [b]) => a.localeCompare(b))));
  }

  return JSON.stringify({
    viewBox: root.viewBox,
    width: root.width,
    height: root.height,
    shapes,
  });
}

const pairs = renderPairs();
const failures = [];

for (const [canonical, { component, legacy, universal }] of Object.entries(pairs)) {
  const a = normalize(legacy);
  const b = normalize(universal);
  if (a !== b) failures.push({ canonical, component, legacy: a, universal: b });
}

rmSync(TMP, { recursive: true, force: true });

console.log(`compared ${Object.keys(pairs).length} icons`);
if (!failures.length) {
  console.log("all icons render identically via <Icon name=…> and the legacy component");
  process.exit(0);
}

for (const f of failures) {
  let i = 0;
  while (i < f.legacy.length && f.legacy[i] === f.universal[i]) i++;
  const from = Math.max(0, i - 120);
  console.log(`\nMISMATCH ${f.canonical} (${f.component}) at char ${i}`);
  console.log("  legacy   :", f.legacy.slice(from, i + 200));
  console.log("  universal:", f.universal.slice(from, i + 200));
}
process.exit(1);
