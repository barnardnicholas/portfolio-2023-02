import React from 'react';
import { Box, Button, Card, Chip, Container, Stack, Typography } from '@mui/material';

import { loremIpsum, techStack } from './constants';
import MouseTiltContainer from '@components/animation/MouseTiltContainer';
import ContentBlock from '@components/layout/ContentBlock';

function Home() {
  return (
    <Container>
      <Stack sx={{ h: '66.6vh' }}></Stack>

      <Box sx={{ height: '66vh', display: 'grid', gridTemplateRows: '1fr 1fr' }}>
        <Box></Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MouseTiltContainer>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: { md: '50vw' },
                pt: { xs: 3, md: 6 },
                pb: { xs: 3, md: 6 },
              }}
              variant="outlined"
              elevation={1}
            >
              <Typography sx={{ mb: 0, textAlign: 'center' }} variant="h1">
                Nick Barnard
              </Typography>
              <Typography sx={{ textAlign: 'center' }} variant="body1">
                Full-stack Software Development
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexGap: 1 }}>
                {techStack.map((label: string, i: number) => (
                  <Chip
                    key={`${label}-${i}`}
                    label={label}
                    clickable
                    // onDelete={() => console.log(`Delete ${label}`)}
                    sx={{ mb: 1, mr: i < techStack.length ? 1 : 0 }}
                    onClick={() => console.log(`Click ${label}`)}
                  />
                ))}
              </Box>
            </Card>
          </MouseTiltContainer>
        </Box>
      </Box>
      <ContentBlock position="right">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gridArea: 'content',
          }}
        >
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: { md: '50vw' },
              pt: { xs: 3, md: 6 },
              pb: { xs: 3, md: 6 },
            }}
            variant="outlined"
            // elevation={1}
          >
            <Typography variant="body1">{loremIpsum[0]}</Typography>
          </Card>
        </Box>
      </ContentBlock>
      <ContentBlock position="left">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gridArea: 'content',
          }}
        >
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: { md: '50vw' },
              pt: { xs: 3, md: 6 },
              pb: { xs: 3, md: 6 },
            }}
            variant="outlined"
            // elevation={1}
          >
            <Typography variant="body1">{loremIpsum[0]}</Typography>
          </Card>
        </Box>
      </ContentBlock>
      <ContentBlock position="center">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gridArea: 'content',
          }}
        >
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: { md: '50vw' },
              pt: { xs: 3, md: 6 },
              pb: { xs: 3, md: 6 },
            }}
            variant="outlined"
            // elevation={1}
          >
            <Typography variant="body1">{loremIpsum[0]}</Typography>
          </Card>
        </Box>
      </ContentBlock>
    </Container>
  );
}

export default Home;
