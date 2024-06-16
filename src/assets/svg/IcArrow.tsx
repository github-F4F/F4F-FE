import type { SVGProps } from 'react';
const SvgIcArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 12" width={12} height={12} {...props}>
    <path stroke="#fff" strokeLinecap="square" strokeLinejoin="round" strokeWidth={0.5} d="M4.5 2 8 5.5 4.5 9" />
  </svg>
);
export default SvgIcArrow;
