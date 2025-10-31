import { timeZoneStore } from '../time-zone';
import React from 'react';
import { getCellBackgroundColor, getCellTitle, getDayChangeIndexesSet } from '../utils';
import { ColorGetter } from '../weather-chart-data-section/utils/types';
import styles from './styles.module.scss';
import { LABEL_KEYS, LabelKey } from '../up-level/consts';

type WeatherRowProps = {
  data: (number | null)[];
  type: LabelKey;
  getColor: ColorGetter;
  isDayArray: boolean[];
  longitude: number;
  labels: number[];
};

export const WeatherChartRow: React.FC<WeatherRowProps> = ({
  data,
  type,
  getColor,
  isDayArray,
  longitude,
  labels,
}) => {
  const timeZone = timeZoneStore((state) => state.timeZone);
  const dayChangeIndexes = getDayChangeIndexesSet(labels, timeZone, longitude);

  return (
    <div className={styles.row}>
      {data.map((value, index) => {
			const color = value != null ? getColor(value) : null;
        const bgColor = getCellBackgroundColor({
          isDay: isDayArray[index],
          color,
        });
        const dayEndBorderClass = dayChangeIndexes.has(index) ? styles.dayEndBorder : '';

        return (
          <div
            key={index}
            className={`${styles.cell} ${dayEndBorderClass}`}
            title={getCellTitle(type, value)}
            style={{ backgroundColor: bgColor }}
          >
            {value != null && (type === LABEL_KEYS.TEMPERATURE || Math.round(value) > 0) && Math.round(value)}
          </div>
        );
      })}
    </div>
  );
};
