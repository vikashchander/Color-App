import React, { Component } from 'react';
import  ColorBox from './ColorBox';
import Navbar from './Navbar';
import './palette.css';



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
        (    <ColorBox  name={color.id}  background={color.hex}/>
        ))
        return (
            <div className = "palette">
             <Navbar level={level} changeLevel ={this.changeLevel}/>
            <div className="palette-colors">
                      {colors}
              </div>
    
             </div>
        )
    }
}

export default Palette;