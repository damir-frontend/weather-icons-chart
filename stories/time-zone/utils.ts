import dayjs, { Dayjs } from '../dayjs-initial/dayjs-initial';
import { TIME_ZONES, TTimeZone } from './types';

export const getTimeWithZone = (time: Dayjs, zone: TTimeZone, longitude: number): Dayjs => {
  const utcTime = dayjs.utc(time);

  switch (zone) {
    case TIME_ZONES.MSK:
      return utcTime.tz('Europe/Moscow');
    case TIME_ZONES.UTC:
      return utcTime;
    case TIME_ZONES.LOCAL:
    default:
      return getAstronomicTime(utcTime, longitude);
  }
};

export const getHourWithZone = (time: Dayjs, zone: TTimeZone, longitude: number): number => {
  return getTimeWithZone(time, zone, longitude).hour();
};

export const getAstronomicTime = (utcTime: Dayjs, longitude: number): Dayjs => {
  const offset = Math.round(longitude / 15 / 3) * 3; // Примерно 1 час на 15° долготы / с округлением до 3 часов
  return utcTime.add(offset, 'hour');
};
