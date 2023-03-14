import { AgencyWork } from '@/types/shared';
import { Link, Typography } from '@mui/material';

const bolsterSystems: AgencyWork = {
  slug: 'bolster-systems',
  title: 'Bolster Systems',
  thumbnail: '',
  image: '',
  subtitle: null,
  techStack: [],
  client: 'Silverchip/CTI',
  shortDecription: 'Safety & compliance tool',
  content: (
    <>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Web & Mobile app - React JS/TS, React Native, Redux. Large, multi-national fire safety
        inspection & installation management system, combining streamlined industry-standard
        compliance and automation of safety documentation for trade professionals. The system has a
        very large (and growing) client base. One of the databases recently passed 100 million rows
        of organic client data. As a Front-end dev I’ve worked on the web and mobile apps regularly
        for the last year. Website:
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
