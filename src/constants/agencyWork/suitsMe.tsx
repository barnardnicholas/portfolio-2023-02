import { AgencyWorkItem } from '@/types/shared';
import { Link, Typography } from '@mui/material';

const suitsMe: AgencyWorkItem = {
  slug: 'suits-me',
  title: 'Suits Me Banking',
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
  shortDecription: 'Banking app for web & mobile',
  content: (
    <>
      <Typography variant="body1">Web & Mobile app - React JS/TS, React Native.</Typography>
      <Typography variant="body1">
        Banking alternative for customers in poor financial conditions.
      </Typography>
      <Typography variant="body1">
        <ul>
          <li style={{ paddingBottom: '0.5rem' }}>
            Worked closely with our backend teams, as well as the client&apos;s fintech partners to
            ensure smooth operation across several microservices
          </li>
          <li style={{ paddingBottom: '0.5rem' }}>
            Added Sentry logging to mobile app, which allowed the team to trace and fix ~40% of
            outstanding bug reports
          </li>
          <li style={{ paddingBottom: '0.5rem' }}>
            Designed a reusable front-end error-handling system to catch bugs in low-connectivity
            situations, which was subsequently added to other apps
          </li>
        </ul>
      </Typography>
      <Typography variant="body1">
        <Link href="https://suitsmecard.com" target="blank">
          Web app
        </Link>
      </Typography>
    </>
  ),
};

export default suitsMe;
