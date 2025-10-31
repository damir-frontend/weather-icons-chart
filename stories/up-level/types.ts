import { TPrecipitationType } from "../types";

export const PROVIDER = {
  METEOINFO: "meteoinfo",
  GFS: "gfs",
} as const;
export type TMeteodataSource = (typeof PROVIDER)[keyof typeof PROVIDER];

export type TFetchStationDataRequest = {
  workpoint: any;
  source: TMeteodataSource;
};

export type TStationChartData = (number | null)[];
export type TStationChartDataNumber = number[];

export type TChartStateInitial = {
  rawData: any[];
  temperature: TStationChartData;
  precipitation: TStationChartData;
  precipitationType: TPrecipitationType[];
  precipitationIntensity: TStationChartDataNumber;
  severeWeather: TPrecipitationType[];
  snowDepth: TStationChartData;
  windAngle: TStationChartData;
  windGust: TStationChartData;
  dataCloud: TStationChartData;
  labels: number[];
  visible: boolean;
  errorMessage: string;
  warningMessage: string;
  isLoading: boolean;
};

export type TChartStateMethods = {
  getStationData: ({
    workpoint,
    source,
  }: TFetchStationDataRequest) => Promise<void>;
  resetGraph: () => void;
  setErrorMessage: (message: string) => void;
  setWarningMessage: (message: string) => void;
  setLabels: (labels: number[]) => void;
  setVisible: (value: boolean) => void;
};

export type TStationChartState = TChartStateInitial & TChartStateMethods;
