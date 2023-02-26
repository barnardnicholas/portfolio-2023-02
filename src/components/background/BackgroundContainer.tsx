import { windowDimensionsAtom } from '@/atoms/atoms';
import { Box } from '@mui/material';
import { useAtom } from 'jotai';
import Example from '@pages/patterns/WavyLines';

function BackgroundContainer() {
  const [{ w, h }] = useAtom(windowDimensionsAtom);

  return (
    <Box sx={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, zIndex: -1 }}>
      <Example width={w} height={h} />
    </Box>
  );
}

export default BackgroundContainer;
