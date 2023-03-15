import React from 'react';
import { Box } from '@mui/material';

import HeroCard from '@components/animation/HeroCard';
import TechStack from './TechStack';
import Summary from './Summary';
import AgencyWork from './AgencyWork';
import Portfolio from './Portfolio';
import PageContainer from '@components/layout/pageContainer/PageContainer';

function Home() {
  return (
    <PageContainer>
      <Box sx={{ height: '50vh', display: 'grid', gridTemplateRows: '1fr 1fr', mb: '20vh' }}>
        <Box></Box>
        <Box
          className="title-box"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <HeroCard />
        </Box>
      </Box>
      <Summary />
      <TechStack />
      <AgencyWork />
      <Portfolio />
    </PageContainer>
  );
}

export default Home;
