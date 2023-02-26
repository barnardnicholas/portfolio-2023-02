import { Suspense } from 'react';

import './_styles/main.scss';
import TestPage from '@pages/TestPage/TestPage';
import Home from '@pages/home/Home';

function App() {
  return (
    <Suspense fallback={<></>}>
      <div className="App">
        <Home />
      </div>
    </Suspense>
  );
}

export default App;
