import React, { FC, useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material';
import { useAtom } from 'jotai';
import { themeAtom } from '@/atoms/atoms';
import presets from './presets';
import defaultPreset from './presets/dark';

type ThemeProviderProps = {
  children: React.ReactNode;
};

const themeOptions: ThemeOptions = {
  typography: defaultPreset.typography,
  palette: defaultPreset.palette,
  components: defaultPreset.components,
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [currentThemeKey] = useAtom(themeAtom);

  const theme = useMemo(() => {
    const mappedOptions = presets[currentThemeKey] || {};
    return createTheme({ ...themeOptions, ...mappedOptions });
  }, [currentThemeKey]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
