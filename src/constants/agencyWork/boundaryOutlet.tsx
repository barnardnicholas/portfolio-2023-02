import { AgencyWorkItem } from '@/types/shared';
import { Link, Typography } from '@mui/material';

const boundaryOutlet: AgencyWorkItem = {
  slug: 'boundary-outlet',
  title: 'Boundary Outlet',
  thumbnail: '',
  image: '',
  subtitle: null,
  techStack: [
    'react-native',
    'react-native-reanimated',
    'typescript',
    'javascript',
    'redux',
    'redux-toolkit',
  ],
  client: 'Silverchip/CTI',
  shortDecription: 'Bespoke Coupon App',
  content: (
    <>
      <Typography variant="body1">Cross-platform Mobile app - React Native, Redux</Typography>
      <Typography variant="body1">
        Bespoke Coupon app for customers of a chain of shopping centers in the UK.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        <ul>
          <li style={{ paddingBottom: '0.5rem' }}>
            The team and I turned a rebrand around in record time thanks to best practices during
            build phase
          </li>
          <li style={{ paddingBottom: '0.5rem' }}>
            The app boosted customer engagement by 20-30% in some areas
          </li>
          <li style={{ paddingBottom: '0.5rem' }}>
            Lowest tech debt and lowest warranty support tickets of any of the agency’s apps to date
          </li>
          <li style={{ paddingBottom: '0.5rem' }}>
            I helped set new standards in type-safety in the codebase, which were later enforced
            company-wide.
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

export default boundaryOutlet;
