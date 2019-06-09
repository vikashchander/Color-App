import React from 'react';

export default function Footer(props){
    const {paletteName, emoji} = props;
    return(
        <div className="palette-footer">
           {paletteName}
        <span className='emoji'>{emoji}</span>
        </div>
    )
}
