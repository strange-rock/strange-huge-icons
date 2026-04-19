import { forwardRef } from 'react';
export const Divider = forwardRef((props, ref) => <hr ref={ref} {...props} />);
