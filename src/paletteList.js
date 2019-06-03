import React, {Component}  from 'react';
import MiniPalette from './MiniPalette';

import {Link} from 'react-router-dom';

class paletteList extends Component{
    render() {
        const {palettes} = this.props;
        const paletteList = palettes.map(palette =>(
            <MiniPalette  {...palette } />
        )) 
    return (
        <div>
            <h2>Color Picker</h2>
             {paletteList}
        
        </div>
    )
}
}

export default paletteList;