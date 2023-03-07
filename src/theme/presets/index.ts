import { ThemeOptions } from '@mui/material';
import { ThemeKey } from '../types';
import dark from './dark';
import light from './light';

const palettes: Record<ThemeKey, ThemeOptions> = {
  dark,
  light,
};

export default palettes;
