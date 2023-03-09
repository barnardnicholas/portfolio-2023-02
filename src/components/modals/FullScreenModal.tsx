import React from 'react';
import CustomCard from '@components/customCard/CustomCard';
import { modalMarginHorizontal, modalMarginVertical } from '@/constants/constants';
import { useAtom } from 'jotai';
import { currentModalAtom, windowDimensionsAtom } from '@/atoms/atoms';
import { IconButton, useTheme } from '@mui/material';
import { addOpacityToColor } from '@utils/utils';
import CloseIcon from '@mui/icons-material/Close';

function FullScreenModal() {
  const theme = useTheme();
  const [{ w, h }] = useAtom(windowDimensionsAtom);
  const [, setCurrentModal] = useAtom(currentModalAtom);
  const isMobile = w < theme.breakpoints.values.sm;
  return (
    <>
      <CustomCard
        sx={{
          position: 'fixed',
          top: isMobile ? modalMarginVertical / 2 : modalMarginVertical,
          left: isMobile ? modalMarginHorizontal / 2 : modalMarginHorizontal,
          width: w - (isMobile ? modalMarginHorizontal : modalMarginHorizontal * 2),
          height: h - (isMobile ? modalMarginVertical : modalMarginVertical * 2),
          backgroundColor: addOpacityToColor(theme.palette.background.paper, 0.75),
        }}
      >
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
