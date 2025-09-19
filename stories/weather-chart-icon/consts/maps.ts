import React from 'react';
// import { ReactComponent as CloudHeavyIcon } from '/assets/sun-moon/cloud-heavy.svg';
// import { ReactComponent as CloudMediumIcon } from '/assets/sun-moon/cloud-medium.svg';
// import { ReactComponent as CloudSmallIcon } from '/assets/sun-moon/cloud-small.svg';
// import { ReactComponent as FreezingRainIcon } from '/assets/sun-moon/freezing-rain.svg';
// import { ReactComponent as HailIcon } from '/assets/sun-moon/hail.svg';
// import { ReactComponent as MoonFirstQuarterIcon } from '/assets/sun-moon/moon-first-quarter.svg';
// import { ReactComponent as MoonFullIcon } from '/assets/sun-moon/moon-full.svg';
// import { ReactComponent as MoonLastQuarterIcon  } from '/assets/sun-moon/moon-last-quarter.svg';
// import { ReactComponent as MoonNewIcon } from '/assets/sun-moon/moon-new.svg';
// import { ReactComponent as RainIcon } from '/assets/sun-moon/rain.svg';
// import { ReactComponent as SnowIcon } from '/assets/sun-moon/snow.svg';
// import { ReactComponent as StormIcon } from '/assets/sun-moon/storm.svg';
// import { ReactComponent as TornadoIcon } from '/assets/sun-moon/tornado.svg';

import {
  CLOUD_LEVELS,
  MOON_PHASE,
  PRECIPITATION_TYPES,
  TCloudLevel,
  TMoonPhase,
  TPrecipitationType,
} from '../../types';
import { MoonLastQuarter } from '../../icons-components/moon-last-quarter';
import { MoonNew } from '../../icons-components/moon-new';
import { MoonFirstQuarter } from '../../icons-components/moon-first-quarter';
import { MoonFull } from '../../icons-components/moon-full';
import { CloudSmall } from '../../icons-components/cloud-small';
import { CloudMedium } from '../../icons-components/cloud-medium';
import { CloudHeavy } from '../../icons-components/cloud-heavy';
import { Rain } from '../../icons-components/rain';
import { Snow } from '../../icons-components/snow';
import { Hail } from '../../icons-components/hail';
import { FreezingRain } from '../../icons-components/freezing-rain';
import { Storm } from '../../icons-components/storm';
import { Tornado } from '../../icons-components/tornado';

// Фазы Луны
export const moonMap: Record<TMoonPhase, React.FC<React.SVGProps<SVGSVGElement>>> = {
  [MOON_PHASE.NEW]: MoonNew,
  [MOON_PHASE.FIRST_QUARTER]: MoonFirstQuarter,
  [MOON_PHASE.FULL]: MoonFull,
  [MOON_PHASE.LAST_QUARTER]: MoonLastQuarter,
};

// Облачность
export const cloudMap: Record<TCloudLevel, React.FC<React.SVGProps<SVGSVGElement>> | undefined> = {
  [CLOUD_LEVELS.NULL]: undefined,
  [CLOUD_LEVELS.NONE]: undefined,
  [CLOUD_LEVELS.SMALL]: CloudSmall,
  [CLOUD_LEVELS.MEDIUM]: CloudMedium,
  [CLOUD_LEVELS.HEAVY]: CloudHeavy,
};

// Осадки
export const precipitationMap: Record<Exclude<TPrecipitationType, '' | 'mixed'>, React.FC<React.SVGProps<SVGSVGElement>>> = {
  [PRECIPITATION_TYPES.RAIN]: Rain,
  [PRECIPITATION_TYPES.SNOW]: Snow,
  [PRECIPITATION_TYPES.HAIL]: Hail,
  [PRECIPITATION_TYPES.FREEZING_RAIN]: FreezingRain,
  [PRECIPITATION_TYPES.STORM]: Storm,
  [PRECIPITATION_TYPES.TORNADO]: Tornado,
};

// Интенсивность (только текст)
export const precipitationIntensityMap: Record<number, string> = {
  1: 'слабый',
  2: '',
  3: 'сильный',
  4: 'очень сильный',
};
