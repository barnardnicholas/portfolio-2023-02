import { PortfolioItem } from '@/types/shared';
import { Box, Link, Typography } from '@mui/material';

const inkReact: PortfolioItem = {
  slug: 'ink-react',
  title: 'Ink React',
  thumbnail: '',
  image: '',
  subtitle: '(Proof-of-concept)',
  techStack: ['react', 'typescript', 'javascript', 'ink', 'inkjs'],
  status: null,
  shortDecription: 'An Ink Story implementation for React',
  content: (
    <>
      <Box sx={{ columnCount: { xs: 1, md: 2 }, columnGap: 2 }}>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Simple web implementation of Inkle&apos;s <em>Ink</em> language for dynamic storytelling
          using InkJS library. Play thorugh <em>The Intercept</em>, Inkle&apos;s short demo
          choose-your-own-adventure-story, and see the debug information as you play. I may turn
          this into an NPM package for people to use in the future. For now it&apos;s a prototype.
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ mb: 3 }}>
        <Link href="https://ink-react.nickbarnard.co.uk/" target="blank">
          Hosted app
        </Link>
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        <Link href="https://github.com/barnardnicholas/ink-react" target="blank">
          Source code
        </Link>
      </Typography>
    </>
  ),
};

export default inkReact;
