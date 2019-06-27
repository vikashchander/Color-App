import React from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './Styles/miniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';

function  MiniPalette(props){
    const {classes, paletteName, emoji, colors} = props;
    const miniColorsBox = colors.map(color =>
        <div 
        className={classes.miniColor} 
        style={{backgroundColor:color.color}} 
        key= {color.name}
        />
    );
    return (
          <div className={classes.root} onClick ={props.handleClick}>
              <div className={ classes.delete}>
                    <DeleteIcon 
                     className={classes.deleteIcon} 
                     style={{transition:'all 0.3s ease-in-out'}}
                    />
              </div>
            <div className={classes.color}>{miniColorsBox}</div>
              <h5 className={classes.title}>
                 {paletteName}  <span className={classes.emoji}>{emoji}</span>
              </h5>
          </div>
      );
}

export default withStyles(styles)(MiniPalette);