import React, {Component}  from 'react';
import MiniPalette from './MiniPalette';
import {withStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';
import styles from './Styles/paletteListStyles';

class paletteList extends Component{
   goToPalette(id){
     this.props.history.push(`/palette/${id}`);
   }
    render() {
        const {classes,palettes, handleDelete} =this.props;
        const paletteList = palettes.map(palette =>(
            <MiniPalette  
            {...palette}
            handleClick={()=>{this.goToPalette(palette.id)}} 
            handleDelete ={handleDelete}
            id = {palette.id}
            key={palette.id}
            />
            )) 
    return (
        <div className={classes.root}>
          <div className={classes.container}>
          <nav className={classes.nav}>
          <h2>Color Picker</h2>
           <Link to="/palette/new">Create New</Link>
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