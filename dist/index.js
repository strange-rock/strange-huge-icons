import { useAnimation, motion } from 'framer-motion';
import { useState, useEffect, useId, useRef } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/BubbleChatAddIcon.tsx
function BubbleChatAddIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const plusControls = useAnimation();
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C10.3719 21.5 8.8394 21.0904 7.5 20.3687C5.63177 19.362 4.37462 20.2979 3.26592 20.4658C3.09774 20.4913 2.93024 20.4302 2.80997 20.31C2.62741 20.1274 2.59266 19.8451 2.6935 19.6074C3.12865 18.5818 3.5282 16.6382 2.98341 15C2.6698 14.057 2.5 13.0483 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.path,
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
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : hovered;
  const d1 = useAnimation();
  const d2 = useAnimation();
  const d3 = useAnimation();
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(motion.path, { d: DOT_L, ...dotProps, animate: d1 }),
        /* @__PURE__ */ jsx(motion.path, { d: DOT_C, ...dotProps, animate: d2 }),
        /* @__PURE__ */ jsx(motion.path, { d: DOT_R, ...dotProps, animate: d3 }),
        /* @__PURE__ */ jsx("path", { d: BUBBLE, stroke: color, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })
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
  const uid = useId();
  const clipId = `sh-sidebar-clip-${uid}`;
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const divider = useAnimation();
  const line1 = useAnimation();
  const line2 = useAnimation();
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: clipId, children: /* @__PURE__ */ jsx("path", { d: FRAME_PATH }) }) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: FRAME_PATH,
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsxs("g", { clipPath: `url(#${clipId})`, children: [
          /* @__PURE__ */ jsx(
            motion.path,
            {
              d: "M9.5 3V21",
              stroke: color,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              initial: { x: 0 },
              animate: divider
            }
          ),
          /* @__PURE__ */ jsx(
            motion.path,
            {
              d: "M5 7H6",
              stroke: color,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              initial: { x: 0 },
              animate: line1
            }
          ),
          /* @__PURE__ */ jsx(
            motion.path,
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
  const uid = useId();
  const clipId = `sh-sidebar-right-clip-${uid}`;
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const divider = useAnimation();
  const line1 = useAnimation();
  const line2 = useAnimation();
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: clipId, children: /* @__PURE__ */ jsx("path", { d: FRAME_PATH2 }) }) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: FRAME_PATH2,
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsxs("g", { clipPath: `url(#${clipId})`, children: [
          /* @__PURE__ */ jsx(
            motion.path,
            {
              d: "M14.5 3.00003V21",
              stroke: color,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              initial: { x: 0 },
              animate: divider
            }
          ),
          /* @__PURE__ */ jsx(
            motion.path,
            {
              d: "M18 7.00006H19",
              stroke: color,
              strokeWidth: "1.5",
              strokeLinecap: "round",
              initial: { x: 0 },
              animate: line1
            }
          ),
          /* @__PURE__ */ jsx(
            motion.path,
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
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const controls = useAnimation();
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M3 21L8 16",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
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
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const controls = useAnimation();
  useEffect(() => {
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
  return /* @__PURE__ */ jsx(
    motion.svg,
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
      children: /* @__PURE__ */ jsx(
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
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const sunControls = useAnimation();
  const clipId = useId();
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: clipId, children: /* @__PURE__ */ jsx("path", { d: framePath }) }) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: framePath,
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx("g", { clipPath: `url(#${clipId})`, children: /* @__PURE__ */ jsx(
          motion.path,
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
        /* @__PURE__ */ jsx(
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
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const arrowControls = useAnimation();
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M3 16L7.46967 11.5303C7.80923 11.1908 8.26978 11 8.75 11C9.23022 11 9.69077 11.1908 10.0303 11.5303L14 15.5M14 15.5L15.5 17M14 15.5L15.9697 13.5303C16.3092 13.1908 16.7698 13 17.25 13C17.7302 13 18.1908 13.1908 18.5303 13.5303L21 16",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M21.5 12C21.5 16.2297 21.5 18.3446 20.302 19.7472C20.1319 19.9464 19.9464 20.1319 19.7472 20.302C18.3446 21.5 16.2297 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12C2.5 7.77027 2.5 5.6554 3.69797 4.25276C3.86808 4.05358 4.05358 3.86808 4.25276 3.69797C5.6554 2.5 7.77027 2.5 12 2.5H13.5",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.path,
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
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const slashControls = useAnimation();
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M15.5 8C15.7761 8 16 7.77614 16 7.5C16 7.22386 15.7761 7 15.5 7M15.5 8C15.2239 8 15 7.77614 15 7.5C15 7.22386 15.2239 7 15.5 7M15.5 8V7",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.path,
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
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M17.2997 21.2997C16.0187 21.5 14.3303 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12C2.5 9.66971 2.5 7.98134 2.70033 6.70033M20.0355 20.0355C20.1281 19.943 20.217 19.8468 20.302 19.7472C21.5 18.3446 21.5 16.2297 21.5 12C21.5 7.77027 21.5 5.6554 20.302 4.25276C20.1319 4.05358 19.9464 3.86808 19.7472 3.69797C18.3446 2.5 16.2297 2.5 12 2.5C7.77027 2.5 5.6554 2.5 4.25276 3.69797C4.15317 3.78303 4.057 3.87193 3.96447 3.96447",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
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
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const plusControls = useAnimation();
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M3 16L7.46967 11.5303C7.80923 11.1908 8.26978 11 8.75 11C9.23022 11 9.69077 11.1908 10.0303 11.5303L14 15.5M14 15.5L15.5 17M14 15.5L15.9697 13.5303C16.3092 13.1908 16.7698 13 17.25 13C17.7302 13 18.1908 13.1908 18.5303 13.5303L21 16",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12 2.5C7.77027 2.5 5.6554 2.5 4.25276 3.69797C4.05358 3.86808 3.86808 4.05358 3.69797 4.25276C2.5 5.6554 2.5 7.77027 2.5 12C2.5 16.2297 2.5 18.3446 3.69797 19.7472C3.86808 19.9464 4.05358 20.1319 4.25276 20.302C5.6554 21.5 7.77027 21.5 12 21.5C16.2297 21.5 18.3446 21.5 19.7472 20.302C19.9464 20.1319 20.1319 19.9464 20.302 19.7472C21.5 18.3446 21.5 16.2297 21.5 12",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.path,
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
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const controls = useAnimation();
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M22 9H21.99M2.00995 9H2M12.005 22H11.995",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
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
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const controls = useAnimation();
  useEffect(() => {
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
  return /* @__PURE__ */ jsx(
    motion.svg,
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
      children: /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      ...props,
      children: /* @__PURE__ */ jsxs("g", { transform: "translate(1.25, 1.25)", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M11.7548 9.15018C12.279 8.80764 13.0019 9.04575 12.7011 9.46189L12.4488 9.81099C12.1956 10.1613 12.2718 10.5193 12.6416 10.7171L13.026 10.9226C13.4632 11.1564 12.9153 11.7049 12.3049 11.6445L11.6701 11.5818C11.2044 11.5357 10.6648 11.6677 10.2634 11.9257L9.66141 12.3128C9.1336 12.6522 8.41759 12.4096 8.72254 11.9947L8.96598 11.6635C9.22487 11.3113 9.15046 10.9499 8.77807 10.7507L8.39878 10.548C7.96158 10.3142 8.50949 9.76566 9.11991 9.826L9.74553 9.88785C10.2161 9.93437 10.7617 9.79917 11.1638 9.53637L11.7548 9.15018Z",
            fill: color
          }
        ),
        /* @__PURE__ */ jsx(
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
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const headControls = useAnimation();
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          motion.path,
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
        /* @__PURE__ */ jsx(
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
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const headControls = useAnimation();
  const starControls = useAnimation();
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M15 2.4578C14.053 2.16035 13.0452 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.9548 21.8396 9.94704 21.5422 9",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.path,
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
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M5.49994 19.5001L6.06034 18.5194C6.95055 16.9616 8.60727 16.0001 10.4016 16.0001H13.5983C15.3926 16.0001 17.0493 16.9616 17.9395 18.5194L18.4999 19.5001",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.path,
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
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const line1Controls = useAnimation();
  const line2Controls = useAnimation();
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M2 10.5C2 9.72921 2.01346 8.97679 2.03909 8.2503C2.12282 5.87683 2.16469 4.69009 3.13007 3.71745C4.09545 2.74481 5.3157 2.6926 7.7562 2.58819C9.09517 2.5309 10.5209 2.5 12 2.5C13.4791 2.5 14.9048 2.5309 16.2438 2.58819C18.6843 2.6926 19.9046 2.74481 20.8699 3.71745C21.8353 4.69009 21.8772 5.87683 21.9609 8.2503C21.9865 8.97679 22 9.72921 22 10.5C22 11.2708 21.9865 12.0232 21.9609 12.7497C21.8772 15.1232 21.8353 16.3099 20.8699 17.2826C19.9046 18.2552 18.6843 18.3074 16.2437 18.4118C15.5098 18.4432 14.7498 18.4667 13.9693 18.4815C13.2282 18.4955 12.8576 18.5026 12.532 18.6266C12.2064 18.7506 11.9325 18.9855 11.3845 19.4553L9.20503 21.3242C9.07273 21.4376 8.90419 21.5 8.72991 21.5C8.32679 21.5 8 21.1732 8 20.7701V18.4219C7.91842 18.4186 7.83715 18.4153 7.75619 18.4118C5.31569 18.3074 4.09545 18.2552 3.13007 17.2825C2.16469 16.3099 2.12282 15.1232 2.03909 12.7497C2.01346 12.0232 2 11.2708 2 10.5Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.path,
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
        /* @__PURE__ */ jsx(
          motion.path,
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
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const c1Controls = useAnimation();
  const c2Controls = useAnimation();
  const c3Controls = useAnimation();
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx("path", { d: "M21.5 12C21.5 13.3807 20.3807 14.5 19 14.5C17.6193 14.5 16.5 13.3807 16.5 12C16.5 10.6193 17.6193 9.5 19 9.5C20.3807 9.5 21.5 10.6193 21.5 12Z", stroke: color, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsx("path", { d: "M13.5 4C13.5 4.82843 12.8284 5.5 12 5.5C11.1716 5.5 10.5 4.82843 10.5 4C10.5 3.17157 11.1716 2.5 12 2.5C12.8284 2.5 13.5 3.17157 13.5 4Z", stroke: color, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsx("path", { d: "M12.5 11.5C12.5 12.3284 11.8284 13 11 13C10.1716 13 9.5 12.3284 9.5 11.5C9.5 10.6716 10.1716 10 11 10C11.8284 10 12.5 10.6716 12.5 11.5Z", stroke: color, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsx("path", { d: "M6.5 7.5C6.5 8.60457 5.60457 9.5 4.5 9.5C3.39543 9.5 2.5 8.60457 2.5 7.5C2.5 6.39543 3.39543 5.5 4.5 5.5C5.60457 5.5 6.5 6.39543 6.5 7.5Z", stroke: color, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsx("path", { d: "M10.5 19.5C10.5 20.6046 9.60457 21.5 8.5 21.5C7.39543 21.5 6.5 20.6046 6.5 19.5C6.5 18.3954 7.39543 17.5 8.5 17.5C9.60457 17.5 10.5 18.3954 10.5 19.5Z", stroke: color, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsx("path", { d: "M13.5 5L17.5 10", stroke: color, strokeWidth: "1.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M14.5 15.5L10.5 18.5", stroke: color, strokeWidth: "1.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M8 17.5L5 9.5", stroke: color, strokeWidth: "1.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsx(
          motion.path,
          {
            d: "M6.31298 6.65431L10.5 4.5",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            initial: { pathLength: 1 },
            animate: c1Controls
          }
        ),
        /* @__PURE__ */ jsx(
          motion.path,
          {
            d: "M12 5.5L11 10",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            initial: { pathLength: 1 },
            animate: c2Controls
          }
        ),
        /* @__PURE__ */ jsx(
          motion.path,
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
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const controls = useAnimation();
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M17 17L21 21",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(
    motion.svg,
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
      children: /* @__PURE__ */ jsx("path", { d: "M6.00449 12.5V12M18.0045 12.5V12M12.0045 12.5V12M7.00449 12.5C7.00449 11.9477 6.55677 11.5 6.00449 11.5C5.4522 11.5 5.00449 11.9477 5.00449 12.5C5.00449 13.0523 5.4522 13.5 6.00449 13.5C6.55677 13.5 7.00449 13.0523 7.00449 12.5ZM19.0045 12.5C19.0045 11.9477 18.5568 11.5 18.0045 11.5C17.4522 11.5 17.0045 11.9477 17.0045 12.5C17.0045 13.0523 17.4522 13.5 18.0045 13.5C18.5568 13.5 19.0045 13.0523 19.0045 12.5ZM13.0045 12.5C13.0045 11.9477 12.5568 11.5 12.0045 11.5C11.4522 11.5 11.0045 11.9477 11.0045 12.5C11.0045 13.0523 11.4522 13.5 12.0045 13.5C12.5568 13.5 13.0045 13.0523 13.0045 12.5Z" })
    }
  );
}
function MoreVerticalIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    motion.svg,
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
      onClick,
      ...props,
      children: /* @__PURE__ */ jsx("path", { d: "M11.9967 12.5V12M11.9967 6.5V6M11.9967 18.5V18M12.9967 12.5C12.9967 11.9477 12.549 11.5 11.9967 11.5C11.4444 11.5 10.9967 11.9477 10.9967 12.5C10.9967 13.0523 11.4444 13.5 11.9967 13.5C12.549 13.5 12.9967 13.0523 12.9967 12.5ZM12.9967 6.5C12.9967 5.94772 12.549 5.5 11.9967 5.5C11.4444 5.5 10.9967 5.94772 10.9967 6.5C10.9967 7.05228 11.4444 7.5 11.9967 7.5C12.549 7.5 12.9967 7.05228 12.9967 6.5ZM12.9967 18.5C12.9967 17.9477 12.549 17.5 11.9967 17.5C11.4444 17.5 10.9967 17.9477 10.9967 18.5C10.9967 19.0523 11.4444 19.5 11.9967 19.5C12.549 19.5 12.9967 19.0523 12.9967 18.5Z" })
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
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const plusControls = useAnimation();
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M13 21H12C7.28595 21 4.92893 21 3.46447 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38032 4.53806C2.65142 4.05227 3.05227 3.65142 3.53806 3.38032C4.21956 3 5.1278 3 6.94427 3C8.10802 3 8.6899 3 9.19926 3.19101C10.3622 3.62712 10.8418 4.68358 11.3666 5.73313L12 7M8 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C21.9796 9.05942 21.9992 10.0588 22 12",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          motion.path,
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
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  variant,
  ...props
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  if (variant === "static") {
    return /* @__PURE__ */ jsx(
      motion.svg,
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        onClick,
        ...props,
        children: /* @__PURE__ */ jsx(
          "path",
          {
            d: CLOSED_BG,
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        )
      }
    );
  }
  const isOpen = variant !== void 0 ? variant === "open" : internalOpen;
  const showFg = isOpen || hovered;
  const handleClick = (e) => {
    if (variant === void 0) setInternalOpen((o) => !o);
    if (typeof onClick === "function") onClick(e);
  };
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          motion.path,
          {
            ...pathProps,
            initial: { d: CLOSED_BG },
            animate: { d: showFg ? OPEN_BG : CLOSED_BG },
            transition: T
          }
        ),
        /* @__PURE__ */ jsx(
          motion.path,
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
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const bead1 = useAnimation();
  const bead2 = useAnimation();
  const bead3 = useAnimation();
  const topLeftRod = useAnimation();
  const topRightRod = useAnimation();
  const botLeftRod = useAnimation();
  const botRightRod = useAnimation();
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z",
            ...sharedStroke
          }
        ),
        /* @__PURE__ */ jsx(motion.path, { ...sharedStroke, d: TOP_LEFT_ROD_BASE, animate: topLeftRod }),
        /* @__PURE__ */ jsx(motion.path, { ...sharedStroke, d: TOP_RIGHT_ROD_BASE, animate: topRightRod }),
        /* @__PURE__ */ jsx(motion.path, { ...sharedStroke, d: BOT_LEFT_ROD_BASE, animate: botLeftRod }),
        /* @__PURE__ */ jsx(motion.path, { ...sharedStroke, d: BOT_RIGHT_ROD_BASE, animate: botRightRod }),
        /* @__PURE__ */ jsx(motion.path, { ...sharedStroke, d: "M12 8V10", initial: { x: 0 }, animate: bead1 }),
        /* @__PURE__ */ jsx(motion.path, { ...sharedStroke, d: "M14.5 8V10", initial: { x: 0 }, animate: bead2 }),
        /* @__PURE__ */ jsx(motion.path, { ...sharedStroke, d: "M9.5 14V16", initial: { x: 0 }, animate: bead3 })
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
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();
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
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx("path", { d: MIC, ...pathProps2 }),
        /* @__PURE__ */ jsx("path", { d: STAND, ...pathProps2 })
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
  return /* @__PURE__ */ jsxs(motion.svg, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", onClick, ...props, children: [
    /* @__PURE__ */ jsx("path", { d: "M3 11V13", ...p }),
    /* @__PURE__ */ jsx("path", { d: "M6 7V17", ...p }),
    /* @__PURE__ */ jsx("path", { d: "M9 3V21", ...p }),
    /* @__PURE__ */ jsx("path", { d: "M12 6V18", ...p }),
    /* @__PURE__ */ jsx("path", { d: "M15 9V15", ...p }),
    /* @__PURE__ */ jsx("path", { d: "M18 7V17", ...p }),
    /* @__PURE__ */ jsx("path", { d: "M21 11V13", ...p })
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
  return /* @__PURE__ */ jsxs(motion.svg, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", onClick, ...props, children: [
    /* @__PURE__ */ jsx("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", stroke: color, strokeWidth: 1.5 }),
    /* @__PURE__ */ jsx("path", { d: "M9.38886 15.1629C9.89331 15.5 10.5955 15.5 12 15.5C13.4045 15.5 14.1067 15.5 14.6111 15.1629C14.8295 15.017 15.017 14.8295 15.1629 14.6111C15.5 14.1067 15.5 13.4045 15.5 12C15.5 10.5955 15.5 9.89331 15.1629 9.38886C15.017 9.17048 14.8295 8.98298 14.6111 8.83706C14.1067 8.5 13.4045 8.5 12 8.5C10.5955 8.5 9.89331 8.5 9.38886 8.83706C9.17048 8.98298 8.98298 9.17048 8.83706 9.38886C8.5 9.89331 8.5 10.5955 8.5 12C8.5 13.4045 8.5 14.1067 8.83706 14.6111C8.98298 14.8295 9.17048 15.017 9.38886 15.1629Z", fill: color, stroke: color, strokeWidth: 1.5 })
  ] });
}
function ArrowUpTwoIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const controls = useAnimation();
  useEffect(() => {
    if (isActive) {
      controls.start({
        y: [0, -3, 0],
        transition: { duration: 0.35, ease: "easeInOut" }
      });
    } else {
      controls.stop();
      controls.set({ y: 0 });
    }
  }, [isActive]);
  return /* @__PURE__ */ jsxs(
    motion.svg,
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
        /* @__PURE__ */ jsx("path", { d: "M12 5.5V19", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M18 11C18 11 13.5811 5.00001 12 5C10.4188 4.99999 6 11 6 11", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  );
}
function CancelOneIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: /* @__PURE__ */ jsx("path", { d: "M18 6L6.00081 17.9992M17.9992 18L6 6.00085", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function CancelCircleIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M14.9994 15L9 9M9.00064 15L15 9",
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
function ArrowRightOneIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18",
          stroke: color,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function ArrowLeftOneIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18",
          stroke: color,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function GalaxyIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx("path", { d: "M17.7341 17.7341C22.2582 13.21 23.3585 6.97526 20.1916 3.80838C17.6271 1.24383 13.0506 1.4776 9 4.06186M3.80838 20.1916C6.28643 22.6697 10.6429 22.535 14.5884 20.1916M6.26587 6.26587C2.97995 9.55179 1.50022 13.7401 2.14979 17", stroke: color, strokeWidth: "1.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M16.915 7.08503C15.0148 5.18491 11.274 5.84506 8.55952 8.55952C5.84506 11.274 5.18491 15.0148 7.08503 16.915C8.98515 18.8151 12.726 18.1549 15.4405 15.4405C17.0895 13.7915 17.9803 11.7638 17.9997 10", stroke: color, strokeWidth: "1.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M13.6383 10.3617C14.2717 10.9951 14.0516 12.242 13.1468 13.1468C12.242 14.0516 10.9951 14.2717 10.3617 13.6383C9.7283 13.0049 9.94835 11.758 10.8532 10.8532C11.758 9.94835 13.0049 9.7283 13.6383 10.3617Z", stroke: color, strokeWidth: "1.5", strokeLinecap: "round" })
      ]
    }
  );
}
function FolderThreeIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx("path", { d: "M2.36064 15.1788C1.98502 13.2956 1.79721 12.354 2.33084 11.7159C2.36642 11.6734 2.40405 11.6323 2.44361 11.5927C3.03686 11 4.08674 11 6.1865 11H17.8135C19.9133 11 20.9631 11 21.5564 11.5927C21.5959 11.6323 21.6336 11.6734 21.6692 11.7159C22.2028 12.354 22.015 13.2956 21.6394 15.1788C21.0993 17.8865 20.8292 19.2404 19.8109 20.0721C19.7414 20.1288 19.6698 20.1833 19.5961 20.2354C18.5163 21 17.0068 21 13.9876 21H10.0124C6.99323 21 5.48367 21 4.40387 20.2354C4.33022 20.1833 4.2586 20.1288 4.18914 20.0721C3.17075 19.2404 2.90072 17.8865 2.36064 15.1788Z", stroke: color, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsx("path", { d: "M4 11V5.5C4 4.11929 5.11929 3 6.5 3H8.92963C9.59834 3 10.2228 3.3342 10.5937 3.8906L12 6M12 6H8.5M12 6H17.5C18.8807 6 20 7.11929 20 8.5V11", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  );
}
function BubbleChatEditIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C10.3719 21.5 8.8394 21.0904 7.5 20.3687C5.63177 19.362 4.37462 20.2979 3.26592 20.4658C3.09774 20.4913 2.93024 20.4302 2.80997 20.31C2.62741 20.1274 2.59266 19.8451 2.6935 19.6074C3.12865 18.5818 3.5282 16.6382 2.98341 15C2.6698 14.057 2.5 13.0483 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M10.2367 15.1527L8.5 15.5L8.84733 13.7633C8.91788 13.4106 9.09126 13.0866 9.34563 12.8323L13.4111 8.76684C13.7668 8.41105 14.3437 8.41105 14.6995 8.76684L15.2332 9.30052C15.5889 9.65631 15.5889 10.2332 15.2332 10.5889L11.1677 14.6544C10.9134 14.9087 10.5894 15.0821 10.2367 15.1527Z",
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
function TextIndentIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx("path", { d: "M11 3H21M11 9H21", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M3 15H21", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M3 21H21", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M3 3L4.54218 4.24227C5.84739 5.29366 6.5 5.81935 6.5 6.5C6.5 7.18065 5.84739 7.70635 4.54218 8.75773L3 10", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  );
}
function FilterMailIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx("path", { d: "M3 6H21", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M6 12H18", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M9 18H15", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  );
}
function ViewOffSlashIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx("path", { d: "M19.439 15.439C20.3636 14.5212 21.0775 13.6091 21.544 12.955C21.848 12.5287 22 12.3155 22 12C22 11.6845 21.848 11.4713 21.544 11.045C20.1779 9.12944 16.6892 5 12 5C11.0922 5 10.2294 5.15476 9.41827 5.41827M6.74742 6.74742C4.73118 8.1072 3.24215 9.94266 2.45604 11.045C2.15201 11.4713 2 11.6845 2 12C2 12.3155 2.15201 12.5287 2.45604 12.955C3.8221 14.8706 7.31078 19 12 19C13.9908 19 15.7651 18.2557 17.2526 17.2526", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M9.85786 10C9.32783 10.53 9 11.2623 9 12.0711C9 13.6887 10.3113 15 11.9289 15C12.7377 15 13.47 14.6722 14 14.1421", stroke: color, strokeWidth: "1.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M3 3L21 21", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  );
}
function SourceCodeIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx("path", { d: "M17 8L18.8398 9.85008C19.6133 10.6279 20 11.0168 20 11.5C20 11.9832 19.6133 12.3721 18.8398 13.1499L17 15", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M7 8L5.16019 9.85008C4.38673 10.6279 4 11.0168 4 11.5C4 11.9832 4.38673 12.3721 5.16019 13.1499L7 15", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M14.5 4L9.5 20", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  );
}
function TestTubeIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx("path", { d: "M11.223 6V7.98898C11.223 9.38733 11.223 10.0865 11.4102 10.7577C11.5974 11.4289 11.9644 12.0452 12.6984 13.2779L13.6929 14.9482C15.5632 18.0892 16.4984 19.6597 15.7312 20.824L15.7193 20.8418C14.9409 22 12.9606 22 9 22C5.03938 22 3.05907 22 2.2807 20.8418L2.26884 20.824C1.50164 19.6597 2.43679 18.0892 4.30708 14.9482L5.30163 13.2779C6.03558 12.0452 6.40256 11.4289 6.5898 10.7577C6.77704 10.0865 6.77704 9.38733 6.77704 7.98898V6", stroke: color, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsx("path", { d: "M6 6L12 6", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M5.5 13.2803C6.16667 12.699 7.73448 13.1181 9.00155 13.6643C10.6682 14.3828 12.1667 13.8019 12.5 13.2803", stroke: color, strokeWidth: "1.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M11.5 7C11.5 9 13.8624 11.2121 15.4728 11C15.4728 12.6569 16.934 14 18.7364 14C20.5388 14 22 12.6569 22 11C22 9.34315 21 8 19 8C19 6 17.5 4 15.3799 4C15.3799 2.45687 14.5 2 13.5 2C12.5 2 12 3 12 3C12 3 9 3 9 6", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  );
}
function BrushIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: /* @__PURE__ */ jsx("path", { d: "M7.49478 13.753C10.5833 10.1644 17.5788 3.15478 20.5387 3.00445C22.3699 2.82906 18.7218 9.32547 10.0785 16.4339M11.4581 10.0449L13.7157 12.3249M3 20.8546C3.70948 18.3472 3.26187 19.5794 3.50407 16.6919C3.63306 16.2644 3.89258 14.9377 5.51358 14.2765C7.35618 13.5249 8.70698 14.6611 9.05612 15.195C10.0847 16.3102 10.2039 17.6952 9.05612 19.2774C7.9083 20.8596 4.50352 21.2527 3 20.8546Z", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function CalendarThreeIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M16 2V6M8 2V6",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M3 10H21",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12.1258 14H12.0008M12.1258 18H12.0008M7.625 14H7.5M7.625 18H7.5M16.625 14H16.5M12.2508 14C12.2508 14.1381 12.1389 14.25 12.0008 14.25C11.8628 14.25 11.7508 14.1381 11.7508 14C11.7508 13.8619 11.8628 13.75 12.0008 13.75C12.1389 13.75 12.2508 13.8619 12.2508 14ZM12.2508 18C12.2508 18.1381 12.1389 18.25 12.0008 18.25C11.8628 18.25 11.7508 18.1381 11.7508 18C11.7508 17.8619 11.8628 17.75 12.0008 17.75C12.1389 17.75 12.2508 17.8619 12.2508 18ZM7.75 14C7.75 14.1381 7.63807 14.25 7.5 14.25C7.36193 14.25 7.25 14.1381 7.25 14C7.25 13.8619 7.36193 13.75 7.5 13.75C7.63807 13.75 7.75 13.8619 7.75 14ZM7.75 18C7.75 18.1381 7.63807 18.25 7.5 18.25C7.36193 18.25 7.25 18.1381 7.25 18C7.25 17.8619 7.36193 17.75 7.5 17.75C7.63807 17.75 7.75 17.8619 7.75 18ZM16.75 14C16.75 14.1381 16.6381 14.25 16.5 14.25C16.3619 14.25 16.25 14.1381 16.25 14C16.25 13.8619 16.3619 13.75 16.5 13.75C16.6381 13.75 16.75 13.8619 16.75 14Z",
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
function StickyNoteTwoIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M11.5 5C14.3284 5 15.7426 5 16.6213 5.87868C17.5 6.75736 17.5 8.17157 17.5 11C17.5 19 21.5 19 21.5 19H7.23863C6.91067 19 6.74668 19 6.37485 18.9032C6.00302 18.8063 5.94387 18.7733 5.82558 18.7072C4.6855 18.0702 2.5 16.1742 2.5 11C2.5 8.17157 2.5 6.75736 3.37868 5.87868C4.25736 5 5.67157 5 8.5 5",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M2.5 10V16C2.5 18.8284 2.5 20.2426 3.37868 21.1213C4.25736 22 5.67157 22 8.5 22H11.5761C14.4045 22 15.8188 22 16.6974 21.1213C17.1873 20.6314 17.4041 19.9751 17.5 19",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M11.5 3.5V6.5C11.5 6.96594 11.5 7.19891 11.4239 7.38268C11.3224 7.62771 11.1277 7.82239 10.8827 7.92388C10.6989 8 10.4659 8 10 8C9.53406 8 9.30109 8 9.11732 7.92388C8.87229 7.82239 8.67761 7.62771 8.57612 7.38268C8.5 7.19891 8.5 6.96594 8.5 6.5V3.5C8.5 3.03406 8.5 2.80109 8.57612 2.61732C8.67761 2.37229 8.87229 2.17761 9.11732 2.07612C9.30109 2 9.53406 2 10 2C10.4659 2 10.6989 2 10.8827 2.07612C11.1277 2.17761 11.3224 2.37229 11.4239 2.61732C11.5 2.80109 11.5 3.03406 11.5 3.5Z",
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
function QuillWriteTwoIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx("path", { d: "M10.5502 3C6.69782 3.00694 4.6805 3.10152 3.39128 4.39073C2 5.78202 2 8.02125 2 12.4997C2 16.9782 2 19.2174 3.39128 20.6087C4.78257 22 7.0218 22 11.5003 22C15.9787 22 18.218 22 19.6093 20.6087C20.8985 19.3195 20.9931 17.3022 21 13.4498", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M11.0556 13C10.3322 3.86635 16.8023 1.27554 21.9805 2.16439C22.1896 5.19136 20.7085 6.32482 17.8879 6.84825C18.4326 7.41736 19.395 8.13354 19.2912 9.02879C19.2173 9.66586 18.7846 9.97843 17.9194 10.6036C16.0231 11.9736 13.8264 12.8375 11.0556 13Z", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M9 17C11 11.5 12.9604 9.63636 15 8", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  );
}
function QuillWriteOneIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx("path", { d: "M5.07579 17C4.08939 4.54502 12.9123 1.0121 19.9734 2.22417C20.2585 6.35185 18.2389 7.89748 14.3926 8.61125C15.1353 9.38731 16.4477 10.3639 16.3061 11.5847C16.2054 12.4534 15.6154 12.8797 14.4355 13.7322C11.8497 15.6004 8.85421 16.7785 5.07579 17Z", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M4 22C4 15.5 7.84848 12.1818 10.5 10", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  );
}
function WorkflowSquareTenIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx("path", { d: "M9.69406 3.61965C10.8161 2.53262 11.3771 1.98911 12.0634 1.99998C12.7496 2.01085 13.2931 2.57186 14.3802 3.69388C15.4672 4.8159 16.0107 5.37691 15.9998 6.06318C15.989 6.74944 15.428 7.29295 14.3059 8.37998C13.1839 9.46701 12.6229 10.0105 11.9366 9.99966C11.2504 9.98879 10.7069 9.42777 9.61983 8.30575C8.5328 7.18373 7.98929 6.62272 8.00016 5.93646C8.01103 5.25019 8.57204 4.70668 9.69406 3.61965Z", stroke: color, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsx("path", { d: "M7 13.4998C7 14.8805 5.88071 15.9998 4.5 15.9998C3.11929 15.9998 2 14.8805 2 13.4998C2 12.1191 3.11929 10.9998 4.5 10.9998C5.88071 10.9998 7 12.1191 7 13.4998Z", stroke: color, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsx("path", { d: "M22 13.4998C22 12.1191 20.8807 10.9998 19.5 10.9998C18.1193 10.9998 17 12.1191 17 13.4998C17 14.8805 18.1193 15.9998 19.5 15.9998C20.8807 15.9998 22 14.8805 22 13.4998Z", stroke: color, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsx("path", { d: "M12 9.99982L12 16.9998", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M9.5 8.49982L6.5 11.4998", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M14.5 8.49982L17.5 11.4998", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M9.5 19.3998C9.5 18.2684 9.5 17.7028 9.85147 17.3513C10.2029 16.9998 10.7686 16.9998 11.9 16.9998H12.1C13.2314 16.9998 13.7971 16.9998 14.1485 17.3513C14.5 17.7028 14.5 18.2684 14.5 19.3998V19.5998C14.5 20.7312 14.5 21.2969 14.1485 21.6483C13.7971 21.9998 13.2314 21.9998 12.1 21.9998H11.9C10.7686 21.9998 10.2029 21.9998 9.85147 21.6483C9.5 21.2969 9.5 20.7312 9.5 19.5998V19.3998Z", stroke: color, strokeWidth: "1.5" })
      ]
    }
  );
}
function DownloadOneIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M2.99969 17.0002C2.99969 17.9302 2.99969 18.3952 3.10192 18.7767C3.37932 19.8119 4.18796 20.6206 5.22324 20.898C5.60474 21.0002 6.06972 21.0002 6.99969 21.0002L16.9997 21.0002C17.9297 21.0002 18.3947 21.0002 18.7762 20.898C19.8114 20.6206 20.6201 19.8119 20.8975 18.7767C20.9997 18.3952 20.9997 17.9302 20.9997 17.0002",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M16.4998 11.5002C16.4998 11.5002 13.1856 16.0002 11.9997 16.0002C10.8139 16.0002 7.49976 11.5002 7.49976 11.5002M11.9997 15.0002V3.00016",
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
function CursorCircleSelectionTwoIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx("path", { d: "M14.5352 11.0865L18.5575 12.6605C20.8775 13.5683 22.0375 14.0222 21.9991 14.7422C21.9606 15.4622 20.75 15.7924 18.3288 16.4527C17.6079 16.6493 17.2475 16.7476 16.9976 16.9976C16.7476 17.2475 16.6493 17.6079 16.4527 18.3288C15.7924 20.75 15.4622 21.9606 14.7422 21.9991C14.0222 22.0375 13.5683 20.8775 12.6605 18.5575L11.0865 14.5352C10.136 12.1062 9.6608 10.8918 10.2763 10.2763C10.8918 9.6608 12.1062 10.136 14.5352 11.0865Z", stroke: color, strokeWidth: "1.5", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M8.50625 2.14053C8.9926 2.04828 9.49451 2 10.0077 2C10.5209 2 11.0228 2.04828 11.5091 2.14053M8.50625 17.8749C8.8333 17.9369 9.16739 17.979 9.50721 18M2.14053 11.5091C2.04828 11.0228 2 10.5209 2 10.0077C2 9.49451 2.04828 8.99259 2.14053 8.50625M17.8749 8.50625C17.9369 8.8333 17.979 9.16739 18 9.50721M14.5089 3.38308C14.9181 3.66174 15.3071 3.98251 15.67 4.34539C16.0329 4.70827 16.3536 5.09731 16.6323 5.50644M5.50645 16.6323C5.09731 16.3536 4.70827 16.0329 4.34539 15.67C3.98252 15.3071 3.66175 14.9181 3.38309 14.5089M3.38309 5.50644C3.66175 5.09731 3.98252 4.70827 4.34539 4.34539C4.70827 3.98251 5.09731 3.66174 5.50645 3.38308", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  );
}
function LoadingOneIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx("path", { d: "M17.2014 2H6.79876C5.341 2 4.06202 2.9847 4.0036 4.40355C3.93009 6.18879 5.18564 7.37422 6.50435 8.4871C8.32861 10.0266 9.24075 10.7964 9.33642 11.7708C9.35139 11.9233 9.35139 12.0767 9.33642 12.2292C9.24075 13.2036 8.32862 13.9734 6.50435 15.5129C5.14932 16.6564 3.9263 17.7195 4.0036 19.5964C4.06202 21.0153 5.341 22 6.79876 22L17.2014 22C18.6591 22 19.9381 21.0153 19.9965 19.5964C20.043 18.4668 19.6244 17.342 18.7352 16.56C18.3298 16.2034 17.9089 15.8615 17.4958 15.5129C15.6715 13.9734 14.7594 13.2036 14.6637 12.2292C14.6487 12.0767 14.6487 11.9233 14.6637 11.7708C14.7594 10.7964 15.6715 10.0266 17.4958 8.4871C18.8366 7.35558 20.0729 6.25809 19.9965 4.40355C19.9381 2.9847 18.6591 2 17.2014 2Z", stroke: color, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsx("path", { d: "M9 21.6381C9 21.1962 9 20.9752 9.0876 20.7821C9.10151 20.7514 9.11699 20.7214 9.13399 20.6923C9.24101 20.509 9.42211 20.3796 9.78432 20.1208C10.7905 19.4021 11.2935 19.0427 11.8652 19.0045C11.955 18.9985 12.045 18.9985 12.1348 19.0045C12.7065 19.0427 13.2095 19.4021 14.2157 20.1208C14.5779 20.3796 14.759 20.509 14.866 20.6923C14.883 20.7214 14.8985 20.7514 14.9124 20.7821C15 20.9752 15 21.1962 15 21.6381V22H9V21.6381Z", stroke: color, strokeWidth: "1.5", strokeLinecap: "round" })
      ]
    }
  );
}
function BookmarkTwoIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: /* @__PURE__ */ jsx("path", { d: "M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function BookmarkTwoSolidIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z",
          fill: color,
          stroke: color,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function CircleIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10", stroke: color, strokeWidth: "1.5", strokeLinejoin: "round" })
    }
  );
}
function ExchangeOneIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  onClick,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const isActive = triggered !== void 0 ? triggered : animated ? hovered : false;
  const controls = useAnimation();
  useEffect(() => {
    if (isActive) {
      controls.start({ rotate: 180, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } });
    } else {
      controls.set({ rotate: 0 });
    }
  }, [isActive]);
  return /* @__PURE__ */ jsx(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      animate: controls,
      onHoverStart: () => setHovered(true),
      onHoverEnd: () => setHovered(false),
      onClick,
      style: { cursor: "pointer", transformOrigin: "center" },
      ...props,
      children: /* @__PURE__ */ jsx("path", { d: "M16.9767 19.5C19.4017 17.8876 21 15.1305 21 12C21 7.02944 16.9706 3 12 3C11.3126 3 10.6432 3.07706 10 3.22302M16.9767 19.5V16M16.9767 19.5H20.5M7 4.51555C4.58803 6.13007 3 8.87958 3 12C3 16.9706 7.02944 21 12 21C12.6874 21 13.3568 20.9229 14 20.777M7 4.51555V8M7 4.51555H3.5", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
    }
  );
}
function StarIcon({ size = 24, color = "currentColor", animated: _a, triggered: _t, onClick, ...props }) {
  return /* @__PURE__ */ jsx(motion.svg, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", onClick, ...props, children: /* @__PURE__ */ jsx("path", { d: "M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function TextIcon({ size = 24, color = "currentColor", animated: _a, triggered: _t, onClick, ...props }) {
  return /* @__PURE__ */ jsxs(motion.svg, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", onClick, ...props, children: [
    /* @__PURE__ */ jsx("path", { d: "M15 21.001H9", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsx("path", { d: "M12 3.00001V21.0008M12 3.00001C13.3874 3.00001 15.1695 3.03055 16.5884 3.17649C17.1885 3.2382 17.4886 3.26906 17.7541 3.37791C18.3066 3.60429 18.7518 4.10063 18.9194 4.67681C19 4.95382 19 5.26992 19 5.90215M12 3.00001C10.6126 3.00001 8.83047 3.03055 7.41161 3.17649C6.8115 3.2382 6.51144 3.26906 6.24586 3.37791C5.69344 3.60429 5.24816 4.10063 5.08057 4.67681C5 4.95382 5 5.26992 5 5.90215", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
}
function SourceCodeSquareIcon({ size = 24, color = "currentColor", animated: _a, triggered: _t, onClick, ...props }) {
  const p = { stroke: color, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  return /* @__PURE__ */ jsxs(motion.svg, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", onClick, ...props, children: [
    /* @__PURE__ */ jsx("path", { d: "M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z", ...p }),
    /* @__PURE__ */ jsx("path", { d: "M13 9L11 15", ...p }),
    /* @__PURE__ */ jsx("path", { d: "M8 10L6.77346 11.0572C6.25782 11.5016 6 11.7239 6 12C6 12.2761 6.25782 12.4984 6.77346 12.9428L8 14", ...p }),
    /* @__PURE__ */ jsx("path", { d: "M16 10L17.2265 11.0572C17.7422 11.5016 18 11.7239 18 12C18 12.2761 17.7422 12.4984 17.2265 12.9428L16 14", ...p })
  ] });
}
function AiVisionRecognitionIcon({ size = 24, color = "currentColor", animated: _a, triggered: _t, onClick, ...props }) {
  const p = { stroke: color, strokeWidth: 1.5, strokeLinejoin: "round", fill: "none" };
  return /* @__PURE__ */ jsxs(motion.svg, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", onClick, ...props, children: [
    /* @__PURE__ */ jsx("path", { d: "M22 12C22 12 19 19 12 19C5 19 2 12 2 12C2 12 5 5 12 5C18.5 5 22 12 22 12Z", ...p }),
    /* @__PURE__ */ jsx("path", { d: "M11.6769 8.67738C11.8274 8.44087 12.1726 8.44087 12.3231 8.67738L12.7586 9.36157C13.2401 10.1182 13.8818 10.7599 14.6384 11.2414L15.3226 11.6769C15.5591 11.8274 15.5591 12.1726 15.3226 12.3231L14.6384 12.7586C13.8818 13.2401 13.2401 13.8818 12.7586 14.6384L12.3231 15.3226C12.1726 15.5591 11.8274 15.5591 11.6769 15.3226L11.2414 14.6384C10.7599 13.8818 10.1182 13.2401 9.36157 12.7586L8.67738 12.3231C8.44087 12.1726 8.44087 11.8274 8.67738 11.6769L9.36157 11.2414C10.1182 10.7599 10.7599 10.1182 11.2414 9.36157L11.6769 8.67738Z", ...p })
  ] });
}
function GlobalSearchIcon({ size = 24, color = "currentColor", animated: _a, triggered: _t, onClick, ...props }) {
  const p = { stroke: color, strokeWidth: 1.5, strokeLinecap: "round", fill: "none" };
  return /* @__PURE__ */ jsxs(motion.svg, { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", onClick, ...props, children: [
    /* @__PURE__ */ jsx("path", { d: "M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22", ...p }),
    /* @__PURE__ */ jsx("path", { d: "M20 5.69899C19.0653 5.76636 17.8681 6.12824 17.0379 7.20277C15.5385 9.14361 14.039 9.30556 13.0394 8.65861C11.5399 7.6882 12.8 6.11636 11.0401 5.26215C9.89313 4.70542 9.73321 3.19045 10.3716 2", ...p }),
    /* @__PURE__ */ jsx("path", { d: "M2 11C2.7625 11.6621 3.83046 12.2682 5.08874 12.2682C7.68843 12.2682 8.20837 12.7649 8.20837 14.7518C8.20837 16.7387 8.20837 16.7387 8.72831 18.2288C9.06651 19.1981 9.18472 20.1674 8.5106 21", ...p }),
    /* @__PURE__ */ jsx("path", { d: "M19.8988 19.9288L22 22M21.1083 17.0459C21.1083 19.2805 19.2932 21.0919 17.0541 21.0919C14.8151 21.0919 13 19.2805 13 17.0459C13 14.8114 14.8151 13 17.0541 13C19.2932 13 21.1083 14.8114 21.1083 17.0459Z", ...p })
  ] });
}
var EYE_OUTLINE = "M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z";
var EYE_PUPIL = "M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z";
var EYE_OFF_OUTLINE = "M19.439 15.439C20.3636 14.5212 21.0775 13.6091 21.544 12.955C21.848 12.5287 22 12.3155 22 12C22 11.6845 21.848 11.4713 21.544 11.045C20.1779 9.12944 16.6892 5 12 5C11.0922 5 10.2294 5.15476 9.41827 5.41827M6.74742 6.74742C4.73118 8.1072 3.24215 9.94266 2.45604 11.045C2.15201 11.4713 2 11.6845 2 12C2 12.3155 2.15201 12.5287 2.45604 12.955C3.8221 14.8706 7.31078 19 12 19C13.9908 19 15.7651 18.2557 17.2526 17.2526";
var EYE_OFF_PUPIL = "M9.85786 10C9.32783 10.53 9 11.2623 9 12.0711C9 13.6887 10.3113 15 11.9289 15C12.7377 15 13.47 14.6722 14 14.1421";
var SLASH = "M3 3L21 21";
function ViewIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  variant,
  onClick,
  ...props
}) {
  const [isHidden, setIsHidden] = useState(variant === "hidden");
  useEffect(() => {
    if (variant !== void 0) setIsHidden(variant === "hidden");
  }, [variant]);
  const eyeOn = useAnimation();
  const eyeOff = useAnimation();
  const slash = useAnimation();
  useEffect(() => {
    if (isHidden) {
      eyeOn.start({ opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } });
      eyeOff.start({ opacity: 1, transition: { duration: 0.2, ease: "easeInOut" } });
      slash.start({
        opacity: 1,
        pathLength: [0, 0.5, 1],
        transition: {
          opacity: { duration: 0.01 },
          pathLength: {
            duration: 0.45,
            times: [0, 0.35, 1],
            ease: ["easeIn", [0.1, 0, 0.35, 1]]
          }
        }
      });
    } else {
      slash.start({
        pathLength: [1, 0.5, 0],
        transition: {
          pathLength: {
            duration: 0.45,
            times: [0, 0.65, 1],
            ease: [[0.65, 0, 0.9, 1], "easeOut"]
          }
        }
      });
      eyeOff.start({ opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } });
      eyeOn.start({ opacity: 1, transition: { duration: 0.2, ease: "easeInOut", delay: 0.1 } });
      setTimeout(() => slash.set({ opacity: 0 }), 500);
    }
  }, [isHidden]);
  const handleClick = (e) => {
    setIsHidden((h) => !h);
    if (typeof onClick === "function") onClick(e);
  };
  const p = {
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  };
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick: handleClick,
      style: { cursor: "pointer" },
      ...props,
      children: [
        /* @__PURE__ */ jsxs(motion.g, { animate: eyeOn, initial: { opacity: 1 }, children: [
          /* @__PURE__ */ jsx("path", { d: EYE_OUTLINE, ...p, strokeLinecap: void 0 }),
          /* @__PURE__ */ jsx("path", { d: EYE_PUPIL, ...p, strokeLinecap: void 0 })
        ] }),
        /* @__PURE__ */ jsxs(motion.g, { animate: eyeOff, initial: { opacity: 0 }, children: [
          /* @__PURE__ */ jsx("path", { d: EYE_OFF_OUTLINE, ...p }),
          /* @__PURE__ */ jsx("path", { d: EYE_OFF_PUPIL, ...p })
        ] }),
        /* @__PURE__ */ jsx(
          motion.path,
          {
            d: SLASH,
            ...p,
            animate: slash,
            initial: { opacity: 0, pathLength: 0 }
          }
        )
      ]
    }
  );
}
function ShareOneIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9.39584 4.5H8.35417C5.40789 4.5 3.93475 4.5 3.01946 5.37868C2.10417 6.25736 2.10417 7.67157 2.10417 10.5V14.5C2.10417 17.3284 2.10417 18.7426 3.01946 19.6213C3.93475 20.5 5.40789 20.5 8.35417 20.5H12.5608C15.5071 20.5 16.9802 20.5 17.8955 19.6213C18.4885 19.052 18.6973 18.2579 18.7708 17",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M16.1667 7V3.85355C16.1667 3.65829 16.3316 3.5 16.535 3.5C16.6326 3.5 16.7263 3.53725 16.7954 3.60355L21.5275 8.14645C21.7634 8.37282 21.8958 8.67986 21.8958 9C21.8958 9.32014 21.7634 9.62718 21.5275 9.85355L16.7954 14.3964C16.7263 14.4628 16.6326 14.5 16.535 14.5C16.3316 14.5 16.1667 14.3417 16.1667 14.1464V11H13.1157C8.875 11 7.3125 14.5 7.3125 14.5V12C7.3125 9.23858 9.64435 7 12.5208 7H16.1667Z",
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
function BubbleChatTemporaryIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M7.50403 20.3687C5.6358 19.362 4.37865 20.2979 3.26995 20.4658C3.10177 20.4913 2.93427 20.4302 2.81399 20.31C2.63144 20.1274 2.59669 19.8451 2.69753 19.6074C2.96156 18.9852 3.21247 18.0249 3.2473 17M13.504 2.61775C13.0154 2.54025 12.5144 2.5 12.004 2.5C11.4936 2.5 10.9926 2.54025 10.504 2.61775M17.5751 4.30418C18.3893 4.89461 19.1062 5.61108 19.697 6.42496M21.3863 10.5C21.4638 10.9886 21.504 11.4896 21.504 12C21.504 12.5104 21.4638 13.0114 21.3863 13.5M19.697 17.575C19.1062 18.3889 18.3894 19.1053 17.5752 19.6958M13.504 21.3822C13.0154 21.4597 12.5144 21.5 12.004 21.5C11.4936 21.5 10.9926 21.4597 10.504 21.3822M2.62178 13.5C2.54428 13.0114 2.50403 12.5104 2.50403 12C2.50403 11.4896 2.54428 10.9886 2.62178 10.5M4.30825 6.42883C4.89868 5.61464 5.61516 4.89781 6.42904 4.30699",
          stroke: color,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function CopyOneIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999",
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
function RedoIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C15.2073 3 18.0227 4.67765 19.6166 7.20327M20.7066 3.00076L20.5344 5.05452C20.4104 6.53384 20.3484 7.27349 19.8664 7.68914C19.3844 8.10479 18.6733 8.03185 17.251 7.88595L15.2066 7.67625",
          stroke: color,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function ThumbsUpIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z",
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
function ThumbsDownIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M2 11.5C2 12.6046 2.89543 13.5 4 13.5C5.65685 13.5 7 12.1569 7 10.5V6.5C7 4.84315 5.65685 3.5 4 3.5C2.89543 3.5 2 4.39543 2 5.5V11.5Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M15.4787 16.1937L15.2124 15.3337C14.9942 14.6289 14.8851 14.2765 14.969 13.9982C15.0369 13.7731 15.1859 13.579 15.389 13.4513C15.64 13.2935 16.0197 13.2935 16.7791 13.2935H17.1831C19.7532 13.2935 21.0382 13.2935 21.6452 12.5327C21.7145 12.4458 21.7762 12.3533 21.8296 12.2563C22.2965 11.4079 21.7657 10.2649 20.704 7.9789C19.7297 5.88111 19.2425 4.83222 18.338 4.21485C18.2505 4.15508 18.1605 4.0987 18.0683 4.04586C17.116 3.5 15.9362 3.5 13.5764 3.5H13.0646C10.2057 3.5 8.77628 3.5 7.88814 4.36053C7 5.22106 7 6.60607 7 9.37607V10.3497C7 11.8054 7 12.5332 7.25834 13.1994C7.51668 13.8656 8.01135 14.4134 9.00069 15.5089L13.0921 20.0394C13.1947 20.1531 13.246 20.2099 13.2913 20.2493C13.7135 20.6167 14.3652 20.5754 14.7344 20.1577C14.774 20.1129 14.8172 20.0501 14.9036 19.9245C15.0388 19.728 15.1064 19.6297 15.1654 19.5323C15.6928 18.6609 15.8524 17.6256 15.6108 16.6429C15.5838 16.5331 15.5488 16.4199 15.4787 16.1937Z",
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
function TokenCircleIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M11.5384 7.2534C11.7534 6.91553 12.2466 6.91553 12.4616 7.2534L13.0837 8.23082C13.7716 9.3117 14.6883 10.2284 15.7692 10.9163L16.7466 11.5384C17.0845 11.7534 17.0845 12.2466 16.7466 12.4616L15.7692 13.0837C14.6883 13.7716 13.7716 14.6883 13.0837 15.7692L12.4616 16.7466C12.2466 17.0845 11.7534 17.0845 11.5384 16.7466L10.9163 15.7692C10.2284 14.6883 9.3117 13.7716 8.23082 13.0837L7.2534 12.4616C6.91553 12.2466 6.91553 11.7534 7.2534 11.5384L8.23082 10.9163C9.3117 10.2284 10.2284 9.3117 10.9163 8.23082L11.5384 7.2534Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10", stroke: color, strokeWidth: "1.5", strokeLinejoin: "round" })
      ]
    }
  );
}
function TokenSquareIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M2.5 12C2.5 7.77027 2.5 5.6554 3.69797 4.25276C3.86808 4.05358 4.05358 3.86808 4.25276 3.69797C5.6554 2.5 7.77027 2.5 12 2.5C16.2297 2.5 18.3446 2.5 19.7472 3.69797C19.9464 3.86808 20.1319 4.05358 20.302 4.25276C21.5 5.6554 21.5 7.77027 21.5 12C21.5 16.2297 21.5 18.3446 20.302 19.7472C20.1319 19.9464 19.9464 20.1319 19.7472 20.302C18.3446 21.5 16.2297 21.5 12 21.5C7.77027 21.5 5.6554 21.5 4.25276 20.302C4.05358 20.1319 3.86808 19.9464 3.69797 19.7472C2.5 18.3446 2.5 16.2297 2.5 12Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M11.5384 7.2534C11.7534 6.91553 12.2466 6.91553 12.4616 7.2534L13.0837 8.23082C13.7716 9.3117 14.6883 10.2284 15.7692 10.9163L16.7466 11.5384C17.0845 11.7534 17.0845 12.2466 16.7466 12.4616L15.7692 13.0837C14.6883 13.7716 13.7716 14.6883 13.0837 15.7692L12.4616 16.7466C12.2466 17.0845 11.7534 17.0845 11.5384 16.7466L10.9163 15.7692C10.2284 14.6883 9.3117 13.7716 8.23082 13.0837L7.2534 12.4616C6.91553 12.2466 6.91553 11.7534 7.2534 11.5384L8.23082 10.9163C9.3117 10.2284 10.2284 9.3117 10.9163 8.23082L11.5384 7.2534Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function LaurelWreathOneIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M6.43614 8C6.15488 8.84221 6 9.76282 6 10.7273C6 14.7439 8.68629 18 12 18C15.3137 18 18 14.7439 18 10.7273C18 9.76282 17.8451 8.84221 17.5639 8",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M14.5 21C14.5 21 13.818 18 12 18C10.182 18 9.5 21 9.5 21",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M18.5202 5.22967C18.8121 6.89634 17.5004 8 17.5004 8C17.5004 8 15.8969 7.437 15.605 5.77033C15.3131 4.10366 16.6248 3 16.6248 3C16.6248 3 18.2284 3.56301 18.5202 5.22967Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M21.0942 12.1393C19.8128 13.4061 18.0778 12.9003 18.0778 12.9003C18.0778 12.9003 17.6241 11.1276 18.9055 9.86074C20.1868 8.59388 21.9219 9.09972 21.9219 9.09972C21.9219 9.09972 22.3756 10.8724 21.0942 12.1393Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M18.2335 18.1896C16.7335 17.614 16.5 16 16.5 16C16.5 16 17.7665 14.9616 19.2665 15.5372C20.7665 16.1128 21 17.7268 21 17.7268C21 17.7268 19.7335 18.7652 18.2335 18.1896Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M5.76651 18.1895C7.26651 17.6139 7.5 15.9999 7.5 15.9999C7.5 15.9999 6.23349 14.9615 4.73349 15.5371C3.23349 16.1127 3 17.7267 3 17.7267C3 17.7267 4.26651 18.7651 5.76651 18.1895Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M2.90552 12.1393C4.18688 13.4061 5.92191 12.9003 5.92191 12.9003C5.92191 12.9003 6.37559 11.1276 5.09423 9.86074C3.81288 8.59388 2.07785 9.09972 2.07785 9.09972C2.07785 9.09972 1.62417 10.8724 2.90552 12.1393Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M5.47987 5.22967C5.18799 6.89634 6.49968 8 6.49968 8C6.49968 8 8.10325 7.437 8.39513 5.77033C8.68701 4.10366 7.37532 3 7.37532 3C7.37532 3 5.77175 3.56301 5.47987 5.22967Z",
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
function BrainTwoIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M4.22222 21.9948V18.4451C4.22222 17.1737 3.88927 16.5128 3.23482 15.4078C2.4503 14.0833 2 12.5375 2 10.8866C2 5.97866 5.97969 2 10.8889 2C15.7981 2 19.7778 5.97866 19.7778 10.8866C19.7778 11.4663 19.7778 11.7562 19.802 11.9187C19.8598 12.3072 20.0411 12.6414 20.2194 12.9873L22 16.4407L20.6006 17.1402C20.195 17.3429 19.9923 17.4443 19.851 17.6314C19.7097 17.8184 19.67 18.0296 19.5904 18.4519L19.5826 18.4931C19.4004 19.4606 19.1993 20.5286 18.6329 21.2024C18.4329 21.4403 18.1853 21.6336 17.9059 21.7699C17.4447 21.9948 16.8777 21.9948 15.7437 21.9948C15.219 21.9948 14.6928 22.0069 14.1682 21.9942C12.9247 21.9639 12 20.9184 12 19.7044",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M14.388 10.5315C13.9617 10.5315 13.5729 10.3702 13.2784 10.1048M14.388 10.5315C14.388 11.6774 13.7241 12.7658 12.4461 12.7658C11.1681 12.7658 10.5043 13.8541 10.5043 15M14.388 10.5315C16.5373 10.5315 16.5373 7.18017 14.388 7.18017C14.1927 7.18017 14.0053 7.21403 13.8312 7.27624C13.9362 4.77819 10.3349 4.1 9.51923 6.44018M10.5043 8.29729C10.5043 7.52323 10.1133 6.8411 9.51923 6.44018M9.51923 6.44018C7.66742 5.19034 5.19883 7.4331 6.37324 9.43277C4.40226 9.72827 4.61299 12.7658 6.6205 12.7658C7.18344 12.7658 7.68111 12.4844 7.98234 12.0538",
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
function AiWebBrowsingIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M11.5379 8.32172C11.6966 7.89276 12.3034 7.89276 12.4621 8.32172L13.1735 10.2443C13.2733 10.514 13.486 10.7267 13.7557 10.8265L15.6783 11.5379C16.1072 11.6966 16.1072 12.3034 15.6783 12.4621L13.7557 13.1735C13.486 13.2733 13.2733 13.486 13.1735 13.7557L12.4621 15.6783C12.3034 16.1072 11.6966 16.1072 11.5379 15.6783L10.8265 13.7557C10.7267 13.486 10.514 13.2733 10.2443 13.1735L8.32172 12.4621C7.89276 12.3034 7.89276 11.6966 8.32172 11.5379L10.2443 10.8265C10.514 10.7267 10.7267 10.514 10.8265 10.2443L11.5379 8.32172Z",
            stroke: color,
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10", stroke: color, strokeWidth: "1.5" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M8 8C8.67327 4.46819 10.2109 2 12 2C13.7891 2 15.3267 4.46819 16 8",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M8 16C8.67327 19.5318 10.2109 22 12 22C13.7891 22 15.3267 19.5318 16 16",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M2 12H4.5M22 12H19.5",
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
function CalendarFoldIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C13.3313 22 13.8509 22 14.3769 21.9992C15.1689 21.998 15.5649 21.9974 15.9316 21.8452C16.2983 21.693 16.5815 21.4099 17.1477 20.8436L19.8436 18.1477C20.4099 17.5815 20.693 17.2983 20.8452 16.9316C20.9974 16.5649 20.998 16.1689 20.9992 15.3769C21 14.8509 21 14.3313 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M15 22C15.0359 19.5168 15.2201 18.109 16.1646 17.1646C17.109 16.2201 18.5168 16.0359 21 16",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M16 2V6M8 2V6",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M3 10H21",
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
function AiViewIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M4.75 2.75L7 5L7 8M4.75 3.5C5.16421 3.5 5.5 3.16421 5.5 2.75C5.5 2.33579 5.16421 2 4.75 2C4.33579 2 4 2.33579 4 2.75C4 3.16421 4.33579 3.5 4.75 3.5Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M19.25 2.75L17 5L17 8M19.25 3.5C18.8358 3.5 18.5 3.16421 18.5 2.75C18.5 2.33579 18.8358 2 19.25 2C19.6642 2 20 2.33579 20 2.75C20 3.16421 19.6642 3.5 19.25 3.5Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12 2.75L12 7M12 3.5C12.4142 3.5 12.75 3.16421 12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75C11.25 3.16421 11.5858 3.5 12 3.5Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M15 16C15 14.3431 13.6569 13 12 13C10.3431 13 9 14.3431 9 16C9 17.6569 10.3431 19 12 19C13.6569 19 15 17.6569 15 16Z",
            stroke: color,
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12 10C18 10 22 16 22 16C22 16 18 22 12 22C6 22 2 16 2 16C2 16 6 10 12 10Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function AuditTwoIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M19 11V10C19 6.22876 19 4.34315 17.8284 3.17157C16.6569 2 14.7712 2 11 2C7.22876 2 5.34315 2 4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M21 22L19.2857 20.2857M19.8571 17.4286C19.8571 19.3221 18.3221 20.8571 16.4286 20.8571C14.535 20.8571 13 19.3221 13 17.4286C13 15.535 14.535 14 16.4286 14C18.3221 14 19.8571 15.535 19.8571 17.4286Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M7 7H15M7 11H11",
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
function AuctionIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12 14.0059L5.84373 21.2328C5.01764 22.2026 3.54001 22.2616 2.63922 21.3608C1.73843 20.46 1.79744 18.9824 2.7672 18.1563L9.99412 12",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M22 11.9048L15.9048 18M12.0952 2L6 8.09524M11.3334 2.76186L6.76195 7.33329C6.76195 7.33329 9.04766 10.3809 11.3334 12.6666C13.6191 14.9523 16.6667 17.2381 16.6667 17.2381L21.2381 12.6666C21.2381 12.6666 18.9524 9.61901 16.6667 7.33329C14.381 5.04758 11.3334 2.76186 11.3334 2.76186Z",
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
function AnonymousIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M7 14.9999C5.34315 14.9999 4 16.343 4 17.9999C4 19.6567 5.34315 20.9999 7 20.9999C8.65685 20.9999 10 19.6567 10 17.9999C10 16.343 8.65685 14.9999 7 14.9999Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M17 14.9999C15.3431 14.9999 14 16.343 14 17.9999C14 19.6567 15.3431 20.9999 17 20.9999C18.6569 20.9999 20 19.6567 20 17.9999C20 16.343 18.6569 14.9999 17 14.9999Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M14 17H10",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M22 12.9999C19.5434 11.7724 15.9734 10.9999 12 10.9999C8.02658 10.9999 4.45659 11.7724 2 12.9999",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M19 11.4999L17.9425 4.71233C17.7268 3.32807 16.2232 2.578 15.0093 3.24907L14.3943 3.58903C12.9019 4.414 11.0981 4.414 9.60574 3.58903L8.99074 3.24907C7.77676 2.578 6.27318 3.32808 6.05751 4.71233L5 11.4999",
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
function RadarThreeIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 10.3431 17.3284 8.84315 16.2426 7.75736",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.23858 20.8807 6.73858 19.0711 4.92893L12 12",
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
function FolderLibraryIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M16.2627 10.5H7.73725C5.15571 10.5 3.86494 10.5 3.27143 11.3526C2.67793 12.2052 3.11904 13.4258 4.00126 15.867L5.08545 18.867C5.54545 20.1398 5.77545 20.7763 6.2889 21.1381C6.80235 21.5 7.47538 21.5 8.82143 21.5H15.1786C16.5246 21.5 17.1976 21.5 17.7111 21.1381C18.2245 20.7763 18.4545 20.1398 18.9146 18.867L19.9987 15.867C20.881 13.4258 21.3221 12.2052 20.7286 11.3526C20.1351 10.5 18.8443 10.5 16.2627 10.5Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "square"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M19 8C19 7.53406 19 7.30109 18.9239 7.11732C18.8224 6.87229 18.6277 6.67761 18.3827 6.57612C18.1989 6.5 17.9659 6.5 17.5 6.5H6.5C6.03406 6.5 5.80109 6.5 5.61732 6.57612C5.37229 6.67761 5.17761 6.87229 5.07612 7.11732C5 7.30109 5 7.53406 5 8",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M16.5 4C16.5 3.53406 16.5 3.30109 16.4239 3.11732C16.3224 2.87229 16.1277 2.67761 15.8827 2.57612C15.6989 2.5 15.4659 2.5 15 2.5H9C8.53406 2.5 8.30109 2.5 8.11732 2.57612C7.87229 2.67761 7.67761 2.87229 7.57612 3.11732C7.5 3.30109 7.5 3.53406 7.5 4",
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
function DownloadThreeIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M14 21.5H10C6.71252 21.5 5.06878 21.5 3.96243 20.592C3.75989 20.4258 3.57418 20.2401 3.40796 20.0376C2.5 18.9312 2.5 17.2875 2.5 14C2.5 10.7125 2.5 9.06878 3.40796 7.96243C3.57418 7.75989 3.75989 7.57418 3.96243 7.40796C5.06878 6.5 6.71252 6.5 10 6.5H14C17.2875 6.5 18.9312 6.5 20.0376 7.40796C20.2401 7.57418 20.4258 7.75989 20.592 7.96243C21.5 9.06878 21.5 10.7125 21.5 14C21.5 17.2875 21.5 18.9312 20.592 20.0376C20.4258 20.2401 20.2401 20.4258 20.0376 20.592C18.9312 21.5 17.2875 21.5 14 21.5Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M2.5 14.5V10.5C2.5 6.72876 2.5 4.84315 3.67157 3.67157C4.84315 2.5 6.72876 2.5 10.5 2.5H13.5C17.2712 2.5 19.1569 2.5 20.3284 3.67157C21.5 4.84315 21.5 6.72876 21.5 10.5V14.5",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M15 14.5C15 14.5 12.7905 17.4999 12 17.4999C11.2094 17.5 9 14.4999 9 14.4999M12 17L12 10.5",
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
function ArrowUpDownIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M7 4V20",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M17 19L17 4",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M10 6.99998C10 6.99998 7.79053 4.00001 6.99998 4C6.20942 3.99999 4 7 4 7",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M20 17C20 17 17.7905 20 17 20C16.2094 20 14 17 14 17",
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
function InputShortTextIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M15 5V19M15 5C15 3.89543 15.8954 3 17 3M15 5C15 3.89543 14.1046 3 13 3M15 19C15 20.1046 15.8954 21 17 21M15 19C15 20.1046 14.1046 21 13 21",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M5 15L6.49694 9.38649C6.55771 9.15858 6.76412 9 7 9C7.23588 9 7.44229 9.15858 7.50307 9.38649L9 15M6 13H8",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12 6H8C5.17157 6 3.75736 6 2.87868 6.87868C2 7.75736 2 9.17157 2 12C2 14.8284 2 16.2426 2.87868 17.1213C3.75736 18 5.17157 18 8 18H12M18 6.01732C19.5534 6.06413 20.48 6.23738 21.1213 6.87868C22 7.75736 22 9.17157 22 12C22 14.8284 22 16.2426 21.1213 17.1213C20.48 17.7626 19.5534 17.9359 18 17.9827",
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
function MessagePreviewOneIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M21.8812 10.0003C21.9643 10.6436 22 11.3129 22 12.0003C22 16.9709 19.1328 21.0003 12 21.0003C10.4991 21.0003 9.20689 20.8537 8.0984 20.5818C7.50688 20.4367 6.88252 20.6154 6.39239 20.9769C5.70211 21.4862 4.61547 22.0003 3 22.0003C3.99253 21.3337 4.63281 19.5003 3.37161 17.5003C2.37034 15.9794 2 14.0716 2 12.0003C2 7.48016 3.76381 3.73829 10 3.09729",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M8 13.9996H16M8 9.99963H12",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M21.7948 4.59034C21.9316 4.77305 22 4.8644 22 4.99963C22 5.13486 21.9316 5.22622 21.7948 5.40893C21.1801 6.22987 19.6101 7.99963 17.5 7.99963C15.3899 7.99963 13.8199 6.22987 13.2052 5.40893C13.0684 5.22622 13 5.13486 13 4.99963C13 4.8644 13.0684 4.77305 13.2052 4.59034C13.8199 3.76939 15.3899 1.99963 17.5 1.99963C19.6101 1.99963 21.1801 3.76939 21.7948 4.59034Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M17.625 4.99963H17.5M17.75 4.99963C17.75 5.13771 17.6381 5.24963 17.5 5.24963C17.3619 5.24963 17.25 5.13771 17.25 4.99963C17.25 4.86156 17.3619 4.74963 17.5 4.74963C17.6381 4.74963 17.75 4.86156 17.75 4.99963Z",
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
function UnfoldLessIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M18 19C18 19 13.5811 14 12 14C10.4188 14 6 19 6 19",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M18 5.00004C18 5.00004 13.5811 9.99999 12 10C10.4188 10 6 5 6 5",
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
function ShapesOneIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M13.3382 10H10.6618C9.1273 10 8.36006 10 8.08543 9.49297C7.8108 8.98594 8.21743 8.32019 9.0307 6.9887L10.3689 4.79773C11.101 3.59924 11.467 3 12 3C12.533 3 12.899 3.59924 13.6311 4.79773L14.9693 6.9887C15.7826 8.32019 16.1892 8.98594 15.9146 9.49297C15.6399 10 14.8727 10 13.3382 10Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "17.5",
            cy: "17.5",
            r: "3.5",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9.66294 20.1111C10 19.6067 10 18.9045 10 17.5C10 16.0955 10 15.3933 9.66294 14.8889C9.51702 14.6705 9.32952 14.483 9.11114 14.3371C8.60669 14 7.90446 14 6.5 14C5.09554 14 4.39331 14 3.88886 14.3371C3.67048 14.483 3.48298 14.6705 3.33706 14.8889C3 15.3933 3 16.0955 3 17.5C3 18.9045 3 19.6067 3.33706 20.1111C3.48298 20.3295 3.67048 20.517 3.88886 20.6629C4.39331 21 5.09554 21 6.5 21C7.90446 21 8.60669 21 9.11114 20.6629C9.32952 20.517 9.51702 20.3295 9.66294 20.1111Z",
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
function DashboardSquareOneIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M13.6903 19.4567C13.5 18.9973 13.5 18.4149 13.5 17.25C13.5 16.0851 13.5 15.5027 13.6903 15.0433C13.944 14.4307 14.4307 13.944 15.0433 13.6903C15.5027 13.5 16.0851 13.5 17.25 13.5C18.4149 13.5 18.9973 13.5 19.4567 13.6903C20.0693 13.944 20.556 14.4307 20.8097 15.0433C21 15.5027 21 16.0851 21 17.25C21 18.4149 21 18.9973 20.8097 19.4567C20.556 20.0693 20.0693 20.556 19.4567 20.8097C18.9973 21 18.4149 21 17.25 21C16.0851 21 15.5027 21 15.0433 20.8097C14.4307 20.556 13.944 20.0693 13.6903 19.4567Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "square",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M13.6903 8.95671C13.5 8.49728 13.5 7.91485 13.5 6.75C13.5 5.58515 13.5 5.00272 13.6903 4.54329C13.944 3.93072 14.4307 3.44404 15.0433 3.1903C15.5027 3 16.0851 3 17.25 3C18.4149 3 18.9973 3 19.4567 3.1903C20.0693 3.44404 20.556 3.93072 20.8097 4.54329C21 5.00272 21 5.58515 21 6.75C21 7.91485 21 8.49728 20.8097 8.95671C20.556 9.56928 20.0693 10.056 19.4567 10.3097C18.9973 10.5 18.4149 10.5 17.25 10.5C16.0851 10.5 15.5027 10.5 15.0433 10.3097C14.4307 10.056 13.944 9.56928 13.6903 8.95671Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "square",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M3.1903 19.4567C3 18.9973 3 18.4149 3 17.25C3 16.0851 3 15.5027 3.1903 15.0433C3.44404 14.4307 3.93072 13.944 4.54329 13.6903C5.00272 13.5 5.58515 13.5 6.75 13.5C7.91485 13.5 8.49728 13.5 8.95671 13.6903C9.56928 13.944 10.056 14.4307 10.3097 15.0433C10.5 15.5027 10.5 16.0851 10.5 17.25C10.5 18.4149 10.5 18.9973 10.3097 19.4567C10.056 20.0693 9.56928 20.556 8.95671 20.8097C8.49728 21 7.91485 21 6.75 21C5.58515 21 5.00272 21 4.54329 20.8097C3.93072 20.556 3.44404 20.0693 3.1903 19.4567Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "square",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M3.1903 8.95671C3 8.49728 3 7.91485 3 6.75C3 5.58515 3 5.00272 3.1903 4.54329C3.44404 3.93072 3.93072 3.44404 4.54329 3.1903C5.00272 3 5.58515 3 6.75 3C7.91485 3 8.49728 3 8.95671 3.1903C9.56928 3.44404 10.056 3.93072 10.3097 4.54329C10.5 5.00272 10.5 5.58515 10.5 6.75C10.5 7.91485 10.5 8.49728 10.3097 8.95671C10.056 9.56928 9.56928 10.056 8.95671 10.3097C8.49728 10.5 7.91485 10.5 6.75 10.5C5.58515 10.5 5.00272 10.5 4.54329 10.3097C3.93072 10.056 3.44404 9.56928 3.1903 8.95671Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "square",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function DragDropVerticalIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M16 6C16 6.55228 15.5523 7 15 7C14.4477 7 14 6.55228 14 6C14 5.44772 14.4477 5 15 5C15.5523 5 16 5.44772 16 6Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M10 6C10 6.55228 9.55228 7 9 7C8.44772 7 8 6.55228 8 6C8 5.44772 8.44772 5 9 5C9.55228 5 10 5.44772 10 6Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M16 18C16 18.5523 15.5523 19 15 19C14.4477 19 14 18.5523 14 18C14 17.4477 14.4477 17 15 17C15.5523 17 16 17.4477 16 18Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M10 18C10 18.5523 9.55228 19 9 19C8.44772 19 8 18.5523 8 18C8 17.4477 8.44772 17 9 17C9.55228 17 10 17.4477 10 18Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z",
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
function TickTwoIcon({
  size = 24,
  color = "currentColor",
  animated = false,
  triggered,
  onClick,
  ...props
}) {
  const isInteractive = animated || triggered !== void 0;
  const controls = useAnimation();
  const hasMounted = useRef(false);
  useEffect(() => {
    if (!isInteractive) return;
    if (!hasMounted.current) {
      controls.set({ pathLength: 1 });
      hasMounted.current = true;
      return;
    }
    if (triggered !== void 0) {
      if (triggered) {
        controls.set({ pathLength: 0 });
        controls.start({
          pathLength: 1,
          transition: { duration: 0.08, ease: "easeOut" }
        });
      } else {
        controls.start({
          pathLength: 0,
          transition: { duration: 0.04, ease: "easeIn" }
        });
      }
    }
  }, [triggered, isInteractive]);
  const replay = () => {
    controls.set({ pathLength: 0 });
    controls.start({
      pathLength: 1,
      transition: { duration: 0.08, ease: "easeOut" }
    });
  };
  return /* @__PURE__ */ jsx(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick: (e) => {
        if (animated && triggered === void 0) replay();
        if (typeof onClick === "function") onClick(e);
      },
      style: isInteractive ? { cursor: "pointer" } : void 0,
      ...props,
      children: /* @__PURE__ */ jsx(
        motion.path,
        {
          d: "M5 14L8.5 17.5L19 6.5",
          stroke: color,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          animate: isInteractive ? controls : void 0
        }
      )
    }
  );
}
function ArrowRightTwoIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M18.5 12L4.99997 12",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6",
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
function PenOneIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M3.49977 18.9853V20.5H5.01449C6.24074 20.5 6.85387 20.5 7.40518 20.2716C7.9565 20.0433 8.39004 19.6097 9.25713 18.7426L19.1211 8.87868C20.0037 7.99612 20.4449 7.55483 20.4937 7.01325C20.5018 6.92372 20.5018 6.83364 20.4937 6.74411C20.4449 6.20253 20.0037 5.76124 19.1211 4.87868C18.2385 3.99612 17.7972 3.55483 17.2557 3.50605C17.1661 3.49798 17.0761 3.49798 16.9865 3.50605C16.4449 3.55483 16.0037 3.99612 15.1211 4.87868L5.25713 14.7426C4.39004 15.6097 3.9565 16.0433 3.72813 16.5946C3.49977 17.1459 3.49977 17.759 3.49977 18.9853Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M13.5 6.5L17.5 10.5",
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
function InformationCircleIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: "12",
            cy: "12",
            r: "10",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12 16V12",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12.125 8.25H12M12.25 8.25C12.25 8.11193 12.1381 8 12 8C11.8619 8 11.75 8.11193 11.75 8.25C11.75 8.38807 11.8619 8.5 12 8.5C12.1381 8.5 12.25 8.38807 12.25 8.25Z",
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
function LinkSixIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M13.5 13V11.5C13.5 10.0955 13.5 9.39331 13.1629 8.88886C13.017 8.67048 12.8295 8.48298 12.6111 8.33706C12.1705 8.04261 11.5789 8.00539 10.5 8.00068C10.3439 8 10.1775 8 10 8C8.59554 8 7.89331 8 7.38886 8.33706C7.17048 8.48298 6.98298 8.67048 6.83706 8.88886C6.5 9.39331 6.5 10.0955 6.5 11.5V17.5C6.5 18.9045 6.5 19.6067 6.83706 20.1111C6.98298 20.3295 7.17048 20.517 7.38886 20.6629C7.89331 21 8.59554 21 10 21C11.4045 21 12.1067 21 12.6111 20.6629C12.8295 20.517 13.017 20.3295 13.1629 20.1111C13.3503 19.8307 13.4335 19.4892 13.4705 19",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M10.5 11V12.5C10.5 13.9045 10.5 14.6067 10.8371 15.1111C10.983 15.3295 11.1705 15.517 11.3889 15.6629C11.8295 15.9574 12.4211 15.9946 13.5 15.9993C13.6561 16 13.8225 16 14 16C15.4045 16 16.1067 16 16.6111 15.6629C16.8295 15.517 17.017 15.3295 17.1629 15.1111C17.5 14.6067 17.5 13.9045 17.5 12.5V6.5C17.5 5.09554 17.5 4.39331 17.1629 3.88886C17.017 3.67048 16.8295 3.48298 16.6111 3.33706C16.1067 3 15.4045 3 14 3C12.5955 3 11.8933 3 11.3889 3.33706C11.1705 3.48298 10.983 3.67048 10.8371 3.88886C10.6497 4.16925 10.5665 4.51076 10.5295 5",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}
function ArrowUpRightOneIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5",
          stroke: color,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function DeleteTwoIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9.5 16.5L9.5 10.5",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M14.5 16.5L14.5 10.5",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          }
        )
      ]
    }
  );
}
function ExpandIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M19 12L19 8.99996C19 7.11435 18.9999 6.17155 18.4142 5.58577C17.8284 4.99999 16.8856 4.99999 15 5L12 5.00001",
            stroke: color,
            strokeWidth: "1.5",
            strokeMiterlimit: "16",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M5 12L5.00003 15C5.00004 16.8856 5.00005 17.8284 5.58584 18.4142C6.17163 19 7.11443 19 9.00004 19L12 19",
            stroke: color,
            strokeWidth: "1.5",
            strokeMiterlimit: "16",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function ArrowDownTwoIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12 18.502V5.00195",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M18 13.002C18 13.002 13.5811 19.0019 12 19.002C10.4188 19.002 6 13.002 6 13.002",
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
function VerticalScrollPointIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M8 6.99997C8 6.99997 10.946 3.00001 12 3C13.0541 2.99999 16 7 16 7",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M16 17C16 17 13.054 21 12 21C10.9459 21 8 17 8 17",
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
function UserAddOneIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13C12.7614 13 15 10.7614 15 8Z",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M17.5 21L17.5 14M14 17.5H21",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M3 20C3 16.134 6.13401 13 10 13C11.4872 13 12.8662 13.4638 14 14.2547",
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
function FileAddIcon({
  size = 24,
  color = "currentColor",
  animated: _animated,
  triggered: _triggered,
  onClick,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    motion.svg,
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      onClick,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M4 12.0005L4 14.5446C4 17.7896 4 19.4122 4.88607 20.5111C5.06508 20.7331 5.26731 20.9354 5.48933 21.1144C6.58831 22.0005 8.21082 22.0005 11.4558 22.0005C12.1614 22.0005 12.5141 22.0005 12.8372 21.8865C12.9044 21.8627 12.9702 21.8355 13.0345 21.8047C13.3436 21.6569 13.593 21.4075 14.0919 20.9086L18.8284 16.172C19.4065 15.594 19.6955 15.3049 19.8478 14.9374C20 14.5699 20 14.1611 20 13.3436V10.0005C20 6.22922 20 4.34361 18.8284 3.17203C17.7693 2.11287 16.1265 2.01125 13.0345 2.0015M13 21.5005V21.0005C13 18.172 13 16.7578 13.8787 15.8791C14.7574 15.0005 16.1716 15.0005 19 15.0005H19.5",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12 5.99954H4M8 1.99954V9.99954",
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

export { AbacusIcon, AiViewIcon, AiVisionRecognitionIcon, AiWebBrowsingIcon, AnonymousIcon, ArrowDownOneIcon, ArrowDownTwoIcon, ArrowLeftOneIcon, ArrowRightOneIcon, ArrowRightTwoIcon, ArrowUpDownIcon, ArrowUpRightOneIcon, ArrowUpTwoIcon, AtomOneIcon, AuctionIcon, AudioWaveOneIcon, AuditTwoIcon, BookmarkTwoIcon, BookmarkTwoSolidIcon, BrainTwoIcon, BrushIcon, BubbleChatAddIcon, BubbleChatEditIcon, BubbleChatIcon, BubbleChatTemporaryIcon, CalendarFoldIcon, CalendarThreeIcon, CancelCircleIcon, CancelOneIcon, ChatOneIcon, CircleIcon, CopyOneIcon, CursorCircleSelectionTwoIcon, DashboardSquareOneIcon, DeleteTwoIcon, DownloadOneIcon, DownloadThreeIcon, DragDropVerticalIcon, ExchangeOneIcon, ExpandIcon, FileAddIcon, FilterMailIcon, FolderAddIcon, FolderLibraryIcon, FolderOneIcon, FolderThreeIcon, GalaxyIcon, GlobalSearchIcon, ImageAddTwoIcon, ImageDownloadTwoIcon, ImageNotFoundOneIcon, ImageTwoIcon, InformationCircleIcon, InputShortTextIcon, LaurelWreathOneIcon, LinkSixIcon, LoadingOneIcon, LogoIcon, MessagePreviewOneIcon, MicTwoIcon, MoreHorizontalIcon, MoreVerticalIcon, NeuralNetworkIcon, PenOneIcon, PinIcon, PlusSignIcon, QuillWriteOneIcon, QuillWriteTwoIcon, RadarThreeIcon, RedoIcon, SearchOneIcon, ShapesOneIcon, ShareOneIcon, SidebarLeftIcon, SidebarRightIcon, SourceCodeIcon, SourceCodeSquareIcon, StarIcon, StickyNoteTwoIcon, StopCircleIcon, TestTubeIcon, TextIcon, TextIndentIcon, ThumbsDownIcon, ThumbsUpIcon, TickTwoIcon, TokenCircleIcon, TokenSquareIcon, UnfoldLessIcon, UserAddOneIcon, UserAiIcon, UserIcon, VerticalScrollPointIcon, ViewIcon, ViewOffSlashIcon, WorkflowSquareTenIcon };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map