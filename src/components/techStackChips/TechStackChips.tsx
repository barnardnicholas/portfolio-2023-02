import React, { ElementType } from 'react';
import CustomChip from '@components/customChip/CustomChip';
import { TechStackItem } from '@constants/techStackItems';
import { Box, SxProps, Theme } from '@mui/material';

const TechStackChips: React.FC<TechStackChipsProps> = ({
  items = [],
  sx = {},
  iconOnly = false,
  component,
}) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexGap: 1, ...sx }}>
      {items.map(({ name, IconComponent, slug }, i: number) => (
        <CustomChip
          key={`${slug}-${i}`}
          clickable
          //   href={link}
          label={name}
          IconComponent={IconComponent ? IconComponent : undefined}
          target="blank"
          isLastItem={i < items.length - 1 ? true : false}
          iconOnly={iconOnly}
          component={component}
        />
      ))}
    </Box>
  );
};

interface TechStackChipsProps {
  items: TechStackItem[];
  iconOnly?: boolean;
  sx?: SxProps<Theme>;
  component?: ElementType;
}

export default TechStackChips;
