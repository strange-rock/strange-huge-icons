# @strange-huge/icons — Claude Instructions

## What this repo is

A custom animated SVG icon library for the Kaya Design System. Icons are React components built with `framer-motion`, sourced from the HugeIcons **stroke-rounded** variant.

Install in other projects via:
```
npm install strange-rock/strange-huge-icons
```

---

## Icon source — CRITICAL

**All icons must come from the HugeIcons stroke-rounded set.**

The authoritative source for correct SVG paths is the local clone at `/tmp/hugeicons-svg/svg/stroke-rounded/`. If that doesn't exist, re-clone it:

```bash
git clone --depth 1 https://github.com/anhthang/hugeicons-svg.git /tmp/hugeicons-svg
```

This repo mirrors the official HugeIcons stroke-rounded SVGs and has ~5000 icons. **Always use this as the source of truth for path data — never copy paths from Figma asset exports, `@hugeicons/core-free-icons`, or any other source.**

### Why not `@hugeicons/core-free-icons`?

That npm package only contains ~20 icons and has been verified correct for those specific icons. It is not a reliable general source.

### Why not Figma SVG exports?

Figma exports use `fill="var(--fill-0, white)"` filled variants — they are not the stroke-rounded paths and will look completely wrong.

---

## Figma → HugeIcons name mapping

Icons in Figma use kebab-case with a `#` suffix: `arrow-down-01#`. Strip the `#` to get the SVG filename in the stroke-rounded repo: `arrow-down-01.svg`.

Convert to PascalCase for the TSX component name:
- `arrow-down-01` → `ArrowDownOneIcon`
- `bubble-chat-edit` → `BubbleChatEditIcon`
- `quill-write-02` → `QuillWriteTwoIcon`
- `workflow-square-10` → `WorkflowSquareTenIcon`

Number words: 01→One, 02→Two, 03→Three, 04→Four, 10→Ten, etc.

---

## Icon component pattern

Every icon follows this exact pattern — no exceptions:

```tsx
import { motion } from "framer-motion";
import type { IconProps } from "../types";

export function ExampleIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}: IconProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      {...props}
    >
      <path
        d="..."
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
```

Rules:
- `stroke={color}` — never hardcode a color value
- `strokeWidth="1.5"` — always 1.5, never 2 or other values
- `fill="none"` on the svg root
- `viewBox="0 0 24 24"` — all HugeIcons stroke-rounded use this
- For `<circle>` elements: use `stroke={color} strokeWidth="1.5"`, no fill
- Static icons: `animated` and `triggered` are prefixed with `_` to suppress unused-var warnings
- Animated icons: use framer-motion `animate`, `whileHover`, `variants` etc. as needed

---

## Adding new icons

1. **Identify the icon name from Figma** — get the node name (e.g. `copy-01#`), strip the `#`
2. **Find the SVG** at `/tmp/hugeicons-svg/svg/stroke-rounded/copy-01.svg`
3. **Create the TSX file** at `src/icons/CopyOneIcon.tsx` following the pattern above
4. **Export it** in `src/icons/index.ts`
5. **Register a canonical name** in `src/registry.ts` (`copy: "CopyOneIcon"`)
6. **Regenerate path data**: `node scripts/extract-hugeicons.mjs`
7. **Build**: `npm run build`
8. **Verify** the paths match the source SVG exactly (see verification section below), then
   `node scripts/verify-icon-parity.mjs`

---

## Verifying icon paths

After adding icons, verify them against the stroke-rounded source:

```bash
# Compare a single icon
our_paths=$(grep -oP '(?<=d=")[^"]+' src/icons/CopyOneIcon.tsx | sort)
ref_paths=$(grep -oP '(?<=d=")[^"]+' /tmp/hugeicons-svg/svg/stroke-rounded/copy-01.svg | sort)
[ "$our_paths" = "$ref_paths" ] && echo "OK" || echo "MISMATCH"
```

Or run a batch check across all icons by mapping TSX names to slugs and diffing.

