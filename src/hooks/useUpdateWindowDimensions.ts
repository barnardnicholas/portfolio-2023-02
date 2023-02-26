import { windowHeightAtom, windowWidthAtom } from '@/atoms/atoms';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

const useUpdateWindowDimensions = () => {
  const [, setWindowWidth] = useAtom(windowWidthAtom);
  const [, setWindowHeight] = useAtom(windowHeightAtom);

  useEffect(() => {
    const updateDimensions = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, [setWindowHeight, setWindowWidth]);
};

export default useUpdateWindowDimensions;
