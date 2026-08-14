# Icon System — Swappable Architecture

> Goal: Swap icon libraries (HugeIcons → Pika → Nucleo → any) or icon styles (stroke → solid → duotone) with a single config change. No component rewrites.

---

## Current Architecture (v0)

```
App code                          @strange-huge/icons
─────────                         ──────────────────
import { SearchOneIcon }    →     src/icons/SearchOneIcon.tsx
                                    └── HugeIcons stroke-rounded SVG paths
                                    └── framer-motion animation
                                    └── color="currentColor"
```

**Problem:** App is coupled to HugeIcons component names. Switching libraries = rewriting every import.

---

## Proposed Architecture (v1)

```
App code                    Registry              Source Libraries
─────────                   ──────────            ────────────────
import { Icon }       →     resolves "search"  →  hugeicons/  (active)
<Icon name="search" />      by config              pikaicons/  (available)
                                                    nucleo/     (available)
                                                    custom/     (your own)
```

### Three Layers

#### Layer 1: Canonical Names (`src/registry.ts`)
Library-agnostic icon names. Every icon in the system has ONE canonical name.

```ts
// These names never change, regardless of which library is active
export type IconName =
  | 'search' | 'settings' | 'user' | 'plus' | 'close'
  | 'arrow-up' | 'arrow-down' | 'arrow-left' | 'arrow-right'
  | 'chat' | 'chat-add' | 'chat-edit'
  | 'sidebar-left' | 'sidebar-right'
  | 'folder' | 'folder-add'
  | 'copy' | 'download' | 'upload'
  | 'check' | 'alert' | 'info'
  | 'bookmark' | 'star' | 'pin'
  | 'eye' | 'eye-off'
  | 'mic' | 'stop'
  | 'undo' | 'redo' | 'save' | 'delete'
  | 'link' | 'unlink'
  | 'expand' | 'collapse'
  // ... extend as needed
```

#### Layer 2: Library Adapters (`src/libraries/<name>/`)
Each adapter maps canonical names → that library's SVG paths or components.

```
src/libraries/
  hugeicons/
    stroke.ts      ← SVG paths for stroke-rounded
    solid.ts       ← SVG paths for solid-rounded (Pro only)
    duotone.ts     ← SVG paths for duotone-rounded (Pro only)
    index.ts       ← exports all styles
  pikaicons/
    stroke.ts
    solid.ts
    contrast.ts
    duo-stroke.ts
    duo-solid.ts
    index.ts
  nucleo/
    outline.ts
    fill.ts
    outline-duotone.ts
    fill-duotone.ts
    index.ts
```

Each file exports a `Record<IconName, PathData>`:
```ts
// src/libraries/hugeicons/stroke.ts
export const paths: Record<string, PathData> = {
  search: {
    paths: [
      { d: "M17 17L21 21", stroke: true },
      { d: "M19 11C19 6.58172...", stroke: true },
    ],
  },
  settings: {
    paths: [
      { d: "M21.3175 7.14139...", stroke: true },
      { d: "M15.5195 12C15.5195...", stroke: true },
    ],
  },
  // ...
}
```

#### Layer 3: Universal `<Icon>` Component
One component that resolves the right paths from the active library + style.

```tsx
import { IconProvider, Icon } from "@strange-huge/icons";

// App root — set the active library + style
<IconProvider library="hugeicons" style="stroke">
  <App />
</IconProvider>

// Anywhere in the app — same API regardless of library
<Icon name="search" size={20} />
<Icon name="settings" size={24} animated />
<Icon name="chat" size={16} color="var(--foreground-secondary)" />
```

**Swap the library:**
```tsx
// Change ONE prop, every icon in the app updates
<IconProvider library="pikaicons" style="stroke">
```

**Swap the style:**
```tsx
// Same library, different weight — e.g. sidebar uses filled, content uses stroke
<IconProvider library="hugeicons" style="solid">
```

---

## How Animations Work

Animations are **separate from paths**. They're defined per canonical name, not per library:

