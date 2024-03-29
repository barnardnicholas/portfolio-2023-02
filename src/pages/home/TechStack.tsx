import React from 'react';
import CustomCard from '@components/customCard/CustomCard';
import { Grid, Typography } from '@mui/material';
// import useClickedRectTracker from '@hooks/useClickedRectTRacker';

function TechStack() {
  return (
    <CustomCard
      id="tech-stack"
      sx={{
        alignItems: 'flex-start',
        pt: { xs: 3, md: 6 },
        pb: { xs: 3, md: 6 },
        mb: 6,
        // minWidth: '100%',
      }}
      // coordClickHandler={useClickedRectTracker()}
    >
      <Typography variant="h2">Tech Stack</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard variant="elevation" sx={{ alignItems: 'flex-start' }} riseOnHover>
            <Typography variant="body1" sx={{ mb: 0 }}>
              <strong>Languages:</strong>
              <br />
              Javascript
              <br />
              Typescript
              <br />
              HTML & CSS
              <br />
              LESS & SASS
              <br />
              NodeJS
            </Typography>
          </CustomCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard variant="elevation" sx={{ alignItems: 'flex-start' }} riseOnHover>
            <Typography variant="body1" sx={{ mb: 0 }}>
              <strong>Speciality:</strong>
              <br />
              React
              <br />
              React Native
              <br />
              Redux/Toolkit
              <br />
              MUI
              <br />
              Jest
              <br />
              ExpressJS
              <br />
              Mocha/Chai
              <br />
              Supertest
              <br />
              Axios
              <br />
              Git
            </Typography>
          </CustomCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard variant="elevation" sx={{ alignItems: 'flex-start' }} riseOnHover>
            <Typography variant="body1" sx={{ mb: 0 }}>
              <strong>Comfortable:</strong>
              <br />
              AWS/GCP
              <br />
              SQL/PSQL
              <br />
              Firebase
              <br />
              Figma
              <br />
              Miro
              <br />
              Adobe
              <br />
              Slack/Teams
            </Typography>
          </CustomCard>
        </Grid>
      </Grid>
    </CustomCard>
  );
}

export default TechStack;
