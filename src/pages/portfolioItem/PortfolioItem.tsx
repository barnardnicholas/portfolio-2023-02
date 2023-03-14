import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import CustomCard from '@components/customCard/CustomCard';
import { standardTransitions } from '@/theme/constants';
import { useParams } from 'react-router-dom';
import PageContainer from '@components/layout/pageContainer/PageContainer';
import Breadcrumb from '@components/breadcrumb/Breadcrumb';
import portfolioItems from '@constants/portfolioItems';

const portfolioItemBreadcrumb = [{ name: 'Portfolio', path: '/portfolio' }];

function PortfolioItem() {
  const theme = useTheme();
  const { slug } = useParams<{ slug: string }>();

  const portfolioItem = portfolioItems[slug || 'blank'];
  if (!slug || !portfolioItem) return null;

  return (
    <PageContainer sx={{ pt: 6, pb: 6 }}>
      <CustomCard sx={{ alignItems: 'flex-start' }}>
        <Breadcrumb items={portfolioItemBreadcrumb} />
        <Typography sx={{ mb: 0, transition: standardTransitions(theme) }} variant="h1">
          {portfolioItem.title}
        </Typography>
        {portfolioItem.subtitle && (
          <Typography sx={{ mb: 0, transition: standardTransitions(theme) }} variant="body1">
            {portfolioItem.subtitle}
          </Typography>
        )}
        <Box sx={{ mb: 4 }} />
        {portfolioItem.content}
      </CustomCard>
    </PageContainer>
  );
}

export default PortfolioItem;
