import React from 'react';
import styles from './styles.module.scss';
import { WeatherChartDataColumn } from './weather-chart-data-column/ui';
import { WeatherChartLabelColumn } from './weather-chart-label-column/ui';
import { stationChartStore } from './mockStore';

type TWeatherIconsChart = { longitude: number };

export const WeatherIconsChart: React.FC = () => {
	const longitude = 15;
  const labels = stationChartStore.getState().labels;
  if (labels.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <WeatherChartLabelColumn />

      <WeatherChartDataColumn longitude={longitude} />
    </div>
  );
};
