import React from 'react';
import styles from './Styles/footerStyles';
import { withStyles } from '@material-ui/styles';

 function Footer(props){
    const {paletteName,emoji,classes} = props;
    return(
        <div className={classes.paletteFooter}>
           {paletteName}
        <span className={classes.emoji}>{emoji}</span>
        </div>
    )
}

export default withStyles(styles)(Footer);