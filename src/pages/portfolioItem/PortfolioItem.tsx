import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import CustomCard from '@components/customCard/CustomCard';
import { standardTransitions } from '@/theme/constants';
import { useParams } from 'react-router-dom';
import PageContainer from '@components/layout/pageContainer/PageContainer';
import Breadcrumb from '@components/breadcrumb/Breadcrumb';
import portfolioItems from '@constants/portfolioItems';
import {
  addOpacityToColor,
  getPortfolioImagePathFromSlug,
  getTechStackItemsFromSlugs,
} from '@utils/utils';
import { useAtom } from 'jotai';
import { themeAtom } from '@/atoms/atoms';

import TechStackChips from '@components/techStackChips/TechStackChips';

function PortfolioItem() {
  const theme = useTheme();
  const [currentTheme] = useAtom(themeAtom);
  const { slug } = useParams<{ slug: string }>();

  const portfolioItem = portfolioItems[slug || 'blank'];
  if (!slug || !portfolioItem) return null;

  const techStack = getTechStackItemsFromSlugs(portfolioItem.techStack);

  const portfolioItemBreadcrumb = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: portfolioItem.title },
  ];

  return (
    <PageContainer>
      <CustomCard sx={{ alignItems: 'flex-start' }}>
        <Breadcrumb items={portfolioItemBreadcrumb} />
        <img
          src={getPortfolioImagePathFromSlug(portfolioItem.slug, currentTheme)}
          loading="lazy"
          alt={`${portfolioItem.title} main image`}
          width="100%"
          height="auto"
          style={{
            objectFit: 'cover',
            marginBottom: '1rem',
            width: '100%',
            maxWidth: '40rem',
            borderRadius: '4px',
            border: `1px solid ${addOpacityToColor('#000000', 0.2)}`,
          }}
        />
        <Typography sx={{ mb: 0, transition: standardTransitions(theme) }} variant="h1">
          {portfolioItem.title}
        </Typography>
        {portfolioItem.subtitle && (
          <Typography
            sx={{
              transition: standardTransitions(theme),
              columnCount: 2,
              mb: portfolioItem.techStack.length ? 1 : 4,
            }}
            variant="body1"
          >
            {portfolioItem.subtitle}
          </Typography>
        )}
        {!!techStack.length && <TechStackChips items={techStack} sx={{ mb: 4 }} />}
        <Box sx={{ columnCount: { xs: 1, md: 2 }, columnGap: 2 }}>{portfolioItem.content}</Box>
      </CustomCard>
    </PageContainer>
  );
}

export default PortfolioItem;
