export type Rect = Record<
  'top' | 'bottom' | 'left' | 'right' | 'height' | 'width' | 'x' | 'y',
  number
>;

export interface BaseWorkItem {
  slug: string;
  title: string;
  thumbnail: string;
  image: string;
  subtitle: string | null;
  shortDecription: string;
  content: ReactNode;
  techStack: string[];
}
export interface PortfolioItem extends BaseWorkItem {
  status: string | null;
}

export interface AgencyWork extends BaseWorkItem {
  client: string | null;
}
