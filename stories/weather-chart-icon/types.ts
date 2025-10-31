import { TCloudLevel, TMoonPhase, TPrecipitationType } from '../types';

export type WeatherChartIconProps = {
  isDay: boolean;
  cloudLevel: TCloudLevel;
  moonPhase: TMoonPhase;
  precipitationType: TPrecipitationType;
  precipitationIntensity: number;
  severeWeather: TPrecipitationType;
  className?: string;
};

export type TitleParams = {
  isDay: boolean;
  moonPhase: TMoonPhase;
  cloudLevel: TCloudLevel;
  precipitationType: TPrecipitationType;
  precipitationIntensity: number;
  severeWeather: TPrecipitationType;
};
