import React from 'react';

export const Hail: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <polygon 
    points="50,10 90,75 10,75" 
    fill="#ff0000"
    stroke="#ff0000" 
    strokeWidth="10"
  />
</svg>
);
