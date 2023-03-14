import React from 'react';
import CustomCard from '@components/customCard/CustomCard';
import { Grid, Typography } from '@mui/material';
import RouterLink from '@components/routerLink/RouterLink';
import portfolioItems, { portfolioSlugs } from '@constants/portfolioItems';
import { PortfolioItem } from '@/types/shared';
import PageContainer from '@components/layout/pageContainer/PageContainer';
import Breadcrumb from '@components/breadcrumb/Breadcrumb';

function Portfolio() {
  const portfolioBreadcrumb = [{ name: 'Portfolio' }];

  return (
    <PageContainer sx={{ pt: 6, pb: 6 }}>
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
        <Grid container spacing={2}>
          {portfolioSlugs.map((slug: string, i: number) => {
            const item: PortfolioItem = portfolioItems[slug] || portfolioItems.blank;
            return (
              <Grid key={`portfolio-item-${slug}-${i}`} item xs={12} sm={6} md={4}>
                <RouterLink to={`/portfolio/${item.slug}`}>
                  <CustomCard variant="elevation" sx={{ alignItems: 'flex-start' }} riseOnHover>
                    <Typography variant="h3" sx={{ mb: 0 }}>
                      {item.title}
                    </Typography>
                    {item.subtitle && <Typography variant="body1">{item.subtitle}</Typography>}
                  </CustomCard>
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
