import React from 'react';
import CustomCard from '@components/customCard/CustomCard';
import { Grid, Link, Typography } from '@mui/material';
import RouterLink from '@components/routerLink/RouterLink';
// import useClickedRectTracker from '@hooks/useClickedRectTracker';

function Portfolio() {
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
      // coordClickHandler={useClickedRectTracker()}
    >
      <Typography variant="h2" sx={{ mb: 3 }}>
        PORTFOLIO & OTHER PROJECTS
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <RouterLink to="/portfolio/abra">
            <CustomCard variant="elevation" sx={{ alignItems: 'flex-start' }} riseOnHover>
              <Typography variant="h3" sx={{ mb: 0 }}>
                ABRA
              </Typography>
              <Typography variant="body1">(Proof-of-concept)</Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Ambient sound-generation app for the web, built using React/Typescript and ThreeJS.
                A POC based on my final Northcoders project, but rewritten to be cleaner and more
                advanced.
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                <Link href="https://github.com/barnardnicholas/abra-web" target="blank">
                  Source code
                </Link>
              </Typography>
            </CustomCard>
          </RouterLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard variant="elevation" sx={{ alignItems: 'flex-start' }} riseOnHover>
            <Typography variant="h3" sx={{ mb: 0 }}>
              ink-react
            </Typography>
            <Typography variant="body1">(Proof-of-concept)</Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Simple web implementation of Inkle&apos;s <em>Ink</em> language for dynamic
              storytelling using InkJS library. Play thorugh <em>The Intercept</em>, Inkle&apos;s
              short demo choose-your-own-adventure-story, and see the debug information as you play.
              I may turn this into an NPM package for people to use in the future. For now it&apos;s
              a prototype.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              <Link href="https://github.com/barnardnicholas/ink-react" target="blank">
                Source code
              </Link>
            </Typography>
          </CustomCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard variant="elevation" sx={{ alignItems: 'flex-start' }} riseOnHover>
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
          </CustomCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard variant="elevation" sx={{ alignItems: 'flex-start' }} riseOnHover>
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
          </CustomCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard variant="elevation" sx={{ alignItems: 'flex-start' }} riseOnHover>
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
          </CustomCard>
        </Grid>
      </Grid>
    </CustomCard>
  );
}

export default Portfolio;
