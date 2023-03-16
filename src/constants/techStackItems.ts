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
  'react-spring': {
    name: 'React Spring',
    slug: 'react-spring',
    IconComponent: null,
  },
  'react-native': {
    name: 'React Native',
    slug: 'react-native',
    IconComponent: null,
  },
  'react-native-reanimated': {
    name: 'React Native Reanimated',
    slug: 'react-native-reanimated',
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
  'redux-toolkit': {
    name: 'Redux Toolkit',
    slug: 'redux-toolkit',
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
  twitter: {
    name: 'Twitter',
    slug: 'twitter',
    IconComponent: null,
  },
  ags: {
    name: 'AGS',
    slug: 'ags',
    IconComponent: null,
  },
  node: {
    name: 'Node',
    slug: 'node',
    IconComponent: null,
  },
  express: {
    name: 'Express',
    slug: 'express',
    IconComponent: null,
  },
  jotai: {
    name: 'Jotai',
    slug: 'jotai',
    IconComponent: null,
  },
  vite: {
    name: 'Vite',
    slug: 'vite',
    IconComponent: null,
  },
};

export default techStackItems;
