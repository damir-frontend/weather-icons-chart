import { getTimeWithZone, TIME_ZONES, TTimeZone } from './time-zone';
import dayjs, { Dayjs } from './dayjs-initial/dayjs-initial';
import { LABEL_KEYS, LABEL_META, LabelKey } from './up-level/consts';
import { degreeToRhumb } from './up-level/utils';
import { CLOUD_LEVELS, MOON_PHASE, TCloudLevel, TMoonPhase } from './types';

export const TRANSPARENT_COLOR = 'transparent';

type TGetCellBackgroundColorParams = {
  isDay: boolean;
  color?: string | null;
};

const NIGHT_COLOR = '#eaeaf5';

export const getCellBackgroundColor = ({
  isDay,
  color,
}: TGetCellBackgroundColorParams): string => {
  const isEmpty = !color || color === TRANSPARENT_COLOR;

  return !isDay && isEmpty ? NIGHT_COLOR : color ?? TRANSPARENT_COLOR;
};

export function getDayChangeIndexesSet(
  labels: number[],
  timeZone: TTimeZone,
  longitude: number,
): Set<number> {
  const result = new Set<number>();
  let prevDate = '';

  labels.forEach((label, i) => {
    const currentDate = getTimeWithZone(dayjs(label), timeZone, longitude).format(
      'YYYY-MM-DD',
    );
    if (currentDate !== prevDate) {
      result.add(i - 1);
      prevDate = currentDate;
    }
  });

  return result;
}

export const getCellTitle = (key: LabelKey, value: number | null): string => {
  if (value === null) return '';
  const { label, unit } = LABEL_META[key];

  if (key === LABEL_KEYS.WIND_ANGLE) {
    const rounded = Math.round(value);
    const direction = degreeToRhumb(rounded);
    return `${label}: ${direction} (${rounded}${unit})`;
  }

  return `${label}: ${value} ${unit}`;
};

export const isDayTimeLocal = (time: Dayjs, longitude: number): boolean => {
  const localTime = getTimeWithZone(time, TIME_ZONES.LOCAL, longitude);
  const localHour = localTime.hour();
  return localHour >= 10.5 && localHour < 22.5;
};

export const getMoonPhase = (date: Dayjs): TMoonPhase => {
  const dayOfCycle = Math.floor(date.diff('2000-01-06', 'day') % 29.53); // синодический цикл ~29.53 дней
  if (dayOfCycle < 7) return MOON_PHASE.NEW;
  if (dayOfCycle < 14) return MOON_PHASE.FIRST_QUARTER;
  if (dayOfCycle < 22) return MOON_PHASE.FULL;
  return MOON_PHASE.LAST_QUARTER;
};

export const getCloudLevel = (cloud: number | null): TCloudLevel => {
  if (cloud == null) return CLOUD_LEVELS.NULL;
  if (cloud <= 25) return CLOUD_LEVELS.NONE;
  if (cloud <= 50) return CLOUD_LEVELS.SMALL;
  if (cloud <= 75) return CLOUD_LEVELS.MEDIUM;
  return CLOUD_LEVELS.HEAVY;
};
