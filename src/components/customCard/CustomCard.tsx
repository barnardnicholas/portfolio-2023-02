import { Card, SxProps, Theme } from '@mui/material';
import React, { MouseEventHandler, PropsWithChildren } from 'react';

const CustomCard: React.FC<CustomCardProps> = ({
  sx = {},
  variant = 'outlined',
  onClick = undefined,
  children,
}) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#292931CC',
        cursor: !!onClick ? 'pointer' : 'inherit',
        ...sx,
      }}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Card>
  );
};

interface CustomCardProps extends PropsWithChildren {
  sx?: SxProps<Theme>;
  variant?: 'elevation' | 'outlined';
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export default CustomCard;
