import { PRECIPITATION_TYPES } from '../types';
import { cloudLabels, dayLabels, moonLabels, precipitationLabels } from './consts/labels';
import { precipitationIntensityMap } from './consts/maps';
import { TitleParams } from './types';

export const getTitle = ({
  isDay,
  moonPhase,
  cloudLevel,
  precipitationType,
  precipitationIntensity,
  severeWeather,
}: TitleParams): string => {
  const parts: string[] = [];

  parts.push(isDay ? dayLabels.day : `${dayLabels.night}, ${moonLabels[moonPhase]}`);
  parts.push(cloudLabels[cloudLevel]);

  if (precipitationLabels[precipitationType]) {
    const intensity =
      precipitationType === PRECIPITATION_TYPES.RAIN ||
      precipitationType === PRECIPITATION_TYPES.SNOW
        ? precipitationIntensityMap[precipitationIntensity]
        : '';
    parts.push([precipitationLabels[precipitationType], intensity].filter(Boolean).join(' '));
  }

  if (severeWeather && precipitationLabels[severeWeather]) {
    parts.push(precipitationLabels[severeWeather]);
  }

  return parts.filter(Boolean).join(', ');
};
