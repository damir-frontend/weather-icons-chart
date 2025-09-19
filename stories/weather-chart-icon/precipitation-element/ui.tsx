import React from 'react';
import { PRECIPITATION_TYPES, TPrecipitationType } from '../../types';
import { PrecipitationIcons } from '../precipitation-icons/ui';
import styles from './styles.module.scss';

export const PrecipitationElement: React.FC<{
  precipitationType: TPrecipitationType;
  precipitationIntensity: number;
}> = ({ precipitationType, precipitationIntensity }) => {
  if (!precipitationType || precipitationIntensity <= 0) return null;

  const isMixed = precipitationType === PRECIPITATION_TYPES.MIXED;
  const isSingleIcon =
    precipitationType === PRECIPITATION_TYPES.FREEZING_RAIN ||
    precipitationType === PRECIPITATION_TYPES.HAIL ||
    precipitationType === PRECIPITATION_TYPES.TORNADO ||
    precipitationType === PRECIPITATION_TYPES.STORM;

  const wrapperClass = [
    styles.precipitationWrapper,
    isMixed && styles.mixed,
    !isMixed && !isSingleIcon && styles[`intensity-${precipitationIntensity}`],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClass}>
      <PrecipitationIcons
        precipitationType={precipitationType}
        precipitationIntensity={precipitationIntensity}
      />
    </div>
  );
};
