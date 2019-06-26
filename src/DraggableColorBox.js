import React from 'react';
import  {withStyles} from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from "react-sortable-hoc";
import Styles from './Styles/DraggableColorBoxStyles';

const  DragColorBox = SortableElement(props=>{
    const {classes,color, handleClick , name}  = props;
    return(
    <div 
        className={classes.root} 
        style={{backgroundColor:color}} >
        <div className={classes.boxContent}>
         <span>{name}</span>
         <DeleteIcon 
         className={classes.deleteIcon}
          onClick={handleClick}
         />
         </div>
    </div> 
    
    )
});

export default withStyles (Styles)(DragColorBox);