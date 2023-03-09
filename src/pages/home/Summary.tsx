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
          Full-stack Javascript Developer specialising in React/React Native. Adept in Node,
          Typescript, Redux. Working knowledge of Git VCS, as well as AWS/GCP microservices.
        </Typography>
        <Typography variant="body1">
          Currently mid-level Front-End Dev at CTI Digital, Manchester, UK. Based in Toronto from
          July 2023, actively seeking full-time work as a Mid/Senior Javascript Developer.
        </Typography>
        <Typography variant="body1">
          Solid experience with multiple digital agencies, comfortable with Agile/SCRUM. Have
          shipped and maintained a wide range of projects for clients across numerous sectors,
          including finance, commerce and construction.
        </Typography>
        <Typography variant="body1">
          Strong troubleshooting & critical support skills after experience on fire-fighting teams.
        </Typography>
        <Typography variant="body1">
          Passionate about developing great UX&UI through clean, readable code using modern
          technology.
        </Typography>
        <Typography variant="body1">
          Previously spent 10 years in the Audio Industry as a sound engineer and studio technician,
          working with industry-leading equipment & software and a range of clients.
        </Typography>
        <Typography variant="body1">
          Considerable working experience in various media software incl. Pro Tools, Cubase, Ableton
          Live, Logic Pro X.
        </Typography>
        <Typography variant="body1">
          Comfortable with Adobe Creative Cloud apps incl. Photoshop, Lightroom, Premiere Pro, etc.
        </Typography>
        <Typography variant="body1">
          I firmly believe that a positive, problem-solving attitude and a supportive company
          culture is essential to a healthy work environment. I do my best to be a force for good
          wherever I work, and I try to devote equal attention to both technical and soft skills.
        </Typography>
      </Box>
    </CustomCard>
  );
}

export default Summary;
