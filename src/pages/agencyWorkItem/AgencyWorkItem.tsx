import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import CustomCard from '@components/customCard/CustomCard';
import { standardTransitions } from '@/theme/constants';
import { useParams } from 'react-router-dom';
import PageContainer from '@components/layout/pageContainer/PageContainer';
import Breadcrumb from '@components/breadcrumb/Breadcrumb';
import agencyWork from '@constants/agencyWork';
import {
  addOpacityToColor,
  getAgencyImagePathFromSlug,
  getTechStackItemsFromSlugs,
} from '@utils/utils';
import { useAtom } from 'jotai';
import { themeAtom } from '@/atoms/atoms';
import TechStackChips from '@components/techStackChips/TechStackChips';

function AgencyWorkItem() {
  const theme = useTheme();
  const { slug } = useParams<{ slug: string }>();
  const [currentTheme] = useAtom(themeAtom);

  const agencyWorkItem = agencyWork[slug || 'blank'];
  if (!slug || !agencyWorkItem) return null;

  const techStack = getTechStackItemsFromSlugs(agencyWorkItem.techStack);

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
        <Typography
          sx={{ mb: agencyWorkItem.subtitle ? 0 : 1, transition: standardTransitions(theme) }}
          variant="h1"
        >
          {agencyWorkItem.title}
        </Typography>
        {agencyWorkItem.subtitle && (
          <Typography
            sx={{
              mb: techStack.length ? 1 : 4,
              transition: standardTransitions(theme),
            }}
            variant="body1"
          >
            {agencyWorkItem.subtitle}
          </Typography>
        )}
        {!!techStack.length && (
          <TechStackChips
            items={techStack}
            sx={{ mb: 4 }}
            getHref={({ name }) => `/agency-work?s=${name}`}
            clickable
          />
        )}
        {agencyWorkItem.content}
      </CustomCard>
    </PageContainer>
  );
}

export default AgencyWorkItem;
