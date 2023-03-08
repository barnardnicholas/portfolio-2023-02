import React from 'react';
import CustomCard from '@components/customCard/CustomCard';
import { Grid, Link, Typography } from '@mui/material';
import MouseTiltContainer from '@components/animation/MouseTiltContainer';

function Portfolio() {
  return (
    <MouseTiltContainer>
      <CustomCard
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
          <Grid item xs={12} sm={6} md={4}>
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
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h3" sx={{ mb: 0 }}>
              Crazy Wall
            </Typography>
            <Typography variant="body1">(Work-in-progress)</Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Prototype mood board app themed around a typical conspiracy theorist’s ‘wall of
              obsession’. Pin images, notes, newspaper cuttings to a huge noticeboard and join up
              the pins with red twine. Ideal for those looking to catch serial killers, or those who
              are serial killers. Built using React, Node and Firebase.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              <Link href="https://github.com/barnardnicholas/crazy-wall" target="blank">
                Source code
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
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
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h3">PLAN 9 FROM OUTER SPACE - FRAME-BY-FRAME</Typography>
            <Typography variant="body1">
              Experimental slow movie-screening Twitter bot, designed to screen the 1950s Ed Wood
              B-Movie ‘Plan 9 From Outer Space’ on Twitter, one frame at a time, over the course of
              a year, possibly setting a record for the longest movie screening in history. Built
              during the first Covid lockdown using Node, ExpressJS, Firebase, React and Twitter.
            </Typography>
            <Typography variant="body1">
              <Link href="https://github.com/barnardnicholas/plan9-bot" target="blank">
                Source code
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </CustomCard>
    </MouseTiltContainer>
  );
}

export default Portfolio;
