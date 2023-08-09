import { PortfolioItem } from '@/types/shared';
import { Typography, Link, Box } from '@mui/material';

const abra: PortfolioItem = {
  slug: 'abra',
  title: 'Abra',
  thumbnail: '',
  image: '',
  subtitle: 'Ambient sound-generation app',
  techStack: ['react', 'typescript', 'javascript', 'redux', 'threejs', 'react-three-fiber'],
  status: null,
  shortDecription:
    'Ambient sound-generation app for the web, built using React/Typescript and ThreeJS. A POC based on my final Northcoders project, but rewritten to be cleaner and more advanced.',
  content: (
    <>
      <Box sx={{ columnCount: { xs: 1, md: 2 }, columnGap: 2 }}>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Ambient sound-generation app for the web, built using React/Typescript and ThreeJS. A POC
          based on my final Northcoders project, but rewritten to be cleaner and more advanced.
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ mb: 3 }}>
        <Link href="https://abra.nickbarnard.dev" target="blank">
          Hosted app
        </Link>
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        <Link href="https://github.com/barnardnicholas/abra-web" target="blank">
          Source code
        </Link>
      </Typography>
    </>
  ),
};

export default abra;
