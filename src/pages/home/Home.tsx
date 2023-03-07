import React from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';

import ContentBlock from '@components/layout/ContentBlock';
import CustomCard from '@components/customCard/CustomCard';
import HeroCard from '@components/animation/HeroCard';

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
      <ContentBlock>
        <CustomCard
          sx={{
            alignItems: 'flex-start',
            pt: { xs: 3, md: 6 },
            pb: { xs: 3, md: 6 },
            minWidth: '100%',
          }}
        >
          <Typography variant="h2">Summary</Typography>
          <Typography variant="body1">
            Full-stack Javascript Developer specialising in React/React Native. Adept in Node,
            Typescript, Redux. Working knowledge of Git VCS, as well as AWS/GCP microservices.
          </Typography>
          <Typography variant="body1">
            Currently mid-level Front-End Dev at CTI Digital, Manchester, UK. Based in Toronto from
            July 2023, actively seeking full-time work as a Mid/Senior Javascript Developer.
          </Typography>
          <Typography variant="body1">
            Solid experience with multiple digital agencies, comfortable with Agile/SCRUM. Have
            shipped and maintained a wide range of projects for clients across numerous sectors,
            including finance, commerce and construction.
          </Typography>
          <Typography variant="body1">
            Strong troubleshooting & critical support skills after experience on fire-fighting
            teams.
          </Typography>
          <Typography variant="body1">
            Passionate about developing great UX&UI through clean, readable code using modern
            technology.
          </Typography>
          <Typography variant="body1">
            Previously spent 10 years in the Audio Industry as a sound engineer and studio
            technician, working with industry-leading equipment & software and a range of clients.
          </Typography>
          <Typography variant="body1">
            Considerable working experience in various media software incl. Pro Tools, Cubase,
            Ableton Live, Logic Pro X.
          </Typography>
          <Typography variant="body1">
            Comfortable with Adobe Creative Cloud apps incl. Photoshop, Lightroom, Premiere Pro,
            etc.
          </Typography>
          <Typography variant="body1">
            I firmly believe that a positive, problem-solving attitude and a supportive company
            culture is essential to a healthy work environment. I do my best to be a force for good
            wherever I work, and I try to devote equal attention to both technical and soft skills.
          </Typography>
        </CustomCard>
      </ContentBlock>
      <ContentBlock>
        <CustomCard
          sx={{
            alignItems: 'flex-start',
            pt: { xs: 3, md: 6 },
            pb: { xs: 3, md: 6 },
            minWidth: '100%',
          }}
        >
          <Typography variant="h2">Tech Stack</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
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
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="body1" sx={{ mb: 0 }}>
                <strong>Speciality:</strong>
                <br />
                React
                <br />
                React Native
                <br />
                Redux/Toolkit
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
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
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
            </Grid>
          </Grid>
        </CustomCard>
      </ContentBlock>
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
            Mobile-first web app - React JS/TS, Redux, Express/Knex. Internal peer-reviewing tool
            for Decathlon employees. Interactive self-assessment questionnaire and responsive data
            visualisation. Using Decathlon’s own OAuth system. API built to client’s specifications
            using Node & ExpressTS with Knex & PSQL.
          </Typography>
          <Typography variant="h3">BOLSTER SYSTEMS (SILVERCHIP/CTI)</Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Web & Mobile app - React JS/TS, React Native, Redux. Large, multi-national fire safety
            inspection & installation management system, combining streamlined industry-standard
            compliance and automation of safety documentation for trade professionals. The system
            has a very large (and growing) client base. One of the databases recently passed 100
            million rows of organic client data. As a Front-end dev I’ve worked on the web and
            mobile apps regularly for the last year. Website:
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
            industry-standard APIs provided by Suits Me’s fintech partners. The app was required to
            be fully PEN-tested by a third-party service before release.
          </Typography>
          <Typography variant="body1">
            <Link href="https://suitsmecard.com" target="blank">
              Web app
            </Link>
          </Typography>
        </CustomCard>
      </ContentBlock>
      <ContentBlock>
        <CustomCard
          sx={{
            alignItems: 'flex-start',
            pt: { xs: 3, md: 6 },
            pb: { xs: 3, md: 6 },
            minWidth: '100%',
          }}
        >
          <Typography variant="h2">PORTFOLIO & OTHER PROJECTS</Typography>
          <Typography variant="h3" sx={{ mb: 0 }}>
            ABRA
          </Typography>
          <Typography variant="body1">(Proof-of-concept)</Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Ambient sound-generation app for the web, built using React/Typescript and ThreeJS. A
            POC based on my final Northcoders project, but rewritten to be cleaner and more
            advanced.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            <Link href="https://github.com/barnardnicholas/abra-web" target="blank">
              Source code
            </Link>
          </Typography>
          <Typography variant="h3" sx={{ mb: 0 }}>
            Crazy Wall
          </Typography>
          <Typography variant="body1">(Work-in-progress)</Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Prototype mood board app themed around a typical conspiracy theorist’s ‘wall of
            obsession’. Pin images, notes, newspaper cuttings to a huge noticeboard and join up the
            pins with red twine. Ideal for those looking to catch serial killers, or those who are
            serial killers. Built using React, Node and Firebase.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            <Link href="https://github.com/barnardnicholas/crazy-wall" target="blank">
              Source code
            </Link>
          </Typography>
          <Typography variant="h3">NTGTFOI</Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Fun retro point & click adventure game, produced as a birthday card for a friend. Play
            time is approx. 60 mins. Created in 2015 using Adventure Game Studio, Adobe Creative
            Cloud and Cubase with self-created art, animation & sound assets.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            <Link href="https://gamejolt.com/games/ntgtfoi-the-game/67958" target="blank">
              Download & play
            </Link>
          </Typography>
          <Typography variant="h3">PLAN 9 FROM OUTER SPACE - FRAME-BY-FRAME</Typography>
          <Typography variant="body1">
            Experimental slow movie-screening Twitter bot, designed to screen the 1950s Ed Wood
            B-Movie ‘Plan 9 From Outer Space’ on Twitter, one frame at a time, over the course of a
            year, possibly setting a record for the longest movie screening in history. Built during
            the first Covid lockdown using Node, ExpressJS, Firebase, React and Twitter.
          </Typography>
          <Typography variant="body1">
            <Link href="https://github.com/barnardnicholas/plan9-bot" target="blank">
              Source code
            </Link>
          </Typography>
        </CustomCard>
      </ContentBlock>
    </>
  );
}

export default Home;
