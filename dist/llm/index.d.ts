import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

type LlmVariant = "color" | "mono" | "avatar";
interface LlmIconProps {
    /** Icon ID matching the lobehub icon name, e.g. "GPT4", "Claude", "Gemini" */
    id: string;
    /** Render size in px (default: 24) */
    size?: number;
    /** Which variant to render (default: "color") */
    variant?: LlmVariant;
    className?: string;
    style?: React.CSSProperties;
    alt?: string;
}
declare function LlmIcon({ id, size, variant, className, style, alt }: LlmIconProps): react_jsx_runtime.JSX.Element | null;

declare const LLM_COLOR: Record<string, string>;

declare const LLM_MONO: Record<string, string>;

declare const LLM_AVATAR: Record<string, string>;

export { LLM_AVATAR, LLM_COLOR, LLM_MONO, LlmIcon, type LlmIconProps, type LlmVariant };
