import { useMemo } from 'react';
import { mouseXYAtom, windowDimensionsAtom } from '@/atoms/atoms';
import { Box, useTheme } from '@mui/material';
import { useAtom } from 'jotai';
import Example from '@components/patterns/WavyLines';
import { animated, config, useSpring } from 'react-spring';

const mouseMovementPx = 4;
const dimensionOffset = mouseMovementPx * 2;

const getOffset = (w: number, h: number, x: number, y: number, offsetPx: number) => {
  const cX = w / 2;
  const cY = h / 2;
  const cOffsetX = x - w / 2;
  const cOffsetY = y - h / 2;
  const floatX = cOffsetX / cX;
  const floatY = cOffsetY / cY;
  return { oX: floatX * offsetPx * -1, oY: floatY * offsetPx * -1 };
};

const BackgroundContainer = () => {
  const {
    breakpoints: {
      values: { sm },
    },
  } = useTheme();

  const [{ w, h }] = useAtom(windowDimensionsAtom);
  const [{ x, y }] = useAtom(mouseXYAtom);
  const effectDisabled = w < sm;

  const { oX, oY } = useMemo(() => getOffset(w, h, x, y, mouseMovementPx), [w, h, x, y]);

  const bgWidth = useMemo(() => w + dimensionOffset + mouseMovementPx, [w]);
  const bgHeight = useMemo(() => h + dimensionOffset + mouseMovementPx, [h]);

  const slideStyles = useSpring({
    config: { ...config.wobbly },
    from: { transform: 'translateX(0) translateY(0)' },
    to: {
      transform: `translateX(${oX}px) translateY(${oY}px)`,
    },
  });

  if (effectDisabled)
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Example width={w} height={h} />
      </Box>
    );

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <animated.div
        style={{ position: 'relative', width: bgWidth, height: bgHeight, ...slideStyles }}
      >
        <Example width={bgWidth} height={bgHeight} />
      </animated.div>
    </Box>
  );
};

export default BackgroundContainer;
