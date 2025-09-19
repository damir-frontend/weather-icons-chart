import React from 'react';
import { WeatherChartDataSection } from '../weather-chart-data-section/ui';
import { WeatherChartHeader } from '../weather-chart-header/ui';
import { WeatherChartIconRow } from '../weather-chart-icon-row/ui';
import styles from './styles.module.scss';
import { timeZoneStore } from '../time-zone';

type TWeatherChartDataColumn = { longitude: number };
export const WeatherChartDataColumn: React.FC<TWeatherChartDataColumn> = ({ longitude }) => {
  // подписка нужна исключительно для обновления компонента со всеми его потомками (в которых не делать подписки)
  const timeZone = timeZoneStore((state) => state.timeZone);

  return (
    <div className={styles.scrollWrapper}>
      <div className={styles.weatherIconsChart}>
        <WeatherChartHeader longitude={longitude} />

        <WeatherChartIconRow longitude={longitude} />

        <WeatherChartDataSection longitude={longitude} />
      </div>
    </div>
  );
};
