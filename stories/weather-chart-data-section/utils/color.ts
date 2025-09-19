import { TRANSPARENT_COLOR } from '../../utils';
import { ColorGetter } from './types';

export const getSafeColor = (value: number | null, getColor: ColorGetter) =>
  value !== null ? getColor(value) : TRANSPARENT_COLOR;

export const getTemperatureColor: ColorGetter = (value) => {
  if (value <= -24) return '#ccffff';
  if (value >= 15) return '#ffccff';
  return TRANSPARENT_COLOR;
};

export const getPrecipitationColor: ColorGetter = (value) => {
  if (value >= 19) return '#00ff00';
  if (value >= 9) return '#ccffcc';
  return TRANSPARENT_COLOR;
};

export const getSnowDepth: ColorGetter = (value) => {
  if (value >= 19) return '#00ff00';
  if (value >= 9) return '#ccffcc';
  return TRANSPARENT_COLOR;
};

export const getWindColor: ColorGetter = (value) => {
  if (value > 20) return '#ff99ff';
  if (value > 15) return '#ffd9ff';
  if (value > 12) return '#ffff00';
  return TRANSPARENT_COLOR;
};
