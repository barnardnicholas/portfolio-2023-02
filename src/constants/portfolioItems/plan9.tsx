import { PortfolioItem } from '@/types/shared';
import { Box, Link, Typography } from '@mui/material';

const plan9: PortfolioItem = {
  slug: 'plan9',
  title: 'Plan 9 Frame-By-Frame',
  thumbnail: '',
  image: '',
  subtitle: null,
  techStack: ['twitter', 'node', 'express'],
  status: null,
  shortDecription: 'Twitter B-Movie Screening Bot',
  content: (
    <>
      <Box sx={{ columnCount: { xs: 1, md: 2 }, columnGap: 2 }}>
        <Typography variant="body1">
          Experimental slow movie-screening Twitter bot, designed to screen the 1950s Ed Wood
          B-Movie ‘Plan 9 From Outer Space’ on Twitter, one frame at a time, over the course of a
          year, possibly setting a record for the longest movie screening in history. Built during
          the first Covid lockdown using Node, ExpressJS, Firebase, React and Twitter.
        </Typography>
      </Box>
      <Typography variant="body1">
        <Link href="https://github.com/barnardnicholas/plan9-bot" target="blank">
          Source code
        </Link>
      </Typography>
    </>
  ),
};

export default plan9;
