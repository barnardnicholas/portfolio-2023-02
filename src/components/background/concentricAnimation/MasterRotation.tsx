import React, { CSSProperties, ReactNode } from 'react';
import useScrollRotation from '@hooks/useScrollRotation';

interface MasterRotationProps {
  children: ReactNode;
}
function MasterRotation({ children }: MasterRotationProps) {
  const { rotation } = useScrollRotation();

  const styles: CSSProperties = {
    transformStyle: 'preserve-3d',
    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
  };
  return (
    <div className="master-rotation" style={styles}>
      {children}
    </div>
  );
}

export default MasterRotation;
