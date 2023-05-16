import React, { useMemo } from 'react';
import { Box, SxProps, Theme, useTheme } from '@mui/material';
import Image from '@components/image/Image';
import HeroBg from '@assets/images/hero/hero-image-bg.jpg';
import HeroBody from '@assets/images/hero/hero-image-body.png';
import HeroHead from '@assets/images/hero/hero-image-head.png';
import { transformTransitions } from '@/theme/constants';

const HeroCard: React.FC<HeroImageProps> = ({ isHovering = false, effectDisabled = false }) => {
  const theme = useTheme();

  const layerStyle: SxProps<Theme> = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    overflow: 'hidden',
  };

  const backgroundStyles = useMemo(
    () =>
      isHovering && !effectDisabled
        ? {
            transform: `translateZ(${isHovering ? '20px' : '0px'})`,
          }
        : { transform: 'translateZ(0px)' },
    [isHovering, effectDisabled],
  );

  const bodyStyles = useMemo(
    () =>
      isHovering && !effectDisabled
        ? {
            transform: `translateZ(${isHovering ? '80px' : '0px'})`,
          }
        : { transform: 'translateZ(0px)' },
    [isHovering, effectDisabled],
  );

  const headStyles = useMemo(
    () =>
      isHovering && !effectDisabled
        ? {
            transform: `translateZ(${isHovering ? '120px' : '0px'})`,
          }
        : { transform: 'translateZ(10px)' },
    [isHovering, effectDisabled],
  );

  return (
    <>
      <Box
        sx={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          mb: '2rem',
          width: '15rem',
          height: '15rem',
        }}
      >
        <Box
          className="hero-image-background"
          sx={{
            width: '15rem',
            height: '15rem',
            // border: `2px solid ${theme.palette.text.secondary}`,
            borderRadius: '50%',
            position: 'absolute',
            transition: transformTransitions(theme),
            ...backgroundStyles,
          }}
        >
          <Image src={HeroBg} alt="Background image" sx={{ ...layerStyle }} />
        </Box>
        <Box
          className="hero-image-body"
          sx={{
            width: '15rem',
            height: '15rem',
            borderRadius: '50%',
            position: 'absolute',
            transition: transformTransitions(theme),
            ...bodyStyles,
          }}
        >
          <Image src={HeroBody} alt="Body image" sx={layerStyle} />
        </Box>
        <Box
          className="hero-image-head"
          sx={{
            width: '15rem',
            height: '15rem',
            borderRadius: '50%',
            position: 'absolute',
            transition: transformTransitions(theme),
            ...headStyles,
          }}
        >
          <Image src={HeroHead} alt="Body image" sx={layerStyle} />
        </Box>
      </Box>
    </>
  );
};

interface HeroImageProps {
  effectDisabled?: boolean;
  isHovering?: boolean;
}

export default HeroCard;
