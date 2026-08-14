/**
 * Fails when the Figma icons page and src/registry.ts have drifted apart.
 *
 * Reports both directions:
 *   - on the Figma page but not in code  → an icon someone added in design
 *   - in code but not on the Figma page  → a component that was renamed or removed
 *
 * Usage:
 *   node scripts/verify-icon-figma-parity.mjs --file <fileKey> [--page Icons] [--json]
 *
 * Config (CLI flag wins over env, env over .env):
 *   FIGMA_TOKEN            personal access token, required
 *   FIGMA_ICONS_FILE_KEY   file key of the Figma file holding the icons page
 *   FIGMA_ICONS_PAGE       page name to read (default: matches /^icons?$/i)
 *
 * Figma names carry a `#` suffix (`arrow-down-01#`); code names are PascalCase
 * (`ArrowDownOneIcon`). The bridge between them is derived mechanically, with
 * FIGMA_NAME_OVERRIDES for the icons that don't follow the pattern. Setting an
 * override to null means "no component expected on the icons page" — that's how
 * custom artwork (logo, solar-*) opts out.
 */
import { readFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const NUMBER_WORDS = {
  one: "01",
  two: "02",
  three: "03",
  four: "04",
  five: "05",
  six: "06",
  seven: "07",
  eight: "08",
  nine: "09",
  ten: "10",
  eleven: "11",
  twelve: "12",
};

/**
 * Canonical name → name on the Figma icons page (without the `#` suffix).
 * null = intentionally absent from the page (custom artwork, not a HugeIcon).
 *
 * Unconfirmed derivations — the first live run will show whether these match the
 * page, and the right names belong here once known:
 *   bookmark-filled → "bookmark-02-solid"? (paths are identical to bookmark-02,
 *                     drawn filled — may just be bookmark-02 with a fill prop)
 *   clubs           → "clubs-shape"? (no such HugeIcon; clubs-01/02 exist)
 *   spade           → "spade"? (the HugeIcon is named "spades")
 *   chess-knight, chess-rook → no HugeIcon by that name; drawn in-house
 */
const FIGMA_NAME_OVERRIDES = {
  logo: null,
  "solar-blob": null,
  "solar-comet": null,
  "solar-organic": null,
  "solar-ring": null,
  "solar-system": null,
  "manage-teams": null,
  "personal-projects": null,
};

// ------------------------------------------------------------------- config

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--json") args.json = true;
    else if (arg === "--file") args.file = argv[++i];
    else if (arg === "--page") args.page = argv[++i];
  }
  return args;
}

function loadDotEnv() {
  const path = resolve(ROOT, ".env");
  if (!existsSync(path)) return {};
  const env = {};
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return env;
}

// ----------------------------------------------------------------- registry

/** "ArrowDownOneIcon" → "arrow-down-01" */
export function toFigmaName(componentName) {
  return componentName
    .replace(/Icon$/, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Za-z])(\d)/g, "$1 $2")
    .split(" ")
    .filter(Boolean)
    .map((word) => NUMBER_WORDS[word.toLowerCase()] ?? word.toLowerCase())
    .join("-");
}

export function readRegistry() {
  const src = readFileSync(resolve(ROOT, "src/registry.ts"), "utf8");
  const entries = [...src.matchAll(/^ {2}"?([a-z0-9-]+)"?: "(\w+Icon)",$/gm)];
  if (!entries.length) throw new Error("could not parse src/registry.ts");

  return entries.map(([, canonical, component]) => ({
    canonical,
    component,
    figma:
      canonical in FIGMA_NAME_OVERRIDES
        ? FIGMA_NAME_OVERRIDES[canonical]
        : toFigmaName(component),
  }));
}

// -------------------------------------------------------------------- figma

