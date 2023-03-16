import React, { PropsWithChildren } from 'react';
import CustomChip from '@components/customChip/CustomChip';
import { Box, SxProps, Theme } from '@mui/material';
import { contacts } from '@pages/home/constants';

const ContactLinks: React.FC<ContactLinksProps> = ({ sx = {} }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexGap: 1, ...sx }}>
      {contacts.map(({ name, IconComponent, link }, i: number) => (
        <CustomChip
          key={`${name}-${i}`}
          clickable
          href={link}
          IconComponent={IconComponent}
          target="blank"
          iconOnly
          isLastItem={i < contacts.length - 1 ? true : false}
        />
      ))}
    </Box>
  );
};

interface ContactLinksProps extends PropsWithChildren {
  sx?: SxProps<Theme>;
}

export default ContactLinks;
