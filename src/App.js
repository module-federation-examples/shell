import React from 'react';
import './App.css';

const ProductApp = React.lazy(
  () => import('PRODUCT/App')
);

const App = () => (
  <div className="shell-app">
    <h2>Hi from Shell App</h2>

    <React.Suspense fallback='Loading...'>
      <ProductApp />
    </React.Suspense>
  </div>
);

export default App;
