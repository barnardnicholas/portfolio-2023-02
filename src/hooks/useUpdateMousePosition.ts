import { mouseXAtom, mouseYAtom } from '@/atoms/atoms';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { throttle } from 'lodash';

const useUpdateMousePosition = () => {
  const [, setMouseX] = useAtom(mouseXAtom);
  const [, setMouseY] = useAtom(mouseYAtom);

  useEffect(() => {
    const handleMouseMove = throttle((event: MouseEvent) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    }, 10);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [setMouseX, setMouseY]);
};

export default useUpdateMousePosition;
