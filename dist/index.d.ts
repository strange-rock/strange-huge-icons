import * as react_jsx_runtime from 'react/jsx-runtime';
import { SVGMotionProps } from 'framer-motion';
import React, { ComponentType } from 'react';

interface IconProps$2 extends SVGMotionProps<SVGSVGElement> {
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

/**
 * Canonical icon registry.
 *
 * Canonical names are library-agnostic: they describe the *concept*, not the
 * HugeIcons component that currently draws it. App code should reference these
 * names (`<Icon name="search" />`) so the underlying library can be swapped
 * without touching call sites.
 *
 * Naming rules:
 * - lowercase kebab-case
 * - drop library-specific numbering (`SearchOneIcon` → `search`)
 * - keep semantic meaning (`CancelOneIcon` → `close`, `TickTwoIcon` → `check`)
 * - secondary variants of the same concept get an `-alt` suffix
 *   (`ArrowDownOneIcon` → `arrow-down`, `ArrowDownTwoIcon` → `arrow-down-alt`)
 * - one-off / brand / decorative icons keep descriptive names (`logo`, `solar-blob`)
 */
/** Canonical name → current HugeIcons component name. */
declare const CANONICAL_MAP: {
    readonly abacus: "AbacusIcon";
    readonly "ai-idea": "AiIdeaIcon";
    readonly "ai-view": "AiViewIcon";
    readonly "ai-vision-recognition": "AiVisionRecognitionIcon";
    readonly "ai-web-browsing": "AiWebBrowsingIcon";
    readonly alert: "AlertTwoIcon";
    readonly "alert-circle": "AlertCircleIcon";
    readonly "analysis-text-link": "AnalysisTextLinkIcon";
    readonly analytics: "AnalyticsOneIcon";
    readonly anonymous: "AnonymousIcon";
    readonly "arrow-down": "ArrowDownOneIcon";
    readonly "arrow-down-alt": "ArrowDownTwoIcon";
    readonly "arrow-expand": "ArrowExpandOneIcon";
    readonly "arrow-left": "ArrowLeftOneIcon";
    readonly "arrow-right": "ArrowRightOneIcon";
    readonly "arrow-right-alt": "ArrowRightTwoIcon";
    readonly "arrow-shrink": "ArrowShrinkTwoIcon";
    readonly "arrow-up": "ArrowUpTwoIcon";
    readonly "arrow-up-down": "ArrowUpDownIcon";
    readonly "arrow-up-right": "ArrowUpRightOneIcon";
    readonly atom: "AtomOneIcon";
    readonly "atom-alt": "AtomTwoIcon";
    readonly auction: "AuctionIcon";
    readonly "audio-wave": "AudioWaveOneIcon";
    readonly audit: "AuditTwoIcon";
    readonly bookmark: "BookmarkTwoIcon";
    readonly "bookmark-filled": "BookmarkTwoSolidIcon";
    readonly brain: "BrainTwoIcon";
    readonly briefcase: "BriefcaseEightIcon";
    readonly brush: "BrushIcon";
    readonly calendar: "CalendarThreeIcon";
    readonly "calendar-fold": "CalendarFoldIcon";
    readonly chat: "BubbleChatIcon";
    readonly "chat-add": "BubbleChatAddIcon";
    readonly "chat-alt": "ChatOneIcon";
    readonly "chat-edit": "BubbleChatEditIcon";
    readonly "chat-temporary": "BubbleChatTemporaryIcon";
    readonly check: "TickTwoIcon";
    readonly "check-circle": "CheckmarkCircleTwoIcon";
    readonly "chess-bishop": "ChessBishopIcon";
    readonly "chess-king": "ChessKingIcon";
    readonly "chess-knight": "ChessKnightIcon";
    readonly "chess-rook": "ChessRookIcon";
    readonly circle: "CircleIcon";
    readonly close: "CancelOneIcon";
    readonly "close-circle": "CancelCircleIcon";
    readonly clubs: "ClubsShapeIcon";
    readonly "clubs-alt": "ClubsTwoIcon";
    readonly collapse: "UnfoldLessIcon";
    readonly "content-writing": "ContentWritingIcon";
    readonly copy: "CopyOneIcon";
    readonly "court-house": "CourtHouseIcon";
    readonly crown: "Crown03Icon";
    readonly "cursor-circle-selection": "CursorCircleSelectionTwoIcon";
    readonly "customer-service": "CustomerServiceOneIcon";
    readonly "dashboard-square": "DashboardSquareOneIcon";
    readonly delete: "DeleteTwoIcon";
    readonly download: "DownloadOneIcon";
    readonly "download-alt": "DownloadThreeIcon";
    readonly "drag-drop-vertical": "DragDropVerticalIcon";
    readonly exchange: "ExchangeOneIcon";
    readonly expand: "ExpandIcon";
    readonly eye: "ViewIcon";
    readonly "eye-off": "ViewOffSlashIcon";
    readonly favourite: "FavouriteIcon";
    readonly file: "FileTwoIcon";
    readonly "file-add": "FileAddIcon";
    readonly "filter-mail": "FilterMailIcon";
    readonly folder: "FolderOneIcon";
    readonly "folder-add": "FolderAddIcon";
    readonly "folder-alt": "FolderThreeIcon";
    readonly "folder-library": "FolderLibraryIcon";
    readonly galaxy: "GalaxyIcon";
    readonly "global-search": "GlobalSearchIcon";
    readonly "gold-sell": "GoldSellIcon";
    readonly hexagon: "HexagonIcon";
    readonly image: "ImageTwoIcon";
    readonly "image-add": "ImageAddTwoIcon";
    readonly "image-download": "ImageDownloadTwoIcon";
    readonly "image-not-found": "ImageNotFoundOneIcon";
    readonly "info-circle": "InformationCircleIcon";
    readonly "input-short-text": "InputShortTextIcon";
    readonly "inspect-code": "InspectCodeIcon";
    readonly "laurel-wreath": "LaurelWreathOneIcon";
    readonly link: "LinkSixIcon";
    readonly "link-backward": "LinkBackwardIcon";
    readonly loading: "LoadingOneIcon";
    readonly login: "LoginOneIcon";
    readonly logo: "LogoIcon";
    readonly "manage-teams": "ManageTeamsIcon";
    readonly mentoring: "MentoringIcon";
    readonly "message-preview": "MessagePreviewOneIcon";
    readonly mic: "MicTwoIcon";
    readonly "more-horizontal": "MoreHorizontalIcon";
    readonly "more-vertical": "MoreVerticalIcon";
    readonly mortarboard: "MortarboardOneIcon";
    readonly "neural-network": "NeuralNetworkIcon";
    readonly "office-chair": "OfficeChairIcon";
    readonly pen: "PenOneIcon";
    readonly "personal-projects": "PersonalProjectsIcon";
    readonly pin: "PinIcon";
    readonly "play-list": "PlayListIcon";
    readonly plus: "PlusSignIcon";
    readonly "quill-write": "QuillWriteOneIcon";
    readonly "quill-write-alt": "QuillWriteTwoIcon";
    readonly radar: "RadarThreeIcon";
    readonly redo: "RedoIcon";
    readonly "redo-alt": "RedoTwoIcon";
    readonly save: "SaveIcon";
    readonly search: "SearchOneIcon";
    readonly "search-visual": "SearchVisualIcon";
    readonly settings: "SettingsOneIcon";
    readonly shapes: "ShapesOneIcon";
    readonly share: "ShareOneIcon";
    readonly "sidebar-left": "SidebarLeftIcon";
    readonly "sidebar-right": "SidebarRightIcon";
    readonly "solar-blob": "SolarBlobIcon";
    readonly "solar-comet": "SolarCometIcon";
    readonly "solar-organic": "SolarOrganicIcon";
    readonly "solar-ring": "SolarRingIcon";
    readonly "solar-system": "SolarSystemIcon";
    readonly spade: "SpadeIcon";
    readonly "source-code": "SourceCodeIcon";
    readonly "source-code-square": "SourceCodeSquareIcon";
    readonly star: "StarIcon";
    readonly "sticky-note": "StickyNoteTwoIcon";
    readonly "stop-circle": "StopCircleIcon";
    readonly "student-card": "StudentCardIcon";
    readonly target: "TargetTwoIcon";
    readonly "test-tube": "TestTubeIcon";
    readonly text: "TextIcon";
    readonly "text-indent": "TextIndentIcon";
    readonly "thumbs-down": "ThumbsDownIcon";
    readonly "thumbs-up": "ThumbsUpIcon";
    readonly "token-circle": "TokenCircleIcon";
    readonly "token-square": "TokenSquareIcon";
    readonly undo: "UndoTwoIcon";
    readonly unlink: "UnlinkOneIcon";
    readonly user: "UserIcon";
    readonly "user-add": "UserAddOneIcon";
    readonly "user-ai": "UserAiIcon";
    readonly "vertical-scroll-point": "VerticalScrollPointIcon";
    readonly "workflow-square": "WorkflowSquareTenIcon";
};
/** Every canonical icon name in the system. */
type IconName = keyof typeof CANONICAL_MAP;
/** All canonical names, sorted alphabetically. */
declare const ICON_NAMES: IconName[];
/** Current component name → canonical name (reverse of CANONICAL_MAP). */
declare const COMPONENT_TO_CANONICAL: Record<string, IconName>;
/** Type guard for untyped input (e.g. a name coming from a CMS or config). */
declare function isIconName(name: string): name is IconName;

interface UniversalIconProps extends IconProps$2 {
    /** Canonical icon name — library-agnostic. */
    name: IconName;
}
/**
 * Draws any icon by canonical name, using whichever library + style the nearest
 * `<IconProvider>` has active. Icons whose animation (or artwork) can't be
 * expressed as flat path data delegate to their hand-built component.
 */
declare function Icon({ name, size, color, animated, triggered, onClick, style, ...props }: UniversalIconProps): react_jsx_runtime.JSX.Element | null;

type IconLibrary = "hugeicons" | "pikaicons" | "nucleo";
type IconStyle = "stroke" | "solid" | "duotone" | "outline" | "filled" | "bulk";
interface IconConfig {
    library: IconLibrary;
    style: IconStyle;
}
interface IconProviderProps extends Partial<IconConfig> {
    children: React.ReactNode;
}
/**
 * Sets the active icon library + style for everything below it. Nest providers
 * to override a subtree (e.g. a sidebar that uses the filled style).
 */
declare function IconProvider({ library, style, children, }: IconProviderProps): react_jsx_runtime.JSX.Element;
declare function useIconConfig(): IconConfig;

/** Geometry for one drawn element of an icon. */
interface PathData {
    /** SVG path data. Circles/rects from the source are converted to paths. */
    d: string;
    /** Stroked with the icon color. Defaults to true. */
    stroke?: boolean;
    /** Filled with the icon color. Defaults to false (`fill="none"`). */
    fill?: boolean;
    /** Defaults to 1.5 — the stroke weight of the HugeIcons stroke-rounded set. */
    strokeWidth?: number;
    /** Defaults to "round". */
    strokeLinecap?: "butt" | "round" | "square";
    /** Defaults to "round". */
    strokeLinejoin?: "miter" | "round" | "bevel";
    strokeMiterlimit?: number;
    fillRule?: "nonzero" | "evenodd";
    clipRule?: "nonzero" | "evenodd";
    opacity?: number;
}
/** A full icon as data — everything needed to draw it, in any library. */
interface IconData {
    paths: PathData[];
    /** Defaults to "0 0 24 24". */
    viewBox?: string;
    /** Rendered size when the caller doesn't pass one. Defaults to 24. */
    defaultSize?: number;
}
/** Path data for one library in one style, keyed by canonical icon name. */
type IconPathSet = Record<string, IconData>;

/**
 * Resolves path data for an icon, degrading gracefully: the requested style in
 * the requested library, then that library's default style, then HugeIcons
 * stroke. Returns null when the icon exists in no adapter at all.
 */
declare function resolveIcon(library: string, style: string, name: string): IconData | null;
/** Styles an installed library actually ships — useful for building UI toggles. */
declare function availableStyles(library: string): IconStyle[];
/** Libraries currently vendored into the package. */
declare function availableLibraries(): IconLibrary[];

type AnimationType = "transform" | "custom";
interface AnimationDef {
    /**
     * "transform" — a whole-icon transform that works with any library's paths.
     * "custom"    — per-element choreography that only the hand-built component
     *               can express; `<Icon>` delegates to it when animation is on.
     */
    type: AnimationType;
    /** Target (or keyframes) while the icon is active. */
    active?: Record<string, number | number[]>;
    /** Target when the icon goes back to rest. */
    rest?: Record<string, number>;
    duration?: number;
    ease?: string | number[];
    /** Keyframe timing, matching framer-motion's `times`. */
    times?: number[];
    /** Seconds to animate back to `rest`. 0 (default) snaps instantly. */
    restDuration?: number;
    restEase?: string | number[];
}
/**
 * Animation is defined per canonical name, not per library — the same keyframes
 * apply whichever library draws the paths. Icons with no entry are static.
 */
declare const ANIMATIONS: Partial<Record<IconName, AnimationDef>>;
/**
 * Icons that can't be drawn from flat path data (clip paths, groups, fixed
 * palettes) or whose animation lives on individual elements. `<Icon>` renders
 * these components directly.
 */
declare const CUSTOM_COMPONENTS: Partial<Record<IconName, ComponentType<IconProps$2>>>;
declare function getAnimation(name: string): AnimationDef | undefined;
declare function getCustomComponent(name: string): ComponentType<IconProps$2> | undefined;

declare function BubbleChatAddIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function BubbleChatIcon({ size, color, animated: _animated, triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

interface SidebarLeftIconProps extends IconProps$2 {
    /** Controls the hover animation style.
     *  "close" → sidebar content slides out left, signalling the panel will close.
     *  "open"  → sidebar content slides in from left, signalling the panel will open. */
    variant?: "close" | "open";
}
declare function SidebarLeftIcon({ size, color, animated, triggered, variant, ...props }: SidebarLeftIconProps): react_jsx_runtime.JSX.Element;

interface SidebarRightIconProps extends IconProps$2 {
    /** Controls the hover animation style.
     *  "close" → sidebar content slides out right, signalling the panel will close.
     *  "open"  → sidebar content slides in from right, signalling the panel will open. */
    variant?: "close" | "open";
}
declare function SidebarRightIcon({ size, color, animated, triggered, variant, ...props }: SidebarRightIconProps): react_jsx_runtime.JSX.Element;

declare function PinIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function PlusSignIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ImageTwoIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ImageDownloadTwoIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ImageNotFoundOneIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ImageAddTwoIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function AtomOneIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ArrowDownOneIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function LogoIcon({ size, color, animated: _animated, triggered: _triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function UserIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function UserAiIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ChatOneIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function NeuralNetworkIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function SearchOneIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function MoreHorizontalIcon({ size, color, animated: _animated, triggered: _triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function MoreVerticalIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function FolderAddIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

interface FolderOneIconProps extends IconProps$2 {
    variant?: "closed" | "open" | "static";
}
declare function FolderOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, variant, ...props }: FolderOneIconProps): react_jsx_runtime.JSX.Element;

declare function AbacusIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function MicTwoIcon({ size, color, animated: _animated, triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function AudioWaveOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function StopCircleIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ArrowUpTwoIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function CancelOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function CancelCircleIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ArrowRightOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ArrowLeftOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function GalaxyIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function FolderThreeIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function BubbleChatEditIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function TextIndentIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function FilterMailIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ViewOffSlashIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function SourceCodeIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function TestTubeIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function BrushIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function CalendarThreeIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function StickyNoteTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function QuillWriteTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function QuillWriteOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function WorkflowSquareTenIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function DownloadOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function CursorCircleSelectionTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function LoadingOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function BookmarkTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function BookmarkTwoSolidIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function CircleIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ExchangeOneIcon({ size, color, animated, triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function StarIcon({ size, color, animated: _a, triggered: _t, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function TextIcon({ size, color, animated: _a, triggered: _t, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function SourceCodeSquareIcon({ size, color, animated: _a, triggered: _t, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function AiVisionRecognitionIcon({ size, color, animated: _a, triggered: _t, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function GlobalSearchIcon({ size, color, animated: _a, triggered: _t, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

interface ViewIconProps extends IconProps$2 {
    variant?: "visible" | "hidden";
}
declare function ViewIcon({ size, color, animated: _animated, triggered: _triggered, variant, onClick, ...props }: ViewIconProps): react_jsx_runtime.JSX.Element;

declare function ShareOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function BubbleChatTemporaryIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function CopyOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function RedoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ThumbsUpIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ThumbsDownIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function TokenCircleIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function TokenSquareIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function LaurelWreathOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function BrainTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function AiWebBrowsingIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function CalendarFoldIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function AiViewIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function AuditTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function AuctionIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function AnonymousIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function RadarThreeIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function FolderLibraryIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function DownloadThreeIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ArrowUpDownIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function InputShortTextIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function MessagePreviewOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function UnfoldLessIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ShapesOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function DashboardSquareOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function DragDropVerticalIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function TickTwoIcon({ size, color, animated, triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ArrowRightTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function PenOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function InformationCircleIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function LinkSixIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ArrowUpRightOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function DeleteTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ExpandIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ArrowDownTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function VerticalScrollPointIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function UserAddOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function FileAddIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function UndoTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function RedoTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function SaveIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function CheckmarkCircleTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function AlertCircleIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function AlertTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ArrowExpandOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ArrowShrinkTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function AtomTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function LinkBackwardIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function PlayListIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function FileTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function SettingsOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function UnlinkOneIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function AiIdeaIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function AnalysisTextLinkIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function AnalyticsOneIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function BriefcaseEightIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ContentWritingIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ClubsTwoIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function CourtHouseIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function Crown03Icon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function FavouriteIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function CustomerServiceOneIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function GoldSellIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function InspectCodeIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function LoginOneIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function MentoringIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function MortarboardOneIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function OfficeChairIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function SearchVisualIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function StudentCardIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function TargetTwoIcon({ size, color, animated, triggered, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ChessKingIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ChessBishopIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ChessRookIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ChessKnightIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function HexagonIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function SpadeIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function ClubsShapeIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function SolarBlobIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function SolarRingIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function SolarCometIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function SolarOrganicIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

declare function SolarSystemIcon({ size, color, animated: _animated, triggered: _triggered, onClick, ...props }: IconProps$2): react_jsx_runtime.JSX.Element;

interface IconProps$1 {
    size?: number;
    color?: string;
    style?: React.CSSProperties;
    className?: string;
}
declare const ManageTeamsIcon: React.FC<IconProps$1>;

interface IconProps {
    size?: number;
    color?: string;
    style?: React.CSSProperties;
    className?: string;
}
declare const PersonalProjectsIcon: React.FC<IconProps>;

export { ANIMATIONS, AbacusIcon, AiIdeaIcon, AiViewIcon, AiVisionRecognitionIcon, AiWebBrowsingIcon, AlertCircleIcon, AlertTwoIcon, AnalysisTextLinkIcon, AnalyticsOneIcon, type AnimationDef, type AnimationType, AnonymousIcon, ArrowDownOneIcon, ArrowDownTwoIcon, ArrowExpandOneIcon, ArrowLeftOneIcon, ArrowRightOneIcon, ArrowRightTwoIcon, ArrowShrinkTwoIcon, ArrowUpDownIcon, ArrowUpRightOneIcon, ArrowUpTwoIcon, AtomOneIcon, AtomTwoIcon, AuctionIcon, AudioWaveOneIcon, AuditTwoIcon, BookmarkTwoIcon, BookmarkTwoSolidIcon, BrainTwoIcon, BriefcaseEightIcon, BrushIcon, BubbleChatAddIcon, BubbleChatEditIcon, BubbleChatIcon, BubbleChatTemporaryIcon, CANONICAL_MAP, COMPONENT_TO_CANONICAL, CUSTOM_COMPONENTS, CalendarFoldIcon, CalendarThreeIcon, CancelCircleIcon, CancelOneIcon, ChatOneIcon, CheckmarkCircleTwoIcon, ChessBishopIcon, ChessKingIcon, ChessKnightIcon, ChessRookIcon, CircleIcon, ClubsShapeIcon, ClubsTwoIcon, ContentWritingIcon, CopyOneIcon, CourtHouseIcon, Crown03Icon, CursorCircleSelectionTwoIcon, CustomerServiceOneIcon, DashboardSquareOneIcon, DeleteTwoIcon, DownloadOneIcon, DownloadThreeIcon, DragDropVerticalIcon, ExchangeOneIcon, ExpandIcon, FavouriteIcon, FileAddIcon, FileTwoIcon, FilterMailIcon, FolderAddIcon, FolderLibraryIcon, FolderOneIcon, FolderThreeIcon, GalaxyIcon, GlobalSearchIcon, GoldSellIcon, HexagonIcon, ICON_NAMES, Icon, type IconConfig, type IconData, type IconLibrary, type IconName, type IconPathSet, type IconProps$2 as IconProps, IconProvider, type IconProviderProps, type IconStyle, ImageAddTwoIcon, ImageDownloadTwoIcon, ImageNotFoundOneIcon, ImageTwoIcon, InformationCircleIcon, InputShortTextIcon, InspectCodeIcon, LaurelWreathOneIcon, LinkBackwardIcon, LinkSixIcon, LoadingOneIcon, LoginOneIcon, LogoIcon, ManageTeamsIcon, MentoringIcon, MessagePreviewOneIcon, MicTwoIcon, MoreHorizontalIcon, MoreVerticalIcon, MortarboardOneIcon, NeuralNetworkIcon, OfficeChairIcon, type PathData, PenOneIcon, PersonalProjectsIcon, PinIcon, PlayListIcon, PlusSignIcon, QuillWriteOneIcon, QuillWriteTwoIcon, RadarThreeIcon, RedoIcon, RedoTwoIcon, SaveIcon, SearchOneIcon, SearchVisualIcon, SettingsOneIcon, ShapesOneIcon, ShareOneIcon, SidebarLeftIcon, SidebarRightIcon, SolarBlobIcon, SolarCometIcon, SolarOrganicIcon, SolarRingIcon, SolarSystemIcon, SourceCodeIcon, SourceCodeSquareIcon, SpadeIcon, StarIcon, StickyNoteTwoIcon, StopCircleIcon, StudentCardIcon, TargetTwoIcon, TestTubeIcon, TextIcon, TextIndentIcon, ThumbsDownIcon, ThumbsUpIcon, TickTwoIcon, TokenCircleIcon, TokenSquareIcon, UndoTwoIcon, UnfoldLessIcon, type UniversalIconProps, UnlinkOneIcon, UserAddOneIcon, UserAiIcon, UserIcon, VerticalScrollPointIcon, ViewIcon, ViewOffSlashIcon, WorkflowSquareTenIcon, availableLibraries, availableStyles, getAnimation, getCustomComponent, isIconName, resolveIcon, useIconConfig };
