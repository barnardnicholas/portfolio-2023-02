import { Container, SxProps, Theme } from '@mui/material';
import React, { PropsWithChildren } from 'react';

const PageContainer: React.FC<PageContainerProps> = ({ children, sx = {} }) => {
  return <Container sx={{ flex: 1, pt: 10, pb: 6, ...sx }}>{children}</Container>;
};

interface PageContainerProps extends PropsWithChildren {
  sx?: SxProps<Theme>;
}

export default PageContainer;
