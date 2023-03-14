import { PortfolioItem } from '@/theme/types';
import blank from './blank';
import abra from './abra';
import inkReact from './inkReact';
import ntgtfoi from './ntgtfoi';
import plan9 from './plan9';
import crazyWall from './crazyWall';

const portfolioItems: Record<string, PortfolioItem> = {
  blank,
  [abra.slug]: abra,
  [inkReact.slug]: inkReact,
  [plan9.slug]: plan9,
  [crazyWall.slug]: crazyWall,
  [ntgtfoi.slug]: ntgtfoi,
};

export const portfolioSlugs = Object.keys(portfolioItems).filter((key: string) => key !== 'blank');

export default portfolioItems;
