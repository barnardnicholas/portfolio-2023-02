import React, { MouseEvent, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import { useSpring, config, animated } from 'react-spring';
import { mouseXYAtom, windowDimensionsAtom } from '@/atoms/atoms';
import { Box, useTheme } from '@mui/material';
import { throttle } from 'lodash';

const getTilterPosition = (
  w: number,
  h: number,
  mX: number,
  mY: number,
  cX: number,
  cY: number,
  maxTilt: number,
): { aX: number; aY: number } => {
  const dY = (mX - cX) / (w / 2);
  const dX = (mY - cY) / (h / 2);
  const aX = dX * maxTilt * -1;
  const aY = dY * maxTilt;
  return { aX, aY };
};

const MouseTiltContainer: React.FC<MouseTiltContainerProps> = ({
  disableOnMobile = true,
  onlyOnHover = true,
  maxTiltDeg = 3,
  disabled = false,
  riseOnHover = true,
  children,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [{ x, y }] = useAtom(mouseXYAtom);
  const [{ w, h }] = useAtom(windowDimensionsAtom);
  const {
    breakpoints: {
      values: { sm },
    },
  } = useTheme();
  const effectDisabled = disabled || (disableOnMobile && w < sm);

  const [tilterPosition, setTilterPosition] = useState({ aX: 0, aY: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    if (!onlyOnHover && !effectDisabled)
      setTilterPosition(getTilterPosition(w, h, x, y, w / 2, h / 2, maxTiltDeg));
  }, [w, h, x, y, maxTiltDeg, onlyOnHover, effectDisabled]); // Update based on global mouse position if onlyOnHover is false

  const handleMouseMove = (e: MouseEvent) => {
    if (!effectDisabled && ref.current) {
      try {
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const eX = e.clientX - left; //x position within the element.
        const eY = e.clientY - top; //y position within the element.
        const throttled = throttle(
          () =>
            setTilterPosition(
              getTilterPosition(width, height, eX, eY, width / 2, height / 2, maxTiltDeg),
            ),
          100,
        );
        throttled();
      } catch (e) {}
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilterPosition({ aX: 0, aY: 0 });
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
      } ${isHovering && riseOnHover ? '2px' : '0px'} rgba(0,0,0,0.3)`,
    },
  });

  if (effectDisabled) return <Box ref={ref}>{children}</Box>; // Don't tilt if disabled

  return (
    <Box
      className="mouse-tilt-container"
      sx={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
    >
      <animated.div className="mouse-tilter" style={{ ...tiltStyles }}>
        {children}
      </animated.div>
    </Box>
  );
};

interface MouseTiltContainerProps extends PropsWithChildren {
  maxTiltDeg?: number;
  onlyOnHover?: boolean;
  disableOnMobile?: boolean;
  disabled?: boolean;
  riseOnHover?: boolean;
}

export default MouseTiltContainer;
