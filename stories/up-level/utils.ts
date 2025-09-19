import { PRECIPITATION_TYPES, TPrecipitationType } from '../types';
export type TStationData = {
  dt: number;
  w1?: number;
  w2?: number;
  w3?: number;
  w4?: number;
  w5?: number;
  w6?: number;
  w7?: number;
  w8?: number;
  w9?: number;
  w10?: number;
  w11?: number;
  w12?: number;
  w13?: number;
  w14?: number;
  w15?: number;
  w16?: number;
  w17?: number;
  w18?: number;
  w19?: number;
  w20?: number;
  w21?: number;
  w22?: number;
  w23?: number;
  w24?: number;
  w25?: number;
  w26?: number;
  w27?: number;
  w28?: number;
  w29?: number;
  value?: number;
  weather?: number;
};

export const degreeToRhumb = (angle: number) => {
  const rhumbArray = [
    'Северный',
    'Северо-северо-восточный',
    'Северо-восточный',
    'Восточно-северо-восточный',
    'Восточный',
    'Восточно-юго-восточный',
    'Юго-восточный',
    'Юго-юго-восточный',
    'Южный',
    'Юго-юго-западный',
    'Юго-западный',
    'Западно-юго-западный',
    'Западный',
    'Западно-северо-западный',
    'Северо-западный',
    'Северо-северо-западный',
  ];

  const index = Math.round(angle / 22.5) % 16;
  return rhumbArray[index];
};

export const calcTemperature = (value: number | null | undefined) =>
  value != null ? Math.round(+value) : null;
export const calcPrecipitation = (value: number | null | undefined) =>
  value != null && Math.round(+value * 10) / 10 > 0 ? Math.round(+value * 10) / 10 : null;

export const calcPrecipitationType = (el: TStationData): TPrecipitationType => {
  if (el.w2 && el.w2 > 0) {
    if (el.w15 && el.w15 > 0) return PRECIPITATION_TYPES.SNOW;
    else if (el.w16 && el.w16 > 0) return PRECIPITATION_TYPES.HAIL;
    else if (el.w26 && el.w26 > 0) return PRECIPITATION_TYPES.FREEZING_RAIN;
    else if (el.w1 != null && el.w1 > -2 && el.w1 < 5) return PRECIPITATION_TYPES.MIXED;
    return PRECIPITATION_TYPES.RAIN;
  }
  return PRECIPITATION_TYPES.NONE;
};

export const calcSevereWeather = (el: TStationData): TPrecipitationType => {
  if (el.w17) {
    if (el.w17 > 6500) return PRECIPITATION_TYPES.TORNADO;
    if (el.w17 >= 1000 && el.w17 <= 6500) return PRECIPITATION_TYPES.STORM;
  }
  return PRECIPITATION_TYPES.NONE;
};

export const calcPrecipitationIntensity = (value: number | null | undefined): number => {
  if (value === null || value === undefined || value <= 0.2) return 0;
  if (value <= 2) return 1;
  if (value <= 19) return 2;
  if (value <= 49) return 3;
  return 4;
};

export const calcSnowDepth = (value: number | null | undefined) =>
  value ? Math.round(+value * 100) : null;

export const calcStandard = (value: number | null | undefined) =>
  value ? Math.round(+value * 10) / 10 : null;

export const calcWindAngle = (value: number | null | undefined) => (value ? value : null);
