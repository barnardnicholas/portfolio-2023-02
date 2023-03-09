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
  return (
    <>
      <CustomCard
        sx={{
          position: 'fixed',
          top: modalMarginVertical,
          left: modalMarginHorizontal,
          width: w - modalMarginHorizontal * 2,
          height: h - modalMarginVertical * 2,
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
