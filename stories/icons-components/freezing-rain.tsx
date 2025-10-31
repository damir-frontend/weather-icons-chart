import React from 'react';

export const FreezingRain: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
  <circle cx="50" cy="50" r="15" fill="#ff0000" />
    <polygon 
    points="50,0 93,75 7,75" 
    fill="none" 
    stroke="#ff0000" 
    strokeWidth="10"
  />
</svg>
);
