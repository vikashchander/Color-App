import React,{Component} from 'react';
import Palette from './palette';
import PaletteList from './paletteList';
import  PaletteForm from './newPaletteForm';
import SingleColorPalette from './SingleColorPalette';
import {generatePalette}  from './colorsHelpers';
import {Route, Switch} from 'react-router-dom';
import seedColor from './seedColor';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {palettes: seedColor}
    this.savePalette = this.savePalette.bind(this);
  }
  handlePalette(id){
    return  this.state.palettes.find((palette)=>palette.id ===id);
    }

    savePalette(newColorPalette){
     // console.log(newColorPalette);
      this.setState({palettes: [...this.state.palettes, newColorPalette]})
    }
  render() {
    //console.log(generatePalette(SeedColor[6]));
    return (
      <Switch>
      <Route exact 
      path='/' 
      render={(routerProps)=>
        <PaletteList  
        palettes = {this.state.palettes}
         {...routerProps}
      />} 
      />
      <Route 
        exact 
        path ="/palette/new"
        render ={(routerProps)=><PaletteForm savePalette={this.savePalette} palettes={this.state.palettes} {...routerProps} />}
      />
      <Route exact path='/palette/:id' 
       render={routerProps=>(
         <Palette palette={generatePalette(this.handlePalette(routerProps.match.params.id))}/>
       )}
      />
      <Route 
      exact 
      path = "/palette/:paletteId/:colorId"
      render ={routerProps =>(
        <SingleColorPalette 
        colorId = {routerProps.match.params.colorId} 
        palette={generatePalette(this.handlePalette(routerProps.match.params.paletteId))}  
         />
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
