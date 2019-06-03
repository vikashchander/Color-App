import React,{Component} from 'react';
import Palette from './palette';
import PaletteList from './paletteList';
import SeedColor from './seedColor';
import {generatePalette}  from './colorsHelpers';
import {Route, Switch} from 'react-router-dom';
import seedColor from './seedColor';

class App extends Component{
  handlePalette(id){
    return  seedColor.find((palette)=>palette.id ===id);
    }
  render() {
    console.log(generatePalette(SeedColor[6]));
    return (
      <Switch>
      <Route exact path='/' 
      render={()=><PaletteList  palettes = {seedColor} />} 
      />
      <Route exact path='/palette/:id' 
       render={routerProps=>(
         <Palette palette={generatePalette(this.handlePalette(routerProps.match.params.id))}/>
       )}
      />
      </Switch>
      // <div>
      // <Palette palette ={generatePalette(SeedColor[6])} />
      // </div>
    )
  }
}

export default App;
