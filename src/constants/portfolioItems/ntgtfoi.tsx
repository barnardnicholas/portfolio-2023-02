import { PortfolioItem } from '@/theme/types';
import { Link, Typography } from '@mui/material';

const ntgtfoi: PortfolioItem = {
  slug: 'ntgtfoi',
  title: 'NTGTFOI',
  thumbnail: '',
  image: '',
  subtitle: null,
  shortDecription: 'Point & Click Adventure Game',
  content: (
    <>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Fun retro point & click adventure game, produced as a birthday card for a friend. Play time
        is approx. 60 mins. Created in 2015 using Adventure Game Studio, Adobe Creative Cloud and
        Cubase with self-created art, animation & sound assets.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        <Link href="https://gamejolt.com/games/ntgtfoi-the-game/67958" target="blank">
          Download & play
        </Link>
      </Typography>
    </>
  ),
};

export default ntgtfoi;
