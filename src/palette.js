import React, { Component } from 'react';
import  ColorBox from './ColorBox';
import Navbar from './Navbar';
import './palette.css';



class Palette extends Component{
    constructor(props){
        super(props)
        this.state = {level:500, format:'hex'}
        this.changeLevel = this.changeLevel.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }
    changeLevel(level){
         this.setState({ level});
    }
    changeValue(value){
        this.setState({format:value});
    }
    
    render() {
       const {level,format}  = this.state;
        const colors = this.props.palette.colors[level].map(color=>
        (    <ColorBox  name={color[format]}  background={color.hex}/>
        ))
        return (
            <div className = "palette">
             <Navbar 
             level={level} 
             changeLevel ={this.changeLevel}
             changeValue = {this.changeValue}
             />
            <div className="palette-colors">
                      {colors}
              </div>
    
             </div>
        )
    }
}

export default Palette;