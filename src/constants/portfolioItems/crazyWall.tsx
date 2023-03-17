import { PortfolioItem } from '@/types/shared';
import { Box, Link, Typography } from '@mui/material';

const crazyWall: PortfolioItem = {
  slug: 'crazy-wall',
  title: 'Crazy Wall',
  thumbnail: '',
  image: '',
  subtitle: '(Work-in-progress)',
  techStack: ['react', 'javascript'],
  status: null,
  shortDecription: 'Conspiracy notice board app',
  content: (
    <>
      <Box sx={{ columnCount: { xs: 1, md: 2 }, columnGap: 2 }}>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Prototype mood board app themed around a typical conspiracy theorist’s ‘wall of
          obsession’. Pin images, notes, newspaper cuttings to a huge noticeboard and join up the
          pins with red twine. Ideal for those looking to catch serial killers, or those who are
          serial killers. Built using React, Node and Firebase.
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ mb: 3 }}>
        <Link href="https://github.com/barnardnicholas/crazy-wall" target="blank">
          Source code
        </Link>
      </Typography>
    </>
  ),
};

export default crazyWall;
