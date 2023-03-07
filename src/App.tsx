import { Suspense } from 'react';

import './_styles/main.scss';
import Home from '@pages/home/Home';
import BackgroundContainer from '@components/background/BackgroundContainer';
import useUpdateWindowDimensions from '@hooks/useUpdateWindowDimensions';
import { Container } from '@mui/material';
import Footer from '@components/footer/Footer';

function App() {
  useUpdateWindowDimensions();
  return (
    <Suspense fallback={<></>}>
      <div className="App">
        <Container>
          <BackgroundContainer />
          <Home />
        </Container>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
