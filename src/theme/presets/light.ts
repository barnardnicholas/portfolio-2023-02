import { PaletteOptions, ThemeOptions } from '@mui/material';
import { blue, green, grey, lightBlue, orange, red } from '@mui/material/colors';

const palette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: blue[50],
    light: blue[700],
  },
  error: {
    main: red[50],
    light: red[700],
  },
  success: {
    main: green[50],
    light: green[800],
  },
  warning: {
    main: orange[800],
  },
  info: {
    main: lightBlue[200],
  },
  secondary: {
    main: grey[50],
    light: grey[800],
  },
  text: {
    primary: grey[900],
    secondary: grey[700],
  },
  background: {
    default: '#f7f7f7',
    paper: '#f9f9f9',
  },
};

const theme: ThemeOptions = {
  palette,
};

export default theme;
