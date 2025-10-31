import React from 'react';

export const Rain: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
  <circle cx="50" cy="50" r="30" fill="#008001" stroke="white" strokeWidth="5" />
</svg>
);
