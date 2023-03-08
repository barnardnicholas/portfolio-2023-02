import './_styles/main.scss';
import Home from '@pages/home/Home';
import BackgroundContainer from '@components/background/BackgroundContainer';
import useUpdateWindowDimensions from '@hooks/useUpdateWindowDimensions';
import { Container, useTheme } from '@mui/material';
import Footer from '@components/footer/Footer';
import { standardTransitions } from './theme/constants';
import SpeedDial from '@components/speedDial/SpeedDial';
import ActionButton from '@components/actionButton/ActionButton';

function App() {
  useUpdateWindowDimensions();
  const theme = useTheme();
  return (
    <div
      className="App"
      style={{
        // backgroundColor: theme.palette.background.default,
        transition: standardTransitions(theme),
      }}
    >
      <BackgroundContainer />
      <Container>
        <Home />
      </Container>
      <Footer />
      {/* <SpeedDial /> */}
      <ActionButton />
    </div>
  );
}

export default App;
