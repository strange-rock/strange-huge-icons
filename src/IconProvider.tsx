import React, { createContext, useContext, useMemo } from "react";

export type IconLibrary = "hugeicons" | "pikaicons" | "nucleo";
export type IconStyle = "stroke" | "solid" | "duotone" | "outline" | "filled" | "bulk";

export interface IconConfig {
  library: IconLibrary;
  style: IconStyle;
}

const DEFAULT_CONFIG: IconConfig = { library: "hugeicons", style: "stroke" };

const IconContext = createContext<IconConfig>(DEFAULT_CONFIG);

export interface IconProviderProps extends Partial<IconConfig> {
  children: React.ReactNode;
}

/**
 * Sets the active icon library + style for everything below it. Nest providers
 * to override a subtree (e.g. a sidebar that uses the filled style).
 */
export function IconProvider({
  library = DEFAULT_CONFIG.library,
  style = DEFAULT_CONFIG.style,
  children,
}: IconProviderProps) {
  const value = useMemo(() => ({ library, style }), [library, style]);
  return <IconContext.Provider value={value}>{children}</IconContext.Provider>;
}

export function useIconConfig(): IconConfig {
  return useContext(IconContext);
}
