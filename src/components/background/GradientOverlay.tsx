import React from 'react';
import { Box, useTheme } from '@mui/material';
import { addOpacityToColor } from '@utils/utils';

function GradientOverlay() {
  const theme = useTheme();
  const color = addOpacityToColor(theme.palette.background.default, 0.4);
  const outerColor = addOpacityToColor(theme.palette.background.default, 0.9);
  return (
    <Box
      className="gradient-overlay"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(
    circle,
    ${color} 0%,
    ${outerColor} 66%,
    ${outerColor} 100%
  )`,
        pointerEvents: 'none',
        zIndex: 5,
        // opacity: 0,
      }}
    />
  );
}

export default GradientOverlay;
