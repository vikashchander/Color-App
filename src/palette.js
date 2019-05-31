import React, { Component } from 'react';
import  ColorBox from './ColorBox';
import 'rc-slider/assets/index.css';
import './palette.css';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';



class Palette extends Component{
    constructor(props){
        super(props)
        this.state = {level:500}
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(level){
         this.setState({ level});
    }
    
    render() {
       const {level}  = this.state;
        const colors = this.props.palette.colors[level].map(color=>
           
            <ColorBox  name={color.name}  background={color.hex}/>
        )
        return (
            <div className = "palette">
             <div className= 'slider'>
               <Slider 
               defaultValue={level} 
               min={100} 
               max={900} 
               step={100} 
            //   handle= {level}
               onAfterChange={this.changeLevel} />
              </div>
                <div className="palette-colors">
                        {colors}
                </div>
            </div>
        )
    }
}

export default Palette;