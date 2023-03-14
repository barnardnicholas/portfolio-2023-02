import { AgencyWork } from '@/types/shared';
import { Link, Typography } from '@mui/material';

const suitsMe: AgencyWork = {
  slug: 'suits-me',
  title: 'Suits Me Banking',
  thumbnail: '',
  image: '',
  subtitle: null,
  techStack: [],
  client: 'Silverchip/CTI',
  shortDecription: 'Banking app for web & mobile',
  content: (
    <>
      <Typography variant="body1">
        Web & Mobile app - React JS/TS, React Native. Suits Me offer banking services to people with
        poor credit history, no fixed address or similar unusual circumstances. Silverchip developed
        and maintain their web and mobile online banking apps, working alongside industry-standard
        APIs provided by Suits Me’s fintech partners. The app was required to be fully PEN-tested by
        a third-party service before release.
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