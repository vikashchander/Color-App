import React, {Component}  from 'react';
import MiniPalette from './MiniPalette';
import {CSSTransition, TransitionGroup } from 'react-transition-group'
import {withStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';
import styles from './Styles/paletteListStyles';

class paletteList extends Component{
   goToPalette(id){
     this.props.history.push(`/palette/${id}`);
   }
    render() {
        const {classes,palettes, handleDelete} =this.props;            
    return (
        <div className={classes.root}>
          <div className={classes.container}>
          <nav className={classes.nav}>
          <h2 className={classes.heading}>Color Picker</h2>
           <Link to="/palette/new">Create New</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
          {palettes.map(palette =>(
            <CSSTransition  key={palette.id} className="fade" timeout={500} >
              <MiniPalette  
              {...palette}
              handleClick={()=>{this.goToPalette(palette.id)}} 
              handleDelete ={handleDelete}
              key={palette.id}
              id = {palette.id}
              />
              </CSSTransition>
              ))
            }
              </TransitionGroup> 
          </div>
        </div>
    )
}
}

export default withStyles(styles)(paletteList);