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

declare function MoreVerticalIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

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

declare function CancelCircleIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function ArrowRightOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function ArrowLeftOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function GalaxyIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function FolderThreeIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function BubbleChatEditIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function TextIndentIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function FilterMailIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function ViewOffSlashIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function SourceCodeIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function TestTubeIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function BrushIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function CalendarThreeIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function StickyNoteTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function QuillWriteTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function QuillWriteOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function WorkflowSquareTenIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function DownloadOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function CursorCircleSelectionTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function LoadingOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function BookmarkTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function CircleIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function ExchangeOneIcon({ size, color, animated, triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function StarIcon({ size, color, animated: _a, triggered: _t, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function TextIcon({ size, color, animated: _a, triggered: _t, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function SourceCodeSquareIcon({ size, color, animated: _a, triggered: _t, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function AiVisionRecognitionIcon({ size, color, animated: _a, triggered: _t, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function GlobalSearchIcon({ size, color, animated: _a, triggered: _t, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

interface ViewIconProps extends IconProps {
    variant?: "visible" | "hidden";
}
declare function ViewIcon({ size, color, animated: _animated, triggered: _triggered, variant, onClick, ...props }: ViewIconProps): react_jsx_runtime.JSX.Element;

declare function ShareOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function BubbleChatTemporaryIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function CopyOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function RedoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function ThumbsUpIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function ThumbsDownIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function TokenCircleIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function TokenSquareIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function LaurelWreathOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function BrainTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function AiWebBrowsingIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function CalendarFoldIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function AiViewIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function AuditTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function AuctionIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function AnonymousIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function RadarThreeIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function FolderLibraryIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function DownloadThreeIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function ArrowUpDownIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function InputShortTextIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function MessagePreviewOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function UnfoldLessIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function ShapesOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

declare function DashboardSquareOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps): react_jsx_runtime.JSX.Element;

export { AbacusIcon, AiViewIcon, AiVisionRecognitionIcon, AiWebBrowsingIcon, AnonymousIcon, ArrowDownOneIcon, ArrowLeftOneIcon, ArrowRightOneIcon, ArrowUpDownIcon, ArrowUpTwoIcon, AtomOneIcon, AuctionIcon, AudioWaveOneIcon, AuditTwoIcon, BookmarkTwoIcon, BrainTwoIcon, BrushIcon, BubbleChatAddIcon, BubbleChatEditIcon, BubbleChatIcon, BubbleChatTemporaryIcon, CalendarFoldIcon, CalendarThreeIcon, CancelCircleIcon, CancelOneIcon, ChatOneIcon, CircleIcon, CopyOneIcon, CursorCircleSelectionTwoIcon, DashboardSquareOneIcon, DownloadOneIcon, DownloadThreeIcon, ExchangeOneIcon, FilterMailIcon, FolderAddIcon, FolderLibraryIcon, FolderOneIcon, FolderThreeIcon, GalaxyIcon, GlobalSearchIcon, type IconProps, ImageAddTwoIcon, ImageDownloadTwoIcon, ImageNotFoundOneIcon, ImageTwoIcon, InputShortTextIcon, LaurelWreathOneIcon, LoadingOneIcon, LogoIcon, MessagePreviewOneIcon, MicTwoIcon, MoreHorizontalIcon, MoreVerticalIcon, NeuralNetworkIcon, PinIcon, PlusSignIcon, QuillWriteOneIcon, QuillWriteTwoIcon, RadarThreeIcon, RedoIcon, SearchOneIcon, ShapesOneIcon, ShareOneIcon, SidebarLeftIcon, SidebarRightIcon, SourceCodeIcon, SourceCodeSquareIcon, StarIcon, StickyNoteTwoIcon, StopCircleIcon, TestTubeIcon, TextIcon, TextIndentIcon, ThumbsDownIcon, ThumbsUpIcon, TokenCircleIcon, TokenSquareIcon, UnfoldLessIcon, UserAiIcon, UserIcon, ViewIcon, ViewOffSlashIcon, WorkflowSquareTenIcon };
