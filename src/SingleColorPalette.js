import React, { Component } from 'react';
import ColorBox from './ColorBox';


export default class SingleColorPalette extends Component{
    constructor(props){
        super(props);
        this._shades = this.generateColors(this.props.palette , this.props.colorId);
        console.log(this._shades);
    };
    
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
        const colorBoxes = this._shades.map(color =>
            <ColorBox  
            key={color.id}
            name={color.name}
            background ={color.hex}
           showMoreLink ={false}
            />
            )
        return (
            <div className='palette'>
                <h2>this is a single palette</h2>
                <div className='palette-colors'>{colorBoxes}</div>
            </div>
        )
    }
}