import { useAnimation, motion } from 'framer-motion';
import { useId, useState, useEffect } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/icons/SidebarLeftIcon.tsx
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

export { AtomOneIcon, ImageAddTwoIcon, ImageDownloadTwoIcon, ImageNotFoundOneIcon, ImageTwoIcon, PinIcon, PlusSignIcon, SidebarLeftIcon, SidebarRightIcon };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map