import { forwardRef } from 'react';

const Box = forwardRef(({ children, style, ...props }, ref) => (
  <div ref={ref} style={{ display: 'flex', ...style }} {...props}>{children}</div>
));

export const Flexbox = Box;
export const Center = forwardRef(({ children, style, ...props }, ref) => (
  <div ref={ref} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }} {...props}>{children}</div>
));
export const Icon = forwardRef(({ children, ...props }, ref) => (
  <span ref={ref} {...props}>{children}</span>
));
export const Tag = forwardRef(({ children, ...props }, ref) => (
  <span ref={ref} {...props}>{children}</span>
));
