import { clickedRectAtom, currentModalAtom } from '@/atoms/atoms';
import { modalAnimTimeMs } from '@/constants/constants';
import { useAtom } from 'jotai';
import { useCallback } from 'react';

const useClickedRectTracker = () => {
  const [, setClickedRect] = useAtom(clickedRectAtom);
  const [, setCurrentModal] = useAtom(currentModalAtom);

  const coordClickHandler = useCallback(
    (id?: string) => {
      try {
        const target = document.getElementById(id!);
        const rect = !!target ? target.getBoundingClientRect() : null;
        setClickedRect(rect);
        setTimeout(() => {
          console.log('setCurrentModal', id);
          setCurrentModal(id!);
        }, modalAnimTimeMs);
      } catch (e) {
        console.error(e);
      }
    },
    [setClickedRect, setCurrentModal],
  );

  return coordClickHandler;
};

export default useClickedRectTracker;
