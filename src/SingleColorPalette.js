import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import {Link } from 'react-router-dom';

export default class SingleColorPalette extends Component{
    constructor(props){
        super(props);
        this.state = {format:'hex'};
        this.changeValue = this.changeValue.bind(this);
        this._shades = this.generateColors(this.props.palette , this.props.colorId);
        console.log(this._shades);
    };
    changeValue(value){
        this.setState({format:value});
    }
    
    //generateColors palettes thorough color palette
    generateColors(palette, allColorsFilterBy){
       let  shades=[];
       let allColors = palette.colors;
       for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(colors =>(
                 colors.id ===allColorsFilterBy
                ))
            )
       }
           //return all shades of given colors 
           return shades.slice(1);      
    }
    render() {
        const {paletteName, emoji,id} = this.props.palette;
        const {format }=this.state;
        const colorBoxes = this._shades.map(color =>
            <ColorBox  
            key={color.name}
            name={color.name}
            background ={color[format]}
           showMoreLink ={false}
            />
            )
        return (
            <div className='SingleColorPalette palette'>
                 <Navbar  changeValue = {this.changeValue} ShowSlider={false}/>
                <div className='palette-colors'>
                {colorBoxes}
                <div className='go-btn ColorBox'>
                <Link to={`/palette/${id}`}  className='back-button'> 
                Go Back 
                </Link>
                </div>
                </div>
                <Footer paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}