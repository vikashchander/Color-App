import React, {Component}  from 'react';

import {Link} from 'react-router-dom';

class paletteList extends Component{
    render() {
        const {palettes} = this.props;
        const paletteList = palettes.map(palette =>(
            <p>
              <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
            </p>
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