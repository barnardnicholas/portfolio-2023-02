import { PortfolioItem } from '@/theme/types';
import { Typography, Link } from '@mui/material';

const abra: PortfolioItem = {
  slug: 'abra',
  title: 'Abra',
  thumbnail: '',
  image: '',
  subtitle: 'Ambient sound-generation app',
  shortDecription:
    'Ambient sound-generation app for the web, built using React/Typescript and ThreeJS. A POC based on my final Northcoders project, but rewritten to be cleaner and more advanced.',
  content: (
    <>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Ambient sound-generation app for the web, built using React/Typescript and ThreeJS. A POC
        based on my final Northcoders project, but rewritten to be cleaner and more advanced.
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
