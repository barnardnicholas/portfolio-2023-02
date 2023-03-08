import React, { CSSProperties } from 'react';
import { Fab, useTheme } from '@mui/material';
import { useAtom } from 'jotai';
import { themeAtom } from '@/atoms/atoms';
import { ThemeKey } from '@/theme/types';
import { standardTransitions } from '@/theme/constants';

function ActionButton() {
  const theme = useTheme();
  const [currentTheme, setCurrentTheme] = useAtom(themeAtom);
  const transition = standardTransitions(theme);

  const iconStyles: CSSProperties = {
    fontSize: '1.5rem',
    position: 'relative',
    top: '0.1rem',
    color: theme.palette.background.default,
    transition,
  };

  return (
    <Fab
      aria-label="add"
      sx={{
        position: 'fixed',
        top: theme.spacing(2),
        right: theme.spacing(2),
        backgroundColor: theme.palette.text.primary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition,
        '&:hover': {
          backgroundColor: theme.palette.text.secondary,
        },
      }}
      onClick={() => setCurrentTheme((theme: ThemeKey) => (theme === 'dark' ? 'light' : 'dark'))}
    >
      <i className={`fal fa-${currentTheme === 'dark' ? 'sun' : 'moon'}`} style={iconStyles} />
    </Fab>
  );
}

export default ActionButton;
