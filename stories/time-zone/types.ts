export const TIME_ZONES = {
  MSK: 'msk',
  UTC: 'utc',
  LOCAL: 'local',
} as const;

export type TTimeZone = (typeof TIME_ZONES)[keyof typeof TIME_ZONES];

export const TIME_ZONE_LABELS: Record<TTimeZone, string> = {
  msk: 'МСК',
  utc: 'UTC',
  local: 'Местное',
};

export const getTimeZoneLabel = (timeZone: TTimeZone): string => TIME_ZONE_LABELS[timeZone];
