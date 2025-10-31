import dayjs from '../dayjs-initial/dayjs-initial';
import React from 'react';
import { getDayChangeIndexesSet, isDayTimeLocal } from '../utils';
import styles from './styles.module.scss';
import { getHourWithZone, getTimeWithZone, timeZoneStore } from '../time-zone';
import { stationChartStore } from '../mockStore';

type TWeatherChartHeader = { longitude: number };
export const WeatherChartHeader: React.FC<TWeatherChartHeader> = ({ longitude }) => {
  const timeZone = timeZoneStore((state) => state.timeZone);
  const labels = stationChartStore.getState().labels;

  const groupedByDate = labels.reduce<Record<string, number[]>>((acc, label, i) => {
    const date = getTimeWithZone(dayjs(label), timeZone, longitude).format('DD dddd');
    if (!acc[date]) acc[date] = [];
    acc[date].push(i);
    return acc;
  }, {});

  const dateGroups = Object.entries(groupedByDate);
  const dayChangeIndexes = getDayChangeIndexesSet(labels, timeZone, longitude);

  return (
    <>
      {dateGroups.map(([date, indexes]) => {
        const start = indexes[0] + 1;
        const span = indexes.length;

        return (
          <div
            key={date}
            className={`${styles.cell} ${styles.dayEndBorder}`}
            style={{ gridColumn: `${start} / span ${span}` }}
          >
            {date}
          </div>
        );
      })}

      {labels.map((label, index) => {
        const isDay = isDayTimeLocal(dayjs(label), longitude);
        const isDayClass = isDay ? '' : styles.night;
        const dayEndBorderClass = dayChangeIndexes.has(index) ? styles.dayEndBorder : '';

        return (
          <div key={index} className={`${styles.cell} ${isDayClass} ${dayEndBorderClass}`}>
            {getHourWithZone(dayjs(label), timeZone, longitude)}
          </div>
        );
      })}
    </>
  );
};
