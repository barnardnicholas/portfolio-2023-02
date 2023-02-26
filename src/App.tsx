import { Suspense } from 'react';

import './_styles/main.scss';
import Home from '@pages/home/Home';
import BackgroundContainer from '@components/background/BackgroundContainer';
import useUpdateWindowDimensions from '@hooks/useUpdateWindowDimensions';

function App() {
  useUpdateWindowDimensions();
  return (
    <Suspense fallback={<></>}>
      <div className="App">
        <BackgroundContainer />
        <Home />
      </div>
    </Suspense>
  );
}

export default App;
