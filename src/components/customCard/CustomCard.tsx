import { Card, SxProps, Theme, useTheme } from '@mui/material';
import { addOpacityToColor } from '@utils/utils';
import React, { MouseEventHandler, PropsWithChildren } from 'react';

const CustomCard: React.FC<CustomCardProps> = ({
  sx = {},
  variant = 'outlined',
  onClick = undefined,
  riseOnHover,
  children,
}) => {
  const theme = useTheme();
  const transition = `background-color 500ms ease, color 500ms ease, border-color 500ms ease, transform 200ms ease`;
  const isMobile = window.innerWidth <= theme.breakpoints.values.sm;
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: addOpacityToColor(theme.palette.background.paper, 0.66),
        cursor: !!onClick ? 'pointer' : 'inherit',
        transform: `scale(1)`,
        '&:hover':
          riseOnHover && !isMobile
            ? {
                transform: `scale(102%)`,
                boxShadow: `0px 6px 12px 4px rgba(0,0,0,0.2)`,
              }
            : {},
        transition,
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
  riseOnHover?: boolean;
}

export default CustomCard;
