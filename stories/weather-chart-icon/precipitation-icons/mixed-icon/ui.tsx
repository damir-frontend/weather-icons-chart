import React from 'react';
import { PRECIPITATION_TYPES } from '../../../types';
import { MultiIcon } from '../multi-icon/ui';

export const MixedIcon: React.FC = () => (
  <MultiIcon types={[PRECIPITATION_TYPES.RAIN, PRECIPITATION_TYPES.SNOW]} />
);
