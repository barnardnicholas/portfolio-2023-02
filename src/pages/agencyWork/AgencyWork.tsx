import React, { useMemo } from 'react';
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
import { useSearchParams } from 'react-router-dom';
import { AgencyWorkItem } from '@/types/shared';
import techStackItems, { TechStackItem } from '@constants/techStackItems';
import PortfolioFilters from '@components/filters/PortfolioFilters';

function AgencyWork() {
  const [searchParams] = useSearchParams();
  const agencyWorkBreadcrumb = [{ name: 'Agency Work' }];
  const [currentTheme] = useAtom(themeAtom);

  const filteredResults = useMemo<AgencyWorkItem[]>(() => {
    const params = new URLSearchParams(searchParams);
    const searchTerm = params.get('s') || '';
    const sanitisedSearch = searchTerm.trim().toLowerCase();
    return Object.values(agencyWork).filter((item: AgencyWorkItem) => {
      const relevantTechnologies = Object.values(techStackItems).filter(
        (techItem: TechStackItem) => {
          if (techItem.name.trim().toLowerCase().includes(sanitisedSearch)) return true;
          return false;
        },
      );
      if (
        item.techStack.some((techSlug: string) =>
          relevantTechnologies
            .map(({ slug }: TechStackItem) => slug)
            .some((slug: string) => techSlug === slug),
        )
      )
        return true;
      return false;
    });
  }, [searchParams]);

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
        <Typography variant="h1" sx={{ mb: 1 }}>
          Agency Work: 2020-Present
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          A few examples of client work I’ve been a part of delivering recently:
        </Typography>
        <PortfolioFilters filteredResults={filteredResults} />
        <Grid container spacing={2}>
          {filteredResults.map((item: AgencyWorkItem, i: number) => {
            return (
              <Grid key={`agency-work-${item.slug}-${i}`} item xs={12} sm={6} md={4}>
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
