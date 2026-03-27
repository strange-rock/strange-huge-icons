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

declare function BubbleChatAddIcon({ size, color, animated, triggered, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function BubbleChatIcon({ size, color, triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

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

declare function ArrowDownOneIcon({ size, color, animated, triggered, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function LogoIcon({ size, color, animated: _animated, triggered: _triggered, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function UserIcon({ size, color, animated, triggered, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function UserAiIcon({ size, color, animated, triggered, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function ChatOneIcon({ size, color, animated, triggered, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function NeuralNetworkIcon({ size, color, animated, triggered, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function SearchOneIcon({ size, color, animated, triggered, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function MoreHorizontalIcon({ size, color, animated: _animated, triggered: _triggered, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function FolderAddIcon({ size, color, animated, triggered, ...props }: IconProps): react_jsx_runtime.JSX.Element;

interface FolderOneIconProps extends IconProps {
    variant?: "closed" | "open";
}
declare function FolderOneIcon({ size, animated: _animated, triggered: _triggered, onClick, variant, ...props }: FolderOneIconProps): react_jsx_runtime.JSX.Element;

declare function AbacusIcon({ size, color, animated, triggered, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function MicTwoIcon({ size, color, triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function AudioWaveOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function StopCircleIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function ArrowUpTwoIcon({ size, color, animated, triggered, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function CancelOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function ExchangeOneIcon({ size, color, animated, triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function StarIcon({ size, color, animated: _a, triggered: _t, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function TextIcon({ size, color, animated: _a, triggered: _t, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function SourceCodeSquareIcon({ size, color, animated: _a, triggered: _t, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function AiVisionRecognitionIcon({ size, color, animated: _a, triggered: _t, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function GlobalSearchIcon({ size, color, animated: _a, triggered: _t, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

export { AbacusIcon, AiVisionRecognitionIcon, ArrowDownOneIcon, ArrowUpTwoIcon, AtomOneIcon, AudioWaveOneIcon, BubbleChatAddIcon, BubbleChatIcon, CancelOneIcon, ChatOneIcon, ExchangeOneIcon, FolderAddIcon, FolderOneIcon, GlobalSearchIcon, type IconProps, ImageAddTwoIcon, ImageDownloadTwoIcon, ImageNotFoundOneIcon, ImageTwoIcon, LogoIcon, MicTwoIcon, MoreHorizontalIcon, NeuralNetworkIcon, PinIcon, PlusSignIcon, SearchOneIcon, SidebarLeftIcon, SidebarRightIcon, SourceCodeSquareIcon, StarIcon, StopCircleIcon, TextIcon, UserAiIcon, UserIcon };
