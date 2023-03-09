import React from 'react';
import ContactLinks from '@components/contactLinks/ContactLinks';
import { Box, Container, Link, Typography, useTheme } from '@mui/material';
import { addOpacityToColor } from '@utils/utils';
import { standardTransitions } from '@/theme/constants';

const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: addOpacityToColor(theme.palette.background.paper, 0.66),
        pt: 2,
        pb: 6,
        borderTop: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: `0 -2px 6px 1px ${addOpacityToColor('#000000', 0.5)}`,
        transition: standardTransitions(theme),
      }}
    >
      <Container>
        <Box
          className="con"
          sx={{ flex: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}
        >
          <Box sx={{ flex: 1, pr: 1 }}>
            <Typography sx={{ mb: 0.5, transition: standardTransitions(theme) }} variant="body1">
              All design & dev by Nick Barnard 2023
            </Typography>
            <Link href="https://github.com/barnardnicholas/portfolio-2023-02" target="blank">
              Check my source code
            </Link>
          </Box>
          <ContactLinks />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
