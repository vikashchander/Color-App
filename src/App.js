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
      <Route exact 
      path='/' 
      render={(routerProps)=><PaletteList  palettes = {seedColor}
         {...routerProps}
      />} 
      />
      <Route exact path='/palette/:id' 
       render={routerProps=>(
         <Palette palette={generatePalette(this.handlePalette(routerProps.match.params.id))}/>
       )}
      />
      <Route 
      exact exact path = "/palette/:paletteId/:colorId"
      render ={routerProps =>(
        <h2 palette={routerProps.match.params.id}>hello page</h2>
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
