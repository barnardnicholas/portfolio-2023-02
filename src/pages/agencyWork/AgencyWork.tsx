import React from 'react';
import CustomCard from '@components/customCard/CustomCard';
import { Grid, Typography } from '@mui/material';
import RouterLink from '@components/routerLink/RouterLink';
import PageContainer from '@components/layout/pageContainer/PageContainer';
import Breadcrumb from '@components/breadcrumb/Breadcrumb';
import agencyWork, { agencySlugs } from '@constants/agencyWork';
import PreviewCard from '@components/previewCard/PreviewCard';
import { getAgencyImagePathFromSlug } from '@utils/utils';
import { useAtom } from 'jotai';
import { themeAtom } from '@/atoms/atoms';

function AgencyWork() {
  const agencyWorkBreadcrumb = [{ name: 'Portfolio' }];
  const [currentTheme] = useAtom(themeAtom);

  return (
    <PageContainer>
      <CustomCard
        id="portfolio"
        sx={{
          alignItems: 'flex-start',
          pt: { xs: 3, md: 6 },
          pb: { xs: 3, md: 6 },
          mb: 6,
          minWidth: '100%',
        }}
      >
        <Breadcrumb items={agencyWorkBreadcrumb} />
        <Typography variant="h1" sx={{ mb: 3 }}>
          Agency Work: 2020-Present
        </Typography>
        <Typography variant="body1" sx={{ mb: 5 }}>
          A few examples of client work I’ve been a part of delivering recently:
        </Typography>
        <Grid container spacing={2}>
          {agencySlugs.map((slug: string, i: number) => {
            const item = agencyWork[slug] || agencyWork.blank;
            return (
              <Grid key={`agency-work-${slug}-${i}`} item xs={12} sm={6} md={4}>
                <RouterLink to={`/agency-work/${item.slug}`}>
                  <PreviewCard
                    src={getAgencyImagePathFromSlug(item.slug, currentTheme, '@0.25x')}
                    title={item.title}
                    subtitle={item.subtitle}
                    variant="elevation"
                    techStack={item.techStack || []}
                    sx={{ minHeight: 320 }}
                  />
                </RouterLink>
              </Grid>
            );
          })}
        </Grid>
      </CustomCard>
    </PageContainer>
  );
}

export default AgencyWork;
