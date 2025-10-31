import { describe, expect, it } from 'vitest';
import { CLOUD_LEVELS, MOON_PHASE, PRECIPITATION_TYPES } from '../types';
import { getTitle } from './utils';

describe('getTitle', () => {
  it('должен вернуть корректный заголовок для дня без облаков и осадков', () => {
    const title = getTitle({
      isDay: true,
      moonPhase: MOON_PHASE.NEW,
      cloudLevel: CLOUD_LEVELS.NONE,
      precipitationType: PRECIPITATION_TYPES.NONE,
      precipitationIntensity: 1,
      severeWeather: PRECIPITATION_TYPES.NONE,
    });
    expect(title).toBe('🌞 день, ☀️ ясно');
  });

  it('должен вернуть корректный заголовок для ночи с луной и облаками', () => {
    const title = getTitle({
      isDay: false,
      moonPhase: MOON_PHASE.FULL,
      cloudLevel: CLOUD_LEVELS.MEDIUM,
      precipitationType: PRECIPITATION_TYPES.NONE,
      precipitationIntensity: 1,
      severeWeather: PRECIPITATION_TYPES.NONE,
    });
    expect(title).toBe('🌙 ночь, 🌕 полнолуние, ⛅️ облачно');
  });

  it('должен включать осадки с интенсивностью', () => {
    const title = getTitle({
      isDay: true,
      moonPhase: MOON_PHASE.NEW,
      cloudLevel: CLOUD_LEVELS.SMALL,
      precipitationType: PRECIPITATION_TYPES.RAIN,
      precipitationIntensity: 3,
      severeWeather: PRECIPITATION_TYPES.NONE,
    });
    expect(title).toBe('🌞 день, 🌤 малооблачно, 🌧 дождь сильный');
  });

  it('должен включать смешанные или сильные осадки без интенсивности', () => {
    const title = getTitle({
      isDay: true,
      moonPhase: MOON_PHASE.NEW,
      cloudLevel: CLOUD_LEVELS.SMALL,
      precipitationType: PRECIPITATION_TYPES.HAIL,
      precipitationIntensity: 4,
      severeWeather: PRECIPITATION_TYPES.NONE,
    });
    expect(title).toBe('🌞 день, 🌤 малооблачно, 🧊 град');
  });

  it('должен учитывать severeWeather', () => {
    const title = getTitle({
      isDay: true,
      moonPhase: MOON_PHASE.NEW,
      cloudLevel: CLOUD_LEVELS.SMALL,
      precipitationType: PRECIPITATION_TYPES.RAIN,
      precipitationIntensity: 1,
      severeWeather: PRECIPITATION_TYPES.STORM,
    });
    expect(title).toBe('🌞 день, 🌤 малооблачно, 🌧 дождь слабый, ⛈ гроза');
  });

  it('должен корректно работать с пустыми значениями', () => {
    const title = getTitle({
      isDay: false,
      moonPhase: MOON_PHASE.NEW,
      cloudLevel: CLOUD_LEVELS.NULL,
      precipitationType: PRECIPITATION_TYPES.NONE,
      precipitationIntensity: 2,
      severeWeather: PRECIPITATION_TYPES.NONE,
    });
    expect(title).toBe('🌙 ночь, 🌑 новолуние');
  });
});
