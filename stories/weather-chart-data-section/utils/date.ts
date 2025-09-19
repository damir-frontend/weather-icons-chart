
import dayjs from '../../dayjs-initial/dayjs-initial';
import { TTimeZone } from '../../time-zone';
import { isDayTimeLocal } from '../../utils';

export function getIsDayFlags(
  labels: number[],
  timeZone: TTimeZone,
  longitude: number,
): boolean[] {
  return labels.map((label) => isDayTimeLocal(dayjs(label), longitude));
}
