export const getTilterPosition = (
  w: number,
  h: number,
  mX: number,
  mY: number,
  cX: number,
  cY: number,
  maxTilt: number,
): { aX: number; aY: number } => {
  const dY = (mX - cX) / (w / 2);
  const dX = (mY - cY) / (h / 2);
  const aX = dX * maxTilt * -1;
  const aY = dY * maxTilt;
  return { aX, aY };
};
