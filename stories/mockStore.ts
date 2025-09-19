import { mockData } from './mockData';

type TState = typeof mockData;

export const stationChartStore = {
  state: {} as TState,
  getState() {
    return this.state;
  },
  setState(data: TState) {
    this.state = data;
  },
};

// сразу можно подставить данные
stationChartStore.setState(mockData);
