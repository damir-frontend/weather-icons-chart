import React from 'react';
import { TPrecipitationType } from '../../../types';
import { precipitationMap } from '../../consts/maps';
import styles from '../styles.module.scss';

type TSupportedIconType = Exclude<TPrecipitationType, '' | 'mixed'>;

type MultiIconType = {
  types: TSupportedIconType[];
};

export const MultiIcon: React.FC<MultiIconType> = ({ types }) => (
  <>
    {types.map((type, index) => {
		 const Icon = precipitationMap[type]; // React-компонент
      return Icon ? <Icon key={index} className={styles.precipitationIcon} /> : null;
    })}
  </>
);
