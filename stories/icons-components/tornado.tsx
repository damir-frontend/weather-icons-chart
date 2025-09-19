import React from 'react';

export const Tornado: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <polyline 
    points="20,99 30,75 30,25 20,1"
    fill="none"    
    stroke="#ff0000" 
    strokeWidth="14"
    />
    <polyline 
    points="80,99 70,75 70,25 80,1"
    fill="none"    
    stroke="#ff0000" 
    strokeWidth="14"
    />
</svg>
);
