import GithubIcon from '@assets/images/brand-logos/github-icon.svg';
import EmailIcon from '@assets/images/icons/email.svg';
import LinkedInIcon from '@assets/images/brand-logos/linkedin.svg';
import TwitterIcon from '@assets/images/brand-logos/twitter.svg';

export const techStack = ['React', 'Typescript', 'SCSS', 'Node'];

export const contacts: Contact[] = [
  {
    name: 'Email',
    icon: EmailIcon,
    link: 'mailto:barnard.nicholas@gmail.com',
  },
  {
    name: 'LinkedIn',
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/in/barnardnicholas',
  },
  {
    name: 'Twitter',
    icon: TwitterIcon,
    link: 'https://twitter.com/nickbarnardinc',
  },
  {
    name: 'Github',
    icon: GithubIcon,
    link: 'https://github.com/barnardnicholas',
  },
];

export interface Contact {
  name: string;
  icon: string;
  link: string;
}
