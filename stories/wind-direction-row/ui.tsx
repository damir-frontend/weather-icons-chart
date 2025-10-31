import { timeZoneStore } from '../time-zone';
import React from 'react';
import { getCellBackgroundColor, getCellTitle, getDayChangeIndexesSet } from '../utils';
import styles from './styles.module.scss';
import { getWindColorArrow } from './utils';
import { WindArrowCell } from './wind-arrow-cell/ui';
import { LABEL_KEYS } from '../up-level/consts';

interface WindDirectionRowProps {
  windAngle: (number | null)[];
  windGust: (number | null)[];
  isDayArray: boolean[];
  longitude: number;
  labels: number[];
}

export const WindDirectionRow: React.FC<WindDirectionRowProps> = ({
  windAngle,
  windGust,
  isDayArray,
  longitude,
  labels,
}) => {
  const timeZone = timeZoneStore((state) => state.timeZone);
  const dayChangeIndexes = getDayChangeIndexesSet(labels, timeZone, longitude);

  return (
    <div className={styles.row}>
      {windAngle.map((angle, index) => {
        const gust = windGust[index];
        const bgColor = getCellBackgroundColor({
          isDay: isDayArray[index],
        });
        const dayEndBorderClass = dayChangeIndexes.has(index) ? styles.dayEndBorder : '';

        return (
          <WindArrowCell
            key={index}
            className={`${styles.windAngleCell} ${dayEndBorderClass}`}
            title={getCellTitle(LABEL_KEYS.WIND_ANGLE, angle)}
            color={getWindColorArrow(gust)}
            angle={angle}
            style={{ backgroundColor: bgColor }}
          />
        );
      })}
    </div>
  );
};
