import { Box, SxProps, Theme } from '@mui/material';
import React from 'react';

const Image: React.FC<ImageProps> = ({ src, alt, sx = {} }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'stretch',
        alignItems: 'stretch',
        ...sx,
      }}
    >
      <img src={src} alt={alt} style={{}} />
    </Box>
  );
};

interface ImageProps {
  src: string;
  alt?: string;
  sx?: SxProps<Theme>;
}

export default Image;
