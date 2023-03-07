import React, { MouseEvent, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import { useSpring, config, animated } from 'react-spring';
import { mouseXYAtom, windowDimensionsAtom } from '@/atoms/atoms';
import { Box, SxProps, Theme, useTheme } from '@mui/material';
import { throttle } from 'lodash';
import { getTilterPosition } from './constants';
import usePreferReducedMotion from '@hooks/usePreferReducedMotion';

const AnimatedBox = animated(Box);

const MouseTiltContainer: React.FC<MouseTiltContainerProps> = ({
  disableOnMobile = true,
  onlyOnHover = true,
  maxTiltDeg = 3,
  disabled = false,
  riseOnHover = true,
  sx = {},
  children,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [{ x, y }] = useAtom(mouseXYAtom);
  const [{ w, h }] = useAtom(windowDimensionsAtom);
  const prefersReducedMotion = usePreferReducedMotion();
  const {
    breakpoints: {
      values: { sm },
    },
  } = useTheme();
  const effectDisabled = disabled || prefersReducedMotion || (disableOnMobile && w < sm);

  const [tilterPosition, setTilterPosition] = useState({ aX: 0, aY: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    if (!onlyOnHover && !effectDisabled)
      setTilterPosition(getTilterPosition(w, h, x, y, w / 2, h / 2, maxTiltDeg));
  }, [w, h, x, y, maxTiltDeg, onlyOnHover, effectDisabled]); // Update based on global mouse position if onlyOnHover is false

  const handleMouseMove = (e: MouseEvent) => {
    const throttled = throttle(() => {
      if (!effectDisabled && ref.current) {
        try {
          const { left, top, width, height } = ref.current.getBoundingClientRect();
          const eX = e.clientX - left;
          const eY = e.clientY - top;

          setTilterPosition(
            getTilterPosition(width, height, eX, eY, width / 2, height / 2, maxTiltDeg),
          );
        } catch (e) {}
      }
    }, 100);
    throttled();
  };

  const handleMouseEnter = () => {
    if (!effectDisabled) setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (!effectDisabled) {
      setIsHovering(false);
      setTilterPosition({ aX: 0, aY: 0 });
    }
  };

  const tiltStyles = useSpring({
    config: { ...config.wobbly },
    from: { transform: 'rotateX(0deg) rotateY(0deg) translateZ(0)' },
    to: {
      transform: `rotateX(${tilterPosition.aX}deg) rotateY(${tilterPosition.aY}deg) translateZ(${
        isHovering && riseOnHover ? '20px' : '0px'
      })`,
      boxShadow: `0px ${isHovering && riseOnHover ? '3px' : '0px'} ${
        isHovering && riseOnHover ? '6px' : '0px'
      } ${isHovering && riseOnHover ? '2px' : '0px'} rgba(0,0,0,0.2)`,
    },
  });

  if (effectDisabled) return <Box ref={ref}>{children}</Box>; // Don't tilt if disabled

  return (
    <Box
      className="mouse-tilt-container"
      sx={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        ...sx,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
    >
      <AnimatedBox className="mouse-tilter" style={{ ...tiltStyles }}>
        {children}
      </AnimatedBox>
    </Box>
  );
};

interface MouseTiltContainerProps extends PropsWithChildren {
  maxTiltDeg?: number;
  onlyOnHover?: boolean;
  disableOnMobile?: boolean;
  disabled?: boolean;
  riseOnHover?: boolean;
  sx?: SxProps<Theme>;
}

export default MouseTiltContainer;
