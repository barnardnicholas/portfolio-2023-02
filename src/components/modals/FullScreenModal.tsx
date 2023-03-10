import React, { SyntheticEvent, useRef } from 'react';
import CustomCard from '@components/customCard/CustomCard';
import { modalMarginHorizontal, modalMarginVertical } from '@/constants/constants';
import { useAtom } from 'jotai';
import { currentModalAtom, windowDimensionsAtom } from '@/atoms/atoms';
import { Box, IconButton, useTheme } from '@mui/material';
import { addOpacityToColor } from '@utils/utils';
import CloseIcon from '@mui/icons-material/Close';
import useScrollLock from '@hooks/useScrollLock';

function FullScreenModal() {
  const theme = useTheme();
  const [{ w, h }] = useAtom(windowDimensionsAtom);
  const [, setCurrentModal] = useAtom(currentModalAtom);
  const isMobile = w < theme.breakpoints.values.sm;
  const scrollRef = useRef<HTMLDivElement | null>(null);
  console.log(scrollRef);

  useScrollLock(scrollRef);

  return (
    <>
      <CustomCard
        sx={{
          display: 'flex',
          justifyContent: 'stretch',
          alignItems: 'stretch',
          position: 'fixed',
          top: isMobile ? modalMarginVertical / 2 : modalMarginVertical,
          left: isMobile ? modalMarginHorizontal / 2 : modalMarginHorizontal,
          width: w - (isMobile ? modalMarginHorizontal : modalMarginHorizontal * 2),
          height: h - (isMobile ? modalMarginVertical : modalMarginVertical * 2),
          backgroundColor: addOpacityToColor(theme.palette.background.paper, 0.75),
          pointerEvents: 'all',
        }}
      >
        <Box
          ref={scrollRef}
          id="modal-scroller"
          className="scroll-container"
          sx={{
            pointerEvents: 'all',
            overflowY: 'scroll',
            scrollBehaviourInline: 'contain',
            scrollBehaviourBlock: 'contain',
            flex: 1,
          }}
        >
          <Box sx={{ minHeight: '900vh' }}></Box>
        </Box>
        <IconButton
          sx={{ position: 'fixed', top: theme.spacing(2), right: theme.spacing(2) }}
          onClick={() => setCurrentModal(null)}
        >
          <CloseIcon />
        </IconButton>
      </CustomCard>
    </>
  );
}

export default FullScreenModal;