Known past mistakes that were caught and fixed:
- `BubbleChatEditIcon` — was sourced from wrong variant (had floating pencil), correct is inline pencil inside bubble
- `CalendarThreeIcon` — day dots used simplified paths, correct uses precise circle definitions
- `StickyNoteTwoIcon` — was a tilted/rotated variant, correct is upright sticky note
- `DownloadOneIcon` — was circular download indicator, correct is tray-style icon

---

## The `<Icon>` API — canonical names

Alongside the named exports there's a library-agnostic API: app code asks for a
*concept* (`search`), not a HugeIcons component (`SearchOneIcon`). That's what lets
us swap icon libraries or styles later without touching call sites. Full design
rationale lives in `ICON-ARCHITECTURE.md`.

```tsx
import { Icon, IconProvider } from "@strange-huge/icons";

// App root — picks the active library + style for everything below it
<IconProvider library="hugeicons" style="stroke">
  <App />
</IconProvider>

<Icon name="search" size={20} />
<Icon name="settings" size={24} animated />
<Icon name="chat" size={16} color="var(--icon-default)" />
```

Both APIs render identical SVG — `<Icon name="search" />` and `<SearchOneIcon />`
are the same pixels. The named exports are not going away; migrate gradually.

### How it fits together

| File | Role |
| --- | --- |
| `src/registry.ts` | canonical name → component name, `IconName` union, `ICON_NAMES` |
| `src/libraries/hugeicons/stroke.ts` | **generated** path data keyed by canonical name |
| `src/libraries/types.ts` | `PathData` / `IconData` — the data format every adapter emits |
| `src/resolver.ts` | picks the path set for the active library + style, with fallbacks |
| `src/IconProvider.tsx` | React context holding `{ library, style }` |
| `src/Icon.tsx` | renders path data, or delegates to a custom component |
| `src/animations/index.ts` | per-canonical-name animation defs + custom component map |

### Generated path data — don't hand-edit

`src/libraries/hugeicons/stroke.ts` is produced by `node scripts/extract-hugeicons.mjs`,
which server-renders every component in `src/icons/` and reads the geometry back out.
Edit the component, then regenerate. `node scripts/verify-icon-parity.mjs` renders both
APIs and fails if any icon differs — run it after touching icons, the registry, or `Icon.tsx`.

### Animations stay library-agnostic

Whole-icon transforms (scale bounce, nudge, spin) live as data in `ANIMATIONS`, so they
work with any library's paths. Icons that animate individual elements — the sidebar's
staggered slide, the chat bubble's dot reveal — stay as hand-built components listed in
`CUSTOM_COMPONENTS`; `<Icon>` delegates to those when `animated`/`triggered` is set.

Six icons can't be expressed as flat path data at all (clip paths, groups, fixed
palettes): `image`, `logo`, `sidebar-left`, `sidebar-right`, `eye`, `folder`. `<Icon>`
always renders their component. The extractor reports this list when it runs — if it
grows, that's expected, not a bug.

---

## Project structure

```
src/
  Icon.tsx       # Universal <Icon name="…" /> component
  IconProvider.tsx
  registry.ts    # Canonical names
  resolver.ts    # Library + style lookup
  animations/    # Animation defs + custom component map
  libraries/     # Path data adapters (hugeicons today, pika/nucleo later)
  icons/         # One TSX file per icon
  index.ts       # Re-exports everything from src/icons/
  types.ts       # IconProps interface
dist/            # Built output (committed, used by npm install from GitHub)
playground/      # Vite dev app for visual preview
  src/App.tsx    # Imports * from @strange-huge/icons (aliased to ../src/index.ts)
  vite.config.ts # Alias: @strange-huge/icons → ../src/index.ts (live source, no build needed)
```

## Build & playground

```bash
npm run build          # Build dist/ with tsup (ESM + CJS + types)
cd playground && npm run dev   # Start playground at localhost:5173
```

The playground reads live from `src/` via Vite alias — no build needed to see changes in the playground. If icons look stale, clear Vite's cache:

```bash
rm -rf playground/node_modules/.vite
# then restart the playground dev server
```

## Deploying / installing in KDS

After changes, build and push to GitHub. In the Kaya Design System:

```bash
npm install strange-rock/strange-huge-icons
```

This pulls the latest `main` branch including the committed `dist/`.
