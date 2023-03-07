import { standardTransitions } from '@/theme/constants';
import { Card, SxProps, Theme, useTheme } from '@mui/material';
import { addOpacityToColor } from '@utils/utils';
import React, { MouseEventHandler, PropsWithChildren } from 'react';

const CustomCard: React.FC<CustomCardProps> = ({
  sx = {},
  variant = 'outlined',
  onClick = undefined,
  children,
}) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: addOpacityToColor(theme.palette.background.paper, 0.66),
        cursor: !!onClick ? 'pointer' : 'inherit',
        transition: standardTransitions(theme),
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