```ts
// src/animations/search.ts
export const searchAnimation = {
  type: 'scale-bounce',
  keyframes: { scale: [1, 0.88, 1.05, 1] },
  duration: 0.32,
}

// src/animations/sidebar-left.ts
export const sidebarLeftAnimation = {
  type: 'custom',
  // Complex per-element animations stay as custom components
}
```

Simple animations (scale bounce, rotate, fade) work with ANY library's paths.
Complex animations (SidebarLeft's staggered slide) need custom components — these override the generic `<Icon>` for specific names.

---

## Migration Path

### Phase 1: Registry (now, free)
- [x] Define canonical icon names for the ~143 icons we have
- [x] Create the HugeIcons stroke adapter from existing components
- [x] Build the `<Icon name="..." />` component
- [x] Existing named exports still work (`SearchOneIcon` etc.)

### Phase 2: Compare (free)
- [ ] Add Pikaicons free stroke adapter (537 icons)
- [ ] Build comparison playground with A/B toggle
- [ ] Evaluate: consistency, weight, readability at 16px, style match with Geist

### Phase 3: Decide + Buy
- [ ] Pick the primary library
- [ ] If HugeIcons Pro ($99/yr): unlock 10 styles, add solid/duotone adapters
- [ ] If Pikaicons Solo ($99 lifetime): add all 5 styles
- [ ] If Nucleo UI ($99 lifetime): add outline/fill adapters

### Phase 4: Multi-Style (post-decision)
- [ ] Add filled/solid adapter for sidebar active states
- [ ] Add duotone adapter for empty states, onboarding
- [ ] Connect to Kaya DS icon tokens (`icon/default`, `icon/active`, etc.)

---

## Kaya DS Token Integration

```css
/* Icon semantic tokens — added to 02_Semantic */
--icon-default:    var(--foreground-secondary);
--icon-hover:      var(--foreground-primary);
--icon-active:     var(--accent-base);
--icon-muted:      var(--foreground-muted);
--icon-on-accent:  var(--foreground-on-accent);
--icon-danger:     var(--danger-foreground);
--icon-success:    var(--success-foreground);
--icon-warning:    var(--warning-foreground);

/* Icon size scale — added to 03_Typography or new collection */
--icon-xs:  12px;
--icon-sm:  16px;
--icon-md:  20px;
--icon-lg:  24px;
--icon-xl:  32px;
```

Components use these tokens:
```tsx
// Sidebar icon uses icon/default, icon/active
<Icon name="chat" color="var(--icon-default)" size="var(--icon-sm)" />

// Active sidebar item
<Icon name="chat" color="var(--icon-active)" size="var(--icon-sm)" />
```

---

## File Structure (final)

```
src/
  index.ts                 ← re-exports everything
  types.ts                 ← IconProps, IconName, PathData
  registry.ts              ← canonical names + name→library mappings
  Icon.tsx                 ← universal <Icon> component
  IconProvider.tsx          ← context for library + style config
  animations/              ← per-icon animation definitions
    index.ts
    scale-bounce.ts        ← generic animation
    sidebar-left.ts        ← custom complex animation
  libraries/
    hugeicons/
      stroke.ts            ← path data
      solid.ts
      index.ts
    pikaicons/
      stroke.ts
      index.ts
    nucleo/
      outline.ts
      index.ts
  icons/                   ← LEGACY: direct named exports (kept for compat)
    SearchOneIcon.tsx
    ...
  llm/                     ← unchanged
  connectors/              ← unchanged
```

---

## Rules

1. **App code uses canonical names** — `<Icon name="search" />`, never `<SearchOneIcon />`
2. **Animations are library-agnostic** — defined once, work with any path data
3. **`color="currentColor"` always** — icons inherit from CSS, Kaya tokens do the theming
4. **One active library at a time** — but can override per-subtree via nested `<IconProvider>`
5. **Legacy exports kept** — `SearchOneIcon` etc. still work for gradual migration
