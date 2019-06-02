import React,{Component} from 'react';
import Palette from './palette';
import SeedColor from './seedColor';
import {generatePalette}  from './colorsHelpers';
import {Route, Switch} from 'react-router-dom';

class App extends Component{
  render() {
    console.log(generatePalette(SeedColor[6]));
    return (
      <Switch>
      <Route exact path='/' render={()=><h3>palette list here</h3>} />
      <Route exact path='/palette/:id' 
       render={()=><h2>individual  palette </h2>}
      />
      </Switch>
      // <div>
      // <Palette palette ={generatePalette(SeedColor[6])} />
      // </div>
    )
  }
}

export default App;
