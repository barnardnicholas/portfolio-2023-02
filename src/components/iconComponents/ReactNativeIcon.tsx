import React, { CSSProperties } from 'react';
import { useTheme } from '@mui/material';
import { IconComponentProps } from './types';
import { standardTransitions } from '@/theme/constants';

const ReactNativeIcon: React.FC<IconComponentProps> = ({ style = {} }) => {
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
  const textStyle = {
    ...pathStyle,
    stroke: theme.palette.background.default,
  };
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 258.42 229.9"
      style={containerStyle}
    >
      <path
        d="m210.6,73.82c-2.66-.91-5.41-1.78-8.24-2.6.47-1.9.89-3.78,1.27-5.62,6.24-30.28,2.16-54.68-11.77-62.71-13.35-7.7-35.2.33-57.25,19.53-2.12,1.85-4.25,3.8-6.37,5.85-1.42-1.36-2.83-2.66-4.24-3.92C100.88,3.83,77.71-4.82,63.79,3.23c-13.34,7.72-17.29,30.66-11.68,59.35.54,2.77,1.18,5.6,1.89,8.48-3.28.93-6.45,1.92-9.47,2.98C17.43,83.5.12,98.31.12,113.67s18.58,31.78,46.81,41.43c2.23.76,4.54,1.48,6.92,2.16-.77,3.11-1.45,6.16-2.01,9.14-5.35,28.2-1.17,50.59,12.13,58.27,13.74,7.93,36.81-.22,59.27-19.86,1.78-1.55,3.56-3.2,5.34-4.92,2.31,2.23,4.62,4.34,6.92,6.31,21.76,18.72,43.25,26.28,56.54,18.59,13.73-7.95,18.19-32,12.4-61.27-.44-2.24-.96-4.52-1.54-6.84,1.62-.48,3.21-.97,4.76-1.49,29.35-9.72,48.44-25.44,48.44-41.52s-17.87-30.33-45.52-39.84h0Zm-6.37,70.98c-1.4.46-2.84.91-4.3,1.35-3.24-10.26-7.61-21.16-12.96-32.43,5.11-11,9.31-21.77,12.46-31.96,2.62.76,5.16,1.56,7.61,2.4,23.69,8.16,38.14,20.21,38.14,29.5,0,9.9-15.61,22.74-40.95,31.14h0Zm-10.51,20.83c2.56,12.94,2.93,24.64,1.23,33.79-1.52,8.22-4.59,13.7-8.38,15.89-8.07,4.67-25.32-1.4-43.93-17.41-2.13-1.84-4.28-3.8-6.44-5.87,7.21-7.89,14.42-17.06,21.46-27.25,12.38-1.1,24.07-2.89,34.67-5.34.52,2.11.99,4.17,1.39,6.19h0Zm-106.33,48.87c-7.88,2.78-14.16,2.86-17.96.68-8.08-4.66-11.43-22.64-6.85-46.75.52-2.76,1.15-5.6,1.87-8.5,10.49,2.32,22.09,3.99,34.5,4.99,7.08,9.97,14.5,19.13,21.98,27.15-1.63,1.58-3.26,3.08-4.88,4.49-9.93,8.68-19.89,14.84-28.66,17.94h0Zm-36.93-69.77c-12.48-4.27-22.79-9.81-29.86-15.86-6.35-5.44-9.56-10.84-9.56-15.22,0-9.32,13.9-21.21,37.08-29.29,2.81-.98,5.76-1.9,8.81-2.77,3.2,10.42,7.41,21.32,12.48,32.33-5.14,11.18-9.4,22.25-12.63,32.79-2.18-.63-4.29-1.29-6.32-1.98h0Zm12.38-84.26c-4.81-24.59-1.62-43.14,6.42-47.79,8.56-4.96,27.5,2.11,47.46,19.83,1.28,1.13,2.56,2.32,3.84,3.55-7.44,7.99-14.79,17.08-21.81,26.99-12.04,1.12-23.56,2.91-34.16,5.31-.67-2.68-1.26-5.31-1.76-7.89h0Zm110.43,27.27c-2.53-4.38-5.13-8.65-7.78-12.8,8.17,1.03,15.99,2.4,23.34,4.08-2.21,7.07-4.96,14.46-8.19,22.04-2.32-4.41-4.78-8.85-7.36-13.32h0Zm-45.03-43.86c5.04,5.46,10.1,11.57,15.06,18.19-5.01-.24-10.08-.36-15.19-.36s-10.09.12-15.07.35c4.97-6.56,10.07-12.65,15.19-18.18h0Zm-45.32,43.94c-2.53,4.39-4.94,8.81-7.23,13.24-3.18-7.55-5.91-14.98-8.13-22.15,7.3-1.63,15.09-2.97,23.21-3.98-2.69,4.19-5.31,8.5-7.85,12.9h0Zm8.08,65.35c-8.39-.94-16.29-2.2-23.59-3.79,2.26-7.3,5.05-14.89,8.3-22.6,2.29,4.43,4.71,8.85,7.26,13.25h0c2.59,4.48,5.28,8.87,8.04,13.15h0Zm37.54,31.03c-5.18-5.59-10.35-11.78-15.4-18.43,4.9.19,9.9.29,14.98.29s10.38-.12,15.45-.34c-4.99,6.77-10.02,12.97-15.03,18.49h0Zm52.2-57.82c3.42,7.8,6.31,15.34,8.6,22.52-7.42,1.69-15.44,3.06-23.88,4.07,2.66-4.21,5.28-8.56,7.86-13.03,2.61-4.52,5.08-9.05,7.43-13.56h0Zm-16.9,8.1c-4,6.94-8.11,13.56-12.28,19.81-7.6.54-15.44.82-23.44.82s-15.72-.25-23.18-.73c-4.34-6.33-8.54-12.98-12.51-19.85h0c-3.97-6.85-7.62-13.76-10.92-20.63,3.31-6.88,6.95-13.8,10.89-20.64h0c3.95-6.85,8.11-13.47,12.41-19.76,7.61-.58,15.42-.88,23.31-.88h0c7.93,0,15.74.3,23.35.88,4.23,6.25,8.37,12.84,12.33,19.69,4.01,6.93,7.7,13.8,11.04,20.54-3.32,6.85-7,13.79-11,20.72h0Zm22.56-122.12c8.57,4.94,11.91,24.88,6.52,51.03-.34,1.67-.73,3.37-1.15,5.09-10.62-2.45-22.15-4.27-34.23-5.41-7.03-10.02-14.32-19.12-21.64-27.01,1.97-1.89,3.93-3.7,5.89-5.4,18.9-16.45,36.56-22.94,44.61-18.3h0Zm-58.28,78.44c12.62,0,22.86,10.23,22.86,22.86s-10.23,22.86-22.86,22.86-22.86-10.23-22.86-22.86,10.23-22.86,22.86-22.86h0Z"
        style={pathStyle}
      />
      <path
        d="m238.66,167.42c.18,19.53,17.13,26.02,17.32,26.11-.14.46-2.71,9.26-8.93,18.35-5.38,7.86-10.96,15.69-19.75,15.85-8.64.16-11.42-5.12-21.3-5.12s-12.96,4.96-21.14,5.28c-8.49.32-14.95-8.5-20.37-16.33-11.08-16.02-19.55-45.27-8.18-65.01,5.65-9.8,15.74-16.01,26.7-16.17,8.33-.16,16.2,5.61,21.3,5.61s14.65-6.93,24.7-5.92c4.21.18,16.02,1.7,23.6,12.8-.61.38-14.09,8.23-13.94,24.55m-16.24-47.95c4.51-5.45,7.54-13.05,6.71-20.6-6.49.26-14.35,4.33-19.01,9.78-4.18,4.83-7.83,12.55-6.84,19.96,7.24.56,14.63-3.68,19.14-9.14"
        style={textStyle}
      />
      <path
        d="m105.88,171.6l11.58-20.08c.66-1.15.27-2.63-.88-3.29-1.15-.66-2.63-.27-3.29.88l-11.73,20.33c-8.97-4.1-19.04-6.38-29.79-6.38s-20.82,2.28-29.79,6.38l-11.73-20.33c-.67-1.15-2.14-1.55-3.29-.88-1.15.67-1.55,2.14-.88,3.29l11.58,20.08c-19.89,10.83-33.49,30.98-35.48,54.79h139.19c-1.99-23.81-15.6-43.96-35.48-54.79m-2.13,23.35c3.17,0,5.75,2.63,5.75,5.85s-2.58,5.85-5.75,5.85-5.74-2.63-5.74-5.85,2.58-5.85,5.74-5.85h0Zm-63.96,0c3.17,0,5.75,2.63,5.75,5.85s-2.58,5.85-5.75,5.85-5.75-2.63-5.75-5.85,2.58-5.85,5.75-5.85Z"
        style={textStyle}
      />
      <path
        d="m105.23,172.31l11.58-20.08c.66-1.15.27-2.63-.88-3.29-1.15-.66-2.63-.27-3.29.88l-11.73,20.33c-8.97-4.1-19.04-6.38-29.79-6.38s-20.82,2.28-29.79,6.38l-11.73-20.33c-.67-1.15-2.14-1.55-3.29-.88-1.15.67-1.55,2.14-.88,3.29l11.58,20.08c-19.89,10.83-33.49,30.98-35.48,54.79h139.19c-1.99-23.81-15.6-43.96-35.48-54.79m-2.13,23.35c3.17,0,5.75,2.63,5.75,5.85s-2.58,5.85-5.75,5.85-5.74-2.63-5.74-5.85,2.58-5.85,5.74-5.85h0Zm-63.96,0c3.17,0,5.75,2.63,5.75,5.85s-2.58,5.85-5.75,5.85-5.75-2.63-5.75-5.85,2.58-5.85,5.75-5.85Z"
        style={textStyle}
      />
    </svg>
  );
};

export default ReactNativeIcon;
