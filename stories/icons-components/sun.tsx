import React from 'react';

export const Sun: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g stroke="#FFAC33" strokeWidth="2.3" strokeLinecap="round">
        <line x1="1" y1="10" x2="2" y2="10"/>   
        <line x1="18" y1="10" x2="19" y2="10"/> 
        <line x1="10" y1="1" x2="10" y2="2"/>   
        <line x1="10" y1="18" x2="10" y2="19"/> 

        <line x1="3.3" y1="3.3" x2="3.9" y2="3.9"/>      
        <line x1="16.1" y1="16.1" x2="16.7" y2="16.7"/>   
        <line x1="16.7" y1="3.3" x2="16.1" y2="3.9"/>     
        <line x1="3.3" y1="16.7" x2="3.9" y2="16.1"/>     
    </g>

    <circle cx="10" cy="10" r="5.9" fill="#FFAC33" />
</svg>
);
