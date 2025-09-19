
import dayjs from '../dayjs-initial/dayjs-initial';
import React from 'react';
import { getCloudLevel, getDayChangeIndexesSet, getMoonPhase, isDayTimeLocal } from '../utils';
import { WeatherChartIcon } from '../weather-chart-icon/ui';
import styles from './styles.module.scss';
import { stationChartStore } from '../mockStore';
import { timeZoneStore } from '../time-zone';

type TWeatherChartIconRow = { longitude: number };
export const WeatherChartIconRow: React.FC<TWeatherChartIconRow> = ({ longitude }) => {
  const {
    labels,
    precipitationType,
    precipitationIntensity,
    dataCloud: cloudLevel,
    severeWeather,
  } = stationChartStore.getState();
  const timeZone = timeZoneStore((state) => state.timeZone);
  const dayChangeIndexes = getDayChangeIndexesSet(labels, timeZone, longitude);

  return (
    <div className={styles.row}>
      {labels.map((label, index) => {
        const isDay = isDayTimeLocal(dayjs(label), longitude);
        const moonPhase = getMoonPhase(dayjs(label));
        const clouds = getCloudLevel(cloudLevel[index]);
        const dayEndBorderClass = dayChangeIndexes.has(index) ? styles.dayEndBorder : '';

        return (
          <WeatherChartIcon
            key={index}
            isDay={isDay}
            cloudLevel={clouds}
            moonPhase={moonPhase}
            precipitationType={precipitationType[index]}
            precipitationIntensity={precipitationIntensity[index]}
            severeWeather={severeWeather[index]}
            className={dayEndBorderClass}
          />
        );
      })}
    </div>
  );
};
