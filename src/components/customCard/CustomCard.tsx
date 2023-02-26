import { Card, SxProps, Theme } from '@mui/material';
import React, { PropsWithChildren } from 'react';

const CustomCard: React.FC<CustomCardProps> = ({ sx = {}, variant = 'outlined', children }) => {
  return (
    <Card
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#292931AA',
        ...sx,
      }}
      variant={variant}
      elevation={1}
    >
      {children}
    </Card>
  );
};

interface CustomCardProps extends PropsWithChildren {
  sx?: SxProps<Theme>;
  variant?: 'elevation' | 'outlined';
}

export default CustomCard;
