import React from 'react';
import {
  isMixedIconType,
  isRepeatedIconType,
  isSingleIconType,
  PrecipitationIconsType,
} from './const';
import { MixedIcon } from './mixed-icon/ui';
import { RepeatedIcon } from './repeated-icon/ui';
import { SingleIcon } from './single-icon/ui';

export const PrecipitationIcons: React.FC<PrecipitationIconsType> = ({
  precipitationType,
  precipitationIntensity,
}) => {
  if (isMixedIconType(precipitationType)) return <MixedIcon />;
  if (isSingleIconType(precipitationType)) return <SingleIcon type={precipitationType} />;
  if (isRepeatedIconType(precipitationType))
    return <RepeatedIcon type={precipitationType} count={precipitationIntensity} />;
  return null;
};
