import { AgencyWorkItem } from '@/types/shared';
import { Link, Typography } from '@mui/material';

const bolsterSystems: AgencyWorkItem = {
  slug: 'bolster-systems',
  title: 'Bolster Systems',
  thumbnail: '',
  image: '',
  subtitle: null,
  techStack: [
    'react',
    'typescript',
    'javascript',
    'react-native',
    'react-native-reanimated',
    'redux',
    'redux-toolkit',
  ],
  client: 'Silverchip/CTI',
  shortDecription: 'Safety & compliance tool',
  content: (
    <>
      <Typography variant="body1">Web & Mobile app - React, React Native, Redux</Typography>
      <Typography variant="body1">
        Building safety inspection & installation management system for trade professionals.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        <ul>
          <li style={{ paddingBottom: '0.5rem' }}>
            Collaborated with the client’s management & design teams to refine and deliver their
            flagship product for web & mobile
          </li>
          <li style={{ paddingBottom: '0.5rem' }}>
            Oversaw adding of several new features, delivering considerable customer value
          </li>
          <li style={{ paddingBottom: '0.5rem' }}>
            Successfully reduced technical debt within codebase by ~10-15%
          </li>
          <li style={{ paddingBottom: '0.5rem' }}>
            Worked on critical support tickets with a near-100% success rate
          </li>
        </ul>
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        <Link href="https://app.bolstersystems.com" target="blank">
          Web app
        </Link>
      </Typography>
    </>
  ),
};

export default bolsterSystems;
