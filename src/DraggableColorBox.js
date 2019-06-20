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
    const {classes,color}  = props;
    return(
        <div 
        className={classes.root} 
        style={{backgroundColor:color}} >
        {props.name}
        </div> 
    
    )
}

export default withStyles (Styles) (DragColorBox);