import React from 'react';

interface CloudSVGProps {
  opacity?: number;
  className?: string;
}

export const CloudSVG: React.FC<CloudSVGProps> = () => {
  return (
    <svg
      viewBox='0 0 200 100'
      preserveAspectRatio='xMidYMid meet'
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <path
        d='M85 25c0-8-6.5-14.5-14.5-14.5-1.3
0-2.6.2-3.8.5-2-5-7-8.5-12.7-8.5-7.5 0-13.5 6-13.5 13.5 0 .8.1 1.6.2
2.3-4.3 1.5-7.2 5.6-7.2 10.2 0 6 5 11 11 11h30c6 0 11-5 11-11z'
        fill='currentColor'
        stroke='white'
      />
    </svg>
  );
};
