import { standardTransitions } from '@/theme/constants';
import { Box, Chip, SxProps, Theme, useTheme } from '@mui/material';
import { contacts } from '@pages/home/constants';
import React, { PropsWithChildren } from 'react';

const ContactLinks: React.FC<ContactLinksProps> = ({ sx = {} }) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexGap: 1, ...sx }}>
      {contacts.map(({ name, IconComponent, link }, i: number) => (
        <Chip
          key={`${name}-${i}`}
          // label={name}
          clickable
          sx={{
            mb: 1,
            minWidth: '1.9rem',
            mr: i < contacts.length - 1 ? 1 : 0,
            '.MuiChip-label': {
              pr: '0rem',
              pl: '0rem',
            },
            transition: standardTransitions(theme),
          }}
          component="a"
          href={link}
          icon={<IconComponent />}
          target="blank"
        />
      ))}
    </Box>
  );
};

interface ContactLinksProps extends PropsWithChildren {
  sx?: SxProps<Theme>;
}

export default ContactLinks;
