import { AgencyWorkItem } from '@/types/shared';
import { Box, Typography } from '@mui/material';

const decathlonLeader: AgencyWorkItem = {
  slug: 'decathlon-leader',
  title: 'Decathlon Leader',
  thumbnail: '',
  image: '',
  subtitle: null,
  techStack: ['react', 'typescript', 'javascript', 'redux', 'redux-toolkit'],
  client: 'Silverchip/CTI',
  shortDecription: 'Internal Peer-Review Tool',
  content: (
    <>
      <Box sx={{ columnCount: { xs: 1, md: 2 }, columnGap: 2 }}>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Mobile-first web app - React JS/TS, Redux, Express/Knex. Internal peer-reviewing tool for
          Decathlon employees. Interactive self-assessment questionnaire and responsive data
          visualisation. Using Decathlon’s own OAuth system. API built to client’s specifications
          using Node & ExpressTS with Knex & PSQL.
        </Typography>
      </Box>
    </>
  ),
};

export default decathlonLeader;
