'use strict';

var framerMotion = require('framer-motion');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

// src/icons/BubbleChatAddIcon.tsx
function BubbleChatAddIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}) {
  const [hovered, setHovered] = react.useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const plusControls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (isActive) {
      plusControls.start({
        scale: [1, 0.72, 1.08, 1],
        transition: { duration: 0.35, ease: "easeOut" }
      });
    } else {
      plusControls.stop();
      plusControls.set({ scale: 1 });
    }
  }, [isActive]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      style: { cursor: "pointer" },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C10.3719 21.5 8.8394 21.0904 7.5 20.3687C5.63177 19.362 4.37462 20.2979 3.26592 20.4658C3.09774 20.4913 2.93024 20.4302 2.80997 20.31C2.62741 20.1274 2.59266 19.8451 2.6935 19.6074C3.12865 18.5818 3.5282 16.6382 2.98341 15C2.6698 14.057 2.5 13.0483 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M15.5 12H8.5M12 8.5V15.5",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            initial: { scale: 1 },
            animate: plusControls,
            style: { transformOrigin: "12px 12px" }
          }
        )
      ]
    }
  );
}
var BUBBLE = "M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C10.3719 21.5 8.8394 21.0904 7.5 20.3687C5.63177 19.362 4.37462 20.2979 3.26592 20.4658C3.09774 20.4913 2.93024 20.4302 2.80997 20.31C2.62741 20.1274 2.59266 19.8451 2.6935 19.6074C3.12865 18.5818 3.5282 16.6382 2.98341 15C2.6698 14.057 2.5 13.0483 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z";
var DOT_L = "M8.00903 12H8.018";
var DOT_C = "M12.0045 12H12.0135";
var DOT_R = "M16 12H16.009";
var T_IN = { duration: 0.22, ease: "easeOut" };
function BubbleChatIcon({
  size = 24,
  color = "currentColor",
  triggered,
  onClick,
  ...props
}) {
  const [hovered, setHovered] = react.useState(false);
  const isActive = triggered !== void 0 ? triggered : hovered;
  const d1 = framerMotion.useAnimation();
  const d2 = framerMotion.useAnimation();
  const d3 = framerMotion.useAnimation();
  react.useEffect(() => {
    let cancelled = false;
    if (isActive) {
      d1.set({ opacity: 0 });
      d2.set({ opacity: 0 });
      d3.set({ opacity: 0 });
      const run = async () => {
        if (cancelled) return;
        await d1.start({ opacity: 1, transition: T_IN });
        if (cancelled) return;
        await d2.start({ opacity: 1, transition: T_IN });
        if (cancelled) return;
        await d3.start({ opacity: 1, transition: T_IN });
      };
      run();
    } else {
      d1.stop();
      d1.set({ opacity: 1 });
      d2.stop();
      d2.set({ opacity: 1 });
      d3.stop();
      d3.set({ opacity: 1 });
    }
    return () => {
      cancelled = true;
    };
  }, [isActive]);
  const dotProps = {
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: size,
      height: size,
      fill: "none",
      ...props,
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      onClick,
      style: { cursor: onClick ? "pointer" : void 0 },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(framerMotion.motion.path, { d: DOT_L, ...dotProps, animate: d1 }),
        /* @__PURE__ */ jsxRuntime.jsx(framerMotion.motion.path, { d: DOT_C, ...dotProps, animate: d2 }),
        /* @__PURE__ */ jsxRuntime.jsx(framerMotion.motion.path, { d: DOT_R, ...dotProps, animate: d3 }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: BUBBLE, stroke: color, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })
      ]
    }
  );
}
var SLIDE = -4;
var FRAME_PATH = "M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91554C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91554C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z";
function SidebarLeftIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  variant = "close",
  ...props
}) {
  const uid = react.useId();
  const clipId = `sh-sidebar-clip-${uid}`;
  const [hovered, setHovered] = react.useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const divider = framerMotion.useAnimation();
  const line1 = framerMotion.useAnimation();
  const line2 = framerMotion.useAnimation();
  react.useEffect(() => {
    if (isActive) {
      if (variant === "close") {
        divider.start({ x: SLIDE, transition: { duration: 0.2, ease: "easeIn", delay: 0 } });
        line1.start({ x: SLIDE, transition: { duration: 0.2, ease: "easeIn", delay: 0.04 } });
        line2.start({ x: SLIDE, transition: { duration: 0.2, ease: "easeIn", delay: 0.08 } });
      } else {
        divider.start({ x: [SLIDE, 0], transition: { duration: 0.25, ease: "easeOut", delay: 0 } });
        line1.start({ x: [SLIDE, 0], transition: { duration: 0.25, ease: "easeOut", delay: 0.05 } });
        line2.start({ x: [SLIDE, 0], transition: { duration: 0.25, ease: "easeOut", delay: 0.1 } });
      }
    } else {
      if (variant === "close") {
        line2.start({ x: 0, transition: { duration: 0.25, ease: "easeOut", delay: 0 } });
        line1.start({ x: 0, transition: { duration: 0.25, ease: "easeOut", delay: 0.04 } });
        divider.start({ x: 0, transition: { duration: 0.25, ease: "easeOut", delay: 0.08 } });
      } else {
        divider.set({ x: 0 });
        line1.set({ x: 0 });
        line2.set({ x: 0 });
      }
    }
  }, [isActive, variant]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      style: { cursor: "pointer" },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("defs", { children: /* @__PURE__ */ jsxRuntime.jsx("clipPath", { id: clipId, children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: FRAME_PATH }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: FRAME_PATH,
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("g", { clipPath: `url(#${clipId})`, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            framerMotion.motion.path,
            {
              d: "M9.5 3V21",
              stroke: color,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              initial: { x: 0 },
              animate: divider
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            framerMotion.motion.path,
            {
              d: "M5 7H6",
              stroke: color,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              initial: { x: 0 },
              animate: line1
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            framerMotion.motion.path,
            {
              d: "M5 10H6",
              stroke: color,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              initial: { x: 0 },
              animate: line2
            }
          )
        ] })
      ]
    }
  );
}
var SLIDE2 = 4;
var FRAME_PATH2 = "M2 12C2 8.3109 2 6.46633 2.81382 5.1588C3.1149 4.67505 3.48891 4.2543 3.91891 3.91557C5.08116 3.00003 6.72077 3.00003 10 3.00003H14C17.2792 3.00003 18.9188 3.00003 20.0811 3.91557C20.5111 4.2543 20.8851 4.67505 21.1862 5.1588C22 6.46633 22 8.3109 22 12C22 15.6892 22 17.5337 21.1862 18.8413C20.8851 19.325 20.5111 19.7458 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7458 3.1149 19.325 2.81382 18.8413C2 17.5337 2 15.6892 2 12Z";
function SidebarRightIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  variant = "close",
  ...props
}) {
  const uid = react.useId();
  const clipId = `sh-sidebar-right-clip-${uid}`;
  const [hovered, setHovered] = react.useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const divider = framerMotion.useAnimation();
  const line1 = framerMotion.useAnimation();
  const line2 = framerMotion.useAnimation();
  react.useEffect(() => {
    if (isActive) {
      if (variant === "close") {
        divider.start({ x: SLIDE2, transition: { duration: 0.2, ease: "easeIn", delay: 0 } });
        line1.start({ x: SLIDE2, transition: { duration: 0.2, ease: "easeIn", delay: 0.04 } });
        line2.start({ x: SLIDE2, transition: { duration: 0.2, ease: "easeIn", delay: 0.08 } });
      } else {
        divider.start({ x: [SLIDE2, 0], transition: { duration: 0.25, ease: "easeOut", delay: 0 } });
        line1.start({ x: [SLIDE2, 0], transition: { duration: 0.25, ease: "easeOut", delay: 0.05 } });
        line2.start({ x: [SLIDE2, 0], transition: { duration: 0.25, ease: "easeOut", delay: 0.1 } });
      }
    } else {
      if (variant === "close") {
        line2.start({ x: 0, transition: { duration: 0.25, ease: "easeOut", delay: 0 } });
        line1.start({ x: 0, transition: { duration: 0.25, ease: "easeOut", delay: 0.04 } });
        divider.start({ x: 0, transition: { duration: 0.25, ease: "easeOut", delay: 0.08 } });
      } else {
        divider.set({ x: 0 });
        line1.set({ x: 0 });
        line2.set({ x: 0 });
      }
    }
  }, [isActive, variant]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      style: { cursor: "pointer" },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("defs", { children: /* @__PURE__ */ jsxRuntime.jsx("clipPath", { id: clipId, children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: FRAME_PATH2 }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: FRAME_PATH2,
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("g", { clipPath: `url(#${clipId})`, children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            framerMotion.motion.path,
            {
              d: "M14.5 3.00003V21",
              stroke: color,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              initial: { x: 0 },
              animate: divider
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            framerMotion.motion.path,
            {
              d: "M18 7.00006H19",
              stroke: color,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              initial: { x: 0 },
              animate: line1
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            framerMotion.motion.path,
            {
              d: "M18 10.0001H19",
              stroke: color,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              initial: { x: 0 },
              animate: line2
            }
          )
        ] })
      ]
    }
  );
}
function PinIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}) {
  const [hovered, setHovered] = react.useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (isActive) {
      controls.start({
        y: [0, 4, -1.5, 0],
        rotate: [0, -4, 1, 0],
        transition: { duration: 0.4, ease: "easeOut" }
      });
    } else {
      controls.stop();
      controls.set({ y: 0, rotate: 0 });
    }
  }, [isActive]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      animate: controls,
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      style: { cursor: "pointer", transformOrigin: "center" },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M3 21L8 16",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M13.2585 18.8714C9.51516 18.0215 5.97844 14.4848 5.12853 10.7415C4.99399 10.1489 4.92672 9.85266 5.12161 9.37197C5.3165 8.89129 5.55457 8.74255 6.03071 8.44509C7.10705 7.77265 8.27254 7.55888 9.48209 7.66586C11.1793 7.81598 12.0279 7.89104 12.4512 7.67048C12.8746 7.44991 13.1622 6.93417 13.7376 5.90269L14.4664 4.59604C14.9465 3.73528 15.1866 3.3049 15.7513 3.10202C16.316 2.89913 16.6558 3.02199 17.3355 3.26771C18.9249 3.84236 20.1576 5.07505 20.7323 6.66449C20.978 7.34417 21.1009 7.68401 20.898 8.2487C20.6951 8.8134 20.2647 9.05346 19.4039 9.53358L18.0672 10.2792C17.0376 10.8534 16.5229 11.1406 16.3024 11.568C16.0819 11.9955 16.162 12.8256 16.3221 14.4859C16.4399 15.7068 16.2369 16.88 15.5555 17.9697C15.2577 18.4458 15.1088 18.6839 14.6283 18.8786C14.1477 19.0733 13.8513 19.006 13.2585 18.8714Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function PlusSignIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}) {
  const [hovered, setHovered] = react.useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (isActive) {
      controls.start({
        scale: [1, 0.72, 1.08, 1],
        transition: { duration: 0.35, ease: "easeOut" }
      });
    } else {
      controls.stop();
      controls.set({ scale: 1 });
    }
  }, [isActive]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      animate: controls,
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      style: { cursor: "pointer", transformOrigin: "center" },
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M12 4V20M20 12H4",
          stroke: color,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function ImageTwoIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}) {
  const [hovered, setHovered] = react.useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const sunControls = framerMotion.useAnimation();
  const clipId = react.useId();
  react.useEffect(() => {
    if (isActive) {
      sunControls.start({
        y: [5, 0],
        transition: { duration: 0.5, ease: "easeOut" }
      });
    } else {
      sunControls.stop();
      sunControls.set({ y: 0 });
    }
  }, [isActive]);
  const framePath = "M3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12C2.5 7.77027 2.5 5.6554 3.69797 4.25276C3.86808 4.05358 4.05358 3.86808 4.25276 3.69797C5.6554 2.5 7.77027 2.5 12 2.5C16.2297 2.5 18.3446 2.5 19.7472 3.69797C19.9464 3.86808 20.1319 4.05358 20.302 4.25276C21.5 5.6554 21.5 7.77027 21.5 12C21.5 16.2297 21.5 18.3446 20.302 19.7472C20.1319 19.9464 19.9464 20.1319 19.7472 20.302C18.3446 21.5 16.2297 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472Z";
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      style: { cursor: "pointer" },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("defs", { children: /* @__PURE__ */ jsxRuntime.jsx("clipPath", { id: clipId, children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: framePath }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: framePath,
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("g", { clipPath: `url(#${clipId})`, children: /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M15.5 8C15.7761 8 16 7.77614 16 7.5C16 7.22386 15.7761 7 15.5 7M15.5 8C15.2239 8 15 7.77614 15 7.5C15 7.22386 15.2239 7 15.5 7M15.5 8V7",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            initial: { y: 0 },
            animate: sunControls
          }
        ) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M3 16L7.46967 11.5303C7.80923 11.1908 8.26978 11 8.75 11C9.23022 11 9.69077 11.1908 10.0303 11.5303L14 15.5M14 15.5L15.5 17M14 15.5L15.9697 13.5303C16.3092 13.1908 16.7698 13 17.25 13C17.7302 13 18.1908 13.1908 18.5303 13.5303L21 16",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function ImageDownloadTwoIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}) {
  const [hovered, setHovered] = react.useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const arrowControls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (isActive) {
      arrowControls.start({
        y: [0, 4, -1, 0],
        transition: { duration: 0.4, ease: "easeOut" }
      });
    } else {
      arrowControls.stop();
      arrowControls.set({ y: 0 });
    }
  }, [isActive]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      style: { cursor: "pointer" },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M3 16L7.46967 11.5303C7.80923 11.1908 8.26978 11 8.75 11C9.23022 11 9.69077 11.1908 10.0303 11.5303L14 15.5M14 15.5L15.5 17M14 15.5L15.9697 13.5303C16.3092 13.1908 16.7698 13 17.25 13C17.7302 13 18.1908 13.1908 18.5303 13.5303L21 16",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M21.5 12C21.5 16.2297 21.5 18.3446 20.302 19.7472C20.1319 19.9464 19.9464 20.1319 19.7472 20.302C18.3446 21.5 16.2297 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12C2.5 7.77027 2.5 5.6554 3.69797 4.25276C3.86808 4.05358 4.05358 3.86808 4.25276 3.69797C5.6554 2.5 7.77027 2.5 12 2.5H13.5",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M21.5 6.5C20.9102 7.10684 19.3403 9.5 18.5 9.5C17.6597 9.5 16.0898 7.10684 15.5 6.5M18.5 9V2.5",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            initial: { y: 0 },
            animate: arrowControls
          }
        )
      ]
    }
  );
}
function ImageNotFoundOneIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}) {
  const [hovered, setHovered] = react.useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const slashControls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (isActive) {
      slashControls.start({
        pathLength: [0, 1],
        transition: { duration: 0.45, ease: "easeInOut" }
      });
    } else {
      slashControls.stop();
      slashControls.set({ pathLength: 1 });
    }
  }, [isActive]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      style: { cursor: "pointer" },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M15.5 8C15.7761 8 16 7.77614 16 7.5C16 7.22386 15.7761 7 15.5 7M15.5 8C15.2239 8 15 7.77614 15 7.5C15 7.22386 15.2239 7 15.5 7M15.5 8V7",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M2 2L22 22",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            initial: { pathLength: 1 },
            animate: slashControls
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M17.2997 21.2997C16.0187 21.5 14.3303 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12C2.5 9.66971 2.5 7.98134 2.70033 6.70033M20.0355 20.0355C20.1281 19.943 20.217 19.8468 20.302 19.7472C21.5 18.3446 21.5 16.2297 21.5 12C21.5 7.77027 21.5 5.6554 20.302 4.25276C20.1319 4.05358 19.9464 3.86808 19.7472 3.69797C18.3446 2.5 16.2297 2.5 12 2.5C7.77027 2.5 5.6554 2.5 4.25276 3.69797C4.15317 3.78303 4.057 3.87193 3.96447 3.96447",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M3 16L7.50036 11.5004M21 16L18.5303 13.5303C18.1908 13.1908 17.7302 13 17.25 13C16.7698 13 16.3092 13.1908 15.9697 13.5303L14.75 14.75",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function ImageAddTwoIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}) {
  const [hovered, setHovered] = react.useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const plusControls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (isActive) {
      plusControls.start({
        scale: [1, 0.72, 1.08, 1],
        transition: { duration: 0.35, ease: "easeOut" }
      });
    } else {
      plusControls.stop();
      plusControls.set({ scale: 1 });
    }
  }, [isActive]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      style: { cursor: "pointer" },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M3 16L7.46967 11.5303C7.80923 11.1908 8.26978 11 8.75 11C9.23022 11 9.69077 11.1908 10.0303 11.5303L14 15.5M14 15.5L15.5 17M14 15.5L15.9697 13.5303C16.3092 13.1908 16.7698 13 17.25 13C17.7302 13 18.1908 13.1908 18.5303 13.5303L21 16",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12 2.5C7.77027 2.5 5.6554 2.5 4.25276 3.69797C4.05358 3.86808 3.86808 4.05358 3.69797 4.25276C2.5 5.6554 2.5 7.77027 2.5 12C2.5 16.2297 2.5 18.3446 3.69797 19.7472C3.86808 19.9464 4.05358 20.1319 4.25276 20.302C5.6554 21.5 7.77027 21.5 12 21.5C16.2297 21.5 18.3446 21.5 19.7472 20.302C19.9464 20.1319 20.1319 19.9464 20.302 19.7472C21.5 18.3446 21.5 16.2297 21.5 12",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M21.5 6H18M18 6H14.5M18 6V2.5M18 6V9.5",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            initial: { scale: 1 },
            animate: plusControls,
            style: { transformOrigin: "18px 6px" }
          }
        )
      ]
    }
  );
}
function AtomOneIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}) {
  const [hovered, setHovered] = react.useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (isActive) {
      controls.start({
        rotate: 45,
        transition: { duration: 0.22, ease: "easeOut" }
      });
    } else {
      controls.start({
        rotate: 0,
        transition: { duration: 0.35, ease: "easeOut" }
      });
    }
  }, [isActive]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      animate: controls,
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      style: { cursor: "pointer", transformOrigin: "center" },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M22 9H21.99M2.00995 9H2M12.005 22H11.995",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M7.55556 21C4.47364 19.4999 2.37683 16.5285 2 13.1273M16.4444 21C19.5264 19.4999 21.6232 16.5285 22 13.1273M5.55555 4.25658C9.23956 1.24781 14.5382 1.24781 18.2222 4.25658",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function ArrowDownOneIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}) {
  const [hovered, setHovered] = react.useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (isActive) {
      controls.start({
        y: [0, 3, 0],
        transition: { duration: 0.35, ease: "easeInOut" }
      });
    } else {
      controls.stop();
      controls.set({ y: 0 });
    }
  }, [isActive]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      animate: controls,
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      style: { cursor: "pointer", transformOrigin: "center" },
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "path",
        {
          d: "M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9",
          stroke: color,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function LogoIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      ...props,
      children: /* @__PURE__ */ jsxRuntime.jsxs("g", { transform: "translate(1.25, 1.25)", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M11.7548 9.15018C12.279 8.80764 13.0019 9.04575 12.7011 9.46189L12.4488 9.81099C12.1956 10.1613 12.2718 10.5193 12.6416 10.7171L13.026 10.9226C13.4632 11.1564 12.9153 11.7049 12.3049 11.6445L11.6701 11.5818C11.2044 11.5357 10.6648 11.6677 10.2634 11.9257L9.66141 12.3128C9.1336 12.6522 8.41759 12.4096 8.72254 11.9947L8.96598 11.6635C9.22487 11.3113 9.15046 10.9499 8.77807 10.7507L8.39878 10.548C7.96158 10.3142 8.50949 9.76566 9.11991 9.826L9.74553 9.88785C10.2161 9.93437 10.7617 9.79917 11.1638 9.53637L11.7548 9.15018Z",
            fill: color
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.20545 1.00785C8.78922 -0.197432 11.746 -0.326962 14.4252 0.647765C17.1045 1.6225 19.2869 3.62169 20.4922 6.20545C21.6974 8.78922 21.827 11.746 20.8522 14.4252C19.8775 17.1045 17.8783 19.2869 15.2946 20.4921C12.7108 21.6974 9.75402 21.827 7.07475 20.8522C5.08995 20.1301 3.37788 18.8459 2.13369 17.1782C2.28592 17.2781 2.4488 17.3717 2.62241 17.4582C3.39541 17.8435 4.34049 18.088 5.40856 18.1816C6.08321 18.6665 6.82646 19.0614 7.62107 19.3505C9.90207 20.1804 12.4193 20.0701 14.619 19.044C16.8187 18.0179 18.5207 16.1599 19.3505 13.8789C19.719 12.8662 19.9021 11.8069 19.902 10.7495C19.5573 11.2923 19.1255 11.8335 18.6146 12.3614C17.7754 13.2284 16.7393 14.0427 15.5654 14.7578C14.3914 15.4728 13.1027 16.0747 11.7727 16.5289C10.4427 16.9832 9.09754 17.2809 7.81401 17.4051C6.53046 17.5294 5.33366 17.4777 4.29197 17.2531C3.25019 17.0284 2.384 16.6351 1.74279 16.0959C1.35942 15.7734 1.08027 15.3884 0.871623 14.9774L0.873892 14.9763C0.814196 14.8574 0.761755 14.7358 0.716592 14.6119L0.7175 14.6116C-0.211608 12.198 -0.242098 9.52072 0.647759 7.07475C1.6225 4.39548 3.62168 2.21314 6.20545 1.00785ZM13.8789 2.14947C11.5979 1.31963 9.08068 1.42989 6.88099 2.45601C4.68129 3.48213 2.97931 5.34008 2.14946 7.62107C1.78172 8.63189 1.54423 9.58261 1.48303 10.5194C1.82422 9.98753 2.24898 9.45742 2.74972 8.94005C3.58888 8.07303 4.62503 7.25872 5.79895 6.54366C6.97287 5.8286 8.26164 5.22679 9.59161 4.77256C10.9216 4.31833 12.2668 4.02056 13.5503 3.89631C14.3314 3.8207 15.0804 3.81022 15.7819 3.86425C15.977 4.03177 16.1653 4.20769 16.3462 4.39168C16.7784 4.83117 17.1639 5.31208 17.4977 5.82653C17.2693 5.74393 17.0156 5.67089 16.7355 5.61047C15.8846 5.42698 14.857 5.37527 13.7043 5.48685C12.5547 5.59813 11.3311 5.86706 10.1081 6.28476C8.88562 6.70227 7.70268 7.25513 6.63022 7.90838C5.55652 8.56239 4.63063 9.29437 3.89795 10.0514C3.16222 10.8115 2.66229 11.5543 2.379 12.2215C2.09703 12.8855 2.05156 13.4184 2.12571 13.8181C2.15154 13.9573 2.19404 14.0927 2.25578 14.224C2.43839 14.6034 2.79521 14.9746 3.39328 15.2727C4.1064 15.6281 5.11933 15.8608 6.39547 15.8711C7.66291 15.8813 9.08997 15.6706 10.5558 15.2375C12.0198 14.8049 13.453 14.1709 14.7334 13.391L14.7345 13.3928C15.808 12.7388 16.7338 12.007 17.4663 11.2501C18.2021 10.4899 18.702 9.74716 18.9853 9.08002C19.2673 8.41596 19.3128 7.88303 19.2386 7.48329C19.2191 7.37794 19.2023 7.25945 19.1661 7.15428C19.1269 7.06268 19.0862 6.97155 19.044 6.88099C18.0179 4.6813 16.1599 2.97931 13.8789 2.14947Z",
            fill: color
          }
        )
      ] })
    }
  );
}
function UserIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}) {
  const [hovered, setHovered] = react.useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const headControls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (isActive) {
      headControls.start({
        y: [0, -2.5, 0],
        transition: { duration: 0.35, ease: "easeInOut" }
      });
    } else {
      headControls.stop();
      headControls.set({ y: 0 });
    }
  }, [isActive]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      style: { cursor: "pointer" },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            initial: { y: 0 },
            animate: headControls
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function UserAiIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}) {
  const [hovered, setHovered] = react.useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const headControls = framerMotion.useAnimation();
  const starControls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (isActive) {
      headControls.start({
        y: [0, -2.5, 0],
        transition: { duration: 0.35, ease: "easeInOut" }
      });
      starControls.start({
        scale: [1, 0.72, 1.08, 1],
        transition: { duration: 0.35, ease: "easeOut" }
      });
    } else {
      headControls.stop();
      headControls.set({ y: 0 });
      starControls.stop();
      starControls.set({ scale: 1 });
    }
  }, [isActive]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      style: { cursor: "pointer" },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M15 2.4578C14.053 2.16035 13.0452 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.9548 21.8396 9.94704 21.5422 9",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            initial: { y: 0 },
            animate: headControls
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M5.49994 19.5001L6.06034 18.5194C6.95055 16.9616 8.60727 16.0001 10.4016 16.0001H13.5983C15.3926 16.0001 17.0493 16.9616 17.9395 18.5194L18.4999 19.5001",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M18.9737 2.02148C18.9795 1.99284 19.0205 1.99284 19.0263 2.02148C19.3302 3.50808 20.4919 4.66984 21.9785 4.97368C22.0072 4.97954 22.0072 5.02046 21.9785 5.02632C20.4919 5.33016 19.3302 6.49192 19.0263 7.97852C19.0205 8.00716 18.9795 8.00716 18.9737 7.97852C18.6698 6.49192 17.5081 5.33016 16.0215 5.02632C15.9928 5.02046 15.9928 4.97954 16.0215 4.97368C17.5081 4.66984 18.6698 3.50808 18.9737 2.02148Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            initial: { scale: 1 },
            animate: starControls,
            style: { transformOrigin: "19px 5px" }
          }
        )
      ]
    }
  );
}
function ChatOneIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}) {
  const [hovered, setHovered] = react.useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const line1Controls = framerMotion.useAnimation();
  const line2Controls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (isActive) {
      line1Controls.start({
        pathLength: [0, 1],
        transition: { duration: 0.3, ease: "easeOut" }
      });
      line2Controls.start({
        pathLength: [0, 1],
        transition: { duration: 0.25, ease: "easeOut", delay: 0.25 }
      });
    } else {
      line1Controls.stop();
      line1Controls.set({ pathLength: 1 });
      line2Controls.stop();
      line2Controls.set({ pathLength: 1 });
    }
  }, [isActive]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      style: { cursor: "pointer" },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M2 10.5C2 9.72921 2.01346 8.97679 2.03909 8.2503C2.12282 5.87683 2.16469 4.69009 3.13007 3.71745C4.09545 2.74481 5.3157 2.6926 7.7562 2.58819C9.09517 2.5309 10.5209 2.5 12 2.5C13.4791 2.5 14.9048 2.5309 16.2438 2.58819C18.6843 2.6926 19.9046 2.74481 20.8699 3.71745C21.8353 4.69009 21.8772 5.87683 21.9609 8.2503C21.9865 8.97679 22 9.72921 22 10.5C22 11.2708 21.9865 12.0232 21.9609 12.7497C21.8772 15.1232 21.8353 16.3099 20.8699 17.2826C19.9046 18.2552 18.6843 18.3074 16.2437 18.4118C15.5098 18.4432 14.7498 18.4667 13.9693 18.4815C13.2282 18.4955 12.8576 18.5026 12.532 18.6266C12.2064 18.7506 11.9325 18.9855 11.3845 19.4553L9.20503 21.3242C9.07273 21.4376 8.90419 21.5 8.72991 21.5C8.32679 21.5 8 21.1732 8 20.7701V18.4219C7.91842 18.4186 7.83715 18.4153 7.75619 18.4118C5.31569 18.3074 4.09545 18.2552 3.13007 17.2825C2.16469 16.3099 2.12282 15.1232 2.03909 12.7497C2.01346 12.0232 2 11.2708 2 10.5Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M7.5 8.5H16.5",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            initial: { pathLength: 1 },
            animate: line1Controls
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M7.5 12.5H13",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            initial: { pathLength: 1 },
            animate: line2Controls
          }
        )
      ]
    }
  );
}
function NeuralNetworkIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}) {
  const [hovered, setHovered] = react.useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const c1Controls = framerMotion.useAnimation();
  const c2Controls = framerMotion.useAnimation();
  const c3Controls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (isActive) {
      c1Controls.start({
        pathLength: [0, 1],
        transition: { duration: 0.28, ease: "easeOut", delay: 0 }
      });
      c2Controls.start({
        pathLength: [0, 1],
        transition: { duration: 0.28, ease: "easeOut", delay: 0.22 }
      });
      c3Controls.start({
        pathLength: [0, 1],
        transition: { duration: 0.28, ease: "easeOut", delay: 0.44 }
      });
    } else {
      c1Controls.stop();
      c1Controls.set({ pathLength: 1 });
      c2Controls.stop();
      c2Controls.set({ pathLength: 1 });
      c3Controls.stop();
      c3Controls.set({ pathLength: 1 });
    }
  }, [isActive]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      style: { cursor: "pointer" },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21.5 12C21.5 13.3807 20.3807 14.5 19 14.5C17.6193 14.5 16.5 13.3807 16.5 12C16.5 10.6193 17.6193 9.5 19 9.5C20.3807 9.5 21.5 10.6193 21.5 12Z", stroke: color, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.5 4C13.5 4.82843 12.8284 5.5 12 5.5C11.1716 5.5 10.5 4.82843 10.5 4C10.5 3.17157 11.1716 2.5 12 2.5C12.8284 2.5 13.5 3.17157 13.5 4Z", stroke: color, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.5 11.5C12.5 12.3284 11.8284 13 11 13C10.1716 13 9.5 12.3284 9.5 11.5C9.5 10.6716 10.1716 10 11 10C11.8284 10 12.5 10.6716 12.5 11.5Z", stroke: color, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6.5 7.5C6.5 8.60457 5.60457 9.5 4.5 9.5C3.39543 9.5 2.5 8.60457 2.5 7.5C2.5 6.39543 3.39543 5.5 4.5 5.5C5.60457 5.5 6.5 6.39543 6.5 7.5Z", stroke: color, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M10.5 19.5C10.5 20.6046 9.60457 21.5 8.5 21.5C7.39543 21.5 6.5 20.6046 6.5 19.5C6.5 18.3954 7.39543 17.5 8.5 17.5C9.60457 17.5 10.5 18.3954 10.5 19.5Z", stroke: color, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M13.5 5L17.5 10", stroke: color, strokeWidth: "1.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M14.5 15.5L10.5 18.5", stroke: color, strokeWidth: "1.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M8 17.5L5 9.5", stroke: color, strokeWidth: "1.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M6.31298 6.65431L10.5 4.5",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            initial: { pathLength: 1 },
            animate: c1Controls
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M12 5.5L11 10",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            initial: { pathLength: 1 },
            animate: c2Controls
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M12.5 11.5L16.505 11.8443",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            initial: { pathLength: 1 },
            animate: c3Controls
          }
        )
      ]
    }
  );
}
function SearchOneIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}) {
  const [hovered, setHovered] = react.useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const controls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (isActive) {
      controls.start({
        scale: [1, 0.88, 1.05, 1],
        transition: { duration: 0.32, ease: "easeOut" }
      });
    } else {
      controls.stop();
      controls.set({ scale: 1 });
    }
  }, [isActive]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      animate: controls,
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      style: { cursor: "pointer", transformOrigin: "center" },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M17 17L21 21",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function MoreHorizontalIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12.0045 11.5C12.5568 11.5 13.0045 11.9477 13.0045 12.5C13.0045 13.0523 12.5568 13.5 12.0045 13.5C11.4522 13.5 11.0045 13.0523 11.0045 12.5C11.0045 11.9477 11.4522 11.5 12.0045 11.5Z" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.0045 11.5C18.5568 11.5 19.0045 11.9477 19.0045 12.5C19.0045 13.0523 18.5568 13.5 18.0045 13.5C17.4522 13.5 17.0045 13.0523 17.0045 12.5C17.0045 11.9477 17.4522 11.5 18.0045 11.5Z" }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6.00449 11.5C6.55677 11.5 7.00449 11.9477 7.00449 12.5C7.00449 13.0523 6.55677 13.5 6.00449 13.5C5.4522 13.5 5.00449 13.0523 5.00449 12.5C5.00449 11.9477 5.4522 11.5 6.00449 11.5Z" })
      ]
    }
  );
}
function FolderAddIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}) {
  const [hovered, setHovered] = react.useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const plusControls = framerMotion.useAnimation();
  react.useEffect(() => {
    if (isActive) {
      plusControls.start({
        scale: [1, 0.72, 1.08, 1],
        transition: { duration: 0.35, ease: "easeOut" }
      });
    } else {
      plusControls.stop();
      plusControls.set({ scale: 1 });
    }
  }, [isActive]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      style: { cursor: "pointer" },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M13 21H12C7.28595 21 4.92893 21 3.46447 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38032 4.53806C2.65142 4.05227 3.05227 3.65142 3.53806 3.38032C4.21956 3 5.1278 3 6.94427 3C8.10802 3 8.6899 3 9.19926 3.19101C10.3622 3.62712 10.8418 4.68358 11.3666 5.73313L12 7M8 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C21.9796 9.05942 21.9992 10.0588 22 12",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            d: "M18 13V21M22 17H14",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            initial: { scale: 1 },
            animate: plusControls,
            style: { transformOrigin: "18px 17px" }
          }
        )
      ]
    }
  );
}
var CLOSED_BG = "M8 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C22 9.08996 22 10.1433 22 12.25C22 15.7612 22 17.5167 21.1573 18.7779C20.7926 19.3238 20.3238 19.7926 19.7779 20.1573C18.5167 21 16.7612 21 13.25 21H12C7.28595 21 4.92893 21 3.46447 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38032 4.53806C2.65142 4.05227 3.05227 3.65142 3.53806 3.38032C4.21956 3 5.1278 3 6.94427 3C8.10802 3 8.6899 3 9.19926 3.19101C10.3622 3.62712 10.8418 4.68358 11.3666 5.73313L12 7";
var OPEN_BG = "M8.8 6.11111H15.8C17.4854 6.11111 18.328 6.11111 18.9334 6.50435C19.1954 6.67459 19.4204 6.89334 19.5955 7.14811C20 7.73664 20 8.5559 20 10.1944C20 12.9254 20 14.2908 19.3258 15.2717C19.0341 15.6963 18.659 16.0609 18.2223 16.3446C17.2134 17 15.809 17 13 17H12C8.22876 17 6.34314 17 5.17158 15.8609C4 14.722 4 12.8887 4 9.22222V6.84554C4 5.43273 4 4.72632 4.30426 4.19627C4.52114 3.81843 4.84182 3.50666 5.23045 3.2958C5.77565 3 6.50224 3 7.95542 3C8.88642 3 9.35192 3 9.75941 3.14856C10.6898 3.48776 11.0734 4.30945 11.4933 5.12577L12 6.11111";
var HOVER_FG = "M3.32458 14.0146C2.98652 11.7547 2.81749 10.6248 3.29776 9.85908C3.32978 9.80808 3.36365 9.75876 3.39925 9.71124C3.93317 9 4.87807 9 6.76785 9H17.2321C19.122 9 20.0668 9 20.6007 9.71124C20.6363 9.75876 20.6702 9.80808 20.7023 9.85908C21.1825 10.6248 21.0135 11.7547 20.6754 14.0146C20.1893 17.2638 19.9463 18.8885 19.0298 19.8865C18.9672 19.9546 18.9028 20.02 18.8365 20.0825C17.8647 21 16.5061 21 13.7888 21H10.2112C7.4939 21 6.1353 21 5.16348 20.0825C5.0972 20.02 5.03274 19.9546 4.97023 19.8865C4.05368 18.8885 3.81065 17.2638 3.32458 14.0146Z";
var OPEN_FG = "M2.36064 15.1788C1.98502 13.2956 1.79721 12.354 2.33084 11.7159C2.36642 11.6734 2.40405 11.6323 2.44361 11.5927C3.03686 11 4.08674 11 6.1865 11H17.8135C19.9133 11 20.9631 11 21.5564 11.5927C21.5959 11.6323 21.6336 11.6734 21.6692 11.7159C22.2028 12.354 22.015 13.2956 21.6394 15.1788C21.0993 17.8865 20.8292 19.2404 19.8109 20.0721C19.7414 20.1288 19.6698 20.1833 19.5961 20.2354C18.5163 21 17.0068 21 13.9876 21H10.0124C6.99323 21 5.48367 21 4.40387 20.2354C4.33022 20.1833 4.2586 20.1288 4.18914 20.0721C3.17075 19.2404 2.90072 17.8865 2.36064 15.1788Z";
var T = { duration: 0.28, ease: [0.4, 0, 0.2, 1] };
var pathProps = {
  fill: "#F7F2ED",
  stroke: "#524B47",
  strokeWidth: 1.5,
  strokeLinecap: "round"
};
function FolderOneIcon({
  size = 24,
  animated: _animated,
  triggered: _triggered,
  onClick,
  variant,
  ...props
}) {
  const [internalOpen, setInternalOpen] = react.useState(false);
  const [hovered, setHovered] = react.useState(false);
  const isOpen = variant !== void 0 ? variant === "open" : internalOpen;
  const showFg = isOpen || hovered;
  const handleClick = (e) => {
    if (variant === void 0) setInternalOpen((o) => !o);
    if (typeof onClick === "function") onClick(e);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      ...props,
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      onClick: handleClick,
      style: { cursor: "pointer" },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            ...pathProps,
            initial: { d: CLOSED_BG },
            animate: { d: showFg ? OPEN_BG : CLOSED_BG },
            transition: T
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          framerMotion.motion.path,
          {
            ...pathProps,
            initial: { d: HOVER_FG, opacity: 0 },
            animate: {
              d: isOpen ? OPEN_FG : HOVER_FG,
              opacity: showFg ? 1 : 0
            },
            transition: T
          }
        )
      ]
    }
  );
}
var T2 = 0.38;
var EASE = "easeOut";
var TOP_LEFT_ROD_BASE = "M6 9H9.5";
var TOP_LEFT_ROD_PEAK = "M6 9H6.5";
var TOP_RIGHT_ROD_BASE = "M17 9H18";
var TOP_RIGHT_ROD_PEAK = "M14 9H18";
var BOT_LEFT_ROD_BASE = "M7 15H6";
var BOT_LEFT_ROD_PEAK = "M11 15H6";
var BOT_RIGHT_ROD_BASE = "M18 15H12";
var BOT_RIGHT_ROD_PEAK = "M18 15H16";
function AbacusIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}) {
  const [hovered, setHovered] = react.useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const bead1 = framerMotion.useAnimation();
  const bead2 = framerMotion.useAnimation();
  const bead3 = framerMotion.useAnimation();
  const topLeftRod = framerMotion.useAnimation();
  const topRightRod = framerMotion.useAnimation();
  const botLeftRod = framerMotion.useAnimation();
  const botRightRod = framerMotion.useAnimation();
  react.useEffect(() => {
    if (isActive) {
      bead1.start({ x: -3, transition: { duration: T2, ease: EASE } });
      bead2.start({ x: -3, transition: { duration: T2, ease: EASE } });
      bead3.start({ x: 4, transition: { duration: T2, ease: EASE } });
      topLeftRod.start({ d: TOP_LEFT_ROD_PEAK, transition: { duration: T2, ease: EASE } });
      topRightRod.start({ d: TOP_RIGHT_ROD_PEAK, transition: { duration: T2, ease: EASE } });
      botLeftRod.start({ d: BOT_LEFT_ROD_PEAK, transition: { duration: T2, ease: EASE } });
      botRightRod.start({ d: BOT_RIGHT_ROD_PEAK, transition: { duration: T2, ease: EASE } });
    } else {
      bead1.start({ x: 0, transition: { duration: T2, ease: EASE } });
      bead2.start({ x: 0, transition: { duration: T2, ease: EASE } });
      bead3.start({ x: 0, transition: { duration: T2, ease: EASE } });
      topLeftRod.start({ d: TOP_LEFT_ROD_BASE, transition: { duration: T2, ease: EASE } });
      topRightRod.start({ d: TOP_RIGHT_ROD_BASE, transition: { duration: T2, ease: EASE } });
      botLeftRod.start({ d: BOT_LEFT_ROD_BASE, transition: { duration: T2, ease: EASE } });
      botRightRod.start({ d: BOT_RIGHT_ROD_BASE, transition: { duration: T2, ease: EASE } });
    }
  }, [isActive]);
  const sharedStroke = {
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      style: { cursor: "pointer" },
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "path",
          {
            d: "M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z",
            ...sharedStroke
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(framerMotion.motion.path, { ...sharedStroke, d: TOP_LEFT_ROD_BASE, animate: topLeftRod }),
        /* @__PURE__ */ jsxRuntime.jsx(framerMotion.motion.path, { ...sharedStroke, d: TOP_RIGHT_ROD_BASE, animate: topRightRod }),
        /* @__PURE__ */ jsxRuntime.jsx(framerMotion.motion.path, { ...sharedStroke, d: BOT_LEFT_ROD_BASE, animate: botLeftRod }),
        /* @__PURE__ */ jsxRuntime.jsx(framerMotion.motion.path, { ...sharedStroke, d: BOT_RIGHT_ROD_BASE, animate: botRightRod }),
        /* @__PURE__ */ jsxRuntime.jsx(framerMotion.motion.path, { ...sharedStroke, d: "M12 8V10", initial: { x: 0 }, animate: bead1 }),
        /* @__PURE__ */ jsxRuntime.jsx(framerMotion.motion.path, { ...sharedStroke, d: "M14.5 8V10", initial: { x: 0 }, animate: bead2 }),
        /* @__PURE__ */ jsxRuntime.jsx(framerMotion.motion.path, { ...sharedStroke, d: "M9.5 14V16", initial: { x: 0 }, animate: bead3 })
      ]
    }
  );
}
var MIC = "M17 7V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7Z";
var STAND = "M20 11C20 15.4183 16.4183 19 12 19M12 19C7.58172 19 4 15.4183 4 11M12 19V22M12 22H15M12 22H9";
function MicTwoIcon({
  size = 24,
  color = "currentColor",
  triggered,
  onClick,
  ...props
}) {
  const [hovered, setHovered] = react.useState(false);
  const controls = framerMotion.useAnimation();
  const handleHover = async (active) => {
    setHovered(active);
    if (active) {
      await controls.start({
        rotate: [-8, 6, -3, 1, 0],
        transition: { duration: 0.6, ease: "easeInOut", times: [0, 0.25, 0.5, 0.75, 1] }
      });
    } else {
      controls.stop();
      await controls.start({ rotate: 0, transition: { duration: 0.15 } });
    }
  };
  const pathProps2 = {
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    fill: "none"
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    framerMotion.motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      animate: controls,
      ...props,
      onHoverStart: () => handleHover(true),
      onHoverEnd: () => handleHover(false),
      onClick,
      style: { cursor: onClick ? "pointer" : void 0, transformOrigin: "center bottom" },
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: MIC, ...pathProps2 }),
        /* @__PURE__ */ jsxRuntime.jsx("path", { d: STAND, ...pathProps2 })
      ]
    }
  );
}
function AudioWaveOneIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  const p = { stroke: color, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", onClick, ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M3 11V13", ...p }),
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M6 7V17", ...p }),
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9 3V21", ...p }),
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 6V18", ...p }),
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M15 9V15", ...p }),
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18 7V17", ...p }),
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M21 11V13", ...p })
  ] });
}
function StopCircleIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", onClick, ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", stroke: color, strokeWidth: 1.5 }),
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M9.38886 15.1629C9.89331 15.5 10.5955 15.5 12 15.5C13.4045 15.5 14.1067 15.5 14.6111 15.1629C14.8295 15.017 15.017 14.8295 15.1629 14.6111C15.5 14.1067 15.5 13.4045 15.5 12C15.5 10.5955 15.5 9.89331 15.1629 9.38886C15.017 9.17048 14.8295 8.98298 14.6111 8.83706C14.1067 8.5 13.4045 8.5 12 8.5C10.5955 8.5 9.89331 8.5 9.38886 8.83706C9.17048 8.98298 8.98298 9.17048 8.83706 9.38886C8.5 9.89331 8.5 10.5955 8.5 12C8.5 13.4045 8.5 14.1067 8.83706 14.6111C8.98298 14.8295 9.17048 15.017 9.38886 15.1629Z", fill: color, stroke: color, strokeWidth: 1.5 })
  ] });
}

