import { describe, expect, it } from 'vitest';
import { TRANSPARENT_COLOR } from '../../utils';
import {
  getPrecipitationColor,
  getSafeColor,
  getSnowDepth,
  getTemperatureColor,
  getWindColor,
} from './color';

describe('color utils', () => {
  describe('getSafeColor', () => {
    const fakeColorGetter = (v: number) => `color-${v}`;

    it('возвращает цвет из getColor если значение не null', () => {
      expect(getSafeColor(5, fakeColorGetter)).toBe('color-5');
    });

    it('возвращает TRANSPARENT_COLOR если значение null', () => {
      expect(getSafeColor(null, fakeColorGetter)).toBe(TRANSPARENT_COLOR);
    });
  });

  describe('getTemperatureColor', () => {
    it('очень низкая температура <= -24', () => {
      expect(getTemperatureColor(-30)).toBe('#ccffff');
      expect(getTemperatureColor(-24)).toBe('#ccffff'); // пограничное
    });

    it('высокая температура >= 15', () => {
      expect(getTemperatureColor(20)).toBe('#ffccff');
      expect(getTemperatureColor(15)).toBe('#ffccff'); // пограничное
    });

    it('средняя температура', () => {
      expect(getTemperatureColor(0)).toBe(TRANSPARENT_COLOR);
      expect(getTemperatureColor(-23)).toBe(TRANSPARENT_COLOR);
      expect(getTemperatureColor(14)).toBe(TRANSPARENT_COLOR);
    });
  });

  describe('getPrecipitationColor', () => {
    it('правильные цвета по диапазонам', () => {
      expect(getPrecipitationColor(20)).toBe('#00ff00');
      expect(getPrecipitationColor(19)).toBe('#00ff00'); // пограничное
      expect(getPrecipitationColor(10)).toBe('#ccffcc');
      expect(getPrecipitationColor(9)).toBe('#ccffcc'); // пограничное
      expect(getPrecipitationColor(5)).toBe(TRANSPARENT_COLOR);
      expect(getPrecipitationColor(0)).toBe(TRANSPARENT_COLOR);
    });
  });

  describe('getSnowDepth', () => {
    it('аналогично getPrecipitationColor', () => {
      expect(getSnowDepth(20)).toBe('#00ff00');
      expect(getSnowDepth(19)).toBe('#00ff00'); // пограничное
      expect(getSnowDepth(10)).toBe('#ccffcc');
      expect(getSnowDepth(9)).toBe('#ccffcc'); // пограничное
      expect(getSnowDepth(5)).toBe(TRANSPARENT_COLOR);
      expect(getSnowDepth(0)).toBe(TRANSPARENT_COLOR);
    });
  });

  describe('getWindColor', () => {
    it('возвращает правильные цвета по порогам', () => {
      expect(getWindColor(25)).toBe('#ff99ff');
      expect(getWindColor(20)).toBe('#ffd9ff');
      expect(getWindColor(17)).toBe('#ffd9ff');
      expect(getWindColor(15)).toBe('#ffff00');
      expect(getWindColor(13)).toBe('#ffff00');
      expect(getWindColor(12)).toBe(TRANSPARENT_COLOR); // на пороге >12
      expect(getWindColor(10)).toBe(TRANSPARENT_COLOR);
    });
  });
});
