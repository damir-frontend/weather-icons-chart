import {
  CLOUD_LEVELS,
  MOON_PHASE,
  PRECIPITATION_TYPES,
  TCloudLevel,
  TMoonPhase,
  TPrecipitationType,
} from '../../types';

export const dayLabels = {
  day: '🌞 день',
  night: '🌙 ночь',
};

export const cloudLabels: Record<TCloudLevel, string> = {
  [CLOUD_LEVELS.NULL]: '',
  [CLOUD_LEVELS.NONE]: '☀️ ясно',
  [CLOUD_LEVELS.SMALL]: '🌤 малооблачно',
  [CLOUD_LEVELS.MEDIUM]: '⛅️ облачно',
  [CLOUD_LEVELS.HEAVY]: '☁️ пасмурно',
};

export const precipitationLabels: Record<TPrecipitationType, string> = {
  [PRECIPITATION_TYPES.NONE]: '',
  [PRECIPITATION_TYPES.RAIN]: '🌧 дождь',
  [PRECIPITATION_TYPES.SNOW]: '❄️ снег',
  [PRECIPITATION_TYPES.HAIL]: '🧊 град',
  [PRECIPITATION_TYPES.FREEZING_RAIN]: '🌧❄ ледяной дождь',
  [PRECIPITATION_TYPES.MIXED]: '🌧❄ смешанные',
  [PRECIPITATION_TYPES.STORM]: '⛈ гроза',
  [PRECIPITATION_TYPES.TORNADO]: '🌪 смерч',
};

export const moonLabels: Record<TMoonPhase, string> = {
  [MOON_PHASE.NEW]: '🌑 новолуние',
  [MOON_PHASE.FIRST_QUARTER]: '🌓 первая четверть',
  [MOON_PHASE.FULL]: '🌕 полнолуние',
  [MOON_PHASE.LAST_QUARTER]: '🌗 последняя четверть',
};