async function figmaGet(path, token) {
  const res = await fetch(`https://api.figma.com/v1${path}`, {
    headers: { "X-Figma-Token": token },
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(
      `Figma API ${res.status}: ${body.err ?? body.message ?? res.statusText}`
    );
  }
  return body;
}

function findIconsPage(document, wanted) {
  const pages = document.children ?? [];
  const match = wanted
    ? pages.find((p) => p.name.toLowerCase() === wanted.toLowerCase())
    : pages.find((p) => /^icons?$/i.test(p.name.trim()));
  if (match) return match;

  const names = pages.map((p) => p.name).join(", ");
  throw new Error(
    wanted
      ? `no page named "${wanted}" in this file. Pages: ${names}`
      : `no page matching /^icons?$/i in this file. Pages: ${names}. ` +
        `Pass --page <name> to pick one.`
  );
}

/** Component and component-set names anywhere under a node. */
export function collectComponentNames(node, found = []) {
  if (node.type === "COMPONENT" || node.type === "COMPONENT_SET") {
    found.push(node.name);
    return found; // variants inside a set aren't separate icons
  }
  for (const child of node.children ?? []) collectComponentNames(child, found);
  return found;
}

/** Figma layer name → comparable name: drops the `#` suffix and whitespace. */
export function normalizeFigmaName(name) {
  return name.trim().replace(/#$/, "").trim().toLowerCase();
}

// --------------------------------------------------------------------- main

export async function run({ fileKey, token, page, fetchPage }) {
  const registry = readRegistry();

  const pageNode = await fetchPage({ fileKey, token, page });
  const figmaNames = [...new Set(collectComponentNames(pageNode).map(normalizeFigmaName))];

  const expected = new Map();
  for (const entry of registry) {
    if (entry.figma) expected.set(entry.figma, entry);
  }

  const missingFromCode = figmaNames.filter((name) => !expected.has(name)).sort();
  const missingFromFigma = [...expected.values()]
    .filter((entry) => !figmaNames.includes(entry.figma))
    .sort((a, b) => a.canonical.localeCompare(b.canonical));
  const optedOut = registry.filter((e) => e.figma === null).map((e) => e.canonical);

  return {
    page: pageNode.name,
    figmaCount: figmaNames.length,
    registryCount: registry.length,
    expectedOnPage: expected.size,
    optedOut,
    missingFromCode,
    missingFromFigma,
    inSync: missingFromCode.length === 0 && missingFromFigma.length === 0,
  };
}

async function fetchPageFromApi({ fileKey, token, page }) {
  // depth=1 lists pages only — cheap way to resolve the icons page id first.
  const shallow = await figmaGet(`/files/${fileKey}?depth=1`, token);
  const target = findIconsPage(shallow.document, page);
  const full = await figmaGet(
    `/files/${fileKey}/nodes?ids=${encodeURIComponent(target.id)}`,
    token
  );
  const node = full.nodes?.[target.id]?.document;
  if (!node) throw new Error(`could not read page "${target.name}" (${target.id})`);
  return node;
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
  const args = parseArgs(process.argv.slice(2));
  const dotenv = loadDotEnv();
  const token = process.env.FIGMA_TOKEN ?? dotenv.FIGMA_TOKEN;
  const fileKey =
    args.file ?? process.env.FIGMA_ICONS_FILE_KEY ?? dotenv.FIGMA_ICONS_FILE_KEY;
  const page = args.page ?? process.env.FIGMA_ICONS_PAGE ?? dotenv.FIGMA_ICONS_PAGE;

  if (!token) {
    console.error(
      "FIGMA_TOKEN is not set. Add it to .env (gitignored) or export it, then re-run."
    );
    process.exit(2);
  }
  if (!fileKey) {
    console.error(
      "No file key. Pass --file <key>, or set FIGMA_ICONS_FILE_KEY in .env."
    );
    process.exit(2);
  }

  let result;
  try {
    result = await run({ fileKey, token, page, fetchPage: fetchPageFromApi });
  } catch (err) {
    console.error(`figma parity check could not run: ${err.message}`);
    process.exit(2);
  }

  if (args.json) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log(
      `page "${result.page}": ${result.figmaCount} components · registry: ${result.registryCount} icons ` +
        `(${result.expectedOnPage} expected on the page, ${result.optedOut.length} custom)`
    );
    if (result.missingFromCode.length) {
      console.log(`\nOn the Figma page, missing from code (${result.missingFromCode.length}):`);
      for (const name of result.missingFromCode) console.log(`  ${name}#`);
    }
    if (result.missingFromFigma.length) {
      console.log(`\nIn code, missing from the Figma page (${result.missingFromFigma.length}):`);
      for (const e of result.missingFromFigma) {
        console.log(`  ${e.canonical.padEnd(26)} ${e.component} → expected "${e.figma}#"`);
      }
    }
    if (result.inSync) console.log("\nin sync — no drift");
  }

  process.exit(result.inSync ? 0 : 1);
}
