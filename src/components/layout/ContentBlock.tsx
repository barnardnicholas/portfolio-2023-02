import { Box, SxProps, Theme } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { contentBlockStyles } from './constants';

const ContentBlock: React.FC<ContentBlockProps> = ({
  sx = {},
  contentSx = {},
  position = 'center',
  children,
}) => {
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gridArea: 'content',
          maxWidth: 'calc(100vw - 2rem)',
          ...contentSx,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

interface ContentBlockProps extends PropsWithChildren {
  position?: 'left' | 'right' | 'center';
  sx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
}

export default ContentBlock;
