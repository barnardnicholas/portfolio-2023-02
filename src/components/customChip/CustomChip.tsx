import React, { ElementType } from 'react';
import { standardTransitions } from '@/theme/constants';
import { Chip, SxProps, Theme, useTheme } from '@mui/material';

const CustomChip: React.FC<CustomChipProps> = ({
  IconComponent,
  label,
  clickable,
  component = 'a',
  target,
  href,
  isLastItem = false,
  iconOnly = false,
  onDelete,
  sx = {},
}) => {
  const theme = useTheme();

  const extraStyles = iconOnly
    ? {
        '.MuiChip-label': {
          pr: '0rem',
          pl: '0rem',
        },
      }
    : {
        pl: !iconOnly && IconComponent ? '0.75rem' : '0.25rem',
        '.MuiChip-label': {
          pl: '0.5rem',
        },
      };
  return (
    <Chip
      label={!iconOnly ? label : undefined}
      clickable={clickable}
      sx={{
        mb: 1,
        minWidth: '2rem',
        mr: isLastItem ? 1 : 0,
        transition: standardTransitions(theme),
        ...extraStyles,
        ...sx,
      }}
      component={component}
      href={href}
      icon={IconComponent ? <IconComponent /> : undefined}
      target={target}
      onDelete={onDelete}
    />
  );
};

interface CustomChipProps {
  IconComponent?: React.FC;
  label?: string;
  clickable?: boolean;
  component?: ElementType;
  target?: string;
  sx?: SxProps<Theme>;
  href?: string;
  isLastItem?: boolean;
  iconOnly?: boolean;
  onDelete?: VoidFunction;
}

export default CustomChip;
