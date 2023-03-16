import { AgencyWork } from '@/types/shared';
import { Typography } from '@mui/material';

const decathlonLeader: AgencyWork = {
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
      <Typography variant="body1" sx={{ mb: 3 }}>
        Mobile-first web app - React JS/TS, Redux, Express/Knex. Internal peer-reviewing tool for
        Decathlon employees. Interactive self-assessment questionnaire and responsive data
        visualisation. Using Decathlon’s own OAuth system. API built to client’s specifications
        using Node & ExpressTS with Knex & PSQL.
      </Typography>
    </>
  ),
};

export default decathlonLeader;
