import React, { useMemo } from 'react';
import CustomCard from '@components/customCard/CustomCard';
import { Grid, Typography } from '@mui/material';
import RouterLink from '@components/routerLink/RouterLink';
import portfolioItems from '@constants/portfolioItems';
import { PortfolioItem } from '@/types/shared';
import PageContainer from '@components/layout/pageContainer/PageContainer';
import Breadcrumb from '@components/breadcrumb/Breadcrumb';
import PreviewCard from '@components/previewCard/PreviewCard';
import { getPortfolioImagePathFromSlug } from '@utils/utils';
import { useAtom } from 'jotai';
import { themeAtom } from '@/atoms/atoms';
import PortfolioFilters from '@components/filters/PortfolioFilters';
import { useSearchParams } from 'react-router-dom';
import techStackItems, { TechStackItem } from '@constants/techStackItems';

function Portfolio() {
  const [searchParams] = useSearchParams();
  const portfolioBreadcrumb = [{ name: 'Portfolio' }];
  const [currentTheme] = useAtom(themeAtom);

  const filteredResults = useMemo<PortfolioItem[]>(() => {
    const params = new URLSearchParams(searchParams);
    const searchTerm = params.get('s') || '';
    const sanitisedSearch = searchTerm.trim().toLowerCase();
    return Object.values(portfolioItems).filter((item: PortfolioItem) => {
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
        <Breadcrumb items={portfolioBreadcrumb} />
        <Typography variant="h1" sx={{ mb: 3 }}>
          PORTFOLIO & OTHER PROJECTS
        </Typography>
        <PortfolioFilters filteredResults={filteredResults} />
        <Grid container spacing={2}>
          {filteredResults.map((item: PortfolioItem, i: number) => {
            return (
              <Grid key={`portfolio-item-${item.slug}-${i}`} item xs={12} sm={6} md={4}>
                <RouterLink to={`/portfolio/${item.slug}`}>
                  <PreviewCard
                    src={getPortfolioImagePathFromSlug(item.slug, currentTheme, '@0.25x')}
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

export default Portfolio;
