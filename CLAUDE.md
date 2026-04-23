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
5. **Build**: `npm run build`
6. **Verify** the paths match the source SVG exactly (see verification section below)

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

## Project structure

```
src/
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
