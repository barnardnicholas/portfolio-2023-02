import React from 'react';
import { Box } from '@mui/material';

function GradientOverlay() {
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
    #27273088 0%,
    #27273088 66%,
    #272730ee 100%
  )`,
        pointerEvents: 'none',
        zIndex: 5,
      }}
    />
  );
}

export default GradientOverlay;
