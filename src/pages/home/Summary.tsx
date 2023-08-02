import React from 'react';
import CustomCard from '@components/customCard/CustomCard';
import { Box, Typography } from '@mui/material';
// import useClickedRectTracker from '@hooks/useClickedRectTracker';

function Summary() {
  return (
    <CustomCard
      id="summary"
      sx={{
        alignItems: 'flex-start',
        pt: { xs: 3, md: 6 },
        pb: { xs: 3, md: 6 },
        mb: 6,
        minWidth: '100%',
      }}
      // coordClickHandler={useClickedRectTracker()}
    >
      <Typography variant="h2">Summary</Typography>
      <Box sx={{ columnCount: { xs: 1, md: 2 }, columnGap: 2 }}>
        <Typography variant="body1">
          Mid-level Front-end Developer with 3+ years of experience delivering products at scale for
          a large range of clients, specializing in front-end React/React Native with Typescript.
        </Typography>
        <Typography variant="body1">
          I’m passionate about collaborating with diverse, multi-disciplined teams to develop great
          UX & UI through clean, scalable code using modern technology and best practices. One
          project database recently surpassed 100 million rows of organic customer data, and the
          client is enjoying 15% fewer in-production bugs this year than any other year.
        </Typography>
        <Typography variant="body1">
          I’ve developed battle-tested troubleshooting & critical support skills after experience on
          project & fire-fighting teams. This allowed my team and I to cut app-breaking project bugs
          by 20-50% over a 3 month period.
        </Typography>
        <Typography variant="body1">
          I firmly believe that a positive, problem-solving attitude and a supportive company
          culture is essential to delivering value for clients. I do my best to be a force for good
          wherever I work, and I try to devote equal attention to both technical and soft skills.
        </Typography>
      </Box>
    </CustomCard>
  );
}

export default Summary;