exports.AbacusIcon = AbacusIcon;
exports.ArrowDownOneIcon = ArrowDownOneIcon;
exports.AtomOneIcon = AtomOneIcon;
exports.AudioWaveOneIcon = AudioWaveOneIcon;
exports.BubbleChatAddIcon = BubbleChatAddIcon;
exports.BubbleChatIcon = BubbleChatIcon;
exports.ChatOneIcon = ChatOneIcon;
exports.FolderAddIcon = FolderAddIcon;
exports.FolderOneIcon = FolderOneIcon;
exports.ImageAddTwoIcon = ImageAddTwoIcon;
exports.ImageDownloadTwoIcon = ImageDownloadTwoIcon;
exports.ImageNotFoundOneIcon = ImageNotFoundOneIcon;
exports.ImageTwoIcon = ImageTwoIcon;
exports.LogoIcon = LogoIcon;
exports.MicTwoIcon = MicTwoIcon;
exports.MoreHorizontalIcon = MoreHorizontalIcon;
exports.NeuralNetworkIcon = NeuralNetworkIcon;
exports.PinIcon = PinIcon;
exports.PlusSignIcon = PlusSignIcon;
exports.SearchOneIcon = SearchOneIcon;
exports.SidebarLeftIcon = SidebarLeftIcon;
exports.SidebarRightIcon = SidebarRightIcon;
exports.StopCircleIcon = StopCircleIcon;
exports.UserAiIcon = UserAiIcon;
exports.UserIcon = UserIcon;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map