/**
 * Generates src/libraries/hugeicons/stroke.ts from the legacy icon components.
 *
 * How it works: every component in src/icons is server-rendered with a sentinel
 * color, then the resulting SVG markup is parsed into plain path data. Rendering
 * (instead of parsing the TSX) means the extracted geometry is exactly what the
 * legacy component draws in its resting state.
 *
 * Icons whose appearance can't be expressed as a flat list of paths (clip paths,
 * groups with transforms, hardcoded palettes) are skipped — those stay as custom
 * components, see src/animations/index.ts.
 *
 * Run: node scripts/extract-hugeicons.mjs
 */
import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync, writeFileSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const TMP = resolve(ROOT, ".tmp-extract");
const OUT = resolve(ROOT, "src/libraries/hugeicons/stroke.ts");
const COLOR = "__COLOR__";

/** Attributes that only exist to drive animation — geometry is unaffected. */
const IGNORED_ATTRS = new Set([
  "pathLength",
  "stroke-dasharray",
  "stroke-dashoffset",
  "style",
  "xmlns",
  "width",
  "height",
]);

// ---------------------------------------------------------------- render pass

function renderAll() {
  mkdirSync(TMP, { recursive: true });
  writeFileSync(
    resolve(TMP, "entry.tsx"),
    `import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as Icons from "../src/icons/index";

export function renderAll() {
  const out = {};
  for (const [name, Comp] of Object.entries(Icons)) {
    out[name] = renderToStaticMarkup(React.createElement(Comp, { color: "${COLOR}" }));
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

  return import(pathToFileURL(resolve(TMP, "bundle.mjs")).href).then((m) => m.renderAll());
}

// ----------------------------------------------------------------- parse pass

function attrsOf(raw) {
  const attrs = {};
  for (const m of raw.matchAll(/([a-zA-Z-]+)="([^"]*)"/g)) attrs[m[1]] = m[2];
  return attrs;
}

/** A stroked/filled circle renders identically to two half-arc path segments. */
function circleToPath({ cx, cy, r }) {
  const x = Number(cx);
  const y = Number(cy);
  const rad = Number(r);
  return `M${x - rad} ${y}A${rad} ${rad} 0 1 0 ${x + rad} ${y}A${rad} ${rad} 0 1 0 ${x - rad} ${y}Z`;
}

function parseIcon(markup) {
  const svgOpen = markup.match(/^<svg([^>]*)>/);
  const root = attrsOf(svgOpen[1]);
  const inner = markup.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "");

  // Anything structural (clip paths, groups, gradients) can't be flattened.
  if (/<(defs|clipPath|g|linearGradient|radialGradient|mask|use)\b/.test(inner)) return null;

  const paths = [];
  for (const el of inner.matchAll(/<(path|circle)([^>]*?)\/?>/g)) {
    const tag = el[1];
    const attrs = attrsOf(el[2]);

    // Hardcoded colors can't follow the `color` prop — icon stays custom.
    for (const key of ["stroke", "fill"]) {
      const v = attrs[key];
      if (v && v !== COLOR && v !== "none") return null;
    }

    const path = { d: tag === "circle" ? circleToPath(attrs) : attrs.d };

    if (attrs.stroke !== COLOR) path.stroke = false;
    if (attrs.fill === COLOR) path.fill = true;

    const width = attrs["stroke-width"];
    if (width && Number(width) !== 1.5) path.strokeWidth = Number(width);

    // The renderer applies round caps/joins by default; record the SVG defaults
    // explicitly where the source omitted them so output stays pixel-identical.
    if (attrs.stroke === COLOR) {
      const cap = attrs["stroke-linecap"] ?? "butt";
      const join = attrs["stroke-linejoin"] ?? "miter";
      if (cap !== "round") path.strokeLinecap = cap;
      if (join !== "round") path.strokeLinejoin = join;
    }

    if (attrs["fill-rule"]) path.fillRule = attrs["fill-rule"];
    if (attrs["clip-rule"]) path.clipRule = attrs["clip-rule"];
    if (attrs["stroke-miterlimit"]) path.strokeMiterlimit = Number(attrs["stroke-miterlimit"]);
    if (attrs.opacity !== undefined) path.opacity = Number(attrs.opacity);

    for (const key of Object.keys(attrs)) {
      if (IGNORED_ATTRS.has(key)) continue;
      const known = [
        "d",
        "cx",
        "cy",
        "r",
        "stroke",
        "fill",
        "stroke-width",
        "stroke-linecap",
        "stroke-linejoin",
        "fill-rule",
        "clip-rule",
        "stroke-miterlimit",
        "opacity",
      ];
      if (!known.includes(key)) {
        throw new Error(`unhandled attribute "${key}" on <${tag}>`);
      }
    }

    paths.push(path);
  }

  if (!paths.length) return null;

  const icon = { paths };
  if (root.viewBox !== "0 0 24 24") icon.viewBox = root.viewBox;
  if (root.width && Number(root.width) !== 24) icon.defaultSize = Number(root.width);
  return icon;
}

// ------------------------------------------------------------------ code gen

function serialize(obj) {
  const parts = Object.entries(obj).map(([key, value]) => `${key}: ${JSON.stringify(value)}`);
  return `{ ${parts.join(", ")} }`;
}

function generate(icons) {
  const lines = [
    "/**",
    " * HugeIcons — stroke-rounded path data.",
    " *",
    " * GENERATED FILE — do not edit by hand.",
    " * Run `node scripts/extract-hugeicons.mjs` to regenerate from src/icons.",
    " */",
    'import type { IconData } from "../types";',
    "",
    "export const PATHS: Record<string, IconData> = {",
  ];

  for (const [name, data] of Object.entries(icons)) {
    lines.push(`  "${name}": {`);
    lines.push("    paths: [");
    for (const p of data.paths) lines.push(`      ${serialize(p)},`);
    lines.push("    ],");
    if (data.viewBox) lines.push(`    viewBox: "${data.viewBox}",`);
    if (data.defaultSize) lines.push(`    defaultSize: ${data.defaultSize},`);
    lines.push("  },");
  }

  lines.push("};", "");
  return lines.join("\n");
}

// ----------------------------------------------------------------------- main

const registry = readFileSync(resolve(ROOT, "src/registry.ts"), "utf8");
const canonicalOf = Object.fromEntries(
  [...registry.matchAll(/^ {2}"?([a-z0-9-]+)"?: "(\w+Icon)",$/gm)].map((m) => [m[2], m[1]])
);

const rendered = await renderAll();
const icons = {};
const skipped = [];

for (const [component, markup] of Object.entries(rendered)) {
  const canonical = canonicalOf[component];
  if (!canonical) throw new Error(`${component} is missing from src/registry.ts`);
  const data = parseIcon(markup);
  if (data) icons[canonical] = data;
  else skipped.push(canonical);
}

const sorted = Object.fromEntries(Object.entries(icons).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(OUT, generate(sorted));
rmSync(TMP, { recursive: true, force: true });

console.log(`extracted ${Object.keys(sorted).length} icons → ${OUT.replace(ROOT + "/", "")}`);
console.log(`custom-only (not flattenable): ${skipped.sort().join(", ")}`);
