import React, { Component } from 'react';
import  ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import {withStyles} from '@material-ui/styles';
import './palette.css';

const styles={
    Palette:{
        height : '100vh',
        display: 'flex',
        flexDirection:'column',
        overflow:'hidden'
    },
    colors:{
        height:'90%'
    }
}

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
        const {classes} = this.props;
       const {level,format}  = this.state;
        const colorsBoxes =colors[level].map(color=>
        (    <ColorBox  
            name={color.name}  
            background={color[format]} 
            key={color.id} 
            moreUrl ={`/palette/${id}/${color.id}`}
            showFullPalette
            />
        ));
        return (
            <div className = {classes.Palette}>
             <Navbar 
             level={level}
             ShowSlider
             changeLevel ={this.changeLevel}
             changeValue = {this.changeValue}
             
             />
            <div className={classes.colors}>
                      {colorsBoxes}
              </div>
              <Footer paletteName={paletteName} emoji={emoji} />
             </div>
        )
    }
}

export default withStyles(styles)(Palette);