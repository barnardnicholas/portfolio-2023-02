import { ThemeKey } from '@/theme/types';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const windowWidthAtom = atom<number>(window.innerWidth);
export const windowHeightAtom = atom<number>(window.innerHeight);
export const windowDimensionsAtom = atom((get) => ({
  w: get(windowWidthAtom),
  h: get(windowHeightAtom),
}));

export const mouseXAtom = atom<number>(window.innerWidth / 2);
export const mouseYAtom = atom<number>(window.innerHeight / 2);
export const mouseXYAtom = atom((get) => ({
  x: get(mouseXAtom),
  y: get(mouseYAtom),
}));

export const themeAtom = atomWithStorage<ThemeKey>('theme', 'dark');
