import { Components, PaletteOptions, Theme, ThemeOptions } from '@mui/material';
import { blue, green, grey, lightBlue, orange, red } from '@mui/material/colors';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { bodyText, titleText, boxShadow } from '../constants';

const palette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: blue[50],
    light: blue[700],
    // dark: '#002884',
    // contrastText: '#fff',
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
    primary: grey[200],
    secondary: '#666666',
  },
  background: {
    default: '#272730',
    paper: '#292931',
  },
};

const typography: TypographyOptions = {
  ...bodyText,
  h1: {
    ...titleText,
    textTransform: 'uppercase',
    fontSize: '3.5rem',
  },
  h2: {
    ...titleText,
    textTransform: 'uppercase',
    fontSize: '2.5rem',
  },
  h3: {
    ...titleText,
    textTransform: 'uppercase',
    fontSize: '2rem',
  },
  h4: {
    ...titleText,
    textTransform: 'uppercase',
    fontSize: '1.75rem',
  },
  h5: {
    ...titleText,
    fontSize: '1.5rem',
  },
  h6: {
    ...titleText,
    fontSize: '1.25rem',
  },
  body1: {
    ...bodyText,
  },
};

const components: Components<Omit<Theme, 'components'>> = {
  MuiToolbar: {
    styleOverrides: {
      root: {
        height: 56,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        padding: '1rem',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        boxShadow,
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        boxShadow,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        boxShadow,
      },
    },
    defaultProps: {
      color: 'inherit',
    },
  },
  MuiSelect: {
    styleOverrides: {
      select: {
        padding: '1em',
        border: `1px solid ${palette?.text?.secondary || grey[50]}`,
        borderRadius: '4px',
      },
      standard: {
        '&::before': {
          borderBottomWidth: 0,
        },
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiLink: {
    defaultProps: {
      color: 'inherit',
    },
  },
};

const theme: ThemeOptions = {
  palette,
  typography,
  components,
};

export default theme;
