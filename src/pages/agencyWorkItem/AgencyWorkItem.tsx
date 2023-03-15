import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import CustomCard from '@components/customCard/CustomCard';
import { standardTransitions } from '@/theme/constants';
import { useParams } from 'react-router-dom';
import PageContainer from '@components/layout/pageContainer/PageContainer';
import Breadcrumb from '@components/breadcrumb/Breadcrumb';
import agencyWork from '@constants/agencyWork';

function AgencyWorkItem() {
  const theme = useTheme();
  const { slug } = useParams<{ slug: string }>();

  const agencyWorkItem = agencyWork[slug || 'blank'];
  if (!slug || !agencyWorkItem) return null;

  const agencyWorkItemBreadcrumb = [
    { name: 'Agency Work', path: '/agency-work' },
    { name: agencyWorkItem.title },
  ];

  return (
    <PageContainer>
      <CustomCard sx={{ alignItems: 'flex-start' }}>
        <Breadcrumb items={agencyWorkItemBreadcrumb} />
        <Typography sx={{ mb: 0, transition: standardTransitions(theme) }} variant="h1">
          {agencyWorkItem.title}
        </Typography>
        {agencyWorkItem.subtitle && (
          <Typography sx={{ mb: 0, transition: standardTransitions(theme) }} variant="body1">
            {agencyWorkItem.subtitle}
          </Typography>
        )}
        <Box sx={{ mb: 4 }} />
        {agencyWorkItem.content}
      </CustomCard>
    </PageContainer>
  );
}

export default AgencyWorkItem;
