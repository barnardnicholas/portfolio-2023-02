import { Box, SxProps, Theme } from '@mui/material';
import React, { CSSProperties } from 'react';

const Image: React.FC<ImageProps> = ({ src, alt, sx = {}, style = {} }) => {
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
      <img src={src} alt={alt} style={style} />
    </Box>
  );
};

interface ImageProps {
  src: string;
  alt?: string;
  sx?: SxProps<Theme>;
  style?: CSSProperties;
}

export default Image;
