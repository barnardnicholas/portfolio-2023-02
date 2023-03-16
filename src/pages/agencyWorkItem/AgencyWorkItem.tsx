import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import CustomCard from '@components/customCard/CustomCard';
import { standardTransitions } from '@/theme/constants';
import { useParams } from 'react-router-dom';
import PageContainer from '@components/layout/pageContainer/PageContainer';
import Breadcrumb from '@components/breadcrumb/Breadcrumb';
import agencyWork from '@constants/agencyWork';
import { addOpacityToColor, getAgencyImagePathFromSlug } from '@utils/utils';
import { useAtom } from 'jotai';
import { themeAtom } from '@/atoms/atoms';

function AgencyWorkItem() {
  const theme = useTheme();
  const { slug } = useParams<{ slug: string }>();
  const [currentTheme] = useAtom(themeAtom);

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
        <img
          src={getAgencyImagePathFromSlug(agencyWorkItem.slug, currentTheme)}
          loading="lazy"
          alt={`${agencyWorkItem.title} main image`}
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
