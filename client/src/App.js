import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Approuter from './components/AppRouter';


function App() {
  return (
    <BrowserRouter>
      <Approuter/>
    </BrowserRouter>
  );
}

export default App;
