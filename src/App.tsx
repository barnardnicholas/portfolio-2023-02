import './_styles/main.scss';
import Home from '@pages/home/Home';
import BackgroundContainer from '@components/background/BackgroundContainer';
import useUpdateWindowDimensions from '@hooks/useUpdateWindowDimensions';
import { Container, useTheme } from '@mui/material';
import Footer from '@components/footer/Footer';
import { standardTransitions } from './theme/constants';
import ActionButton from '@components/actionButton/ActionButton';
import ModalRoot from '@components/modals/ModalRoot';

function App() {
  useUpdateWindowDimensions();
  const theme = useTheme();
  return (
    <div
      className="App"
      style={{
        transition: standardTransitions(theme),
      }}
    >
      <BackgroundContainer />
      <Container>
        <Home />
      </Container>
      <Footer />
      <ModalRoot />
      <ActionButton />
    </div>
  );
}

export default App;
