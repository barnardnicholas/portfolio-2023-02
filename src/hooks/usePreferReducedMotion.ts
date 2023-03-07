const usePreferReducedMotion = () => {
  const prefersReducedMotionQuery =
    typeof window === 'undefined' ? false : window.matchMedia('(prefers-reduced-motion: reduce)');
  const prefersReducedMotion = !prefersReducedMotionQuery || !!prefersReducedMotionQuery.matches;
  return prefersReducedMotion;
};

export default usePreferReducedMotion;
