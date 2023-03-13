import React from 'react';
import { Typography, useTheme } from '@mui/material';
import CustomCard from '@components/customCard/CustomCard';
import { standardTransitions } from '@/theme/constants';
import { useParams } from 'react-router-dom';
import PageContainer from '@components/layout/pageContainer/PageContainer';

function PortfolioItem() {
  const theme = useTheme();
  const { slug } = useParams<{ slug: string }>();

  return (
    <PageContainer sx={{ pt: 6, pb: 6 }}>
      <CustomCard sx={{ alignItems: 'flex-start' }}>
        <Typography sx={{ mb: 0, transition: standardTransitions(theme) }} variant="body1">
          ### Breadcrumb ###
        </Typography>
        <Typography sx={{ mb: 0, transition: standardTransitions(theme) }} variant="h1">
          Portfolio Item {slug}
        </Typography>
        <Typography sx={{ mb: 0, transition: standardTransitions(theme) }} variant="body1">
          Subtitle
        </Typography>
      </CustomCard>
    </PageContainer>
  );
}

export default PortfolioItem;