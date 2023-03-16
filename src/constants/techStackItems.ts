export interface TechStackItem {
  slug: string;
  name: string;
  IconComponent: React.FC | null;
}

const techStackItems: Record<string, TechStackItem> = {
  react: {
    name: 'React',
    slug: 'react',
    IconComponent: null,
  },
  typescript: {
    name: 'Typescript',
    slug: 'typescript',
    IconComponent: null,
  },
  javascript: {
    name: 'Javascript',
    slug: 'javascript',
    IconComponent: null,
  },
  redux: {
    name: 'Redux',
    slug: 'redux',
    IconComponent: null,
  },
  threejs: {
    name: 'ThreeJS',
    slug: 'threejs',
    IconComponent: null,
  },
  'react-three-fiber': {
    name: 'React Three Fiber',
    slug: 'react-three-fiber',
    IconComponent: null,
  },
};

export default techStackItems;
