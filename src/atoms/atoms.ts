import { atom } from 'jotai';

export const windowWidthAtom = atom<number>(window.innerWidth);
export const windowHeightAtom = atom<number>(window.innerHeight);
export const windowDimensionsAtom = atom((get) => ({
  w: get(windowWidthAtom),
  h: get(windowHeightAtom),
}));
