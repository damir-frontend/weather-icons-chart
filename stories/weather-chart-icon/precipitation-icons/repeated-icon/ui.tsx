import React from 'react';
import { TRepeatedIconType } from '../const';
import { MultiIcon } from '../multi-icon/ui';

type RepeatedIconProps = {
  type: TRepeatedIconType;
  count: number;
};

export const RepeatedIcon: React.FC<RepeatedIconProps> = ({ type, count }) => (
  <MultiIcon types={Array(count).fill(type)} />
);
