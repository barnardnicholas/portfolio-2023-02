import { PortfolioItem } from '@/theme/types';
import { Link, Typography } from '@mui/material';

const plan9: PortfolioItem = {
  slug: 'plan9',
  title: 'Plan 9 From Outer Space - Frame-By-Frame',
  thumbnail: '',
  image: '',
  subtitle: null,
  shortDecription: 'Twitter B-Movie Screening Bot',
  content: (
    <>
      <Typography variant="body1">
        Experimental slow movie-screening Twitter bot, designed to screen the 1950s Ed Wood B-Movie
        ‘Plan 9 From Outer Space’ on Twitter, one frame at a time, over the course of a year,
        possibly setting a record for the longest movie screening in history. Built during the first
        Covid lockdown using Node, ExpressJS, Firebase, React and Twitter.
      </Typography>
      <Typography variant="body1">
        <Link href="https://github.com/barnardnicholas/plan9-bot" target="blank">
          Source code
        </Link>
      </Typography>
    </>
  ),
};

export default plan9;
