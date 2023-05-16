import React, { useMemo } from 'react';
import CustomCard from '@components/customCard/CustomCard';
import { SxProps, Theme, Typography, useTheme } from '@mui/material';
import { addOpacityToColor, getTechStackItemsFromSlugs } from '@utils/utils';
import TechStackChips from '@components/techStackChips/TechStackChips';
import { TechStackItem } from '@constants/techStackItems';

const PreviewCard: React.FC<PreviewCardProps> = ({
  src,
  variant,
  title,
  subtitle,
  techStack = [],
  sx = {},
}) => {
  const theme = useTheme();
  const fallbackSrc = useMemo(
    () =>
      `https://placehold.jp/${theme.palette.text.primary.replace(
        '#',
        '',
      )}/${theme.palette.background.default.replace('#', '')}/300x300.png`,
    [theme.palette.text.primary, theme.palette.background.default],
  );

  const filteredTechStack = useMemo(() => {
    const techStackItems = getTechStackItemsFromSlugs(techStack);
    return techStackItems.filter((item: TechStackItem) => !!item.IconComponent);
  }, [techStack]);

  return (
    <CustomCard
      variant={variant}
      sx={{ alignItems: 'flex-start', justifyContent: 'flex-start', ...sx }}
      riseOnHover
    >
      <img
        src={src || fallbackSrc}
        loading="lazy"
        alt={`${title} preview image`}
        width="100%"
        height="auto"
        style={{
          objectFit: 'cover',
          maxHeight: '10rem',
          marginBottom: '1rem',
          width: '100%',
          borderRadius: '4px',
          border: `1px solid ${addOpacityToColor('#000000', 0.2)}`,
        }}
      />
      <Typography variant="h3" sx={{ mb: 0 }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        {subtitle || ' '}
      </Typography>
      <TechStackChips items={filteredTechStack} iconOnly clickable={false} />
    </CustomCard>
  );
};

interface PreviewCardProps {
  variant?: 'elevation' | 'outlined';
  title: string;
  subtitle: string | null;
  techStack?: string[];
  src?: string;
  sx?: SxProps<Theme>;
}

export default PreviewCard;
