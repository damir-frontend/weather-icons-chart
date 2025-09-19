import {  getTimeZoneLabel, TIME_ZONES, timeZoneStore, TTimeZone } from '../time-zone';
import React from 'react';
import styles from './styles.module.scss';
import { LABEL_KEYS, LABEL_META } from '../up-level/consts';

const timeZones: TTimeZone[] = Object.values(TIME_ZONES);
const setTimeZone = timeZoneStore.getState().setTimeZone;

export const WeatherChartLabelColumn: React.FC = () => {
  const timeZone = timeZoneStore((state) => state.timeZone);

  const handleTimeZoneClick = () => {
    const currentIndex = timeZones.indexOf(timeZone);
	  const nextIndex = (currentIndex + 1) % timeZones.length;
	  
    setTimeZone(timeZones[nextIndex]);
  };

  return (
    <div className={styles.labelColumn}>
      <div className={styles.labelCell}>
        Время&nbsp;
        <div className={styles.timeZone} onClick={handleTimeZoneClick}>
          ({getTimeZoneLabel(timeZone)})
        </div>
      </div>
      <div className={styles.labelCell}>День / Ночь</div>
      {Object.values(LABEL_KEYS).map((key) => (
        <div key={key} className={styles.labelCell}>
          {LABEL_META[key].label}
          {LABEL_META[key].unit ? `, ${LABEL_META[key].unit}` : ''}
        </div>
      ))}
    </div>
  );
};
