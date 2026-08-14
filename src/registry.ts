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
export const CANONICAL_MAP = {
  abacus: "AbacusIcon",
  "ai-idea": "AiIdeaIcon",
  "ai-view": "AiViewIcon",
  "ai-vision-recognition": "AiVisionRecognitionIcon",
  "ai-web-browsing": "AiWebBrowsingIcon",
  alert: "AlertTwoIcon",
  "alert-circle": "AlertCircleIcon",
  "analysis-text-link": "AnalysisTextLinkIcon",
  analytics: "AnalyticsOneIcon",
  anonymous: "AnonymousIcon",
  "arrow-down": "ArrowDownOneIcon",
  "arrow-down-alt": "ArrowDownTwoIcon",
  "arrow-expand": "ArrowExpandOneIcon",
  "arrow-left": "ArrowLeftOneIcon",
  "arrow-right": "ArrowRightOneIcon",
  "arrow-right-alt": "ArrowRightTwoIcon",
  "arrow-shrink": "ArrowShrinkTwoIcon",
  "arrow-up": "ArrowUpTwoIcon",
  "arrow-up-down": "ArrowUpDownIcon",
  "arrow-up-right": "ArrowUpRightOneIcon",
  atom: "AtomOneIcon",
  "atom-alt": "AtomTwoIcon",
  auction: "AuctionIcon",
  "audio-wave": "AudioWaveOneIcon",
  audit: "AuditTwoIcon",
  bookmark: "BookmarkTwoIcon",
  "bookmark-filled": "BookmarkTwoSolidIcon",
  brain: "BrainTwoIcon",
  briefcase: "BriefcaseEightIcon",
  brush: "BrushIcon",
  calendar: "CalendarThreeIcon",
  "calendar-fold": "CalendarFoldIcon",
  chat: "BubbleChatIcon",
  "chat-add": "BubbleChatAddIcon",
  "chat-alt": "ChatOneIcon",
  "chat-edit": "BubbleChatEditIcon",
  "chat-temporary": "BubbleChatTemporaryIcon",
  check: "TickTwoIcon",
  "check-circle": "CheckmarkCircleTwoIcon",
  "chess-bishop": "ChessBishopIcon",
  "chess-king": "ChessKingIcon",
  "chess-knight": "ChessKnightIcon",
  "chess-rook": "ChessRookIcon",
  circle: "CircleIcon",
  close: "CancelOneIcon",
  "close-circle": "CancelCircleIcon",
  clubs: "ClubsShapeIcon",
  "clubs-alt": "ClubsTwoIcon",
  collapse: "UnfoldLessIcon",
  "content-writing": "ContentWritingIcon",
  copy: "CopyOneIcon",
  "court-house": "CourtHouseIcon",
  crown: "Crown03Icon",
  "cursor-circle-selection": "CursorCircleSelectionTwoIcon",
  "customer-service": "CustomerServiceOneIcon",
  "dashboard-square": "DashboardSquareOneIcon",
  delete: "DeleteTwoIcon",
  download: "DownloadOneIcon",
  "download-alt": "DownloadThreeIcon",
  "drag-drop-vertical": "DragDropVerticalIcon",
  exchange: "ExchangeOneIcon",
  expand: "ExpandIcon",
  eye: "ViewIcon",
  "eye-off": "ViewOffSlashIcon",
  favourite: "FavouriteIcon",
  file: "FileTwoIcon",
  "file-add": "FileAddIcon",
  "filter-mail": "FilterMailIcon",
  folder: "FolderOneIcon",
  "folder-add": "FolderAddIcon",
  "folder-alt": "FolderThreeIcon",
  "folder-library": "FolderLibraryIcon",
  galaxy: "GalaxyIcon",
  "global-search": "GlobalSearchIcon",
  "gold-sell": "GoldSellIcon",
  hexagon: "HexagonIcon",
  image: "ImageTwoIcon",
  "image-add": "ImageAddTwoIcon",
  "image-download": "ImageDownloadTwoIcon",
  "image-not-found": "ImageNotFoundOneIcon",
  "info-circle": "InformationCircleIcon",
  "input-short-text": "InputShortTextIcon",
  "inspect-code": "InspectCodeIcon",
  "laurel-wreath": "LaurelWreathOneIcon",
  link: "LinkSixIcon",
  "link-backward": "LinkBackwardIcon",
  loading: "LoadingOneIcon",
  login: "LoginOneIcon",
  logo: "LogoIcon",
  "manage-teams": "ManageTeamsIcon",
  mentoring: "MentoringIcon",
  "message-preview": "MessagePreviewOneIcon",
  mic: "MicTwoIcon",
  "more-horizontal": "MoreHorizontalIcon",
  "more-vertical": "MoreVerticalIcon",
  mortarboard: "MortarboardOneIcon",
  "neural-network": "NeuralNetworkIcon",
  "office-chair": "OfficeChairIcon",
  pen: "PenOneIcon",
  "personal-projects": "PersonalProjectsIcon",
  pin: "PinIcon",
  "play-list": "PlayListIcon",
  plus: "PlusSignIcon",
  "quill-write": "QuillWriteOneIcon",
  "quill-write-alt": "QuillWriteTwoIcon",
  radar: "RadarThreeIcon",
  redo: "RedoIcon",
  "redo-alt": "RedoTwoIcon",
  save: "SaveIcon",
  search: "SearchOneIcon",
  "search-visual": "SearchVisualIcon",
  settings: "SettingsOneIcon",
  shapes: "ShapesOneIcon",
  share: "ShareOneIcon",
  "sidebar-left": "SidebarLeftIcon",
  "sidebar-right": "SidebarRightIcon",
  "solar-blob": "SolarBlobIcon",
  "solar-comet": "SolarCometIcon",
  "solar-organic": "SolarOrganicIcon",
  "solar-ring": "SolarRingIcon",
  "solar-system": "SolarSystemIcon",
  spade: "SpadeIcon",
  "source-code": "SourceCodeIcon",
  "source-code-square": "SourceCodeSquareIcon",
  star: "StarIcon",
  "sticky-note": "StickyNoteTwoIcon",
  "stop-circle": "StopCircleIcon",
  "student-card": "StudentCardIcon",
  target: "TargetTwoIcon",
  "test-tube": "TestTubeIcon",
  text: "TextIcon",
  "text-indent": "TextIndentIcon",
  "thumbs-down": "ThumbsDownIcon",
  "thumbs-up": "ThumbsUpIcon",
  "token-circle": "TokenCircleIcon",
  "token-square": "TokenSquareIcon",
  undo: "UndoTwoIcon",
  unlink: "UnlinkOneIcon",
  user: "UserIcon",
  "user-add": "UserAddOneIcon",
  "user-ai": "UserAiIcon",
  "vertical-scroll-point": "VerticalScrollPointIcon",
  "workflow-square": "WorkflowSquareTenIcon",
} as const;

/** Every canonical icon name in the system. */
export type IconName = keyof typeof CANONICAL_MAP;

/** All canonical names, sorted alphabetically. */
export const ICON_NAMES = Object.keys(CANONICAL_MAP).sort() as IconName[];

/** Current component name → canonical name (reverse of CANONICAL_MAP). */
export const COMPONENT_TO_CANONICAL: Record<string, IconName> = Object.fromEntries(
  Object.entries(CANONICAL_MAP).map(([canonical, component]) => [component, canonical])
) as Record<string, IconName>;

/** Type guard for untyped input (e.g. a name coming from a CMS or config). */
export function isIconName(name: string): name is IconName {
  return name in CANONICAL_MAP;
}
