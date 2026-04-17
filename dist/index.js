import { useAnimation, motion } from 'framer-motion';
import { useState, useEffect, useId } from 'react';
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
  animated: _animated,
  triggered: _triggered,
  onClick,
  variant,
  ...props
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
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
function ArrowRightThreeIcon({
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
        /* @__PURE__ */ jsx("path", { d: "M20.0001 18L20.0001 6", stroke: color, strokeWidth: "1.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M16.0001 11.9995L4.00012 11.9995", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M12.0002 8C12.0002 8 16.0001 10.946 16.0001 12C16.0001 13.0541 12.0001 16 12.0001 16", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  );
}
function ArrowLeftFourIcon({
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
        /* @__PURE__ */ jsx("path", { d: "M10 12L20 12", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M5.41418 13.6026L6.38061 14.3639C7.94641 15.5974 8.72931 16.2141 9.36467 15.9328C10 15.6515 10 14.6881 10 12.7613V11.2387C10 9.31191 10 8.34853 9.36467 8.06721C8.72931 7.7859 7.94641 8.40264 6.38062 9.63612L5.41418 10.3974C4.47141 11.1401 4.00003 11.5115 4.00003 12C4.00003 12.4885 4.47141 12.8599 5.41418 13.6026Z", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
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
        /* @__PURE__ */ jsx("path", { d: "M11.9955 12H12.0045M8 12H8.00897", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9949 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C12.6849 2 13.3538 2.0659 14 2.19142", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M20.8386 2.47645L21.5309 3.16882C22.1167 3.7546 22.1167 4.70435 21.5309 5.29013L17.9035 8.9858C17.6182 9.27115 17.2532 9.46351 16.8565 9.53759L14.6084 10.0256C14.2534 10.1027 13.9373 9.78753 14.0134 9.43236L14.4919 7.19703C14.566 6.80035 14.7583 6.43535 15.0437 6.15L18.7173 2.47645C19.303 1.89066 20.2528 1.89066 20.8386 2.47645Z", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
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
        /* @__PURE__ */ jsx("path", { d: "M16 2V6M8 2V6", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M3 10H21", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M11.9955 14H12.0045M11.9955 18H12.0045M15.991 14H16M8 14H8.00897M8 18H8.00897", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
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
        /* @__PURE__ */ jsx("path", { d: "M16.5956 20.6989L14.1508 21.3462C11.8879 21.9453 10.7564 22.2448 9.86986 21.7542C8.98333 21.2636 8.68795 20.1744 8.09718 17.996L6.63512 12.6048C6.04436 10.4264 5.74898 9.33725 6.26846 8.4744C6.78794 7.61155 7.91941 7.312 10.1824 6.7129L14.1827 5.65384C16.4457 5.05474 17.5771 4.75519 18.4637 5.2458C19.3502 5.73642 19.6456 6.82561 20.2363 9.00398L21.7042 14.4166C21.9554 15.343 22.0811 15.8062 21.943 16.2417M16.5956 20.6989C17.3477 20.4998 17.3537 20.4966 17.9386 19.9948L20.6824 17.6404C21.4308 16.9983 21.805 16.6772 21.943 16.2417M16.5956 20.6989C16.5956 20.6989 17.1837 16.1058 18.5 15.5C19.9932 14.8128 21.943 16.2417 21.943 16.2417", stroke: color, strokeWidth: "1.5", strokeLinejoin: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M17 5.00118C16.9356 3.92779 16.7573 3.2521 16.2484 2.76762C15.4689 2.02553 14.218 2.02184 11.716 2.01444L7.29321 2.00137C4.79129 1.99398 3.54033 1.99028 2.76535 2.72777C1.99037 3.46526 1.99402 4.65592 2.00132 7.03725L2.01938 12.9307C2.02668 15.3121 2.03033 16.5027 2.80984 17.2448C3.58935 17.9869 4.84031 17.9906 7.34224 17.998L8.02306 18", stroke: color, strokeWidth: "1.5" })
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
        /* @__PURE__ */ jsx("path", { d: "M3.09477 10.0002C3.03217 10.4572 2.99976 10.9247 2.99976 11.4002C2.99976 16.7021 7.02919 21.0002 11.9998 21.0002C16.9703 21.0002 20.9998 16.7021 20.9998 11.4002C20.9998 10.9247 20.9673 10.4572 20.9047 10.0002", stroke: color, strokeWidth: "1.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsx("path", { d: "M11.9998 13.0002L11.9998 3.0002M11.9998 13.0002C11.2995 13.0002 9.99129 11.0059 9.49976 10.5002M11.9998 13.0002C12.7 13.0002 14.0082 11.0059 14.4998 10.5002", stroke: color, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
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

export { AbacusIcon, AiVisionRecognitionIcon, ArrowDownOneIcon, ArrowLeftFourIcon, ArrowRightThreeIcon, ArrowUpTwoIcon, AtomOneIcon, AudioWaveOneIcon, BookmarkTwoIcon, BrushIcon, BubbleChatAddIcon, BubbleChatEditIcon, BubbleChatIcon, CalendarThreeIcon, CancelCircleIcon, CancelOneIcon, ChatOneIcon, CircleIcon, CursorCircleSelectionTwoIcon, DownloadOneIcon, ExchangeOneIcon, FilterMailIcon, FolderAddIcon, FolderOneIcon, FolderThreeIcon, GalaxyIcon, GlobalSearchIcon, ImageAddTwoIcon, ImageDownloadTwoIcon, ImageNotFoundOneIcon, ImageTwoIcon, LoadingOneIcon, LogoIcon, MicTwoIcon, MoreHorizontalIcon, MoreVerticalIcon, NeuralNetworkIcon, PinIcon, PlusSignIcon, QuillWriteOneIcon, QuillWriteTwoIcon, SearchOneIcon, SidebarLeftIcon, SidebarRightIcon, SourceCodeIcon, SourceCodeSquareIcon, StarIcon, StickyNoteTwoIcon, StopCircleIcon, TestTubeIcon, TextIcon, TextIndentIcon, UserAiIcon, UserIcon, ViewIcon, ViewOffSlashIcon, WorkflowSquareTenIcon };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map