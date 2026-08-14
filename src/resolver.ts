import type { IconData, IconPathSet } from "./libraries/types";
import type { IconLibrary, IconStyle } from "./IconProvider";
import { PATHS as HUGEICONS_STROKE } from "./libraries/hugeicons/stroke";
// Future adapters — added when the library is purchased / vendored in:
// import { PATHS as PIKA_STROKE } from "./libraries/pikaicons/stroke";
// import { PATHS as NUCLEO_OUTLINE } from "./libraries/nucleo/outline";

type LibraryStyles = Partial<Record<IconStyle, IconPathSet>>;

const LIBRARIES: Partial<Record<IconLibrary, LibraryStyles>> = {
  hugeicons: {
    stroke: HUGEICONS_STROKE,
    // solid: HUGEICONS_SOLID,     // HugeIcons Pro
    // duotone: HUGEICONS_DUOTONE, // HugeIcons Pro
  },
  // pikaicons: { stroke: PIKA_STROKE },
  // nucleo: { outline: NUCLEO_OUTLINE },
};

/** The library + style every lookup falls back to when nothing else matches. */
export const DEFAULT_LIBRARY: IconLibrary = "hugeicons";
export const DEFAULT_STYLE: IconStyle = "stroke";

/**
 * Resolves path data for an icon, degrading gracefully: the requested style in
 * the requested library, then that library's default style, then HugeIcons
 * stroke. Returns null when the icon exists in no adapter at all.
 */
export function resolveIcon(
  library: string,
  style: string,
  name: string
): IconData | null {
  const styles = LIBRARIES[library as IconLibrary];
  return (
    styles?.[style as IconStyle]?.[name] ??
    styles?.[DEFAULT_STYLE]?.[name] ??
    LIBRARIES[DEFAULT_LIBRARY]?.[DEFAULT_STYLE]?.[name] ??
    null
  );
}

/** Styles an installed library actually ships — useful for building UI toggles. */
export function availableStyles(library: string): IconStyle[] {
  return Object.keys(LIBRARIES[library as IconLibrary] ?? {}) as IconStyle[];
}

/** Libraries currently vendored into the package. */
export function availableLibraries(): IconLibrary[] {
  return Object.keys(LIBRARIES) as IconLibrary[];
}
