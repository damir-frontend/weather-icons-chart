
import { LABEL_KEYS } from '../../up-level/consts';
import {
  getPrecipitationColor,
  getSnowDepth,
  getTemperatureColor,
  getWindColor,
} from './color';
import { TChartRowConfig } from './types';

export const chartRowsConfig: TChartRowConfig[] = [
  {
    key: LABEL_KEYS.TEMPERATURE,
    dataKey: 'temperature',
    getColor: getTemperatureColor,
  },
  {
    key: LABEL_KEYS.PRECIPITATION,
    dataKey: 'precipitation',
    getColor: getPrecipitationColor,
  },
  {
    key: LABEL_KEYS.SNOW_DEPTH,
    dataKey: 'snowDepth',
    getColor: getSnowDepth,
  },
  {
    key: LABEL_KEYS.WIND_GUST,
    dataKey: 'windGust',
    getColor: getWindColor,
  },
];
