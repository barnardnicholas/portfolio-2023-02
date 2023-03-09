import React from 'react';
import { clickedRectAtom, currentModalAtom } from '@/atoms/atoms';
import { useAtom } from 'jotai';
import FullScreenModal from './FullScreenModal';
import ModalBlocker from './ModalBlocker';
import CoordTracker from '@components/coordTracker/CoordTracker';

function ModalRoot() {
  const [currentModal] = useAtom(currentModalAtom);
  const [coords] = useAtom(clickedRectAtom);
  return (
    <>
      <ModalBlocker visible={!!currentModal || !!coords} />
      <CoordTracker />
      {!!currentModal && <FullScreenModal />}
    </>
  );
}

export default ModalRoot;
