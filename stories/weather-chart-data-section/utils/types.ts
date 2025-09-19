import { LabelKey } from '../../up-level/consts';
import { DataKey } from '../types';

// Типизация для getColor-функций
export type ColorGetter = (value: number) => string;

export type TChartRowConfig = {
  key: LabelKey;
  dataKey: DataKey;
  getColor: ColorGetter;
};
