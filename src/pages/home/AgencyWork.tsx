import React from 'react';
import CustomCard from '@components/customCard/CustomCard';
import ContentBlock from '@components/layout/ContentBlock';
import { Link, Typography } from '@mui/material';

function AgencyWork() {
  return (
    <ContentBlock>
      <CustomCard
        sx={{
          alignItems: 'flex-start',
          pt: { xs: 3, md: 6 },
          pb: { xs: 3, md: 6 },
          minWidth: '100%',
        }}
      >
        <Typography variant="h2">Agency Work: 2020-Present</Typography>
        <Typography variant="body1" sx={{ mb: 5 }}>
          A few examples of client work I’ve been a part of delivering recently:
        </Typography>
        <Typography variant="h3">DECATHLON LEADER (SILVERCHIP/CTI)</Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Mobile-first web app - React JS/TS, Redux, Express/Knex. Internal peer-reviewing tool for
          Decathlon employees. Interactive self-assessment questionnaire and responsive data
          visualisation. Using Decathlon’s own OAuth system. API built to client’s specifications
          using Node & ExpressTS with Knex & PSQL.
        </Typography>
        <Typography variant="h3">BOLSTER SYSTEMS (SILVERCHIP/CTI)</Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Web & Mobile app - React JS/TS, React Native, Redux. Large, multi-national fire safety
          inspection & installation management system, combining streamlined industry-standard
          compliance and automation of safety documentation for trade professionals. The system has
          a very large (and growing) client base. One of the databases recently passed 100 million
          rows of organic client data. As a Front-end dev I’ve worked on the web and mobile apps
          regularly for the last year. Website:
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          <Link href="https://app.bolstersystems.com" target="blank">
            Web app
          </Link>
        </Typography>
        <Typography variant="h3">SUITS ME BANKING (SILVERCHIP/CTI)</Typography>
        <Typography variant="body1">
          Web & Mobile app - React JS/TS, React Native. Suits Me offer banking services to people
          with poor credit history, no fixed address or similar unusual circumstances. Silverchip
          developed and maintain their web and mobile online banking apps, working alongside
          industry-standard APIs provided by Suits Me’s fintech partners. The app was required to be
          fully PEN-tested by a third-party service before release.
        </Typography>
        <Typography variant="body1">
          <Link href="https://suitsmecard.com" target="blank">
            Web app
          </Link>
        </Typography>
      </CustomCard>
    </ContentBlock>
  );
}

export default AgencyWork;
