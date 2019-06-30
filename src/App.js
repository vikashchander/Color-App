import React,{Component} from 'react';
import Palette from './palette';
import PaletteList from './paletteList';
import  PaletteForm from './newPaletteForm';
import SingleColorPalette from './SingleColorPalette';
import {generatePalette}  from './colorsHelpers';
import {Route, Switch} from 'react-router-dom';
import seedColor from './seedColor';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Page from './Page';

class App extends Component{
  constructor(props){
    super(props);
    const localstoragePalette = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = {palettes: localstoragePalette || seedColor}
    this.savePalette = this.savePalette.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }
  handlePalette(id){
    return  this.state.palettes.find((palette)=>palette.id ===id);
    }

    savePalette(newColorPalette){
     // console.log(newColorPalette);
      this.setState({palettes: [...this.state.palettes, newColorPalette]}, 
        this.syncLocalStorage
        );
      }

      handleDelete(id){
          this.setState(
            (st)=>({palettes: st.palettes.filter(palette =>palette.id !== id)
            }),
             this.syncLocalStorage
            );
      }

    syncLocalStorage(){
      window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
    }

  render() {
    //console.log(generatePalette(SeedColor[6]));
    return (
      <Route 
         render={({location})=>(
             <TransitionGroup>
               <CSSTransition  key={location.key} classNames='page' timeout={500}>
          <Switch location={location}>
          <Route exact 
          path='/' 
          render={(routerProps)=>(
            <Page>
            <PaletteList  
            palettes = {this.state.palettes}
            handleDelete={this.handleDelete}
             {...routerProps}
          />
          </Page>
         )} 
          />
          <Route 
            exact 
            path ="/palette/new"
            render ={(routerProps)=>
              <Page>
               <PaletteForm 
                savePalette={this.savePalette} 
                 palettes={this.state.palettes} 
                 {...routerProps} 
                />
              </Page>
            }
          />
          <Route exact path='/palette/:id' 
           render={routerProps=>(
           <Page>
            <Palette palette={generatePalette(this.handlePalette(routerProps.match.params.id))}/>
            </Page>
           )}
          />
          <Route 
          exact 
          path = "/palette/:paletteId/:colorId"
          render ={routerProps =>(
          <Page>
            <SingleColorPalette 
            colorId = {routerProps.match.params.colorId} 
            palette={generatePalette(this.handlePalette(routerProps.match.params.paletteId))}  
             />
             </Page>
          )}
          />
          <Route
                  render={routeProps => (
                    <Page>
                      <PaletteList
                        palettes={this.state.palettes}
                        deletePalette={this.deletePalette}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
          </Switch>
          </CSSTransition>
          </TransitionGroup>  
         )}
      />
    )
  }
}

export default App;
