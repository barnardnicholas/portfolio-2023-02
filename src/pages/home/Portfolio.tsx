import React from 'react';
import CustomCard from '@components/customCard/CustomCard';
import { Grid, Typography } from '@mui/material';
import RouterLink from '@components/routerLink/RouterLink';
import portfolioItems, { portfolioSlugs } from '@constants/portfolioItems';
import { PortfolioItem } from '@/types/shared';
import PreviewCard from '@components/previewCard/PreviewCard';
import { getPortfolioImagePathFromSlug } from '@utils/utils';
import { useAtom } from 'jotai';
import { themeAtom } from '@/atoms/atoms';

function Portfolio() {
  const [currentTheme] = useAtom(themeAtom);
  return (
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
      <Typography variant="h2" sx={{ mb: 3 }}>
        PORTFOLIO & OTHER PROJECTS
      </Typography>
      <Grid container spacing={2}>
        {portfolioSlugs.map((slug: string, i: number) => {
          const item: PortfolioItem = portfolioItems[slug] || portfolioItems.blank;
          return (
            <Grid key={`portfolio-item-${slug}-${i}`} item xs={12} sm={6} md={4}>
              <RouterLink to={`/portfolio/${item.slug}`}>
                <PreviewCard
                  src={getPortfolioImagePathFromSlug(item.slug, currentTheme, '@0.25x')}
                  title={item.title}
                  subtitle={item.subtitle}
                  variant="elevation"
                  techStack={item.techStack}
                  sx={{ minHeight: 320 }}
                />
              </RouterLink>
            </Grid>
          );
        })}
      </Grid>
    </CustomCard>
  );
}

export default Portfolio;
