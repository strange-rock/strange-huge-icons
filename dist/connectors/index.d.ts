import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface ConnectorIconProps {
    /** Connector ID — lowercase e.g. "notion", "linear", "gmail". Case-insensitive. */
    id: string;
    /** Render size in px (default: 24) */
    size?: number;
    /** Render as monochrome (uses currentColor). Default: false (brand color) */
    mono?: boolean;
    className?: string;
    style?: React.CSSProperties;
    alt?: string;
}
declare function ConnectorIcon({ id, size, mono, className, style, alt, }: ConnectorIconProps): react_jsx_runtime.JSX.Element | null;

declare const CONNECTOR_COLOR: Record<string, string>;
declare const CONNECTOR_MONO: Record<string, string>;

export { CONNECTOR_COLOR, CONNECTOR_MONO, ConnectorIcon, type ConnectorIconProps };
