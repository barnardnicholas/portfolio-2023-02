import React, { CSSProperties } from 'react';
import { useTheme } from '@mui/material';
import { IconComponentProps } from './types';

const EmailIcon: React.FC<IconComponentProps> = ({ style = {} }) => {
  const theme = useTheme();
  const containerStyle: CSSProperties = {
    width: '1rem',
    height: '1rem',
  };
  const pathStyle: CSSProperties = { fill: theme.palette.text.primary };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 493.5 323.06"
      style={{ ...containerStyle, ...style }}
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Capa_1" data-name="Capa 1">
          <path
            d="M444.56,0H48.94A49,49,0,0,0,0,48.94V274.12a49,49,0,0,0,48.94,48.94H444.55a49,49,0,0,0,48.95-48.94V48.94A49,49,0,0,0,444.56,0Zm16.31,48.94V274.12a16,16,0,0,1-1.79,7.09L343.74,165.86,460.84,48.77C460.84,48.83,460.87,48.88,460.87,48.94ZM32.63,274.12V48.94c0-.06,0-.11,0-.17l117.1,117.09L34.41,281.21A16,16,0,0,1,32.63,274.12Zm219.15-62.44a7.27,7.27,0,0,1-10.07,0l-179-179H430.84Zm-78.95-22.75,45.81,45.82a39.73,39.73,0,0,0,56.21,0l45.82-45.82,101.49,101.5H71.33Z"
            style={pathStyle}
          />
        </g>
      </g>
    </svg>
  );
};

export default EmailIcon;