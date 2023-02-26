import { mouseXAtom, mouseYAtom } from '@/atoms/atoms';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { throttle } from 'lodash';

const useUpdateMousePosition = (disabled?: boolean) => {
  const [, setMouseX] = useAtom(mouseXAtom);
  const [, setMouseY] = useAtom(mouseYAtom);

  useEffect(() => {
    const handleMouseMove = throttle((event: MouseEvent) => {
      if (disabled) return;
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    }, 10);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [disabled, setMouseX, setMouseY]);
};

export default useUpdateMousePosition;
