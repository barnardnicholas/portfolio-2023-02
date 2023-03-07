import EmailIcon from '@components/iconComponents/EmailIcon';
import GithubIcon from '@components/iconComponents/GithubIcon';
import LinkedInIcon from '@components/iconComponents/LinkedInIcon';
import TwitterIcon from '@components/iconComponents/TwitterIcon';

export const techStack = ['React', 'Typescript', 'SCSS', 'Node'];

export const contacts: Contact[] = [
  {
    id: 'email',
    name: 'Email',
    IconComponent: EmailIcon,
    link: 'mailto:barnard.nicholas@gmail.com',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    IconComponent: LinkedInIcon,
    link: 'https://www.linkedin.com/in/barnardnicholas',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    IconComponent: TwitterIcon,
    link: 'https://twitter.com/nickbarnardinc',
  },
  {
    id: 'github',
    name: 'Github',
    IconComponent: GithubIcon,
    link: 'https://github.com/barnardnicholas',
  },
];

export interface Contact {
  id: string;
  name: string;
  IconComponent: React.FC;
  link: string;
}
