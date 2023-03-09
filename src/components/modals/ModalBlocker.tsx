import { Box } from '@mui/material';
import React from 'react';

const ModalBlocker: React.FC<ModalBlockerProps> = ({ visible }) => {
  return (
    <Box
      className="modal-blocker"
      sx={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        transition: `opacity 333ms ease`,
        opacity: visible ? 0.5 : 0,
        backgroundColor: 'black',
        pointerEvents: visible ? 'unset' : 'none',
      }}
    />
  );
};

interface ModalBlockerProps {
  visible: boolean;
}

export default ModalBlocker;
