declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.css'; // обычные css

declare module '*.svg' {
  import * as React from 'react';
  const src: string; // default импорт будет строкой
  export default src;
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

declare module '*.svg?component' {
  import * as React from 'react';
  const Component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default Component;
}