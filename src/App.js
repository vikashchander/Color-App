import React,{Component} from 'react';
import Palette from './palette';
import SeedColor from './seedColor';
import {generatePalette}  from './colorsHelpers'

class App extends Component{
  render() {
    console.log(generatePalette(SeedColor[6]));
    return (
      <div>
      <Palette palette ={generatePalette(SeedColor[6])} />
      </div>
    )
  }
}

export default App;
