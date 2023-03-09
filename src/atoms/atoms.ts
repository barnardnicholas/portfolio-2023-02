import { modalAnimTimeMs } from '@/constants/constants';
import { ThemeKey } from '@/theme/types';
import { Rect } from '@/types/shared';
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

const prefersDarkMode =
  !!window.matchMedia && !!window.matchMedia('(prefers-color-scheme: dark)').matches;

export const themeAtom = atomWithStorage<ThemeKey>('theme', prefersDarkMode ? 'dark' : 'light');

// export const clickedRectAtom = atom<Rect | null>(null);
const baseClickedRectAtom = atom<Rect | null>(null);
export const clickedRectAtom = atom(
  (get) => get(baseClickedRectAtom),
  (get, set, value: Rect | null) => {
    set(baseClickedRectAtom, value);
    setTimeout(() => {
      set(baseClickedRectAtom, null);
    }, modalAnimTimeMs);
  },
);

export const currentModalAtom = atom<string | null>(null);
