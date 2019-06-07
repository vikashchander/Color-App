import React, {Component}  from 'react';
import MiniPalette from './MiniPalette';
import {withStyles} from '@material-ui/styles';
const  styles= {
    root:{
        backgroundColor:'blue',
        height: '100%',
        display:'flex',
        alignItems:'flex-start',
        justifyContent:'center'
    },
    container:{
        width:'50%',
        display:'flex',
        alignItems:'flex-start',
        flexDirection:'column',
        flexWrap:'wrap'

    },
    nav:{
display:'flex',
width:'100%',
justifyContent:"space-between"
    },
    palettes:{
        boxSizing:'border-box',
        width:'100',
        display:'grid',
        gridTemplateColumns:'repeat(3,30%)',
        gridGap:'5%'
    }
}

class paletteList extends Component{
   
    render() {
        const {classes,palettes} =this.props;
    console.log(classes); 
        const paletteList = palettes.map(palette =>(
           <>
            <MiniPalette  {...palette } />
           
         </>
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