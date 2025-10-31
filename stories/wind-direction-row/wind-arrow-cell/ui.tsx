import { CSSProperties } from 'react';
import { WindArrow } from '../wind-arrow/ui';

type TWindArrowCell = {
  title?: string;
  className?: string;
  color: string;
  angle?: number | null;
  style: CSSProperties;
};

export const WindArrowCell = ({ title, className, color, angle, style }: TWindArrowCell) => {
  return (
    <div className={className} title={title} style={style}>
      {angle != null && <WindArrow color={color} angle={angle} />}
    </div>
  );
};
