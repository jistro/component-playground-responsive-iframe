import React from 'react';

var FullScreen = ({
  ...props,
  height = '100%',
  width = '100%'
} = {}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -256 1792 1792"
    width={width} height={height}
    {...props}>
    <g transform="matrix(1,0,0,-1,121.49153,1270.2373)">
      <path d="M 1283,995 928,640 1283,285 1427,429 q 29,31 70,14 39,-17 39,-59 V -64 q 0,-26 -19,-45 -19,-19 -45,-19 h -448 q -42,0 -59,40 -17,39 14,69 L 1123,125 768,480 413,125 557,-19 q 31,-30 14,-69 -17,-40 -59,-40 H 64 q -26,0 -45,19 -19,19 -19,45 v 448 q 0,42 40,59 39,17 69,-14 L 253,285 608,640 253,995 109,851 Q 90,832 64,832 52,832 40,837 0,854 0,896 v 448 q 0,26 19,45 19,19 45,19 h 448 q 42,0 59,-40 17,-39 -14,-69 l -144,-144 355,-355 355,355 -144,144 q -31,30 -14,69 17,40 59,40 h 448 q 26,0 45,-19 19,-19 19,-45 V 896 q 0,-42 -39,-59 -13,-5 -25,-5 -26,0 -45,19 z" />
    </g>
  </svg>
);

export default FullScreen;
