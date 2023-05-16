import React, { ElementType } from 'react';
import CustomChip, { CustomChipProps } from '@components/customChip/CustomChip';
import { TechStackItem } from '@constants/techStackItems';
import { Box, SxProps, Theme } from '@mui/material';
import { Link } from 'react-router-dom';

const TechStackChips: React.FC<TechStackChipsProps> = ({
  items = [],
  sx = {},
  iconOnly = false,
  getHref,
  component,
  clickable = false,
}) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexGap: 1, ...sx }}>
      {items.map((item: TechStackItem, i: number) => {
        const chipProps: CustomChipProps = {
          clickable: clickable,
          label: item.name,
          IconComponent: item.IconComponent ?? undefined,
          target: 'blank',
          isLastItem: i < items.length - 1 ? true : false,
          iconOnly,
          component,
        };
        if (!getHref) return <CustomChip key={`${item.slug}-${i}`} {...chipProps} />;

        return (
          <Link key={`${item.slug}-${i}`} to={getHref(item)}>
            <CustomChip {...chipProps} />
          </Link>
        );
      })}
    </Box>
  );
};

interface TechStackChipsProps {
  items: TechStackItem[];
  iconOnly?: boolean;
  sx?: SxProps<Theme>;
  getHref?: (item: TechStackItem) => string;
  component?: ElementType;
  clickable?: boolean;
}

export default TechStackChips;
