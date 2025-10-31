import React from 'react';

export const Storm: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <polyline 
    points="5,95 5,5 95,5 50,50 95,95"     
    fill="none"    
    stroke="#ff0000" 
    strokeWidth="14"
    />
    <polyline 
    points="60,95 95,95 95,60"
    fill="none"    
    stroke="#ff0000" 
    strokeWidth="14"
    />
</svg>
);
