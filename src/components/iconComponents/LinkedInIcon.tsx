import React, { CSSProperties } from 'react';
import { useTheme } from '@mui/material';
import { IconComponentProps } from './types';
import { standardTransitions } from '@/theme/constants';

const LinkedInIcon: React.FC<IconComponentProps> = ({ style = {} }) => {
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
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 34 34"
      // style="enable-background:new 0 0 34 34;"
      xmlSpace="preserve"
      style={{ ...containerStyle, ...style }}
    >
      <g>
        <path
          style={pathStyle}
          d="M34,2.5v29c0,1.4-1.1,2.5-2.5,2.5h-29C1.1,34,0,32.9,0,31.5v-29C0,1.1,1.1,0,2.5,0h29C32.9,0,34,1.1,34,2.5z
		 M10,13H5v16h5V13z M10.4,7.5c0-1.6-1.3-2.9-2.9-2.9c0,0,0,0,0,0H7.5c-1.6,0-2.9,1.3-2.9,2.9c0,1.6,1.3,2.9,2.9,2.9l0,0
		C9.1,10.4,10.4,9.2,10.4,7.5C10.4,7.6,10.4,7.6,10.4,7.5L10.4,7.5z M29,19.3c0-4.8-3.1-6.7-6.1-6.7c-2-0.1-4,0.9-5.1,2.6h-0.1V13
		H13v16h5v-8.5c-0.2-1.8,1.2-3.4,3-3.6h0.2c1.6,0,2.8,1,2.8,3.5V29h5L29,19.3z"
        />
      </g>
    </svg>
  );
};

export default LinkedInIcon;
