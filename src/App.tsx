import './_styles/main.scss';
import Home from '@pages/home/Home';
import BackgroundContainer from '@components/background/BackgroundContainer';
import useUpdateWindowDimensions from '@hooks/useUpdateWindowDimensions';
import { useTheme } from '@mui/material';
import Footer from '@components/footer/Footer';
import { standardTransitions } from './theme/constants';
import ActionButton from '@components/actionButton/ActionButton';
// import ModalRoot from '@components/modals/ModalRoot';
import MainRoutes from './routes';
import ModalRoot from '@components/modals/ModalRoot';
import { useAtom } from 'jotai';
import { windowDimensionsAtom } from './atoms/atoms';
import useUpdateMousePosition from '@hooks/useUpdateMousePosition';

function App() {
  const theme = useTheme();
  const [{ w }] = useAtom(windowDimensionsAtom);
  useUpdateWindowDimensions();
  useUpdateMousePosition(!!(w < theme.breakpoints.values.sm));
  return (
    <div
      className="App"
      style={{
        transition: standardTransitions(theme),
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <BackgroundContainer />
      <MainRoutes />
      <Footer />
      {/* <ModalRoot /> */}
      <ActionButton />
    </div>
  );
}

export default App;
