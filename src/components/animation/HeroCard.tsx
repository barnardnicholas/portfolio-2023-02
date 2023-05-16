import React, { MouseEvent, PropsWithChildren, useEffect, useMemo, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import { useSpring, config, animated } from 'react-spring';
import { mouseXYAtom, windowDimensionsAtom } from '@/atoms/atoms';
import { Box, Chip, SxProps, Theme, Typography, useTheme } from '@mui/material';
import { throttle } from 'lodash';
import { getTilterPosition } from './constants';
import CustomCard from '@components/customCard/CustomCard';
import { techStack } from '@pages/home/constants';
import usePreferReducedMotion from '@hooks/usePreferReducedMotion';
import ContactLinks from '@components/contactLinks/ContactLinks';
import { standardTransitions, transformTransitions } from '@/theme/constants';
import useClickedRectTracker from '@hooks/useClickedRectTracker';
import HeroImage from '@components/animation/HeroImage';

const AnimatedBox = animated(Box);

const CustomContainer: React.FC<CustomContainerProps> = ({ animationDisabled, children }) => {
  const baseStyles: SxProps<Theme> = { pt: { xs: 3, md: 6 }, pb: { xs: 3, md: 6 } };
  const animStyles = animationDisabled
    ? {}
    : { perspective: '1000px', transformStyle: 'preserve-3d' };
  return <CustomCard sx={{ ...baseStyles, animStyles }}>{children}</CustomCard>;
};

const SecondaryContent: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Typography
        sx={{ textAlign: 'center', transition: standardTransitions(theme) }}
        variant="body1"
      >
        Full-stack Software Development
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexGap: 1 }}>
        {techStack.map((label: string, i: number) => (
          <Chip
            key={`${label}-${i}`}
            label={label}
            clickable
            sx={{ mb: 1, mr: i < techStack.length ? 1 : 0, transition: standardTransitions(theme) }}
            onClick={() => console.log(`Click ${label}`)}
          />
        ))}
      </Box>
      <ContactLinks />
    </>
  );
};

const HeroCard: React.FC<HeroCardProps> = ({
  disableOnMobile = true,
  onlyOnHover = true,
  maxTiltDeg = 3,
  disabled = false,
  riseOnHover = true,
  sx = {},
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [{ x, y }] = useAtom(mouseXYAtom);
  const [{ w, h }] = useAtom(windowDimensionsAtom);
  const prefersReducedMotion = usePreferReducedMotion();
  const theme = useTheme();
  const effectDisabled =
    disabled || prefersReducedMotion || (disableOnMobile && w < theme.breakpoints.values.sm);

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

  const textStyles = useMemo(
    () =>
      isHovering && riseOnHover
        ? {
            transform: `translateZ(${isHovering ? '20px' : '0px'})`,
            textShadow: `0rem 1rem 1rem rgba(0,0,0,0.3)`,
          }
        : { transform: 'translateZ(0px)', textShadow: '0rem 0rem 0rem rgba(0,0,0,0)' },
    [isHovering, riseOnHover],
  );

  if (effectDisabled)
    return (
      <Box ref={ref}>
        <CustomContainer animationDisabled>
          <HeroImage effectDisabled />
          <Typography
            sx={{ mb: 0, textAlign: 'center', transition: standardTransitions(theme) }}
            variant="h1"
          >
            Nick Barnard
          </Typography>
          <SecondaryContent />
        </CustomContainer>
      </Box>
    ); // Don't tilt if disabled

  return (
    <Box
      className="mouse-tilt-container"
      sx={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        minWidth: { xs: '100%', sm: '30rem' },
        ...sx,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
    >
      <AnimatedBox className="mouse-tilter" style={{ ...tiltStyles }}>
        <CustomContainer>
          <HeroImage isHovering={isHovering} />
          <Typography
            sx={{
              mb: 0,
              textAlign: 'center',
              backgroundColor: 'transparent',
              transition: `${transformTransitions(theme)} ${standardTransitions(theme)}`,
              ...textStyles,
            }}
            variant="h1"
          >
            Nick Barnard
          </Typography>
          <SecondaryContent />
        </CustomContainer>
      </AnimatedBox>
    </Box>
  );
};

interface HeroCardProps {
  maxTiltDeg?: number;
  onlyOnHover?: boolean;
  disableOnMobile?: boolean;
  disabled?: boolean;
  riseOnHover?: boolean;
  sx?: SxProps<Theme>;
}

interface CustomContainerProps extends PropsWithChildren {
  animationDisabled?: boolean;
}

export default HeroCard;
