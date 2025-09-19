import { describe, expect, it } from 'vitest';
import { chartRowsConfig } from './chart-config';
import {
  getPrecipitationColor,
  getSnowDepth,
  getTemperatureColor,
  getWindColor,
} from './color';
import { LABEL_KEYS } from '../../up-level/consts';

describe('chartRowsConfig', () => {
  it('должен содержать все нужные строки', () => {
    const keys = chartRowsConfig.map((row) => row.key);
    expect(keys).toEqual([
      LABEL_KEYS.TEMPERATURE,
      LABEL_KEYS.PRECIPITATION,
      LABEL_KEYS.SNOW_DEPTH,
      LABEL_KEYS.WIND_GUST,
    ]);
  });

  it('каждая строка должна иметь правильный dataKey', () => {
    const dataKeys = chartRowsConfig.map((row) => row.dataKey);
    expect(dataKeys).toEqual(['temperature', 'precipitation', 'snowDepth', 'windGust']);
  });

  it('каждая строка должна иметь функцию getColor', () => {
    chartRowsConfig.forEach((row) => {
      expect(typeof row.getColor).toBe('function');
    });
  });

  it('getColor каждой строки должна соответствовать правильной функции', () => {
    const mapping = {
      temperature: getTemperatureColor,
      precipitation: getPrecipitationColor,
      snowDepth: getSnowDepth,
      windGust: getWindColor,
    };

    chartRowsConfig.forEach((row) => {
      expect(row.getColor).toBe(mapping[row.dataKey]);
    });
  });
});
