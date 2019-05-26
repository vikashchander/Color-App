import React, { Component } from 'react';
import  ColorBox from './ColorBox';
import './palette.css'


class Palette extends Component{
    render() {
        const colors = this.props.colors.map(color=>
           
            <ColorBox  name={color.name}  background={color.color}/>
        )
        return (
            <div className = "palette">

                <div className="palette-colors">
                        {colors}
                </div>
            </div>
        )
    }
}

export default Palette;