import { Box, SxProps, Theme } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { contentBlockStyles } from './constants';

const ContentBlock: React.FC<ContentBlockProps> = ({ sx = {}, position, children }) => {
  return (
    <Box
      className={`gridbox content-${position}`}
      sx={{
        mb: 4,
        display: 'grid',
        ...contentBlockStyles[position],
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

interface ContentBlockProps extends PropsWithChildren {
  position: 'left' | 'right' | 'center';
  sx?: SxProps<Theme>;
}

export default ContentBlock;
