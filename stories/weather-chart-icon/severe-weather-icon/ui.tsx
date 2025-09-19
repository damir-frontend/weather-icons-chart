import React from 'react';
import { TPrecipitationType } from '../../types';
import { PrecipitationIcons } from '../precipitation-icons/ui';
import styles from './styles.module.scss';

export const SevereWeatherIcon: React.FC<{
  severeWeather: TPrecipitationType;
}> = ({ severeWeather }) => {
  if (!severeWeather) return null;

  return (
    <div className={styles.severeWeatherWrapper}>
      <PrecipitationIcons precipitationType={severeWeather} precipitationIntensity={1} />
    </div>
  );
};
