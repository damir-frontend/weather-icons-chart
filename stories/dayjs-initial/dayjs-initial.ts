import dayjs from "dayjs";
import "dayjs/locale/ru";
import minMax from "dayjs/plugin/minMax";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(minMax);
dayjs.locale("ru");

export default dayjs;
export type { Dayjs } from "dayjs";
