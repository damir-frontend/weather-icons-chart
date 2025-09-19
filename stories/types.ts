export const PRECIPITATION_TYPES = {
  NONE: '',
  RAIN: 'rain',
  SNOW: 'snow',
  HAIL: 'hail',
  FREEZING_RAIN: 'freezingRain',
  MIXED: 'mixed',
  STORM: 'storm',
  TORNADO: 'tornado',
} as const;

export type TPrecipitationType =
  (typeof PRECIPITATION_TYPES)[keyof typeof PRECIPITATION_TYPES];

export const CLOUD_LEVELS = {
  NULL: 'null',
  NONE: 'none',
  SMALL: 'small',
  MEDIUM: 'medium',
  HEAVY: 'heavy',
} as const;

export type TCloudLevel = (typeof CLOUD_LEVELS)[keyof typeof CLOUD_LEVELS];

export const MOON_PHASE = {
  NEW: 'new',
  FIRST_QUARTER: 'first-quarter',
  FULL: 'full',
  LAST_QUARTER: 'last-quarter',
};
export type TMoonPhase = (typeof MOON_PHASE)[keyof typeof MOON_PHASE];
