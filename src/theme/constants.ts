import { Theme, TransitionsOptions } from '@mui/material';
import { addOpacityToColor } from '@utils/utils';

export const muiToolbarHeights = {
  xs: 48,
  sm: 56,
  md: 64,
};

export const titleText = {
  fontFamily: [
    'Heebo',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  fontWeight: 900,
  lineHeight: '1em',
  marginBottom: '1rem',
};

export const bodyText = {
  fontFamily: [
    'Trispace',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  marginBottom: '1rem',
  letterSpacing: '-0.05em',
};

export const boxShadow = `0 2px 6px 1px ${addOpacityToColor('#000000', 0.4)}`;

export const transitions: TransitionsOptions = {
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
};

export const standardTransitions = (theme: Theme) =>
  `${theme.transitions.create(
    ['background-color', 'color', 'border-color', 'background', 'fill', 'stroke'],
    {
      duration: '500ms',
      easing: 'ease',
    },
  )}`;

export const transformTransitions = (theme: Theme) =>
  `${theme.transitions.create(['transform'], {
    duration: '350ms',
    easing: 'ease',
  })}`;
