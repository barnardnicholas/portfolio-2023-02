import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import { useAtom } from 'jotai';
import { clickedRectAtom, windowDimensionsAtom } from '@/atoms/atoms';
import CustomCard from '@components/customCard/CustomCard';
import { Rect } from '@/types/shared';
import { modalAnimTimeMs, modalMarginHorizontal, modalMarginVertical } from '@/constants/constants';

const CardAnimationIn = () => {
  const theme = useTheme();
  const [coords] = useAtom(clickedRectAtom);
  const [{ w, h }] = useAtom(windowDimensionsAtom);
  const [coordState, setCoordState] = useState<Rect | null>(coords);

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
            top: modalMarginVertical,
            left: modalMarginHorizontal,
            width: w - modalMarginHorizontal * 2,
            height: h - modalMarginVertical * 2,
          }),
        10,
      );
    }
  }, [coords, w, h]);

  return (
    <CustomCard
      sx={{
        transition,
        pointerEvents: 'none',
        position: 'fixed',
        // border: '2px solid green',
        top: coords?.top || 0,
        left: coords?.left || 0,
        height: coords?.height || 0,
        width: coords?.width || 0,
        ...coordState,
      }}
    ></CustomCard>
  );
};

function CoordTracker() {
  const [coords] = useAtom(clickedRectAtom);
  return <>{coords && <CardAnimationIn />}</>;
}

export default CoordTracker;
