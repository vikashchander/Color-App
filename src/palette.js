import React, { Component } from 'react';
import  ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
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
        const {colors,paletteName, emoji,id} = this.props.palette;
       const {level,format}  = this.state;
        const colorsBoxes =colors[level].map(color=>
        (    <ColorBox  
            name={color.name}  
            background={color[format]} 
            key={color.id} 
            moreUrl ={`/palette/${id}/${color.id}`}
            showMoreLink
            />
        ));
        return (
            <div className = "palette">
             <Navbar 
             level={level}
             ShowSlider
             changeLevel ={this.changeLevel}
             changeValue = {this.changeValue}
             
             />
            <div className="palette-colors">
                      {colorsBoxes}
              </div>
              <Footer paletteName={paletteName} emoji={emoji} />
             </div>
        )
    }
}

export default Palette;