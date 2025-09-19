type TWindArrow = { color: string; angle: number };
export const WindArrow = ({ color, angle }: TWindArrow) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    style={{
      color,
      transform: `rotate(${angle}deg)`,
    }}
  >
    <polygon
      fill='currentColor'
      stroke='#5b7e9e'
      points='10.5,21 10.5,12 6,12 12,3 18,12 13.5,12 13.5,21'
    />
  </svg>
);
