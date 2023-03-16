import React from 'react';
import CustomChip from '@components/customChip/CustomChip';
import { TechStackItem } from '@constants/techStackItems';
import { Box, SxProps, Theme } from '@mui/material';

const TechStackChips: React.FC<TechStackChipsProps> = ({ items = [], sx = {} }) => {
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
        />
      ))}
    </Box>
  );
};

interface TechStackChipsProps {
  items: TechStackItem[];
  sx?: SxProps<Theme>;
}

export default TechStackChips;
