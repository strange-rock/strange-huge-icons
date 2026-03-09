# @strange-huge/icons

Animated SVG icon pack for the Strange Huge design system. Built for React / Next.js with Framer Motion.

## Install

```bash
npm install @strange-huge/icons
# or
pnpm add @strange-huge/icons
```

> **Peer dependencies:** `react >=18`, `framer-motion >=10`

## Usage

```tsx
import { IconName } from "@strange-huge/icons";

export default function Example() {
  return <IconName size={24} color="currentColor" />;
}
```

## Props

| Prop      | Type      | Default        | Description                          |
|-----------|-----------|----------------|--------------------------------------|
| `size`    | `number`  | Figma default  | Icon size in px                      |
| `color`   | `string`  | `currentColor` | Stroke/fill color                    |
| `animate` | `boolean` | `false`        | Trigger the tap animation            |

## License

MIT
