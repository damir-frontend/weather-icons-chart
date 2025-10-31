import { PRECIPITATION_TYPES, TPrecipitationType } from '../../types';

export type PrecipitationIconsType = {
  precipitationType: Exclude<TPrecipitationType, ''>;
  precipitationIntensity: number;
};

// Группы по категориям
const MIXED_ICONS = [PRECIPITATION_TYPES.MIXED] as const;
const SINGLE_ICONS = [
  PRECIPITATION_TYPES.HAIL,
  PRECIPITATION_TYPES.FREEZING_RAIN,
  PRECIPITATION_TYPES.TORNADO,
  PRECIPITATION_TYPES.STORM,
] as const;
const REPEATED_ICONS = [PRECIPITATION_TYPES.RAIN, PRECIPITATION_TYPES.SNOW] as const;

// Типы по этим группам
export type TMixedIconType = (typeof MIXED_ICONS)[number];
export type TSingleIconType = (typeof SINGLE_ICONS)[number];
export type TRepeatedIconType = (typeof REPEATED_ICONS)[number];

// Type guards
export const isMixedIconType = (type: TPrecipitationType): type is TMixedIconType =>
  MIXED_ICONS.includes(type as TMixedIconType);

export const isSingleIconType = (type: TPrecipitationType): type is TSingleIconType =>
  SINGLE_ICONS.includes(type as TSingleIconType);

export const isRepeatedIconType = (type: TPrecipitationType): type is TRepeatedIconType =>
  REPEATED_ICONS.includes(type as TRepeatedIconType);
