import React, { CSSProperties } from 'react';
import { useTheme } from '@mui/material';
import { IconComponentProps } from './types';
import { standardTransitions } from '@/theme/constants';

const ReactThreeFiberIcon: React.FC<IconComponentProps> = ({ style = {} }) => {
  const theme = useTheme();
  const containerStyle: CSSProperties = {
    width: '1rem',
    height: '1rem',
    ...style,
  };
  const pathStyle: CSSProperties = {
    fill: theme.palette.text.primary,
    transition: standardTransitions(theme),
  };
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 151.38 130.32"
      style={containerStyle}
    >
      <path
        d="m0,129.24V37.98h18.36v9.72c3.72-3.36,7.38-6,10.98-7.92,3.6-1.92,8.04-2.88,13.32-2.88v19.44c-1.8-.72-3.66-1.08-5.58-1.08s-3.99.33-6.21.99c-2.22.66-4.23,1.77-6.03,3.33-1.92,1.56-3.48,3.6-4.68,6.12-1.2,2.52-1.8,5.64-1.8,9.36v54.18H0Z"
        style={pathStyle}
      />
      <path
        d="m70.38,55.08c5.52,0,9.33-.66,11.43-1.98,2.1-1.32,3.15-4.38,3.15-9.18v-16.56c0-2.64-.81-4.8-2.43-6.48-1.62-1.68-3.81-2.52-6.57-2.52-3.24,0-5.55,1.02-6.93,3.06-1.38,2.04-2.07,4.02-2.07,5.94v10.44h-18.36v-10.62c0-3.72.72-7.26,2.16-10.62,1.44-3.36,3.42-6.24,5.94-8.64,2.52-2.4,5.46-4.32,8.82-5.76,3.36-1.44,6.96-2.16,10.8-2.16,5.04,0,9.21.99,12.51,2.97,3.3,1.98,5.79,3.99,7.47,6.03,1.2,1.44,2.25,2.88,3.15,4.32.9,1.44,1.65,3.18,2.25,5.22,1.08,3.96,1.62,9.84,1.62,17.64,0,4.44-.09,8.04-.27,10.8-.18,2.76-.63,5.04-1.35,6.84-.84,1.92-2.01,3.54-3.51,4.86-1.5,1.32-3.57,2.76-6.21,4.32,2.88,1.8,5.07,3.48,6.57,5.04,1.5,1.56,2.61,3.36,3.33,5.4.72,2.16,1.14,4.71,1.26,7.65.12,2.94.18,6.69.18,11.25,0,4.2-.09,7.68-.27,10.44-.18,2.76-.45,5.04-.81,6.84-.36,1.92-.84,3.54-1.44,4.86-.6,1.32-1.38,2.7-2.34,4.14-2.28,3.36-5.19,6.15-8.73,8.37-3.54,2.22-8.19,3.33-13.95,3.33-2.88,0-5.94-.48-9.18-1.44-3.24-.96-6.18-2.52-8.82-4.68-2.64-2.16-4.83-4.98-6.57-8.46-1.74-3.48-2.61-7.74-2.61-12.78v-10.44h18.36v9.54c0,2.88.81,5.25,2.43,7.11,1.62,1.86,3.81,2.79,6.57,2.79s4.95-.93,6.57-2.79c1.62-1.86,2.43-4.35,2.43-7.47v-18.36c0-5.04-.96-8.34-2.88-9.9-1.08-.96-2.55-1.56-4.41-1.8-1.86-.24-4.29-.36-7.29-.36v-16.2Z"
        style={pathStyle}
      />
      <path
        d="m119.34,129.24V52.38h-9v-14.4h9v-12.42c0-4.44.66-8.19,1.98-11.25,1.32-3.06,3.12-5.61,5.4-7.65,2.16-2.04,4.65-3.48,7.47-4.32,2.82-.84,5.73-1.26,8.73-1.26h8.46v17.28h-8.28c-3.6,0-5.4,2.1-5.4,6.3v13.32h13.68v14.4h-13.68v76.86h-18.36Z"
        style={pathStyle}
      />
    </svg>
  );
};

export default ReactThreeFiberIcon;
