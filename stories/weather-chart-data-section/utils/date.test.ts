import dayjs from '../../dayjs-initial/dayjs-initial';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import * as utilsModule from '../../utils';
import { getIsDayFlags } from './date';

vi.mock('../../utils', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../../utils')>();
  return {
    ...actual,
    isDayTimeLocal: vi.fn(),
  };
});

describe('getIsDayFlags', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('вызывает isDayTimeLocal для каждого label и возвращает массив флагов', () => {
    const labels = [1000, 2000, 3000];
    const fakeTimeZone = 'UTC' as unknown as any;
    const fakeLongitude = 50;

    (utilsModule.isDayTimeLocal as unknown as ReturnType<typeof vi.fn>)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true);

    const result = getIsDayFlags(labels, fakeTimeZone, fakeLongitude);

    expect(result).toEqual([true, false, true]);
    expect(utilsModule.isDayTimeLocal).toHaveBeenCalledTimes(3);

    labels.forEach((label, i) => {
      expect(utilsModule.isDayTimeLocal).toHaveBeenNthCalledWith(
        i + 1,
        dayjs(label),
        fakeLongitude,
      );
    });
  });
});
