import { create } from 'zustand';
import { TIME_ZONES, TTimeZone } from './types';

type State = {
  timeZone: TTimeZone;
  setTimeZone: (zone: TTimeZone) => void;
};

export const timeZoneStore = create<State>((set) => ({
  timeZone: TIME_ZONES.MSK,
  setTimeZone: (zone) => set({ timeZone: zone }),
}));
