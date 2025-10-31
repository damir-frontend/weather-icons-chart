import React from 'react';
import { CLOUD_LEVELS, TMoonPhase, TCloudLevel } from '../types';
import { PrecipitationElement } from './precipitation-element/ui';
import { SevereWeatherIcon } from './severe-weather-icon/ui';
import styles from './styles.module.scss';
import { WeatherChartIconProps } from './types';
import { getTitle } from './utils';
import { cloudMap, moonMap } from './consts/maps';
import { Sun } from '../icons-components/sun';

const isEnabled = true;

export const WeatherChartIcon: React.FC<WeatherChartIconProps> = (props) => {
  const {
    isDay,
    moonPhase,
    cloudLevel,
    precipitationType,
    precipitationIntensity,
    severeWeather,
    className = '',
  } = props;

  const isDayClass = isDay ? '' : styles.night;

  // Получаем соответствующие SVG-компоненты
  const MoonIcon = moonMap[moonPhase as TMoonPhase];
  const CloudIcon = cloudMap[cloudLevel as TCloudLevel];

  return (
    <div className={`${styles.wrapper} ${isDayClass} ${className}`} title={getTitle(props)}>
      {/* Слой солнца/луны */}
      {cloudLevel !== CLOUD_LEVELS.HEAVY &&
        (isDay ? (
			<Sun className={styles.celestial} />
        ) : (
          MoonIcon && <MoonIcon className={styles.celestial} />
        ))}

      {/* Слой облаков */}
      {cloudLevel !== CLOUD_LEVELS.NULL &&
        cloudLevel !== CLOUD_LEVELS.NONE &&
        CloudIcon && <CloudIcon className={styles.clouds} />}

      {/* Слой осадков */}
      {isEnabled && (
        <PrecipitationElement
          precipitationType={precipitationType}
          precipitationIntensity={precipitationIntensity}
        />
      )}

      {/* Слой суровой погоды */}
      {isEnabled && <SevereWeatherIcon severeWeather={severeWeather} />}
    </div>
  );
};
