import type { SVGProps } from 'react';
const SvgIcArrowGray = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" {...props}>
    <path stroke="#666" strokeLinecap="square" strokeLinejoin="round" strokeWidth={0.5} d="m4 2 3.5 3.5L4 9" />
  </svg>
);
export default SvgIcArrowGray;
