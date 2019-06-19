import React from 'react';
import  {withStyles} from '@material-ui/styles';

const Styles ={
     root:{
        width: "20%",
        height: '25%',
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
     }
}

function DragColorBox(props){
    const {classes,colors}  = props;
    return(
        <div 
        className={classes.root} 
        style={{backgroundColor:colors}} >
        {props.colors}
        </div> 
    
    )
}

export default withStyles (Styles) (DragColorBox);