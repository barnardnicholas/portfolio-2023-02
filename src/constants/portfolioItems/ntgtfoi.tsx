import { PortfolioItem } from '@/types/shared';
import { Box, Link, Typography } from '@mui/material';

const ntgtfoi: PortfolioItem = {
  slug: 'ntgtfoi',
  title: 'NTGTFOI',
  thumbnail: '',
  image: '',
  subtitle: 'Point & Click Adventure Game',
  techStack: ['ags'],
  status: null,
  shortDecription: 'Point & Click Adventure Game',
  content: (
    <>
      <Box sx={{ columnCount: { xs: 1, md: 2 }, columnGap: 2 }}>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Fun retro point & click adventure game, produced as a birthday card for a friend. Play
          time is approx. 60 mins. Created in 2015 using Adventure Game Studio, Adobe Creative Cloud
          and Cubase with self-created art, animation & sound assets.
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ mb: 3 }}>
        <Link href="https://gamejolt.com/games/ntgtfoi-the-game/67958" target="blank">
          Download & play
        </Link>
      </Typography>
    </>
  ),
};

export default ntgtfoi;
