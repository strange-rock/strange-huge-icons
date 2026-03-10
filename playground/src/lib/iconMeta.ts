export const FIGMA_NAMES: Record<string, string> = {
  SidebarLeftIcon:      "sidebar-left#",
  SidebarRightIcon:     "sidebar-right#",
  PinIcon:              "pin#",
  PlusSignIcon:         "plus-sign#",
  ImageTwoIcon:         "image-02#",
  ImageDownloadTwoIcon: "image-download-02#",
  ImageNotFoundOneIcon: "image-not-found-01#",
  ImageAddTwoIcon:      "image-add-02#",
  AtomOneIcon:          "atom-01#",
};

export const VARIANTS: Record<string, string[]> = {
  SidebarLeftIcon:  ["close", "open"],
  SidebarRightIcon: ["close", "open"],
};

/** Readable label derived from the Figma name when available,
 *  falls back to splitting the code name. */
export function toLabel(codeName: string): string {
  const figma = FIGMA_NAMES[codeName];
  if (figma) {
    return figma
      .replace(/#$/, "")
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }
  return codeName.replace(/Icon$/, "").replace(/([A-Z])/g, " $1").trim();
}
