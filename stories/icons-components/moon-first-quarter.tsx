import React from 'react';

export const MoonFirstQuarter: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
        <clipPath id="moonClip">
            <rect x="0" y="0" width="10" height="20" />
        </clipPath>
    </defs>
    <circle cx="10" cy="10" r="6" fill="#97d1ec" clipPath="url(#moonClip)"/>
    <circle cx="10" cy="10" r="6" fill="none" stroke="#97d1ec" strokeWidth="1" />
</svg>
);
