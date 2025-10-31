import { TChartStateInitial } from './types';

export const LABEL_META = {
  TEMPERATURE: {
    label: 'Температура',
    unit: '°C',
  },
  PRECIPITATION: {
    label: 'Осадки',
    unit: 'мм',
  },
  SNOW_DEPTH: {
    label: 'Высота снега',
    unit: 'см',
  },
  WIND_GUST: {
    label: 'Порывы ветра',
    unit: 'м/с',
  },
  WIND_ANGLE: {
    label: 'Направление ветра',
    unit: '°',
  },
} as const;

export type LabelKey = keyof typeof LABEL_META;

export const LABEL_KEYS: Record<LabelKey, LabelKey> = Object.keys(LABEL_META).reduce(
  (acc, key) => {
    acc[key as LabelKey] = key as LabelKey;
    return acc;
  },
  {} as Record<LabelKey, LabelKey>,
);

export const initialChartState: TChartStateInitial = {
  rawData: [],
  temperature: [],
  precipitation: [],
  precipitationType: [],
  precipitationIntensity: [],
  severeWeather: [],
  snowDepth: [],
  windAngle: [],
  windGust: [],
  dataCloud: [],
  labels: [],
  errorMessage: '',
  warningMessage: '',
  visible: false,
  isLoading: false,
};
