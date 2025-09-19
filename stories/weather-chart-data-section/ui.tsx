import { timeZoneStore } from '../time-zone';
import React from 'react';
import { WeatherChartRow } from '../weather-chart-row/ui';
import { WindDirectionRow } from '../wind-direction-row/ui';
import { DataKey, TWeatherChartDataSection } from './types';
import { chartRowsConfig } from './utils/chart-config';
import { getIsDayFlags } from './utils/date';
import { stationChartStore } from '../mockStore';
import { TStationChartData } from '../up-level/types';

export const WeatherChartDataSection: React.FC<TWeatherChartDataSection> = ({ longitude }) => {
  const storeData = stationChartStore.getState();
  const { windGust, windAngle, labels } = storeData;
  const dataMap = chartRowsConfig.reduce((acc, { dataKey }) => {
    acc[dataKey] = storeData[dataKey];
    return acc;
  }, {} as Record<DataKey, TStationChartData>);

  const timeZone = timeZoneStore((state) => state.timeZone);
  const isDayArray = getIsDayFlags(labels, timeZone, longitude);

  return (
    <>
      {chartRowsConfig.map(({ key, dataKey, getColor }) => (
        <WeatherChartRow
          key={key}
          type={key}
          data={dataMap[dataKey]}
          getColor={getColor}
          isDayArray={isDayArray}
          longitude={longitude}
          labels={labels}
        />
      ))}

      <WindDirectionRow
        windAngle={windAngle}
        windGust={windGust}
        isDayArray={isDayArray}
        longitude={longitude}
        labels={labels}
      />
    </>
  );
};
