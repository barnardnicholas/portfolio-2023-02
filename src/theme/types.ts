import { ReactNode } from 'react';

export type ThemeKey = 'dark' | 'light';

export interface PortfolioItem {
  slug: string;
  title: string;
  thumbnail: string;
  image: string;
  subtitle: string | null;
  shortDecription: string;
  content: ReactNode;
}
