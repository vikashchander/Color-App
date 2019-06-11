import React, {Component}  from 'react';
import MiniPalette from './MiniPalette';
import {withStyles} from '@material-ui/styles';
import styles from './Styles/paletteListStyles';

class paletteList extends Component{
   goToPalette(id){
     this.props.history.push(`/palette/${id}`);
   }
    render() {
        const {classes,palettes} =this.props;
        const paletteList = palettes.map(palette =>(
            <MiniPalette  {...palette} handleClick={()=>{this.goToPalette(palette.id)}} />
            )) 
    return (
        <div className={classes.root}>
          <div className={classes.container}>
          <nav className={classes.nav}>
          <h2>Color Picker</h2>
          </nav>
          <div className={classes.palettes}>
          {paletteList}
          </div>
        </div>
        </div>
    )
}
}

export default withStyles(styles)(paletteList);