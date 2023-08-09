import { PortfolioItem } from '@/types/shared';
import { Typography, Link, Box } from '@mui/material';

const ntchuva: PortfolioItem = {
  slug: 'ntchuva',
  title: 'Ntchuva',
  thumbnail: '',
  image: '',
  subtitle: 'Ancient African Boardgame',
  techStack: ['react', 'typescript', 'javascript', 'redux'],
  status: null,
  shortDecription:
    'Ancient African board game, coded for two-players in React/Typescript. Built to showcase game-like behavior & animation.',
  content: (
    <>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Ancient African board game, coded for two-players in React/Typescript. Built to showcase
        game-like behavior & animation.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        <Link href="https://ntchuva.nickbarnard.dev" target="blank">
          Hosted app
        </Link>
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        <Link href="https://github.com/barnardnicholas/ntchuva" target="blank">
          Source code
        </Link>
      </Typography>
    </>
  ),
};

export default ntchuva;
