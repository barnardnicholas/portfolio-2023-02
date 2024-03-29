import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import { useAtom } from 'jotai';
import { clickedRectAtom, currentModalAtom, windowDimensionsAtom } from '@/atoms/atoms';
import CustomCard from '@components/customCard/CustomCard';
import { Rect } from '@/types/shared';
import { modalAnimTimeMs, modalMarginHorizontal, modalMarginVertical } from '@/constants/constants';

const CardAnimationIn = () => {
  const theme = useTheme();
  const [coords] = useAtom(clickedRectAtom);
  const [{ w, h }] = useAtom(windowDimensionsAtom);
  const [coordState, setCoordState] = useState<Rect | null>(coords);
  const isMobile = w < theme.breakpoints.values.sm;

  const transition = `${theme.transitions.create(['top', 'left', 'width', 'height'], {
    duration: `${modalAnimTimeMs}ms`,
    easing: 'ease-out',
  })}`;

  useEffect(() => {
    if (!!coords) {
      setTimeout(
        () =>
          setCoordState({
            ...coords,
            top: isMobile ? modalMarginVertical / 2 : modalMarginVertical,
            left: isMobile ? modalMarginHorizontal / 2 : modalMarginHorizontal,
            width: w - (isMobile ? modalMarginHorizontal : modalMarginHorizontal * 2),
            height: h - (isMobile ? modalMarginVertical : modalMarginVertical * 2),
          }),
        10,
      );
    }
  }, [isMobile, coords, w, h]);

  return (
    <CustomCard
      sx={{
        transition,
        pointerEvents: 'none',
        position: 'fixed',
        top: coords?.top || 0,
        left: coords?.left || 0,
        height: coords?.height || 0,
        width: coords?.width || 0,
        ...coordState,
      }}
    />
  );
};

function CoordTracker() {
  const [coords] = useAtom(clickedRectAtom);
  const [currentModal] = useAtom(currentModalAtom);
  return <>{coords && !currentModal && <CardAnimationIn />}</>;
}

export default CoordTracker;
