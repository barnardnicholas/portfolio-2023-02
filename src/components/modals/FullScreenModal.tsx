import React from 'react';
import CustomCard from '@components/customCard/CustomCard';
import { modalMarginHorizontal, modalMarginVertical } from '@/constants/constants';
import { useAtom } from 'jotai';
import { currentModalAtom, windowDimensionsAtom } from '@/atoms/atoms';
import { Button, useTheme } from '@mui/material';
import { addOpacityToColor } from '@utils/utils';

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
        <Button onClick={() => setCurrentModal(null)}>Close</Button>
      </CustomCard>
    </>
  );
}

export default FullScreenModal;
