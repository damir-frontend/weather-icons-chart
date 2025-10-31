import React from 'react';
import { TSingleIconType } from '../const';
import { MultiIcon } from '../multi-icon/ui';

type SingleIconProps = {
  type: TSingleIconType;
};

export const SingleIcon: React.FC<SingleIconProps> = ({ type }) => <MultiIcon types={[type]} />;
