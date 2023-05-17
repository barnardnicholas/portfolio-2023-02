/**
 * Use in React Components for prevProps
 * @param {any} value - Value to reference
 * @return {any} Reference to value
 */

import { useEffect, useRef } from 'react';

const usePrevious = <T>(value: T) => {
  const ref = useRef<T>(value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePrevious;
