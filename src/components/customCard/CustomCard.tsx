import { Card, SxProps, Theme, useTheme } from '@mui/material';
import { addOpacityToColor } from '@utils/utils';
import React, { MouseEvent, MouseEventHandler, PropsWithChildren } from 'react';

const CustomCard: React.FC<CustomCardProps> = ({
  sx = {},
  variant = 'outlined',
  onClick = undefined,
  riseOnHover,
  id,
  coordClickHandler,
  children,
}) => {
  const theme = useTheme();
  const transition = `background-color 500ms ease, color 500ms ease, border-color 500ms ease, transform 200ms ease`;
  const isMobile = window.innerWidth <= theme.breakpoints.values.sm;

  const handleClick: MouseEventHandler<HTMLDivElement> = (e: MouseEvent<HTMLDivElement>) => {
    coordClickHandler && coordClickHandler(id);
    onClick && onClick(e);
  };
  return (
    <Card
      id={id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: addOpacityToColor(theme.palette.background.paper, 0.75),
        cursor: !!onClick || (!!coordClickHandler && !!id) ? 'pointer' : 'inherit',
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
      onClick={handleClick}
    >
      {children}
    </Card>
  );
};

interface CustomCardProps extends PropsWithChildren {
  sx?: SxProps<Theme>;
  variant?: 'elevation' | 'outlined';
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  riseOnHover?: boolean;
  id?: string;
  coordClickHandler?: (id?: string) => void;
}

export default CustomCard;
