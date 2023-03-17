import CraIcon from '@components/iconComponents/CraIcon';
import ExpressIcon from '@components/iconComponents/ExpressIcon';
import FirebaseIcon from '@components/iconComponents/FirebaseIcon';
import JavascriptIcon from '@components/iconComponents/JavascriptIcon';
import JotaiIcon from '@components/iconComponents/JotaiIcon';
import MuiIcon from '@components/iconComponents/MuiIcon';
import NodeIcon from '@components/iconComponents/NodeIcon';
import ReactIcon from '@components/iconComponents/ReactIcon';
import ReactNativeIcon from '@components/iconComponents/ReactNativeIcon';
import ReactNativeReanimatedIcon from '@components/iconComponents/ReactNativeReanimatedIcon';
import ReactSpringIcon from '@components/iconComponents/ReactSpringIcon';
import ReactThreeFiberIcon from '@components/iconComponents/ReactThreeFiberIcon';
import ReduxIcon from '@components/iconComponents/ReduxIcon';
import ReduxToolkitIcon from '@components/iconComponents/ReduxToolkitIcon';
import SassIcon from '@components/iconComponents/SassIcon';
import ThreeIcon from '@components/iconComponents/ThreeIcon';
import TwitterIcon from '@components/iconComponents/TwitterIcon';
import TypescriptIcon from '@components/iconComponents/TypescriptIcon';
import ViteIcon from '@components/iconComponents/ViteIcon';

export interface TechStackItem {
  slug: string;
  name: string;
  IconComponent: React.FC | null;
}

const techStackItems: Record<string, TechStackItem> = {
  react: {
    name: 'React',
    slug: 'react',
    IconComponent: ReactIcon,
  },
  'react-spring': {
    name: 'React Spring',
    slug: 'react-spring',
    IconComponent: ReactSpringIcon,
  },
  'react-native': {
    name: 'React Native',
    slug: 'react-native',
    IconComponent: ReactNativeIcon,
  },
  'react-native-reanimated': {
    name: 'React Native Reanimated',
    slug: 'react-native-reanimated',
    IconComponent: ReactNativeReanimatedIcon,
  },
  typescript: {
    name: 'Typescript',
    slug: 'typescript',
    IconComponent: TypescriptIcon,
  },
  javascript: {
    name: 'Javascript',
    slug: 'javascript',
    IconComponent: JavascriptIcon,
  },
  redux: {
    name: 'Redux',
    slug: 'redux',
    IconComponent: ReduxIcon,
  },
  'redux-toolkit': {
    name: 'Redux Toolkit',
    slug: 'redux-toolkit',
    IconComponent: ReduxToolkitIcon,
  },
  threejs: {
    name: 'ThreeJS',
    slug: 'threejs',
    IconComponent: ThreeIcon,
  },
  'react-three-fiber': {
    name: 'React Three Fiber',
    slug: 'react-three-fiber',
    IconComponent: ReactThreeFiberIcon,
  },
  twitter: {
    name: 'Twitter',
    slug: 'twitter',
    IconComponent: TwitterIcon,
  },
  ags: {
    name: 'AGS',
    slug: 'ags',
    IconComponent: null,
  },
  node: {
    name: 'Node',
    slug: 'node',
    IconComponent: NodeIcon,
  },
  express: {
    name: 'Express',
    slug: 'express',
    IconComponent: ExpressIcon,
  },
  jotai: {
    name: 'Jotai',
    slug: 'jotai',
    IconComponent: JotaiIcon,
  },
  vite: {
    name: 'Vite',
    slug: 'vite',
    IconComponent: ViteIcon,
  },
  sass: {
    name: 'SASS',
    slug: 'sass',
    IconComponent: SassIcon,
  },
  mui: {
    name: 'Material UI',
    slug: 'mui',
    IconComponent: MuiIcon,
  },
  firebase: {
    name: 'Firebase',
    slug: 'firebase',
    IconComponent: FirebaseIcon,
  },
  cra: {
    name: 'Create React App',
    slug: 'cra',
    IconComponent: CraIcon,
  },
};

export default techStackItems;
