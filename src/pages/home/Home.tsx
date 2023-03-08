import React from 'react';
import { Box } from '@mui/material';

import HeroCard from '@components/animation/HeroCard';
import TechStack from './TechStack';
import Summary from './Summary';
import AgencyWork from './AgencyWork';

function Home() {
  return (
    <>
      <Box sx={{ height: '66vh', display: 'grid', gridTemplateRows: '1fr 1fr', mb: '20vh' }}>
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
    </>
  );
}

export default Home;
