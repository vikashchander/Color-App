import React from 'react';
import Palette from './palette';
import SeedColor from './seedColor';

function App() {
  
  return (
    <div>
      <Palette {...SeedColor[5]}/>
      
    </div>
  );
}

export default App;
