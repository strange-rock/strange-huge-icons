import { SVGMotionProps } from 'framer-motion';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface IconProps extends SVGMotionProps<SVGSVGElement> {
    /** Icon size in px. Defaults to the value defined in Figma. */
    size?: number;
    /** Stroke/fill color. Defaults to currentColor (inherits from CSS). */
    color?: string;
    /** Enables hover-driven animation. False by default — icon is static unless
     *  this is set or `triggered` is provided. */
    animated?: boolean;
    /** External trigger for the animation. When provided, drives the animation
     *  directly from your app state — hover is ignored. */
    triggered?: boolean;
}

interface SidebarLeftIconProps extends IconProps {
    /** Controls the hover animation style.
     *  "close" → sidebar content slides out left, signalling the panel will close.
     *  "open"  → sidebar content slides in from left, signalling the panel will open. */
    variant?: "close" | "open";
}
declare function SidebarLeftIcon({ size, color, animated, triggered, variant, ...props }: SidebarLeftIconProps): react_jsx_runtime.JSX.Element;

interface SidebarRightIconProps extends IconProps {
    /** Controls the hover animation style.
     *  "close" → sidebar content slides out right, signalling the panel will close.
     *  "open"  → sidebar content slides in from right, signalling the panel will open. */
    variant?: "close" | "open";
}
declare function SidebarRightIcon({ size, color, animated, triggered, variant, ...props }: SidebarRightIconProps): react_jsx_runtime.JSX.Element;

declare function PinIcon({ size, color, animated, triggered, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function PlusSignIcon({ size, color, animated, triggered, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function ImageTwoIcon({ size, color, animated, triggered, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function ImageDownloadTwoIcon({ size, color, animated, triggered, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function ImageNotFoundOneIcon({ size, color, animated, triggered, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function ImageAddTwoIcon({ size, color, animated, triggered, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function AtomOneIcon({ size, color, animated, triggered, ...props }: IconProps): react_jsx_runtime.JSX.Element;

export { AtomOneIcon, type IconProps, ImageAddTwoIcon, ImageDownloadTwoIcon, ImageNotFoundOneIcon, ImageTwoIcon, PinIcon, PlusSignIcon, SidebarLeftIcon, SidebarRightIcon };
