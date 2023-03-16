import React, { CSSProperties } from 'react';
import { useTheme } from '@mui/material';
import { IconComponentProps } from './types';
import { standardTransitions } from '@/theme/constants';

const ViteIcon: React.FC<IconComponentProps> = ({ style = {} }) => {
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
  const gapStyle = {
    fill: theme.palette.background.default,
  };
  return (
    <svg
      width="256px"
      height="257px"
      viewBox="0 0 256 257"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      style={containerStyle}
    >
      <g>
        <path
          d="M255.152904,37.937763 L134.896865,252.97646 C132.413943,257.416178 126.035075,257.442321 123.5149,253.02417 L0.87443175,37.9584812 C-1.87111536,33.1438084 2.24595371,27.3119153 7.70191187,28.2871109 L128.086639,49.8052023 C128.854587,49.9424525 129.640835,49.9411454 130.408783,49.8012155 L248.276014,28.3179595 C253.713738,27.3268821 257.850198,33.1136134 255.152904,37.937763 Z"
          style={pathStyle}
        ></path>
        <path
          d="M185.432401,0.0631038902 L96.4393502,17.500942 C94.9766549,17.7875335 93.8936852,19.0270992 93.8054529,20.5146956 L88.3311293,112.971419 C88.2023755,115.149123 90.2023075,116.839261 92.3277254,116.349082 L117.10466,110.630976 C119.422882,110.096354 121.517582,112.138114 121.041128,114.469407 L113.67994,150.515893 C113.184532,152.941955 115.462232,155.016394 117.831433,154.29681 L133.134834,149.647295 C135.507302,148.927059 137.786963,151.00738 137.285019,153.435402 L125.586724,210.056351 C124.854723,213.598061 129.565674,215.529368 131.530313,212.49287 L132.842687,210.464834 L205.359174,65.745575 C206.573511,63.3224548 204.479465,60.5594769 201.818118,61.0730542 L176.31441,65.9952397 C173.91776,66.4573155 171.878614,64.2253653 172.555061,61.8805431 L189.2009,4.17570253 C189.878001,1.82692623 187.831665,-0.406957894 185.432401,0.0631038902 Z"
          style={pathStyle}
        ></path>
      </g>
    </svg>
  );
};

export default ViteIcon;