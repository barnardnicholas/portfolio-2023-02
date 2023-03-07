import { Box, Chip, SxProps, Theme } from '@mui/material';
import { contacts } from '@pages/home/constants';
import React, { PropsWithChildren } from 'react';

const ContactLinks: React.FC<ContactLinksProps> = ({ sx = {} }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexGap: 1, ...sx }}>
      {contacts.map(({ name, icon, link }, i: number) => (
        <Chip
          key={`${name}-${i}`}
          // label={name}
          clickable
          sx={{
            mb: 1,
            minWidth: '1.9rem',
            mr: i < contacts.length - 1 ? 1 : 0,
            '.MuiChip-label': {
              pr: '0.4rem',
              pl: '0.4rem',
            },
          }}
          component="a"
          href={link}
          icon={
            <img
              style={{ width: '1rem', height: '1rem', marginLeft: '0.4rem', fill: 'white' }}
              src={icon}
              alt={name}
            />
          }
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
