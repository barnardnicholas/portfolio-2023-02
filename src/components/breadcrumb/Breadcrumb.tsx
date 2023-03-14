import React from 'react';
import { standardTransitions } from '@/theme/constants';
import { Typography, useTheme } from '@mui/material';
import RouterLink from '@components/routerLink/RouterLink';

const homeBreadcrumb: Breadcrumb = {
  name: 'Home',
  path: '/',
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const theme = useTheme();
  return (
    <Typography sx={{ mb: 1, transition: standardTransitions(theme) }} variant="body1">
      {[homeBreadcrumb, ...items].map((item: Breadcrumb, i: number, arr: Breadcrumb[]) => {
        return (
          <React.Fragment key={`breadcrumb-${i}`}>
            {!item.path ? (
              <>{item.name}</>
            ) : (
              <RouterLink underlinedText to={item.path}>
                {item.name}
              </RouterLink>
            )}
            {i < arr.length - 1 && <>{' > '}</>}
          </React.Fragment>
        );
      })}
    </Typography>
  );
};

type Breadcrumb = {
  name: string;
  path?: string;
};

interface BreadcrumbProps {
  items: Breadcrumb[];
}

export default Breadcrumb;
