import React from 'react';
import routes from './Routes';
import BaseRoutes from 'src/components/BaseRouter';

function App() {
  return (
    <div className="App">
      <BaseRoutes routes={routes} />
    </div>
  );
}

export default App;