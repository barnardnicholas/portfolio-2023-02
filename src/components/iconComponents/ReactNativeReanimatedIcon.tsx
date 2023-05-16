import React, { CSSProperties } from 'react';
import { useTheme } from '@mui/material';
import { IconComponentProps } from './types';
import { standardTransitions } from '@/theme/constants';

const ReactNativeReanimatedIcon: React.FC<IconComponentProps> = ({ style = {} }) => {
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
      viewBox="0 0 225.19 133.04"
      style={containerStyle}
    >
      <path
        d="m0,80.62v-2.61l6.6-5.08v-9.43l-1.23-2.1s11.75-8.05,12.33-8.56c.58-.58,9.43-5.66,9.43-5.66l6.89-2.18s7.9-.36,9.21,0,12.54.36,12.54.36l3.55-2.03,12.4-6.02,13.85-3.77h10.3l12.98,2.61h19.65l16.68-2.61,5.8-3.34,6.24-3.19-6.16-.73s1.45-2.54,1.6-2.76,3.92-2.25,3.92-2.25l4.42-2.54h-5.51s3.55-2.9,3.92-3.48,2.68-1.52,2.68-1.52l4.28-.87,6.38-3.19,3.92-5.44s4.35-1.52,5.08-1.52h3.19c.73,0,4.79-2.76,4.79-2.76l3.48,2.9,7.47,3.77,7.9,6.16,2.47,4.71,10.15,8.85,2.76,4.79-1.81,5.22-2.25.73-3.77.94-3.26-1.89-9.72-2.25-4.5-2.61-7.47-.58-5.95,3.41-6.24,16.46-.94,9.35-1.52,6.02-2.25,3.77,19.36,6.6,13.85,9.79,11.09,7.69.36,2.97,5,3.92,1.3,4.35-8.19,1.31-4.71-8.12-4.71-4.5-13.49-9.93h-6.6l-1.89,7.32-7.32,8.99h-3.55l-6.96,3.99v-7.03l1.89-1.67h4.5l3.77-3.55,2.25-3.19v-4.86l-8.63-2.61-12.18,3.05-7.4-1.38-7.98,3.48s-25.88-4.93-26.46-5.29-8.63-2.97-8.63-2.97l-3.55.36h-2.03l4.21,9.21,5.58,8.05,19.36,9.57,3.99,2.32.58,1.6,6.02,2.39,1.23,2.1-6.6,2.61-5.29-3.26s-6.89-3.92-7.4-4.06c-.58-.22-8.63-5.29-8.63-5.29,0,0-11.75-2.18-11.75-2.68,0-.58-6.96-9.35-7.32-10.01s-6.82-9.28-6.82-9.28l-3.99-2.32-4.13,13.7-8.85,13.12.36,4.86,6.74,14.07,5.66,6.02-1.67,1.89h-7.9l-3.55-6.02v-2.97l-9.86-17.11v-3.77l1.89-3.26,4.35-9.64.73-6.16s-9.21-10.3-9.79-11.09c-.58-.73-3.77-13.12-3.77-13.12v-7.47s-2.61,0-3.19-.22-7.47,2.97-7.47,2.97h-1.16l-8.27,2.03-5.87,3.41-5.95,4.35-6.38-.94-4.71,4.13-4.71,8.12-4.42,4.06-4.57.29Z"
        style={pathStyle}
      />
    </svg>
  );
};

export default ReactNativeReanimatedIcon;